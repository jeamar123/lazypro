var appService = angular.module('appService', [])

appService.factory('appModule', function( serverUrl, $http, Upload ){
  var appFactory = {};

  appFactory.fetchHeaderContents = function( ) {
    return $http.get(serverUrl.url + 'get_header_contents');
  };

  appFactory.fetchBodyContents = function( ) {
    return $http.get(serverUrl.url + 'get_body_contents');
  };

  return appFactory;
});