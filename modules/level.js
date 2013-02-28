var mysql = require('mysql');
var util = require('util');
var setup = require('../config.js');

var client = mysql.createConnection({
	user: setup.getDbUsername(),
	password: setup.getDbPassword(),
	database: setup.getDbDatabase()
});

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
}

Plugin.prototype.process = function(msg, from, to) {
	this.getLevel(from, to);
};

Plugin.prototype.getLevel = function(from, to) {

	client.query("select level from users where nick = ? and channel = ? limit 1", [this.nick, this.channel], function(error, results, fields) {
		if (error) {
			this.bot.say(to, "level 0");
		}
		if((typeof(result) != "undefined")) {
			level = parseInt(results[0]['level']);
			if(level > 0) {
				this.bot.say(this.channel, Util.format("level %s", this.level));
			}
			else {
				this.bot.say(this.channel, "level 0");
			}
		}
		else {
			this.bot.say(this.channel, "level 0");
		}

	});
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Plugin(botObj);
