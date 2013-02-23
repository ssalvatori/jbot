//--------------------
// Constructor
//--------------------
function Config() { 
	this.channel = '';
	this.nick = '';
	this.server = '';
	this.version = '0.1';
	this.modulePath = './modules';
	this.debug = true;
	this.configFile = 'setup.json';

	this.debugFile = 'jbot.debug';

	this.loadConfig = false;

	this.dbServer;
	this.dbUsername;
	this.dbPassword;
	this.dbDatabase;

	if(!this.checkLoadConfig()) {
		this.loadConfig();
	}
};

//--------------------
// methods
//--------------------

Plugin.prototype.checkLoadConfig = function() {
	if(this.loadConfig) { return false;	}
	return true;
};

Plugin.prototype.loadConfig = function() {
	var setupJson = require(this.configFile);
	this.debug = setupJson.config.debug;
}

Plugin.prototype.process = function(msg, from, to) {
	
};

Plugin.prototype.getDbSetup = function() {

}

Plugin.prototype.getLevel = function() {

};

Public.prototype.getDbServer = function () { return this.dbServer; };
Public.prototype.getDbUsername = function () { return this.dbUsername; };
Public.prototype.getDbPassword = function() { return this.dbDbPassword; };
Public.prototype.getDbDatabase = function() { return this.DbDatabase; };

Public.prototype.getDebug = function() { return this.debug; };

Public.prototype.getDebugFile = function () { return this.debugFile};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Config();