var util = require('util');
var log = require('../log.js');
//--------------------
// Constructor
//--------------------
function Plugin(botObj) { 
  this.bot = botObj;
};

//--------------------
// methods
//--------------------

Plugin.prototype.initialize = function(nick, channel) {
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
module.exports = new Plugin(botObj);
