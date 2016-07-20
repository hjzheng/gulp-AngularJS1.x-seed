var express = require('express');
var router = express.Router();
var configurations = require('./mock-conf.js');

configurations.forEach(function(config) {
	var method = config.request.method || 'get';
	router[method.toLowerCase()](config.request.urlPattern, (req, res) => {
		if (config.response.headers) {
			res.set(config.response.headers);
		}
		if (config.response.status) {
			res.status(config.response.status);
		}
		var result = null;
		if (config.response.body) {
			result = config.response.body(req);
		}

		res.send(result);
	});
});

module.exports = router;
