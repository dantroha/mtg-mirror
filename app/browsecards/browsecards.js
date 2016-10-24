(function () {
    'use strict';
    var controllerId = 'browsecards';
    angular.module('mtgApp').controller(controllerId, ['datacontext', browsecards]);

    function browsecards(datacontext) {
        var vm = this;
        vm.title = 'Card Browser';

        vm.cards = [];

        vm.selectedSet = "";
        vm.flatCardSets = [];


        vm.swapCards = function() {
            var setSplit = vm.selectedSet.split("|");
            var groupNum = setSplit[0];
            var setNum = setSplit[1];

            datacontext.getCardSetByRarity(groupNum, setNum).then(function (data) {
                return vm.cards = data;
            });
        }

        function updateCardSets() {
            datacontext.getCardSetsAsFlatArray().then(function (data) {
                vm.flatCardSets = data;
                vm.selectedSet = vm.flatCardSets[0].setGroupNum + "|" + vm.flatCardSets[0].setNum;
                vm.swapCards();
            });
        }


        function activate() {
          updateCardSets();
          // trackEvent(controllerId, 'init');
        }
        activate();
    }
})();
