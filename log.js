//--------------------
// Constructor
//--------------------
function Log() {};

var l = Log.prototype;

//--------------------
// methods
//--------------------

l.write = function(params) {

	console.log(" --- [%s] ", params);

	console.trace();
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Log();
