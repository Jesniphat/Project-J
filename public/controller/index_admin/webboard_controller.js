prrject_j.controller("webboardListController", function($scope,dbSvc){
  $scope.title="Hello Wabboard."
  $scope.topic=[];
  $scope.listTopic = function(){
    dbSvc.request("/index_admin","webboard_list", {}).then(function(result) {
      console.log(result);
      if(result.status === true){
        $scope.topic = result.data;
      } else {
        alert(result.error);
      }

    });
  };

});
