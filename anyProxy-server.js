var proxy = require("anyproxy");

!proxy.isRootCAFileExists() && proxy.generateRootCA();

var options = {
	type          : "http",
	port          : 8001,
	hostname      : "localhost",
	rule          : require("./rule/rule.js"),
	dbFile        : null,  // optional, save request data to a specified file, will use in-memory db if not specified
	webPort       : 8002,  // optional, port for web interface
	socketPort    : 8003,  // optional, internal port for web socket, replace this when it is conflict with your own service
	// throttle      : 10,    // optional, speed limit in kb/s
	disableWebInterface : false, //optional, set it when you don't want to use the web interface
	setAsGlobalProxy : false, //set anyproxy as your system proxy
	silent        : false //optional, do not print anything into terminal. do not set it when you are still debugging.
};
console.log('Start anyProxy, please use SwitchySharp to set your default proxy to localhost:8001 in Chrome');
new proxy.proxyServer(options);
