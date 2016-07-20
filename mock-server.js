var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mockRouter = require('./mock/mock-router');

// 解析 body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended: false
}));

// 自定义请求
server.get('/echo', function(req, res) {
	res.jsonp(req.query);
});

server.use(mockRouter);

server.listen(8989, function() {
	console.log('server is running, please visit http://localhost:8989');
});
