(function() {
	angular.module('exampleModule').controller('ExampleController', ExampleController);

	ExampleController.$inject = ['exampleResource'];

	function ExampleController(exampleResource) {
		var vm = this;
		vm.title = 'Example';

		exampleResource.get({id: 2}, function(data) {
			vm.user = data;
		});
	}
})();
