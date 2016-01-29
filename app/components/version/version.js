'use strict';

angular.module('projectBoard.version', [
  'projectBoard.version.interpolate-filter',
  'projectBoard.version.version-directive'
])

.value('version', '0.1');
