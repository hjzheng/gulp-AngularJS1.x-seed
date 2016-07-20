(function() {
	angular.module('app').config(configRouter);

	// 路由配置
	configRouter.$inject = ['$urlRouterProvider', '$stateProvider'];

	function configRouter($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/example');
		$stateProvider
			.state('example', {
				url: '/example',
				templateUrl: './src/app/example/example.html',
				controller: 'ExampleController',
				controllerAs: 'vm'
			});
	}
})();
