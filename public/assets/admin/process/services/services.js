var appService = angular.module('appService', [])

appService.factory('appModule', function( serverUrl, $http, Upload ){
  var appFactory = {};

  appFactory.loginUser = function( data ) {
    
    return $http.post(serverUrl.url + 'login', data);
  };

  appFactory.signupUser = function( data ) {
    return $http.post(serverUrl.url + 'signup', data);
  };

  // PAGES

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

  //  BANNERS

  appFactory.addBanner = function( data ) {
    return Upload.upload( {
      url: serverUrl.url + 'add_banner',
      data: data
    });
  };

  appFactory.updateBanner = function( data ) {
    return Upload.upload( {
      url: serverUrl.url + 'update_banner',
      data: data
    });
  };

  appFactory.removeBanner = function( id ) {
    return $http.get(serverUrl.url + 'delete_banner/' + id);
  };

  appFactory.fetchBanners = function( ) {
    return $http.get(serverUrl.url + 'get_banners');
  };

  appFactory.fetchBannerByID = function( id ) {
    return $http.get(serverUrl.url + 'get_banners/' + id);
  };

  // SECTIONS

  appFactory.addSection = function( data ) {
    return Upload.upload( {
      url: serverUrl.url + 'add_section',
      data: data
    });
  };

  appFactory.updateSection = function( data ) {
    return Upload.upload( {
      url: serverUrl.url + 'update_section',
      data: data
    });
  };

  appFactory.removeSection = function( id ) {
    return $http.get(serverUrl.url + 'delete_section/' + id);
  };

  appFactory.fetchSections = function( ) {
    return $http.get(serverUrl.url + 'get_sections');
  };

  appFactory.fetchSectionByID = function( id ) {
    return $http.get(serverUrl.url + 'get_sections/' + id);
  };

  return appFactory;
});