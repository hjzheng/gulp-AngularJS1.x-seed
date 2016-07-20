var _ = require('lodash');
// 简单的 RESTful
module.exports = function(configurations) {
	var users = [
		{id: 1, name: 'hurry', grade: 90},
		{id: 2, name: 'hjzheng', grade: 88},
		{id: 3, name: 'Jack', grade: 30},
		{id: 4, name: 'Tom', grade: 70},
		{id: 5, name: 'Bell', grade: 40}
	];

	configurations.add([
		{
			request: {
				method: 'GET',
				urlPattern: '/users'
			},
			response: {
				status: 200,
				body: function() {
					return users;
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		},
		{
			request: {
				method: 'GET',
				urlPattern: '/users/:id'
			},
			response: {
				status: 200,
				body: function(req) {
					return _.find(users, { 'id': parseInt(req.params.id, 10)});
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		},
		{
			request: {
				method: 'DELETE',
				urlPattern: '/users/:id'
			},
			response: {
				status: 200,
				body: function(req) {
					_.remove(users, function(u) {
						return u.id === parseInt(req.params.id, 10);
					});
					return {success: true};
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		},
		{
			request: {
				method: 'POST',
				urlPattern: '/users'
			},
			response: {
				status: 200,
				body: function(req) {
					req.body.id = users[users.length - 1].id + 1;
					users.push(req.body);
					return {success: true};
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		},
		{
			request: {
				method: 'PUT',
				urlPattern: '/users/:id'
			},
			response: {
				status: 200,
				body: function(req) {
					req.body.id = parseInt(req.params.id, 10);
					var index = _.findIndex(users, { 'id': parseInt(req.params.id, 10)})
					users[index] = req.body;
					return {success: true};
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}
		}
	]);
}
