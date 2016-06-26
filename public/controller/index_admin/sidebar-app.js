prrject_j.controller('sidebar_controller', function($rootScope,$scope,$state,$stateParams,$q,dbSvc) {
  console.log($rootScope);
  console.log("sidebar");
  var menuId = $('.menu');
  var dropDownMenu = $('.dropmenu');
  // console.log(menuId);

  $('#dashboard').css({'background':'#000','color':'#fff'});

  $scope.menuClick = function(idName){
    for (i=0; i<menuId.length; i++){
      $('#'+menuId[i].id).css({'background':'','color':''});
      if(menuId[i].id == idName){
        $('#'+menuId[i].id).css({'background':'#000','color':'#fff'});
      }
    }

    for (j=0; j<dropDownMenu.length; j++){
      $('#'+dropDownMenu[j].id).css({'background':'','color':''});
      if(dropDownMenu[j].id == idName){
        $('#'+dropDownMenu[j].id).css({'background':'#000','color':'#fff'});
      }
    }
  }

});
