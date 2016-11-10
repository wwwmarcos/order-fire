(function() {
  'use strict'

   angular
    .module('OrderServices', [])
    .factory('OrderService', OrderServices)

    OrderServices.$inject = ['FireBaseInstance']
    function OrderServices(FireBaseInstance){
      var database = FireBaseInstance.get()
      
      var service = {
        Order: Order,
        orders: database.child('orders'),
      }
      return service

      function Order(description, date, client, userId){
        var order = {
          description:  description,
          date: String(date),
          client: client,
          userId: userId
        }
        return order
      }


    }
})()