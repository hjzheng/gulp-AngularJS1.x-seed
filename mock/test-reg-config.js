var _ = require('lodash');
// 支持正则
module.exports = function(configurations) {

	configurations.add([
		{
			request: {
				method: 'GET',
				urlPattern: /^\/commits\/(\w+)(?:\.\.(\w+))?$/
			},
			response: {
				status: 200,
				body: function(req) {
					var from = req.params[0];
					var to = req.params[1] || 'HEAD';
					return 'commit range ' + from + '..' + to;
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		}
	]);
}
