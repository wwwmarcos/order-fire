(function () {
  'use strict'

  angular
    .module('app', [
      'ui.router'
      , 'AuthenticationModule'
      , 'ngMaterial'
      , 'ngMessages'
      , 'ngCookies'
      , 'MaterialFacade'
      ,'ConfigModule'
      ,'UserModule'
      ,'firebase'
      ,'UtilsModule'
      ,'OrdersModule'
    ])

})()