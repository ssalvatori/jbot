var setup = require('config.js');
var mysql = require('mysql');
var util = require('util');

//--------------------
// Constructor
//--------------------
function DB() { 
	this.server = setup.getDbServer();
	this.username = setup.getDbUsername();
	this.password =  setup.getDbPassword();
	this.database = setup.getDbDatabase();
	this.db;

	if(!this.checkConnect()) {
		this.db = this.connect();
	}
};

//--------------------
// methods
//--------------------

Plugin.prototype.connect = function () {

	this.db = mysql.createConnection({
		user: this.username,
		password: this.password,
		database: this.database,
		server: this.server
	});


};

Plugin.prototype.checkConnect = function() {
	if(this.db) { 
		return true;
	} 
	return false;
};

Plugin.prototype.initialize = function() {
	var setupJson = require(this.configFile);
};

Plugin.prototype.process = function(msg, from, to) {
	
};

Plugin.prototype.getDbSetup = function() {
	
}

Plugin.prototype.getLevel = function() {

};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new DB();