var util = require('util');
//--------------------
// Constructor
//--------------------
function Plugin() { 
	var setup = require('../config.js');
	this.version = setup.getVersion();
  this.repository = setup.getRepository();
};

//--------------------
// methods
//--------------------

Plugin.prototype.initialize = function(botObj, nick, channel) {
	this.bot = botObj;
	this.channel = channel;
	this.nick = nick;

	console.log("nick: "+nick);
	console.log("channel: "+channel);
}

Plugin.prototype.process = function(msg, from, to) {
  this.bot.say(this.channel, util.format("version: %s", this.version));
  this.bot.say(this.channel, util.format("repository: %s", this.repository)); 
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Plugin();