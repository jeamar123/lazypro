var appService = angular.module('appService', [])

appService.factory('appModule', function( serverUrl, $http, Upload ){
  var appFactory = {};

  appFactory.loginUser = function( data ) {
    
    return $http.post(serverUrl.url + 'login', data);
  };

  appFactory.signupUser = function( data ) {
    return $http.post(serverUrl.url + 'signup', data);
  };

  appFactory.addPage = function( data ) {
    return $http.post(serverUrl.url + 'add_page', data);
  };

  appFactory.updatePage = function( data ) {
    return $http.post(serverUrl.url + 'update_page', data);
  };

  appFactory.removePage = function( id ) {
    return $http.get(serverUrl.url + 'delete_page/' + id);
  };

  appFactory.fetchPages = function( ) {
    return $http.get(serverUrl.url + 'get_pages');
  };

  return appFactory;
});