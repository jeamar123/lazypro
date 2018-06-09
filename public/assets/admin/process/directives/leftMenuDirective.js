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

        scope.left_menu_arr = [
          'pages',
          'banners',
          'sections',
          'images',
          'comments',
          'appearance',
          'users',
          'settings',
        ];

        scope.admin_view_opt = $state.current.url;

        scope.changeAdminMenuOpt = ( opt ) =>{
          scope.admin_view_opt = opt;
        }

        scope.onLoad = ( ) =>{

        }

        scope.onLoad();

      }
    }


  }
])