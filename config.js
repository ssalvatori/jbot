//--------------------
// Constructor
//--------------------
function Plugin() { 
	this.channel;
	this.nick;
	this.server;
	this.version;
  this.repository;
  this.debug;
  this.debugFile;
	this.modulePath;
	this.configFile = './setup.json';
	this.readConfig = true;
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
	if(this.readConfig) { return false;	}
	return true;
};

Plugin.prototype.loadConfig = function() {
	var setupJson = require(this.configFile);
	this.debug = setupJson.config.debug;
  this.debugFile = setupJson.config.debugFile;
  this.version = setupJson.about.version;
  this.repository = setupJson.about.repository;
  this.server = setupJson.irc.server;
  this.channels = setupJson.irc.channels;
  this.nick = setupJson.irc.nick;
  this.modulePath = setupJson.config.modulePath;
}
  
Plugin.prototype.process = function(msg, from, to) {
	
};

Plugin.prototype.getVersion = function() {
  return this.version;
};

Plugin.prototype.getRepository = function() {
	return this.repository; 
};

Plugin.prototype.getDebug = function() { 
  return this.debug; 
};

Plugin.prototype.getDebugFile = function () { 
  return this.debugFile;
};

Plugin.prototype.getModulePath = function() { return this.modulePath; };
Plugin.prototype.getServer = function() { return this.server; };
Plugin.prototype.getNick = function() { return this.nick; };
Plugin.prototype.getChannels = function() { return this.channels; };


Plugin.prototype.getDbSetup = function() {

}

Plugin.prototype.getLevel = function() {

};

Plugin.prototype.getDbServer = function () { return this.dbServer; };
Plugin.prototype.getDbUsername = function () { return this.dbUsername; };
Plugin.prototype.getDbPassword = function() { return this.dbDbPassword; };
Plugin.prototype.getDbDatabase = function() { return this.DbDatabase; };

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Plugin();