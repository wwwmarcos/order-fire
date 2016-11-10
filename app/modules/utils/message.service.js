(function () {
  'use strict'

  angular
    .module('MessageServices', [])
    .factory('message', message)

  message.$inject = ['$mdToast']
  function message($mdToast) {
    var service = {
      pop: pop
    };
    return service

    function pop(message, position) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(message)
          .position(position || 'right')
          .hideDelay(3000)
      )
    }
  }
})()