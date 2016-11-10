(function () {
  'use strict'

  angular
    .module('OrderCreate', [])
    .controller('OderCreateController', OderCreateController)
    .config(config)

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('order-create', {
        url: '/order/create',
        templateUrl: './app/modules/order/order-create.html',
        controller: 'OderCreateController',
        controllerAs: 'vm'
      })
  }

  OderCreateController.$inject = ['AuthenticationService', 'OrderService', 'UserService','message']
  function OderCreateController(AuthenticationService, OrderService, UserService, message){
    var vm = this

    vm.save = save
    
    function save(){
      OrderService.orders.push(new OrderService.Order(vm.order.description, new Date(), vm.order.client, getUserId()))
      message.pop('Pedido criado')
    }

    function getUserId(){
      return UserService.getContextUserId()
    }
    

  }

})()