(function(){
  'use strict';

  angular.module('common',[])
  .constant('apiPath','https://akashsingh41.herokuapp.com')
  .config(config);

  config.$inject =['$httpProvider'];
  function config($httpProvider)
  {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
