(function() {
	angular.module('app').controller('AppController', AppController);

	// AppController.$inject = ['$scope', '$rootScope', '$location'];

	function AppController() {
		var vm = this;
		vm.title = 'gulp-AngularJS1.x-seed';
	}
})();
