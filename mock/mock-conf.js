var fs = require('fs');
var toString = Object.prototype.toString;
var configurations = {
	list: [],
	add: function(config) {
		if (toString.call(config) === '[object Object]') {
			this.list.push(config);
		}
		if (toString.call(config) === '[object Array]') {
			this.list = this.list.concat(config);
		}
	}
};

fs.readdirSync('mock/conf').forEach(function(file) {
	require('./conf/' + file)(configurations);
});

module.exports = configurations.list;
