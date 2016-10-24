(function () {
    'use strict';

    angular.module("mtgApp").directive("handSimulator", ['$mdDialog', function ($mdDialog) {

        return {
            scope: {
                selectedCards: '=',
                selectedLandCards: '=',
                isEnabled: '='
            },
            restrict: 'AE',
            templateUrl: '/app/directives/handSimulator.html',
            controller: function ($scope, $element) {

                $scope.openHandSimulator = function (ev) {
                    var allSelectedCards = $scope.selectedCards.concat($scope.selectedLandCards);
                    if (allSelectedCards.length > 0) {
                      $mdDialog.show({
                        controller: handmodal,
                        templateUrl: 'handmodal.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true,
                        locals : {
                            fullDeck: allSelectedCards
                        }
                      });
                    }
                    // trackEvent($scope.controllerId, 'opened-hand-simulator');
                };

            }
        }

    }]);


    var controllerId = 'handmodal';
    angular.module('mtgApp').controller(controllerId, ['logger', '$scope', 'fullDeck', 'deckFunctions', 'datacontext', '$mdDialog', handmodal]);

    function handmodal(logger, $scope, fullDeck, deckFunctions, datacontext, $mdDialog) {

        var vm = this;

        vm.fullDeck = fullDeck.map(function(card) {
            return new datacontext.copyCard(card);
        });
        vm.currentCards = 7;

        var remainingCards = [];

        //Send whole deck over
        function generateHand(deckCards, sizeOfHand) {
            //Draw 7 cards
            var cardsToDraw = sizeOfHand;
            //Shuffle array and take first X elements
            var shuffledDeck = deckFunctions.shuffleDeck(deckCards);
            var first7Cards = deckFunctions.drawXCards(shuffledDeck, cardsToDraw);

            remainingCards = deckFunctions.getRemainingCards(shuffledDeck, sizeOfHand);

            return first7Cards;
        }

        function getNextCard() {
            if (remainingCards.length > 0) {
                return remainingCards.shift();
            } else {
                return null;
            }
        }

        $scope.generateNewHand = function () {
            vm.currentCards = 7;
            $scope.handCards = generateHand(vm.fullDeck, vm.currentCards);
            trackEvent(controllerId, 'generate-new-hand');
        };
        $scope.handCards = generateHand(vm.fullDeck, vm.currentCards);


        $scope.mulligan = function () {
            if (vm.currentCards > 0) {
                vm.currentCards--;
            }
            $scope.handCards = generateHand(vm.fullDeck, vm.currentCards);
            trackEvent(controllerId, 'mulligan');
        };

        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.nextCard = function () {
            var nextCard = getNextCard();
            if (nextCard != null) {
                $scope.handCards.push(nextCard);
            } else {
                log.logError("There are no more cards to draw");
            }
            trackEvent(controllerId, 'draw-next-card');
        };

        $scope.markAsUsed = function(card) {
            if (!card.isUsed) {
                card.isUsed = true;
            } else {
                card.isUsed = false;
            }

        };

    }

})();
