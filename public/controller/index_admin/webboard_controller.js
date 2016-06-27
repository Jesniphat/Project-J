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

})
.controller("webboardCreateController", function($scope,dbSvc){
  console.log("webboardCreateController");

  $scope.Title = "";
  $scope.Content = "";

  $scope.saveTopic = function(){
    console.log("topic = ", $scope.Title, "  Content = ", $scope.Content);
    if($scope.Title == "" || $scope.Content == ""){
      alert("ใส่ข้อมูลให้ครบนะ");
      return;
    }

    var param = {
      title: $scope.Title,
      content: $scope.Content
    }
    console.log("param = ", param);
    dbSvc.request("/index_admin","save", param).then(function(result) {
      console.log(result);
      if(result.status === true){
        console.log("result : ", result.id);
        // $location.path("/webboardTopic");
        $scope.Title = "";
        $scope.Content = "";
      } else {
        alert(result.error);
      }
    });
  }
});
