(function () {
  'use strict'

  angular
    .module('app')
    .controller('IndexController', IndexController)

  IndexController.$inject = ['AuthenticationService', '$state']
  function IndexController(AuthenticationService, $state) {
    var vm = this
    vm.logout = logout
    vm.goto = goto

    function logout(){
      AuthenticationService.logout()
    }

    function goto(state){
      $state.go(state)
    }

  }

})()