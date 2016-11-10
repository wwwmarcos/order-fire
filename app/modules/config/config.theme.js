(function() {
  'use strict';
  
  angular
    .module('ConfigThemeModule', [])
    .config(config);

    config.$inject = ['$mdThemingProvider'];
    function config($mdThemingProvider){
     
      $mdThemingProvider
        .theme('default')
          .primaryPalette('blue')
          .accentPalette('red');
    };
})();