(function() {
  'use strict';

  angular
    .module('yeomanGetingStart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
