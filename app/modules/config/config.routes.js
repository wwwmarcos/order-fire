(function () {
  'use strict';

  angular
    .module('ConfigRoutes', [])
    .config(config)
    .run(run)

  run.$inject = ['$state', 'AuthenticationService']
  function run($state, AuthenticationService) {
    AuthenticationService.firebaseAuth.$onAuthStateChanged(function (authData) {
      if (!authData) {
        AuthenticationService.logout();
        $state.go('login');
      }
    })
  }

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
  function config($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        controller: AbstractController,
        template: '<ui-view/>'
      });

    $urlRouterProvider.otherwise('/');
  };

  AbstractController.$inject = ['$rootScope', 'AuthenticationService'];
  function AbstractController($rootScope, AuthenticationService) {



  };

})();