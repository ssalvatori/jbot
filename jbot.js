//EXTERNAL MODULES
var irc = require('irc');
var fs = require('fs');
var util = require('util');

//LOCAL MODULES
var log = require('./log');

//setup
var config = new Array();
config['server'] = '152.74.100.228';
config['nick'] = 'jbot';
config['channels'] = ['#dev'];
config['debug'] = 1;
config['dirModule'] = './modules/';

function writeLog(from, to, message) {
	if(config['debug']) {
		console.log("From [%s] To [%s] Message [%s]");
	}
}

var bot = new irc.Client(config['server'], config['nick'], {
    debug: true,
    channels: config['channels'],
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);

    //command
	if ( to.match(/^[#&]/) ) {
		if ( command = message.match(/^(!)(\w*)/) ){
			module = command[2];
			pathModule = config['dirModule']+module+".js";
			if ( fs.existsSync(pathModule) ) { 
				console.log('Loading module [%s]', pathModule);

				try {
					module = require(pathModule);
					module.initialize(bot, from, to);
					module.process(message);
				}
				catch (error) {
					log.write(util.format("ERROR IN MODULE [%s]", pathModule));
					log.write(util.format("ERROR MSG [%s]", error.message));
				}

			}
			else {
				console.log('ERROR no existe modulo [%s]', pathModule);
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
