var prrject_j = angular.module("project-j",['ui.router','db']);

prrject_j.filter('startFrom', function() {
  return function(input, start) {
    //console.log(input, start);
    start = +start; //parse to int
    return input.slice(start);
  }
});

prrject_j.config(function($stateProvider, $urlRouterProvider){
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/") // ค่าเริ่มต้น
  $stateProvider
    .state("webboard", {
      url: "^/webboard",
      templateUrl: "/view/index_admin/webboard-list.html",
      controller: "webboardListController",
    })
    .state("create", {
      url: "^/webboardCreate",
      templateUrl: "/view/index_admin/webboard-create.html",
      controller: "webboardCreateController",
    });
});
