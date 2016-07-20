module.exports = function(configurations) {
	// 传入一个对象
	configurations.add({
		request: {
			method: 'GET',
			urlPattern: '/update'
		},
		response: {
			status: 200,
			body: function(req) {
				if (req.query.id) {
					return {success: true};
				} else {
					return {success: false};
				}
			},
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=-1'
			}
		}
	});
}
