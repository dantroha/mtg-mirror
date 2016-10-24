(function () {
    'use strict';

    angular.module('mtgApp').directive('poolSummaryCharts', ['graphAnalysis', function (graphAnalysis) {

        return {
            scope: {
                topCardStatsTitle: '=',
                topGraphCards: '=',
                bottomCardStatsTitle: '=',
                bottomGraphCards: '=',
                chartsHidden: '=',
                controllerId: '='
            },
            restrict: 'AE',
            templateUrl: '/app/directives/poolSummaryCharts.html',
            controller: function ($scope, $element) {
                var graphWidth = 200;
                var graphHeight = 200;
                $scope.fixedCharts = false;

                $scope.hideCharts = function () {
                    $scope.chartsHidden = true;
                    trackEvent($scope.controllerId, 'toggle-charts');
                };

                function setUpGraphs(cardsToUse, pieChartContainer, manaCurveBarChartContainer, typePieChartContainer) {
                  graphAnalysis.setPieChartGraphElement(pieChartContainer, graphWidth, graphHeight);
                  graphAnalysis.setBarChartGraphElement(manaCurveBarChartContainer, graphWidth, graphHeight);
                  graphAnalysis.setTypeChartHolder(typePieChartContainer, graphWidth, graphHeight);
                  graphAnalysis.resetAllCanvas();
                  graphAnalysis.displayChartsForCards(cardsToUse);
                }
                $scope.$watch(function () {
                    return $scope.topGraphCards;
                }, function (newVal, oldVal) {
                  setUpGraphs($scope.topGraphCards, 'colorPieChartContainer', 'manaCurveBarChartContainer', 'typePieChartContainer');
                }, true);


                if ($scope.bottomGraphCards != null) {
                  $scope.$watch(function () {
                      return $scope.bottomGraphCards;
                  }, function (newVal, oldVal) {
                    setUpGraphs($scope.bottomGraphCards, 'colorPieChartContainer-bottom', 'manaCurveBarChartContainer-bottom', 'typePieChartContainer-bottom');
                  }, true);

                }

            }
        }

    }]);

})();
