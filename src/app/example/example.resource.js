(function() {
	angular
		.module('exampleModule')
		.factory('exampleResource', exampleResource)

	exampleResource.$inject = ['$resource'];

	function exampleResource($resource) {
		return $resource('/users/:id', {id: '@id'});
	}
})();
