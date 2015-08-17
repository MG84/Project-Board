'use strict';

angular.module('mtgProjectBoard.team', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team', {
    templateUrl: 'team/team.html',
    controller: 'TeamCtrl'
  });
}])

.controller('TeamCtrl', [function() {

}]);