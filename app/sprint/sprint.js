'use strict';

angular.module('mtgProjectBoard.sprint', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sprint', {
    templateUrl: 'sprint/sprint.html',
    controller: 'SprintCtrl'
  }).
  when('/sprint/:sprintId', {
    templateUrl: 'sprint/sprint-detail.html',
    controller: 'SprintDetailCtrl'
  });
}])

.controller('SprintCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('sprint/sprints/sprints.json').success(function(data){
        $scope.sprints = data;
    });
}])

.controller('SprintDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
    var sprintId = $routeParams.sprintId;
    var sprintPath = 'sprint/sprints/sprint'+ sprintId + '/';

    $http.get(sprintPath + 'sprint_' + $routeParams.sprintId + '.json').success(function(data) {
        $scope.sprint = data;
    });
    $http.get(sprintPath + 'stories.json').success(function(data){
        $scope.stories = data;
    });

}]);