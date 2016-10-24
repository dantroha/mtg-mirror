(function() {
  'use strict';

  var controllerId = 'draftsim';

  angular.module('mtgApp').controller(controllerId, ['$scope', 'datacontext', 'landcards', 'ai', 'logger', 'downloadDataService',
  function($scope, datacontext, landcards, ai, logger, downloadDataService) {
    var log = logger.logStandard;
    var logSuccess = logger.logSuccess;
    var logError = log.logError;
    var vm = this;

    vm.controllerId = controllerId;

    vm.title = 'Sealed Simulator';
    vm.column1Title = "Image";
    vm.column2Title = "Name";
    vm.column3Title = "Rarity";

    vm.boosters_to_open = 1;

    vm.boosterCards = [];

    vm.selectedCards = [];
    vm.deckCards = [];

    vm.draftFinished = false;
    vm.draftStarted = false;
    vm.packsOpened = 0;
    vm.totalPacksToOpen = 3;

    vm.landcards = [];
    vm.selectedLandCards = [];
    vm.cardsToGraph = [];

    var startingTopPanelCardsTitle = "Booster cards";
    vm.topPanelCardsTitle = startingTopPanelCardsTitle;
    var startingCardsStatsTitle = "Selected cards stats";
    vm.cardStatsTitle = startingCardsStatsTitle;


    vm.setGroups = [];
    vm.fixedSetGroups = [];
    function initSetGroups() {
        datacontext.getCardSetGroups().then(function (data) {
            // Default cards to open
            var latestSetGroup = data[0];
            if (latestSetGroup.length > 1) {
                data[0][0].boostersToOpen = 2; // If 2 sets in lastest group then latests booster has 2 boosters to open and older set has 1 booster.
                data[0][1].boostersToOpen = 1;
            } else {
                data[0][0].boostersToOpen = 3; // If only one set in group then use 3 boosters in draft.
            }
            vm.setGroups = data;
            trackEvent(controllerId, 'init');
        });
    }


    vm.chartsHidden = false;
    vm.toggleCharts = function () {
        vm.chartsHidden = !vm.chartsHidden;
    }


    vm.showExtraOptions = false;
    vm.displayExtraOptions = function () {
        if (vm.showExtraOptions) {
            vm.showExtraOptions = false;
            trackEvent(controllerId, 'hide-extra-options');
        } else {
            vm.showExtraOptions = true;
            trackEvent(controllerId, 'show-extra-options');
        }
    }

    vm.addToDeck = function(card)
    {
        _removeFromArrayAndAddToArray(vm.boosterCards, vm.selectedCards, card);
        logSuccess("You've chosen " + card.Name + "!");
        takeTurn();

        trackEvent(controllerId, 'card-picked', card.Name);

        if (vm.boosterCards.length == 0) {
            if (vm.packsOpened < vm.totalPacksToOpen) {
                vm.openNextPack();
            } else {
                vm.draftFinished = true;
                vm.topPanelCardsTitle = "Deck Cards";
                trackEvent(controllerId, 'finished-draft');
                vm.cardsToGraph = vm.selectedCards;
            }
        }

    };

    vm.saveDeckList = function() {
      downloadDataService.saveCardsList(vm.deckCards.concat(vm.selectedLandCards), vm.topPanelCardsTitle);
    }
    vm.saveCompletePool = function() {
      downloadDataService.saveCardsList(vm.selectedCards.concat(vm.deckCards).concat(vm.selectedLandCards).concat(vm.landcards), "Full draft pool");
    }

    vm.updateSelectedGraphCards = function () {
        vm.cardsToGraph = vm.deckCards.concat(vm.selectedLandCards);
    }

    vm.cardPoolClick = function (card) {
        if (vm.draftFinished) {
            _removeFromArrayAndAddToArray(vm.selectedCards, vm.deckCards, card);
            vm.cardStatsTitle = "My Deck Stats";
            trackEvent(controllerId, 'removed-card-from-selection', card.Name);
            vm.updateSelectedGraphCards();
        }
    }
    vm.deckCardClick = function (card) {
        if (vm.draftFinished) {
            _removeFromArrayAndAddToArray(vm.deckCards, vm.selectedCards, card);
            trackEvent(controllerId, 'added-card-to-selection', card.Name);
            vm.updateSelectedGraphCards();
        }
    }

    vm.landCardClick = function (card) {
        if (vm.draftFinished) {
            vm.selectedLandCards.push(card);
            trackEvent(controllerId, 'added-land-card', card.Name);
            vm.updateSelectedGraphCards();
        }
    }
    vm.removeLandCard = function (card) {
        var index = vm.selectedLandCards.indexOf(card);
        if (index > -1) {
            vm.selectedLandCards.splice(index, 1);
            trackEvent(controllerId, 'removed-land-card', card.Name);
            vm.updateSelectedGraphCards();
        }
    }

    vm.removeFromDeck = function(card)
    {
        _removeFromArrayAndAddToArray(vm.selectedCards, vm.boosterCards, card);
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
        return datacontext.openSortedBoosters(vm.boosters_to_open).then(function (data) {
            log("Opened " + vm.boosters_to_open + " booster packs.");
            vm.boosterCards.push.apply(vm.boosterCards, data.mythicCards);
            vm.boosterCards.push.apply(vm.boosterCards, data.rareCards);
            vm.boosterCards.push.apply(vm.boosterCards, data.uncommonCards);
            vm.boosterCards.push.apply(vm.boosterCards, data.commonCards);
            return vm.boosterCards;
        });
    };

    vm.openNextPack = function ()
    {
        log("Opening a new pack...");
        vm.packsOpened++;
        openBoosterForEachPlayer();
        vm.boosterCards = vm.AIs[0].boosterCards;
        log("Packs opened: " + vm.packsOpened + " Total packs to open: " + vm.totalPacksToOpen);
    }

    activate();

    function activate() {
      initSetGroups();
      vm.landcards = landcards.getLandCards();
    };


    vm.numberOfPlayers = 8;
    vm.AIs = [];


    vm.startDraft = function () {

        vm.draftStarted = true;
        vm.draftFinished = false;
        vm.topPanelCardsTitle = startingTopPanelCardsTitle;
        vm.cardStatsTitle = startingCardsStatsTitle;


        //Clear the current boosters and selected cards.
        vm.boosterCards = [];
        vm.selectedCards = [];
        vm.deckCards = [];
        vm.selectedLandCards = [];
        vm.cardsToGraph = vm.selectedCards;

        vm.fixedSetGroups = datacontext.copyCardSetGroup(vm.setGroups);

        var totalPacks = 0;
        for (var i = 0; i < vm.fixedSetGroups.length; i++) {
            var group = vm.fixedSetGroups[i];
            for (var k = 0; k < group.length; k++) {
                totalPacks += group[k].boostersToOpen;
            }
        }
        vm.totalPacksToOpen = totalPacks;

        vm.packsOpened = 1;
        //Open the first booster pack.
        setUpAIs();
        //Set player to vm.
        vm.boosterCards = vm.AIs[0].boosterCards;
        log("You've started a new draft");

        trackEvent(controllerId, 'start-draft');
    };


    function takeTurn()
    {
        for (var i = 1; i < vm.AIs.length; i++)
        {
            vm.AIs[i].processTurn();
        }

        var boosterPacks = [];
        for (var i = 0; i < vm.AIs.length; i++) {
            boosterPacks.push(vm.AIs[i].boosterCards);
        }
        //Give pack 8 to player 0.
        vm.AIs[0].boosterCards = boosterPacks[vm.AIs.length - 1];
        vm.boosterCards = vm.AIs[0].boosterCards;
        for (var i = 1; i < vm.AIs.length; i++)
        {
            vm.AIs[i].boosterCards = boosterPacks[i - 1];
        }
    }

    function setUpAIs() {
        //Player 0 is the human.
        vm.AIs = [];
        for (var i = 0; i < vm.numberOfPlayers; i++) {
            var player = new ai.AI(i);
            vm.AIs.push(player);
        }
        openBoosterForEachPlayer();
    }

    function openBoosterForEachPlayer() {

        var setToOpen = getNextBoosterSetToOpen();
        var totalBoostersForSet = setToOpen.boostersToOpen;
        setToOpen.boostersToOpen = 1;
        for (var i = 0; i < vm.numberOfPlayers; i++) {
            var boosterCards = datacontext.openBoosterForCardSet(setToOpen);
            addAICards(vm.AIs[i], boosterCards);
        }
        setToOpen.boostersToOpen = totalBoostersForSet - 1;

    }

    function getNextBoosterSetToOpen() {
        for (var groupNumber = 0; groupNumber < vm.fixedSetGroups.length; groupNumber++) {
            var group = vm.fixedSetGroups[groupNumber];

            for (var setNumber = 0; setNumber < group.length; setNumber++) {
                var currentSet = group[setNumber];
                if (currentSet.boostersToOpen > 0) {
                    return currentSet;
                }
            }
        }
    }

    function addAICards(ai, cardData) {
        ai.boosterCards.push.apply(ai.boosterCards, cardData.mythicCards);
        ai.boosterCards.push.apply(ai.boosterCards, cardData.rareCards);
        ai.boosterCards.push.apply(ai.boosterCards, cardData.uncommonCards);
        ai.boosterCards.push.apply(ai.boosterCards, cardData.commonCards);
        return ai.boosterCards;
    }

  }]);

})();
