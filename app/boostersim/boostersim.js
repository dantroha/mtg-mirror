(function () {
    'use strict';
    var controllerId = 'boostersim';
    angular.module('mtgApp').controller(controllerId, ['logger', 'datacontext', 'localStorageService', boostersim]);

    function boostersim(logger, datacontext, localStorageService) {
        var log = logger.logStandard;
        var logError = log.logError;

        var vm = this;
        vm.title = 'Booster Simulator';
        vm.cards = [];

        vm.setGroups = [];

        function initSetGroups() {
            datacontext.getCardSetGroups().then(function (data) {
                data[0][0].boostersToOpen = 6; //Set latest set to open 6 boosters by default
                vm.setGroups = data;
            });
        }

        vm.showExtraOptions = false;
        vm.displayExtraOptions = function () {
            if (vm.showExtraOptions) {
                vm.showExtraOptions = false;
            } else {
                vm.showExtraOptions = true;
            }
        }

        vm.openBoosters = function()
        {
            vm.cards = [];

            var cardsToUse = datacontext.openBoostersForCardSetGroups(vm.setGroups);
            vm.cards.push.apply(vm.cards, cardsToUse.mythicCards);
            vm.cards.push.apply(vm.cards, cardsToUse.rareCards);
            vm.cards.push.apply(vm.cards, cardsToUse.uncommonCards);
            vm.cards.push.apply(vm.cards, cardsToUse.commonCards);

            return;
        }

        activate();

        function activate() {
          initSetGroups();
          // trackEvent(controllerId, 'init');
        }
    }
})();
