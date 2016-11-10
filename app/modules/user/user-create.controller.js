(function() {
  'use strict'

  angular
    .module('UserCreateControllers', [])
    .controller('UserCreateController', UserCreateController)
    .config(config)

    config.$inject = ['$stateProvider'];
    function config($stateProvider){
      $stateProvider
        .state('user-create', {
          url : '/user/create',
          templateUrl: './app/modules/user/user-create.html',
          controller : 'UserCreateController',
          controllerAs : 'vm'
        })
    }
    
    UserCreateController.$inject = ['message', 'UserService', '$state']
    function UserCreateController(message, UserService, $state){
      var vm = this

      vm.save = save;
      
      function save() {
        UserService
          .createUser({
            email : vm.user.email,
            password: String(vm.user.password)  
          })
          .then(function(response){
            $state.go('login');
            message.pop('Cadastro realizado com sucesso')
          })
          .catch(function(err){
            message.pop(err.message)
          })
      }
    }

})(); 