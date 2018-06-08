app.directive('pagesDirective', [
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
        console.log( "pagesDirective Runinng !" );

        scope.isListShow = true;
        scope.isAddShow = false;
        scope.isEditShow = false;
        scope.isAnyBoxChecked = false;
        scope.isAllPagesBtnChecked = false;

        scope.checkedPageArr = [];
        scope.pageCheckbox = [];
        scope.pages_list = [];

        scope.selected_data = {};

        scope.pages_search = "";

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

        scope.toggleEdit = ( ) =>{
          scope.hideAllBox();
          if( scope.isEditShow == false ){
            scope.isEditShow = true;
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

        scope.pageChecked = ( index, pageOpt ) =>{
          scope.pageCheckbox[index] = pageOpt;
          if( pageOpt == true){
            scope.checkedPageArr.push( scope.pages_list[index].id );
          }else{
            scope.checkedPageArr.splice( $.inArray( scope.pages_list[index], scope.checkedPageArr) , 1 );
          }

          var checkedIndex = $.inArray( true, scope.pageCheckbox);
          if( checkedIndex < 0 ){
            scope.isAnyBoxChecked = false;
          }else{
            scope.isAnyBoxChecked = true;
          }

          console.log(scope.checkedPageArr);
          console.log(scope.pageCheckbox);
        }

        scope.selectAllPages = ( ) =>{
          scope.checkedPageArr = [];
          if( scope.isAllPagesBtnChecked == false ){
            scope.isAllPagesBtnChecked = true;
            scope.isAnyBoxChecked = true;
            angular.forEach( scope.pages_list, function(value,key){
              scope.checkedPageArr.push( value.id );
              scope.pageCheckbox[key] = true;
            });
          }else{
            scope.isAllPagesBtnChecked = false;
            scope.isAnyBoxChecked = false;
            angular.forEach( scope.pages_list, function(value,key){
              scope.pageCheckbox[key] = false;
            });
          }

        }


      // -------- FUNCTIONS -----------

        scope.submitPage = ( data ) =>{
          appModule.addPage( data )
            .then(function(response){
              console.log(response);
            });
        }

        scope.getAllPages = ( ) =>{
          appModule.fetchPages()
            .then(function(response){
              console.log(response);
              scope.pages_list = response.data;
            });
        }

        scope.onLoad = ( ) =>{
          scope.getAllPages();
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