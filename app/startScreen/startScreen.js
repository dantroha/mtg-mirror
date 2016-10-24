(function() {
  'use strict';

  angular.module('mtgApp').controller('startScreen', ['$scope', '$location', function($scope, $location) {

    $scope.navigateToLocation = function(newLocation) {
      $location.path('/' +newLocation);
    }

  }]);

})();
