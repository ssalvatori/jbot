var util = require('util');
var fs = require('fs');
//--------------------
// Constructor
//--------------------
function Log() { 
	var setup = require('config.js');
	this.debug = setup.getDebug();
	this.debugFile = setup.getDebugFile();
};

//--------------------
// methods
//--------------------

Plugin.prototype.write = function(msg) {
	//var now = new Date();
	var nowDateTime = new Date().format("dd/mm/yy H:ii:ss")
	var msgLog =  util.format("[%s] : [%s]", nowDateTime, msg);

	if(this.debug) {
		console.log(msgLog);
		fs.appendFileSync(this.debugFile, msgLog);
	}
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Log();