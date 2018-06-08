app.directive('leftMenuDirective', [
  '$http',
  '$state',
  '$stateParams',
  '$rootScope',
  'appModule',
  function directive($http,$state,$stateParams,$rootScope,appModule) {
    return {
      restrict: "A",
      scope: true,
      link: function link( scope, element, attributeSet )
      {
        console.log( "leftMenuDirective Runinng !" );

        scope.admin_view_opt = 0;

        scope.changeAdminMenuOpt = ( opt ) =>{
          scope.admin_view_opt = opt;
          console.log('sdfds');
        }

        scope.onLoad = ( ) =>{

        }

        scope.onLoad();

      }
    }


  }
])