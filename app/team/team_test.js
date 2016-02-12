'use strict';

describe('projectBoard.team module', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('projectBoard.team'));

  describe('TeamCtrl', function(){


    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('team/team.json').respond([{name: 'member 1'}, {name: 'member 2'}]);

        scope = $rootScope.$new();
        ctrl = $controller('TeamCtrl', {$scope:scope});
    }));
    it('should create team model with two team member fetched from xhr', function() {
      expect(scope.team).toBeUndefined();
      $httpBackend.flush();

      expect(scope.team).toEqual([{name: 'member 1'}, {name: 'member 2'}]);
    });
  });
});
