(function() {
  'use strict';

  angular.module('mtgApp').factory('logger', ['$mdToast',  function($mdToast) {

    var loggerPosition = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };
    
    var toastPosition = angular.extend({},loggerPosition);
    var getToastPosition = function() {
      return Object.keys(loggerPosition)
        .filter(function(pos) { return toastPosition[pos]; })
        .join(' ');
    };

    function generalLog(msg, color) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .position(getToastPosition())
          .hideDelay(3000)
      );
    }

    function logError(msg) {
      generalLog(msg);
    }

    function logSuccess(msg) {
      generalLog(msg);
    }

    function logStandard(msg) {
      generalLog(msg);
    }

    return {
      logError: logError,
      logSuccess: logSuccess,
      logStandard: logStandard
    };

  }]);

})();
