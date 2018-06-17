app.directive('sectionsDirective', [
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
        console.log( "sectionsDirective Runinng !" );

        scope.isListShow = true;
        scope.isAddShow = false;
        scope.isEditShow = false;
        scope.isAnyBoxChecked = false;
        scope.isAllSectionsBtnChecked = false;

        scope.checkedSectionArr = [];
        scope.sectionCheckbox = [];
        scope.sections_list = [];

        scope.selected_data = {
          link_url : "http://" + window.location.host,
          visibility : 'hidden',
          columns: 1
        };

        scope.sections_search = "";

        scope.hideAllBox = ( ) =>{
          scope.isListShow = false;
          scope.isAddShow = false;
          scope.isEditShow = false;

          scope.selected_data = {
            link_url : "http://" + window.location.host,
            visibility : 'hidden',
          };

          scope.getAllSections();
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

        scope.sectionChecked = ( index, sectionOpt ) =>{
          scope.sectionCheckbox[index] = sectionOpt;
          if( sectionOpt == true){
            scope.checkedSectionArr.push( scope.sections_list[index].id );
          }else{
            scope.checkedSectionArr.splice( $.inArray( scope.sections_list[index], scope.checkedSectionArr) , 1 );
          }

          var checkedIndex = $.inArray( true, scope.sectionCheckbox);
          if( checkedIndex < 0 ){
            scope.isAnyBoxChecked = false;
          }else{
            scope.isAnyBoxChecked = true;
          }
        }

        scope.selectAllSections = ( ) =>{
          scope.checkedSectionArr = [];
          if( scope.isAllSectionsBtnChecked == false ){
            scope.isAllSectionsBtnChecked = true;
            scope.isAnyBoxChecked = true;
            angular.forEach( scope.sections_list, function(value,key){
              scope.checkedSectionArr.push( value.id );
              scope.sectionCheckbox[key] = true;
            });
          }else{
            scope.isAllSectionsBtnChecked = false;
            scope.isAnyBoxChecked = false;
            angular.forEach( scope.sections_list, function(value,key){
              scope.sectionCheckbox[key] = false;
            });
          }
        }

        scope.deleteMultiplePages = ( ) =>{
          angular.forEach( scope.checkedSectionArr ,function(value,key){
            scope.deleteSection( value );
          });
        }

        scope.viewLinkURL = ( link ) =>{
          window.open( link, "_blank" )
        }



      // -------- FUNCTIONS -----------

        scope.editSection = ( data ) =>{
          data.file = data.img;
          appModule.updateSection( data )
            .then(function(response){
              console.log(response);
              scope.selected_data = response.data.updated_section;
            });
        }

        scope.deleteSection = ( id ) =>{
          appModule.removeSection( id )
            .then(function(response){
              console.log(response);
            });
        }

        scope.submitSection = ( data ) =>{
          console.log(data);
        	data.file = data.img;
          appModule.addSection( data )
            .then(function(response){
              console.log(response);
            });
        }

        scope.getAllSections = ( ) =>{
          appModule.fetchSections()
            .then(function(response){
              console.log(response);
              scope.sections_list = response.data;
            });
        }

        scope.onLoad = ( ) =>{
          scope.selected_data = {
            link_url : "http://" + window.location.host,
            visibility : 'hidden',
          };

          scope.getAllSections();
        }

        scope.onLoad();



      }
    }
  }
])