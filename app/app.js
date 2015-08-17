'use strict';

// Declare app level module which depends on views, and components
angular.module('mtgProjectBoard', [
  'ngRoute',
  'mtgProjectBoard.team',
  'mtgProjectBoard.sprint',
  'mtgProjectBoard.resources',
  'mtgProjectBoard.version'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/team'});

  // make this demo work in plunker
  $locationProvider.html5Mode(false);

}])

.controller('TabsCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.tabs = [
      { link : '#/team', label : 'Team' },
      { link : '#/sprint', label : 'Sprint' },
      { link : '#/resources', label : 'Resources' }
    ];

    for (var i=0; i < $scope.tabs.length; i++) {
        if ($scope.tabs[i].link == '#'+$location.$$path) {
            $scope.selectedTab = $scope.tabs[i];
        }
    }

    $scope.setSelectedTab = function(tab) {
        debugger;
      $scope.selectedTab = tab;
    }

    $scope.tabClass = function(tab) {
      if ($scope.selectedTab == tab) {
        return "active";
      } else {
        return "";
      }
    }
}]);