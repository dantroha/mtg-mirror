(function () {
    'use strict';

    angular.module('mtgApp').directive('setSelection', function () {

        return {
            scope: {
                setGroups: '='
            },
            restrict: 'AE',
            templateUrl: '/app/directives/setSelection.html',
            transclude: true
        }

    });


})();
