var util = require('util');
var log = require('../log.js');
//--------------------
// Constructor
//--------------------
function Plugin() { 
};

//--------------------
// methods
//--------------------

Plugin.prototype.initialize = function(botObj, nick, channel) {
	this.bot = botObj;
	this.channel = channel;
	this.nick = nick;

  log.write("nick "+nick);
  log.write("channel "+channel);
}

Plugin.prototype.process = function(msg, from, to) {
  this.bot.say(this.channel, "TEST!!!");
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Plugin();
