(function () {
    'use strict';
    var controllerId = 'sealedsim';
    angular.module('mtgApp').controller(controllerId, ['logger', 'datacontext', 'downloadDataService', 'graphAnalysis', 'landcards', '$scope', '$mdDialog', sealedsim]);

    function sealedsim(logger, datacontext, downloadDataService, graphAnalysis, landcards, $scope, $mdDialog) {
        var log = logger.logStandard;
        var logSuccess = logger.logSuccess;
        var logError = log.logError;

        var vm = this;
        vm.title = 'Sealed Simulator';
        vm.controllerId = controllerId;

        vm.landcards = [];
        vm.selectedLandCards = [];

        vm.setGroups = [];
        function initSetGroups() {
            datacontext.getCardSetGroups().then(function (data) {
                var latestSetGroup = data[0];
                if (latestSetGroup.length > 1) {
                    // If latest set group has more than one set in it then open 4 of latest, 2 of older.
                    data[0][0].boostersToOpen = 4;
                    data[0][1].boostersToOpen = 2;
                } else {
                    // Else open 6 of latest if it just has one set in it.
                    data[0][0].boostersToOpen = 6;
                }
                vm.setGroups = data;
            });
        }

        vm.chartsHidden = false;
        vm.toggleCharts = function () {
            vm.chartsHidden = !vm.chartsHidden;
        }

        vm.promo_options =
            [
                {
                    value: 1, text: "Include Promo"
                },
                {
                    value: 0, text: "Don't include Promo"
                }
            ];
        vm.include_promo = vm.promo_options[0].value;


        vm.boosterCards = [];

        vm.selectedCards = [];

        vm.saveCompletePool = function () {
            downloadDataService.saveCardsList(vm.selectedCards.concat(vm.boosterCards), "sealedPool");
            trackEvent(controllerId, 'save-complete-pool');
        }

        vm.addLandCard = function (card) {
            vm.selectedLandCards.push(card);
            trackEvent(controllerId, 'add-land-card', card.Name);
        }
        vm.removeLandCard = function (card) {
            var index = vm.selectedLandCards.indexOf(card);
            if (index > -1) {
                vm.selectedLandCards.splice(index, 1);
                trackEvent(controllerId, 'remove-land-card', card.Name);
            }
        }

        vm.addToDeck = function(card)
        {
            log("Added " + card.Name + " to your selection...");
            _removeFromArrayAndAddToArray(vm.boosterCards, vm.selectedCards, card);
            trackEvent(controllerId, 'add-to-deck', card.Name);
        };

        vm.removeFromDeck = function(card)
        {
            log("Put " + card.Name + " back into sealed pool...");
            _removeFromArrayAndAddToArray(vm.selectedCards, vm.boosterCards, card);
            trackEvent(controllerId, 'remove-from-deck', card.Name);
        }

        vm.clearSelection = function (ev) {
          if (vm.selectedCards.length + vm.selectedLandCards.length > 0) {
            var confirm = $mdDialog.confirm()
                      .title('Are you sure you want to clear your selection?')
                      .ariaLabel('Lucky day')
                      .targetEvent(ev)
                      .ok('Ok')
                      .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
              for (var i = 0; i < vm.selectedCards.length; i++) {
                  vm.boosterCards.push(vm.selectedCards[i]);
              }
              vm.selectedCards = [];
              vm.selectedLandCards = [];
            }, function() { //No need to do anything on cancel
            });
          }
        }

        function _removeFromArrayAndAddToArray(arrayToRemoveFrom, arrayToAddTo, card)
        {
            var index = arrayToRemoveFrom.indexOf(card);
            if (index > -1) {
                arrayToRemoveFrom.splice(index, 1);
            }
            arrayToAddTo.push(card);
        }

        vm.openBoosters = function()
        {

            log("Opening boosters...");
            vm.boosterCards = [];
            vm.selectedCards = [];
            vm.selectedLandCards = [];

            var cardsToUse = datacontext.openBoostersForCardSetGroups(vm.setGroups);
            vm.boosterCards.push.apply(vm.boosterCards, cardsToUse.mythicCards);
            vm.boosterCards.push.apply(vm.boosterCards, cardsToUse.rareCards);
            vm.boosterCards.push.apply(vm.boosterCards, cardsToUse.uncommonCards);
            vm.boosterCards.push.apply(vm.boosterCards, cardsToUse.commonCards);

            if (vm.include_promo == 1) {
                datacontext.addPromoForLatestSet(vm.boosterCards);
                trackEvent(controllerId, 'include-promo');
            } else {
                trackEvent(controllerId, 'exclude-promo');
            }

            return;
        };

        activate();

        function activate() {
          initSetGroups();
          vm.landcards = landcards.getLandCards();
          // trackEvent(controllerId, 'init');
        };
    }
})();
