(function() {
  'use strict';

  angular
    .module('AngularFacadeConfig', [])
    .config(config);
  
  config.$inject = ['$configMaterialFacadeProvider'];
  function config($configMaterialFacadeProvider){
    $configMaterialFacadeProvider
      .inputText({
        messages : {
            required : 'Campo obrigatório'
          , maxlength: 'Tamanho maximo atingido'
          , minlength: 'Tamanho minimo não atingido'
        }
      })
      .inputEmail({
          pattern : '/^.+@.+\..+$/" /'
          , maxLength : 3
          , minLength : 3
          , messages : {
              required : 'Campo obrigatório'
            , pattern :  'Email invalido'
            , minlength: 'O email deve ser menor'
            , maxlength: 'O Email deve ser maior'
          }
      });
  };

})();