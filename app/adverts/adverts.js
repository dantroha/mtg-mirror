(function() {

   angular.module('mtgApp').directive('myAdSense', function () {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            template: '<div ng-transclude></div>',
            link: function ($scope, element, attrs) {
              (adsbygoogle = window.adsbygoogle || []).push({});

              $scope.closeAds = function() {
                document.getElementById('advertSection').style.display = 'none';
                var fullLengthCols = document.getElementsByClassName('fullLengthCol');
                for(var i = 0; i < fullLengthCols.length; i++) {
                  fullLengthCols[i].className += " advertClosed";
                }
                trackEvent('bannerad', 'hide-ad');
              }

             }
        }
    })

})();
