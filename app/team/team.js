'use strict';

angular.module('projectBoard.team', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team', {
    templateUrl: 'team/team.html',
    controller: 'TeamCtrl'
  });
}])

.controller('TeamCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('team/team.json?nocache='+(new Date()).getTime())
    .success(function (data) {
      $scope.team = data;
  });
}]);
