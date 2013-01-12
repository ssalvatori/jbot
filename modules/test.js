//--------------------
// Constructor
//--------------------
function Test() {};

var t = Test.prototype;

//--------------------
// methods
//--------------------

t.process = function(params) {
	    console.log(" --- [%s] ", params);
		console.trace();
		return [1, 'HOLA COMO'];
};

//---------------------
// Exports - Singleton
//---------------------
module.exports = new Test();
