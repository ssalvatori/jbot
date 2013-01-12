var mysql = require('mysql');

var client = mysql.createConnection({
	user: 'stefano',
	password: 'stefanodb',
	database: 'stefano_zbot'
});
 
//--------------------
// Constructor
//--------------------
function Level() {};

var l = Level.prototype;

//--------------------
// methods
//--------------------

l.process = function(msg, from, to) {
	var levelUser = this.getLevel(from, to);
	console.log(this.getLevel(from, to));
	return [1, levelUser];
};

l.getLevel = function(nick, channel) {
	var level;
	
	client.query("select level from users where nick = ? and channel = ? limit 1", [nick, channel], function(error, results, fields) {
		if (error) throw error;
		level =  results.level;
	});

	return level;
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Level();
