app.directive('bannersDirective', [
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
        console.log( "bannersDirective Runinng !" );

        scope.isListShow = true;
        scope.isAddShow = false;
        scope.isEditShow = false;
        scope.isAnyBoxChecked = false;
        scope.isAllBannersBtnChecked = false;

        scope.checkedContentArr = [];
        scope.contentCheckbox = [];
        scope.banners_list = [];

        scope.selected_data = {
          link_url : "http://" + window.location.host
        };

        scope.banners_search = "";

        scope.hideAllBox = ( ) =>{
          scope.isListShow = false;
          scope.isAddShow = false;
          scope.isEditShow = false;
        }

        scope.toggleAdd = ( ) =>{
          scope.hideAllBox();
          if( scope.isAddShow == false ){
            scope.isAddShow = true;
          }else{
            scope.isAddShow = false;
          }
        }

        scope.toggleEdit = ( data ) =>{
          scope.hideAllBox();
          if( scope.isEditShow == false ){
            scope.isEditShow = true;
            scope.selected_data = data;
          }else{
            scope.isEditShow = false;
          }
        }

        scope.toggleList = ( ) =>{
          scope.hideAllBox();
          if( scope.isListShow == false ){
            scope.isListShow = true;
          }else{
            scope.isListShow = false;
          }
        }

        scope.bannerChecked = ( index, bannerOpt ) =>{
          scope.bannerCheckbox[index] = bannerOpt;
          if( bannerOpt == true){
            scope.checkedBannerArr.push( scope.banners_list[index].id );
          }else{
            scope.checkedBannerArr.splice( $.inArray( scope.banners_list[index], scope.checkedBannerArr) , 1 );
          }

          var checkedIndex = $.inArray( true, scope.bannerCheckbox);
          if( checkedIndex < 0 ){
            scope.isAnyBoxChecked = false;
          }else{
            scope.isAnyBoxChecked = true;
          }
        }

        scope.selectAllBanners = ( ) =>{
          scope.checkedBannerArr = [];
          if( scope.isAllBannersBtnChecked == false ){
            scope.isAllBannersBtnChecked = true;
            scope.isAnyBoxChecked = true;
            angular.forEach( scope.banners_list, function(value,key){
              scope.checkedBannerArr.push( value.id );
              scope.bannerCheckbox[key] = true;
            });
          }else{
            scope.isAllBannersBtnChecked = false;
            scope.isAnyBoxChecked = false;
            angular.forEach( scope.banners_list, function(value,key){
              scope.bannerCheckbox[key] = false;
            });
          }
        }

        scope.deleteMultiplePages = ( ) =>{
          angular.forEach( scope.checkedBannerArr ,function(value,key){
            scope.deleteBanner( value );
          });
        }

        scope.viewLinkURL = ( link ) =>{
          window.open( link, "_blank" )
        }



      // -------- FUNCTIONS -----------

        scope.editBanner = ( data ) =>{
          appModule.updateBanner( data )
            .then(function(response){
              console.log(response);
            });
        }

        scope.deleteBanner = ( id ) =>{
          appModule.removeBanner( id )
            .then(function(response){
              console.log(response);
            });
        }

        scope.submitBanner = ( data ) =>{
        	data.file = data.img;
        	console.log(data);
          appModule.addBanner( data )
            .then(function(response){
              console.log(response);
            });
        }

        scope.getAllBanners = ( ) =>{
          appModule.fetchBanners()
            .then(function(response){
              console.log(response);
              scope.banners_list = response.data;
            });
        }

        scope.onLoad = ( ) =>{
          scope.getAllBanners();
        }

        scope.onLoad();


        scope.textEditorBtns = [
          // ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
          // ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
          // ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
          // ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
          ['p', 'pre', 'quote'],
          ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ];

      }
    }
  }
])