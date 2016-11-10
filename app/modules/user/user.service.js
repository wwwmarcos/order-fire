(function () {
  'use strict'

  angular
    .module('UserServices', [])
    .factory('UserService', UserService)

  UserService.$inject = ['FireBaseInstance', '$firebaseAuth'];
  function UserService(FireBaseInstance, $firebaseAuth) {
    var service = {
      createUser: createUser,
      getContextUserId: getContextUserId
    }
    var firebaseAuth = $firebaseAuth()
    return service

    function createUser(user) {
      return firebaseAuth.$createUserWithEmailAndPassword(user.email, user.password)
    }

    function getContextUserId(){
      return firebaseAuth.$getAuth().uid
    }


  }
})()