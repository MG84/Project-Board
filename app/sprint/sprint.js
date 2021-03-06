'use strict';

angular.module('projectBoard.sprint', ['ngRoute'])

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
    $http.get('sprint/sprints.json?nocache='+(new Date()).getTime(), {responseType:'json'})
      .success(function(data){
        $scope.sprints = data;
    });
}])

.controller('SprintDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
    $http.get('sprint/sprints.json?nocache='+(new Date()).getTime())
      .success(function(data){
        $scope.sprint = data[$routeParams.sprintId-1];
        $scope.stories = $scope.sprint.stories;
      });

    $scope.getStatusColor = function(status) {
      if (status == 'todo') {
        return {
          'background-color': 'red'
        }
      } else if (status == 'doing') {
        return {
          'background-color': 'yellow'
        }
      } else if (status == 'done') {
        return {
          'background-color': 'green'
        }
      }

    }

}]);