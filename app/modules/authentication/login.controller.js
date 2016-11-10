(function () {
  'use strict';

  angular
    .module('UserLoginControllers', [])
    .controller('UserLoginController', UserLoginController)
    .config(config)

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './app/modules/authentication/login.html',
        controller: 'UserLoginController',
        controllerAs: 'vm'
      })
  }

  UserLoginController.$inject = ['AuthenticationService', '$state', 'message'];
  function UserLoginController(AuthenticationService, $state, message) {
    var vm = this
    vm.login = login

    function login(user) {
    		AuthenticationService
        .login(user)
        .then(function (response) {
          message.pop('Bem vindo')
          $state.go('order-create')
        })
        .catch(function (err) {
          message.pop(err.message)
        })
    }
  }
})()