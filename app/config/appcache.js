(function () {
    'use strict';

    angular.module('mtgApp').controller('appcache', ['$scope', function($scope) {
      $scope.appUpdated = false;
      $scope.appIsUpdating = false;
      window.applicationCache.addEventListener("downloading", function(e) {
        $scope.appIsUpdating = true;
      });

      function appFinishedUpdating() {
        $scope.appIsUpdating = false;
        $scope.appUpdated = true;
        $scope.$apply();
      }

      window.applicationCache.addEventListener("cached", function(event) {
        appFinishedUpdating();
      });
      window.applicationCache.addEventListener("updateready", function(event) {
        appFinishedUpdating();
      });

      $scope.refreshApp = function() {
        location.reload();
      }

      $scope.closeAppUpdatedWarning = function() {
        $scope.appUpdated = false;
      }

      $scope.closeAppLoadingWarning = function() {
        $scope.appIsUpdating = false;
      }

    }]);
})();
