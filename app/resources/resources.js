'use strict';

angular.module('projectBoard.resources', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resources', {
    templateUrl: 'resources/resources.html',
    controller: 'ResourcesCtrl'
  });
}])

.controller('ResourcesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('resources/resources.json?nocache='+(new Date()).getTime())
      .success(function(data){
        $scope.resources = data;
    });
}]);
