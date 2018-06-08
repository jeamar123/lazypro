app.controller('headerController', function( $state, $scope , $rootScope, $stateParams, appModule){

	console.log( 'headerController running' );

	var vm = this;

	vm.isRightShown = false;
	vm.isSessionActive = false;
  vm.user_data = {};
  vm.current = $state.current.name;
  vm.nav_items_arr = [];
	
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    // console.log(fromState);
    vm.current = toState.name;
  });

  vm.getHeaderContents = ( ) =>{
    appModule.fetchHeaderContents()
      .then(function(response){
        console.log(response);
        angular.forEach( response.data.pages, function(value,key){
          vm.nav_items_arr.push(value);
        });
      });
  }

  vm.logout = ( ) =>{
    appModule.logoutUser()
      .then(function(response){
        console.log(response);

        window.location.reload();
      });
  }

	vm.onLoad = ( ) => {
		vm.getHeaderContents();
	}

	vm.onLoad();

});
