app.directive('previewDirective', [
  '$http',
  '$state',
  '$stateParams',
  '$rootScope',
  'appModule',
  'serverUrl',
  function directive($http,$state,$stateParams,$rootScope,appModule,serverUrl) {
    return {
      restrict: "A",
      scope: true,
      link: function link( scope, element, attributeSet )
      {
        console.log( "previewDirective Runinng !" );
        scope.content_data = {
          banner : {
            image : "banner.jpg",
            text : "Lorem ipsum dolor set amet",
            sub_text : "Lorem ipsum dolor set amet",
          },
          section_two : {
            columns : [
              {
                image : "http://localhost:8000/img/lock.png",
                text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Donec sodales lorem quam, et hendrerit eros tincidunt vitae. Vivamus id eros blandit, egestas odio nec, dignissim lacus. Fusce sed efficitur nunc. Nulla facilisi. Aenean sagittis sed urna at consectetur.",
              },
              {
                image : "http://localhost:8000/img/lock.png",
                text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Donec sodales lorem quam, et hendrerit eros tincidunt vitae. Vivamus id eros blandit, egestas odio nec, dignissim lacus. Fusce sed efficitur nunc. Nulla facilisi. Aenean sagittis sed urna at consectetur.",
              },
              {
                image : "http://localhost:8000/img/lock.png",
                text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Donec sodales lorem quam, et hendrerit eros tincidunt vitae. Vivamus id eros blandit, egestas odio nec, dignissim lacus. Fusce sed efficitur nunc. Nulla facilisi. Aenean sagittis sed urna at consectetur.",
              },
            ]
          },
          section_three : {
            image : "banner-2.jpg",
            text : "Lorem ipsum dolor set amet",
            sub_text : "Lorem ipsum dolor set amet",
          },
          section_four : {
            columns : [
              {
                image : "http://localhost:8000/img/apple-1.png",
                text  : null,
              },
              {
                image : null,
                text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Donec sodales lorem quam, et hendrerit eros tincidunt vitae. Vivamus id eros blandit, egestas odio nec, dignissim lacus. Fusce sed efficitur nunc. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Aenean sagittis sed urna at consectetur.",
              },
            ]
          },
          section_five : {
            image : "banner-3.jpg",
            text : "Lorem ipsum dolor set amet",
            sub_text : "Lorem ipsum dolor set amet",
          },
          section_six : {
            columns : [
              {
                image : null,
                text  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Donec sodales lorem quam, et hendrerit eros tincidunt vitae. Vivamus id eros blandit, egestas odio nec, dignissim lacus. Fusce sed efficitur nunc. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius tincidunt ex vitae euismod. Aenean sagittis sed urna at consectetur.",
              },
              {
                image : "http://localhost:8000/img/apple-1.png",
                text  : null,
              },
            ]
          }
        };
        scope.isSessionActive = false;

        var isLoading = false;

        scope.getAllContent = ( ) =>{
          // scope.toggleLoading();
          // appModule.fetchMovies()
            // .then(function(response){
              // console.log(response);
            //   scope.movie_list = response.data;
            //   scope.toggleLoading();
            // });
        }

        scope.toggleLoading = ( ) =>{
          if( isLoading == true ){
            isLoading = false;
            setTimeout(function() {
              $(".body-loader").fadeOut("slow");
            }, 2000);
          }else{
            $(".body-loader").show();
            isLoading = true;
          }
        }

        scope.getSession = ( ) =>{
          appModule.checkSession()
            .then(function(response) {
              // console.log(response);
              if( response.data.isActive){
                scope.isSessionActive = true;
                scope.getSessionData();
              }else{
                scope.isSessionActive = false;
              }
            });
        }

        scope.getSessionData = ( ) =>{
          appModule.fetchSession()
            .then(function(response) {
              // console.log(response);
              if( response.data){
                scope.user_data = response.data.user;
              }
            });
        }

        scope.onLoad = ( ) =>{
          scope.getAllContent();
        }

        scope.onLoad();

      }
    }


  }
])