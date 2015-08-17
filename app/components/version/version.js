'use strict';

angular.module('mtgProjectBoard.version', [
  'mtgProjectBoard.version.interpolate-filter',
  'mtgProjectBoard.version.version-directive'
])

.value('version', '0.1');
