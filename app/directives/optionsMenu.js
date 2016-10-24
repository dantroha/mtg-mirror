(function () {
    'use strict';

    angular.module('mtgApp').directive('optionsMenu', ['$mdSidenav', function ($mdSidenav) {

        return {
            scope: {
                setGroups: '='
            },
            restrict: 'AE',
            templateUrl: '/app/directives/optionsMenu.html',
            transclude: true,
            controller: function ($scope, $element) {

                $scope.displayExtraOptions = function () {
                    $mdSidenav('options').toggle();
                }
                $scope.closeOptions = function($event) {
                  if ($event.target.nodeName == "BUTTON" || $event.target.parentElement.nodeName == "BUTTON") {
                    $mdSidenav('options').close();
                  }
                }
            }
        }

    }]);


})();
