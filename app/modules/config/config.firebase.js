
   angular
    .module('FireBaseConfig', [])
    .factory('FireBaseInstance', FireBaseInstance)

    function FireBaseInstance(){
      var service = {
        get: get
      }
      return service

      function get(){
        return firebase.database().ref()
      }

    }
