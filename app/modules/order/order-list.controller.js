(function () {
  'use strict'

  angular
    .module('OrderList', [])
    .controller('OderListController', OderListController)
    .config(config)

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('order-list', {
        url: '/order/list',
        templateUrl: './app/modules/order/order-list.html',
        controller: 'OderListController',
        controllerAs: 'vm'
      })
  }

  OderListController.$inject = ['OrderService', '$firebaseArray', 'message', '$filter']
  function OderListController(OrderService, $firebaseArray, message, $filter) {
    var vm = this

    vm.orders = $firebaseArray(OrderService.orders)
    vm.remove = remove
    vm.formatDate = formatDate

    function remove(order){
      vm.orders.$remove(order).then(function(response){
        message.pop('Pedido removido')
      })
      .catch(function (err){
        message.pop(err.message)
      })
    }

    function formatDate(stringDate){
      return $filter('date')(new Date(stringDate),  'yyyy/MM/dd')
    }
 }
})()