var mysql = require('mysql');
var util = require('util');

var client = mysql.createConnection({
	user: 'stefano',
	password: 'stefanodb',
	database: 'stefano_zbot'
});

//--------------------
// Constructor
//--------------------
function Plugin() { 
	this.channel = '';
	this.nick = '';
	this.version = '0.1';
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
	this.getLevel(from, to);
};

Plugin.prototype.getLevel = function() {

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
module.exports = new Plugin();
