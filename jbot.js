//EXTERNAL MODULES
var irc = require('irc');
var fs = require('fs');
var util = require('util');

//LOCAL MODULES
var log = require('./log');
var setup = require('./config.js');

//setup
var server = setup.getServer();
var nick = setup.getNick();
var channels = setup.getChannels();
var debug = setup.getDebug();
var modulePath = setup.getModulePath();

log.write("Conectando");
log.write("Server ["+server+"]");
log.write("Nick ["+nick+"]");
log.write("Channels "+channels);

var bot = new irc.Client(server, nick, {
    debug: true,
    channels: channels,
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    log.write(util.format('%s => %s: %s', from, to, message));

    //command
	if ( to.match(/^[#&]/) ) {
			if ( command = message.match(/^(!)(\w*)/) ){
				moduleName = command[2];
        pathModule = modulePath+moduleName+".js";
        if ( fs.existsSync(pathModule) ) { 
          log.write(util.format('Loading module [%s]', pathModule));
          
          try {
            var module = require(pathModule);
            var plugin = new Plugin(bot);
            plugin.initialize(from, to);
            plugin.process(message);
          }
          catch (error) {
            log.write(util.format("ERROR IN MODULE [%s]", pathModule));
            log.write(util.format("ERROR MSG [%s]", error.message));
          }
          
        }
        else {
          log.write(util.format('ERROR no existe modulo [%s]', pathModule));
        }
			}
    }
    else {
        // private message
    }
});
bot.addListener('pm', function(nick, message) {
    console.log('Got private message from %s: %s', nick, message);
});
bot.addListener('join', function(channel, who) {
    console.log('%s has joined %s', who, channel);
});
bot.addListener('part', function(channel, who, reason) {
    console.log('%s has left %s: %s', who, channel, reason);
});
bot.addListener('kick', function(channel, who, by, reason) {
    console.log('%s was kicked from %s by %s: %s', who, channel, by, reason);
});
