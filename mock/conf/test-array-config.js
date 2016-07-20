module.exports = function(configurations) {
	// 传入一个数组, mock 不同状态, mock 不同类型的请求, mock body
	configurations.add([
		{
			request: {
				method: 'POST',
				urlPattern: '/test'
			},
			response: {
				status: 200,
				body: function () {
					return 'just a post test';
				},
				headers: {
					'Content-Type': 'text/html;charset=utf-8'
				}
			}
		},
		{
			request: {
				method: 'PUT',
				urlPattern: '/test'
			},
			response: {
				status: 200,
				body: function (req) {
					var body = req.body ? 'request.body: ' + JSON.stringify(req.body) : '';
					return 'just a put test ' + body;
				},
				headers: {
					'Content-Type': 'text/html;charset=utf-8'
				}
			}
		},
		{
			request: {
				method: 'GET',
				urlPattern: '/test404'
			},
			response: {
				status: 404,
				body: function () {
					return '404 页面';
				}
			}
		},
		{
			request: {
				method: 'GET',
				urlPattern: '/test503'
			},
			response: {
				status: 503,
				body: function () {
					return '503 服务器端出错了';
				}
			}
		}
	]);
}
