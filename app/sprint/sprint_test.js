'use strict';

describe('projectBoard.sprint module', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('projectBoard.sprint'));

  describe('SprintCtrl', function(){
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      // very poor... Lord please forgive me..
      $httpBackend.expectGET('sprint/sprints/sprints.json?nocache='+(new Date()).getTime()-1).respond([{name:'Sprint #1'}, {name:'Sprint #2'}]);

      scope = $rootScope.$new();
      ctrl = $controller('SprintCtrl', {$scope:scope});
    }));

    it('should create "sprint" model with two sprints fetched from xhr', function() {
      expect(scope.sprints).toBeUndefined();
      $httpBackend.flush();

      expect(scope.sprints).toEqual([{name:'Sprint #1'}, {name:'Sprint #2'}]);

    });

  });
});
