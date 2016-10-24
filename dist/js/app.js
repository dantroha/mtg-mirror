/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||typeof navigator!="undefined"&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(n){"use strict";if(typeof navigator=="undefined"||!/MSIE [1-9]\./.test(navigator.userAgent)){var s=n.document,h=function(){return n.URL||n.webkitURL||n},r=s.createElementNS("http://www.w3.org/1999/xhtml","a"),y=!n.externalHost&&"download"in r,p=function(t){var i=s.createEvent("MouseEvents");i.initMouseEvent("click",!0,!1,n,0,0,0,0,0,!1,!1,!1,!1,0,null);t.dispatchEvent(i)},u=n.webkitRequestFileSystem,c=n.requestFileSystem||u||n.mozRequestFileSystem,w=function(t){(n.setImmediate||n.setTimeout)(function(){throw t;},0)},f="application/octet-stream",l=0,i=[],e=function(){for(var t=i.length,n;t--;)n=i[t],typeof n=="string"?h().revokeObjectURL(n):n.remove();i.length=0},o=function(n,t,i){var r,u;for(t=[].concat(t),r=t.length;r--;)if(u=n["on"+t[r]],typeof u=="function")try{u.call(n,i||n)}catch(f){w(f)}},a=function(t,e){var s=this,k=t.type,d=!1,v,b,g=function(){var n=h().createObjectURL(t);return i.push(n),n},nt=function(){o(s,"writestart progress write writeend".split(" "))},a=function(){(d||!v)&&(v=g(t));b?b.location.href=v:window.open(v,"_blank");s.readyState=s.DONE;nt()},w=function(n){return function(){if(s.readyState!==s.DONE)return n.apply(this,arguments)}},tt={create:!0,exclusive:!1},it;if(s.readyState=s.INIT,e||(e="download"),y){v=g(t);r.href=v;r.download=e;p(r);s.readyState=s.DONE;nt();return}if(n.chrome&&k&&k!==f&&(it=t.slice||t.webkitSlice,t=it.call(t,0,t.size,f),d=!0),u&&e!=="download"&&(e+=".download"),(k===f||u)&&(b=n),!c){a();return}l+=t.size;c(n.TEMPORARY,l,w(function(n){n.root.getDirectory("saved",tt,w(function(n){var r=function(){n.getFile(e,tt,w(function(n){n.createWriter(w(function(r){r.onwriteend=function(t){b.location.href=n.toURL();i.push(n);s.readyState=s.DONE;o(s,"writeend",t)};r.onerror=function(){var n=r.error;n.code!==n.ABORT_ERR&&a()};"writestart progress write abort".split(" ").forEach(function(n){r["on"+n]=s["on"+n]});r.write(t);s.abort=function(){r.abort();s.readyState=s.DONE};s.readyState=s.WRITING}),a)}),a)};n.getFile(e,{create:!1},w(function(n){n.remove();r()}),w(function(n){n.code===n.NOT_FOUND_ERR?r():a()}))}),a)}),a)},t=a.prototype,v=function(n,t){return new a(n,t)};return t.abort=function(){var n=this;n.readyState=n.DONE;o(n,"abort")},t.readyState=t.INIT=0,t.WRITING=1,t.DONE=2,t.error=t.onwritestart=t.onprogress=t.onwrite=t.onabort=t.onerror=t.onwriteend=null,n.addEventListener("unload",e,!1),v.unload=function(){e();n.removeEventListener("unload",e,!1)},v}}(typeof self!="undefined"&&self||typeof window!="undefined"&&window||this.content);typeof module!="undefined"&&module!==null?module.exports=saveAs:typeof define!="undefined"&&define!==null&&define.amd!=null&&define([],function(){return saveAs});
/*
//# sourceMappingURL=FileSaver.min.js.map
*/
(function () {
  'use strict';

  var app = angular.module('mtgApp', ['ngMaterial', 'ngRoute', 'ngAnimate']);

  app.config(function($mdThemingProvider, $mdIconProvider) {

       $mdIconProvider
           .defaultIconSet("./assets/svg/avatars.svg", 128)
           .icon("menu"       , "./assets/svg/menu.svg"        , 24)
           .icon("share"      , "./assets/svg/share.svg"       , 24)
           .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
           .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
           .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
           .icon("phone"      , "./assets/svg/phone.svg"       , 512);

           $mdThemingProvider.theme('default')
               .primaryPalette('deep-orange')
               .accentPalette('indigo');

   });

  // Handle routing errors and success events
  app.run(['$route',  function ($route) {
      // Include $route to kick start the router.
  }]);

})();

(function () {
    'use strict';

    var app = angular.module('mtgApp');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', function($routeProvider, routes) {

      routes.forEach(function (r) {
          $routeProvider.when(r.url, r.config);
      });
      $routeProvider.otherwise({ redirectTo: '/' });

    }]);

    // Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/startScreen/startScreen.html',
                    title: 'home',
                    settings: {
                        content: 'Home'
                    }
                }
            }, {
                url: '/draftsim',
                config: {
                    title: 'draftsim',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Draft Simulator'
                    }
                }
            }, {
                url: '/sealedsim',
                config: {
                    title: 'sealedsim',
                    templateUrl: 'app/sealedsim/sealedsim.html',
                    settings: {
                        content: 'Sealed Simulator'
                    }
                }
            }, {
                url: '/browsecards',
                config: {
                    title: 'browsecards',
                    templateUrl: 'app/browsecards/browsecards.html',
                    settings: {
                        content: 'Browse Cards'
                    }
                }
            }, {
                url: '/boostersim',
                config: {
                    title: 'boostersim',
                    templateUrl: 'app/boostersim/boostersim.html',
                    settings: {
                        content: 'Booster Simulator'
                    }
                }
            }, {
                url: '/news',
                config: {
                    title: 'news',
                    templateUrl: 'app/news/news.html',
                    settings: {
                        content: 'News'
                    }
                }
            }, {
                url: '/about',
                config: {
                    title: 'about',
                    templateUrl: 'app/about/about.html',
                    settings: {
                        content: 'About'
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular.module('mtgApp').controller('appcache', ['$scope', function($scope) {
      $scope.appUpdated = false;
      $scope.appIsUpdating = false;
      window.applicationCache.addEventListener("downloading", function(e) {
        $scope.appIsUpdating = true;
      });

      function appFinishedUpdating() {
        $scope.appIsUpdating = false;
        $scope.appUpdated = true;
        $scope.$apply();
      }

      window.applicationCache.addEventListener("cached", function(event) {
        appFinishedUpdating();
      });
      window.applicationCache.addEventListener("updateready", function(event) {
        appFinishedUpdating();
      });

      $scope.refreshApp = function() {
        location.reload();
      }

      $scope.closeAppUpdatedWarning = function() {
        $scope.appUpdated = false;
      }

      $scope.closeAppLoadingWarning = function() {
        $scope.appIsUpdating = false;
      }

    }]);
})();

(function () {
    'use strict';

    angular.module('mtgApp').controller('sidebar',
        ['$scope', '$route', 'routes', '$mdSidenav', function($scope, $route, routes, $mdSidenav) {

            $scope.isCurrent = isCurrent;
            $scope.navRoutes = routes;
            $scope.topNavRoutes = $scope.navRoutes.slice(1, $scope.navRoutes.length);
            $scope.routeLoading = false;
            $scope.toggleMenu = function() {
              $mdSidenav('nav').toggle();
            };

            $scope.$on('$routeChangeStart', function(next, current) {
               $scope.routeLoading = true;
            });

            $scope.$on('$routeChangeSuccess', function(next, current) {
              $mdSidenav('nav').close();
              $scope.routeLoading = false;
            });

            $scope.$on('showLoader', function(event, args) {
               $scope.routeLoading = args.show;
            });



            function isCurrent(route) {
                if (!route.config.title || !$route.current || !$route.current.title) {
                    return '';
                }
                var menuName = route.config.title;
                return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
            }
        }]);
})();

(function() {
  'use strict';

  angular.module('mtgApp').controller('startScreen', ['$scope', '$location', function($scope, $location) {

    $scope.navigateToLocation = function(newLocation) {
      $location.path('/' +newLocation);
    }

  }]);

})();

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

(function () {
    'use strict';
    var controllerId = 'about';
    angular.module('mtgApp').controller(controllerId, function() {

      function activate() {
          // trackEvent(controllerId, 'init');
      }
      activate();
    });
})();

(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('mtgApp').factory(serviceId,
        ['$q', 'landcards', datacontext]);

    function datacontext($q, $filter, landcards) {
        var service = {
            getCardSetByRarity: getCardSetByRarity,
            getCardSetGroups: getCardSetGroups,
            getCardSetsAsFlatArray: getCardSetsAsFlatArray,
            openBoostersForCardSetGroups: openBoostersForCardSetGroups,
            openBoosterForCardSet: openBoosterForCardSet,
            copyCardSetGroup: copyCardSetGroup,
            addPromoForLatestSet: addPromoForLatestSet,
            copyCard: copyCard
        };

        function CardSet(fullName, shortName, chanceOfFoil, foilReplacesCommon, additionalCardsFunc) {
            this.fullName = fullName;
            this.shortName = shortName;
            this.boostersToOpen = 0;
            this.chanceOfFoil = chanceOfFoil == null ? 1 / 6 : chanceOfFoil;
            this.foilReplacesCommon = foilReplacesCommon == null ? true : foilReplacesCommon;

            this.addAdditionalCardsToPacks = function (allCardsInSet, cardsInPack) { return cardsInPack };
            if (additionalCardsFunc != null) {
                this.addAdditionalCardsToPacks = additionalCardsFunc;
            }

            var self = this;
            this.copy = function() {
                var cpy = JSON.parse(JSON.stringify(self));
                cpy.addAdditionalCardsToPacks = self.addAdditionalCardsToPacks;
                return cpy;
            }
        }

        function addPromoForLatestSet(currentCards) {

            var latestSet = getLatestSet();
            var allCards = getSortedCardsForSetByShortName(latestSet.shortName);

            var cardsToTakeFrom;
            if (Math.random() > 7 / 8) {
                cardsToTakeFrom = allCards.mythicCards;
            } else {
                cardsToTakeFrom = allCards.rareCards;
            }
            var promoCard = new copyCard(cardsToTakeFrom[Math.floor(Math.random()*cardsToTakeFrom.length)]);
            promoCard.isFoil = true;
            currentCards.splice(0, 0, promoCard);
        }

        function selectRandomValueFromArray(arrayToSelectFrom) {
          var random = Math.random();
          return arrayToSelectFrom[Math.floor(random * arrayToSelectFrom.length)];
        }

        function getCardsInPackWithProperty(cardsInPack, propertyToExamine, valueToFind) {
            var cardsWithValue = [];
            cardsInPack.forEach(function(card) {
              if (card[propertyToExamine] == valueToFind) {
                cardsWithValue.push(card);
              }
            });
            return cardsWithValue;
        }


        function addCardToCorrectPartOfCards(card, allCards) {
          switch(card.Rarity) {
            case 'M':
              allCards.mythicCards.push(card);
              break;
            case 'R':
              allCards.rareCards.push(card);
              break;
            case 'U':
              allCards.uncommonCards.push(card);
              break;
            case 'C':
              allCards.commonCards.push(card);
              break;
          }
          return allCards;
        }


        function generateCardSetGroup() {
            return [
                [
                    new CardSet('Kaladesh', 'KLD', null, null, function(allCardsInSet, cardsInPack) {

                        var chanceOfMasterpiece = 1 / 144; // Chance is 1 out of 144 boosters

                        if (Math.random() < chanceOfMasterpiece) {
                            var masterpieceSet = window['KLDMaster'];
                            var masterPieceCard = selectRandomValueFromArray(masterpieceSet);
                            cardsInPack.mythicCards.unshift(masterPieceCard);
                        }

                        return cardsInPack;

                    })
                ],
                [

                    new CardSet('Eldritch Moon', 'EMN', null, null, function(allCardsInSet, cardsInPack) {

                        var rareAndMythicFlipCards = [175, 177, 185, 199, 200, 203, 204];
                        var commonAndUncommonFlipCards = [172, 173, 174, 176, 178, 179, 180, 181, 182, 183, 184, 186, 201, 202];

                        var chanceOfRareOrMythicFlip = 1 / 8;
                        var random = Math.random();
                        if (random < chanceOfRareOrMythicFlip) {
                            cardsInPack.commonCards.shift(); //Replaces a common
                            var randCard = EMN[selectRandomValueFromArray(rareAndMythicFlipCards)];
                            addCardToCorrectPartOfCards(randCard, cardsInPack);
                        } else {
                            var commonOrUncommonFlipCard = EMN[selectRandomValueFromArray(commonAndUncommonFlipCards)];
                            // if (commonOrUncommonFlipCard.Rarity == 'U') {
                            //     cardsInPack.uncommonCards.shift();
                            // } else {
                                cardsInPack.commonCards.shift();
                            // }
                            addCardToCorrectPartOfCards(commonOrUncommonFlipCard, cardsInPack);
                        }

                        return cardsInPack;
                    }),

                    new CardSet('Shadows over Innistrad', 'SOI', null, null, function(allCardsInSet, cardsInPack) {

                        var rareAndMythicFlipCards = [4, 20, 87, 91, 107, 158, 224, 242, 280];
                        var commonAndUncommonFlipCards = [5, 33, 45, 48, 53, 93, 96, 115, 118, 146, 148, 157, 168, 181, 189, 193, 202, 208, 209, 214, 228, 255, 259, 265];

                        var chanceOfRareOrMythicFlip = 1 / 8;
                        var random = Math.random();
                        if (random < chanceOfRareOrMythicFlip) {
                            cardsInPack.commonCards.shift(); //Replaces a common
                            var randCard = SOI[selectRandomValueFromArray(rareAndMythicFlipCards)];
                            addCardToCorrectPartOfCards(randCard, cardsInPack);
                        }

                        var commonOrUncommonFlipCard = SOI[selectRandomValueFromArray(commonAndUncommonFlipCards)];
                        if (commonOrUncommonFlipCard.Rarity == 'U') {
                            cardsInPack.uncommonCards.shift();
                        } else {
                            cardsInPack.commonCards.shift();
                        }
                        addCardToCorrectPartOfCards(commonOrUncommonFlipCard, cardsInPack);

                        return cardsInPack;
                    })
                ],
                [
                    new CardSet('Eternal Masters', 'EMA')
                ],
                [
                  new CardSet('Oath of the Gatewatch', 'OGW', null, null, function (allCardsInSet, cardsInPack) {
                      var chanceOfExpedition = (1 / 6) * (15 / 249);
                      var random = Math.random();
                      if (random < chanceOfExpedition) {
                          var randCard = ExpeditionsOGW[Math.floor(Math.random() * ExpeditionsBFZ.length)];
                          cardsInPack.mythicCards.push(randCard);
                      }
                      return cardsInPack;
                  }),

                  new CardSet('Battle for Zendikar', 'BFZ', null, null, function (allCardsInSet, cardsInPack) {
                      var chanceOfExpedition = (1 / 6) * (15 / 249);
                      var random = Math.random();
                      if (random < chanceOfExpedition) {
                          var randCard = ExpeditionsBFZ[Math.floor(Math.random() * ExpeditionsBFZ.length)];
                          cardsInPack.mythicCards.push(randCard);
                      }
                      return cardsInPack;
                })],
                [new CardSet('Magic Origins', 'ORI')],
                [new CardSet('Modern Masters 2015', 'MM2', 1)],
                [new CardSet('Dragons of Tarkir', 'DTK'), new CardSet('Fate Reforged', 'FRF'), new CardSet('Khans of Tarkir', 'KTK')],
                [new CardSet('Magic 2015', 'M15')],
                [new CardSet('Journey into Nyx', 'JOU'), new CardSet('Born of the Gods', 'BNG'), new CardSet('Theros', 'THS')]
            ];
        }
        var cardSetGroups = generateCardSetGroup();


        function getLatestSet() {
            return cardSetGroups[0][0];
        }

        function getCardSetGroups() {
            return $q.when(generateCardSetGroup());
        }


        function copyCardSetGroup(setToCopy) {

            var copy = [];
            for (var groupNumber = 0; groupNumber < setToCopy.length; groupNumber++) {

                var group = setToCopy[groupNumber];
                var copyGroup = [];
                for (var setNumber = 0; setNumber < group.length; setNumber++) {
                    var setCopy = group[setNumber].copy();
                    copyGroup.push(setCopy);
                }
                copy.push(copyGroup);

            }
            return copy;

        }

        var flatCardsArray = [];
        function getCardSetsAsFlatArray() {
            if (!flatCardsArray.length) {

                for (var i = 0; i < cardSetGroups.length; i++) {
                    var currentGroup = cardSetGroups[i];
                    for (var k = 0; k < currentGroup.length; k++) {
                        flatCardsArray.push({cardSet: currentGroup[k], setGroupNum: i, setNum: k});
                    }
                }

            }

            return $q.when(flatCardsArray);
        }

        function getCardSetByRarity(groupNumber, setNumber) {
            return $q.when(getAllCardsFromSetSortedByRarity(groupNumber, setNumber));
        }
        function getAllCardsFromSetSortedByRarity(groupNumber, setNumber) {
            return getSortedCardsForSetByShortName(cardSetGroups[groupNumber][setNumber].shortName);
        }
        function getSortedCardsForSetByShortName(shortName) {
            return sortCardSet(getCardsForShortName(shortName));
        }
        function getCardsForShortName(shortName) {
            return window[shortName];
        }


        function openBoostersForCardSetGroups(cardSetGroupsForBoosters) {

            var allCardsOpened = new Cards();
            for (var groupNum = 0; groupNum < cardSetGroupsForBoosters.length; groupNum++) {
                var currentGroup = cardSetGroupsForBoosters[groupNum];

                for (var setNum = 0; setNum < currentGroup.length; setNum++) {

                    var currentSet = currentGroup[setNum];
                    if (currentSet.boostersToOpen > 0) {
                        combineCardArrays(allCardsOpened, openBoosterForCardSet(currentSet));
                    }

                }

            }

            return allCardsOpened;
        }

        function openBoosterForCardSet(cardSet) {
            var cards = getSortedCardsForSetByShortName(cardSet.shortName);
            var selectedCards = openXCardBoosters(cardSet.boostersToOpen, cards);

            selectedCards = addFoilCards(getCardsForShortName(cardSet.shortName), selectedCards, cardSet.boostersToOpen, cardSet.foilReplacesCommon, cardSet.chanceOfFoil);

            for(var i = 0; i < cardSet.boostersToOpen; i++) {
                selectedCards = cardSet.addAdditionalCardsToPacks(cards, selectedCards);
            }

            sortCards(selectedCards);

            return selectedCards;
        }

        return service;

        function copyCard(card) {
            this.Name = card.Name,
            this.Cost = card.Cost,
            this.Color = card.Color,
            this.Rarity= card.Rarity,
            this.Type= card.Type,
            this.Rating= card.Rating,
            this.Sort= card.Sort,
            this.Set= card.Set,
            this.Number= card.Number,
            this.Image= card.Image
            this.isFoil = card.isFoil;
            this.ReverseImage = card.ReverseImage;
        }

        function combineCardArrays(array1, array2) {
            array1.mythicCards.push.apply(array1.mythicCards, array2.mythicCards);
            array1.rareCards.push.apply(array1.rareCards, array2.rareCards);
            array1.uncommonCards.push.apply(array1.uncommonCards, array2.uncommonCards);
            array1.commonCards.push.apply(array1.commonCards, array2.commonCards);
        }


        function addFoilCards(setVar, selectedCards, numBoosters, swapOutCommon, chance) {
            for (var i = 0; i < numBoosters; i++) {
                if (Math.random() < chance) {
                    if (swapOutCommon) {
                        selectedCards.commonCards.pop();
                    }

                    var item = new copyCard(setVar[Math.floor(Math.random() * setVar.length)]);
                    item.isFoil = true;
                    if (item.Rarity == 'C') {
                        selectedCards.commonCards.push(item);
                    }
                    else if (item.Rarity == 'U') {
                        selectedCards.uncommonCards.push(item);
                    }
                    else if (item.Rarity == 'R') {
                        selectedCards.rareCards.push(item);
                    }
                    else if (item.Rarity == 'M') {
                        selectedCards.mythicCards.push(item);
                    }

                }
            }
            return selectedCards;
        }




        function openXCardBoosters(numBoosters, cards) {
            var selectedCards = new Cards();
            for (var i = 0; i < numBoosters; i++) {
                var boosterCards = openBooster(cards, selectedCards);
                selectedCards.mythicCards.push.apply(selectedCards.mythicCards, boosterCards.mythicCards);
                selectedCards.rareCards.push.apply(selectedCards.rareCards, boosterCards.rareCards);
                selectedCards.uncommonCards.push.apply(selectedCards.uncommonCards, boosterCards.uncommonCards);
                selectedCards.commonCards.push.apply(selectedCards.commonCards, boosterCards.commonCards);
            }
            return selectedCards;
        }

        function isCardInNormalBoosters(card) {
          if (card.ReverseImage != null) {
            return false;
          }
          return true;
        }

        function isCardInArray(cardArray, cardToAdd) {
          var containsCard = false;
          cardArray.map(function(value, index) {
            if (value.Number == cardToAdd.Number) {
              containsCard = true;
              return;
            }
          });
          return containsCard;
        }

        function openBooster(allCards, cardsArray)
        {
            var mythicChance = 1 / 8;
            var cards = new Cards();
            var containsAMythic = true;
            if (Math.random() > mythicChance) {
                containsAMythic = false;
            }
            var numberOfCommons = 10;
            var numberOfUncommons = 3;

            var totalCommonCards = allCards.commonCards.length;
            for (var i = 0; i < numberOfCommons; i++)
            {
              var cardNumberToGet = Math.round(Math.random() * (totalCommonCards - 1));
              var cardToAdd = allCards.commonCards[cardNumberToGet];
              if (cardToAdd != null) {
                if (!isCardInNormalBoosters(cardToAdd) || (isCardInArray(cards.commonCards, cardToAdd) && totalCommonCards > numberOfCommons)) {
                    i--;
                } else {
                    cards.commonCards.push(cardToAdd);
                }
              }
            }
            for (var i = 0; i < numberOfUncommons; i++)
            {
                var cardNumberToGet = Math.round(Math.random() * (allCards.uncommonCards.length - 1));
                var cardToAdd = allCards.uncommonCards[cardNumberToGet];
                if (cardToAdd != null) {
                    if (!isCardInNormalBoosters(cardToAdd) || isCardInArray(cards.uncommonCards, cardToAdd)) {
                        numberOfUncommons++;
                    } else {
                        cards.uncommonCards.push(cardToAdd);
                    }
                }
            }

            if (!containsAMythic) {
                function addRareCard() {
                  var cardNumberToGet = Math.round(Math.random() * (allCards.rareCards.length - 1));
                  var cardToAdd = allCards.rareCards[cardNumberToGet];
                  if (!isCardInNormalBoosters(cardToAdd)) {
                    addRareCard();
                  } else {
                    cards.rareCards.push(cardToAdd);
                  }
                }
                addRareCard();
            } else {
                function addMythicCard() {
                  var cardNumberToGet = Math.round(Math.random() * (allCards.mythicCards.length - 1));
                  var cardToAdd = allCards.mythicCards[cardNumberToGet];
                  if (!isCardInNormalBoosters(cardToAdd)) {
                    addMythicCard();
                  } else {
                    cards.mythicCards.push(cardToAdd);
                  }
                }
                addMythicCard();
            }

            return cards;
        }


        function Cards()
        {
            this.mythicCards = [];
            this.rareCards = [];
            this.uncommonCards = [];
            this.commonCards = [];
        }

        function Card(name, rarity, imgSrc) {
            this.name = name;
            this.rarity = rarity;
            this.src = imgSrc;
        }


        function cardSort(a, b) {
            if (a.Number < b.Number)
                return -1;
            if (a.Number > b.Number)
                return 1;
            return 0;
        }

        function sortCards(array) {
            array.mythicCards.sort(cardSort);
            array.rareCards.sort(cardSort);
            array.uncommonCards.sort(cardSort);
            array.commonCards.sort(cardSort);
        }

        function sortCardSet(cardSetVar) {
            var cards = new Cards();
            cardSetVar.forEach(function (card) {
                if (card.Rarity == 'C') {
                    cards.commonCards.push(card);
                }
                else if (card.Rarity == 'U') {
                    cards.uncommonCards.push(card);
                }
                else if (card.Rarity == 'R') {
                    cards.rareCards.push(card);
                }
                else if (card.Rarity == 'M') {
                    cards.mythicCards.push(card);
                }
            });
            return cards;
        }
    }
})();

(function () {
    'use strict';

    angular.module('mtgApp').service('deckFunctions', function () {

        this.shuffleDeck = function(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        this.drawXCards = function(deckCards, numberOfCards) {
            return deckCards.slice(0, numberOfCards);
        }

        this.getRemainingCards = function(deckCards, numberToStartFrom) {
            return deckCards.slice(numberToStartFrom, deckCards.length);
        }
    });
})();

(function () {
    'use strict';

    var serviceId = 'downloadDataService';
    angular.module('mtgApp').factory(serviceId,
        [downloadDataService]);

    function downloadDataService() {

        var service = {
            saveCardsList: saveCardsList
        };

        function saveCardsList(listOfCardsToSave, fileName) {
            var convertedCardList = [];
            listOfCardsToSave.map(function(value, index) {
              var cardName = value.Name;
              var indexOfCardInMapArray = indexOfCardInMap(convertedCardList, cardName);
              if (indexOfCardInMapArray == -1) {
                  var map = {};
                  map.Name = cardName;
                  map.Number = 1;
                  convertedCardList.push(map);
              } else {
                  convertedCardList[indexOfCardInMapArray].Number = convertedCardList[indexOfCardInMapArray].Number + 1;
              }
            });
            var convertedCardsText = convertMapToCardText(convertedCardList);
            saveData(convertedCardsText, fileName);
        }

        function convertMapToCardText(convertedCardList) {
            var text = "";
            convertedCardList.map(function(value, index) {
                text += value.Number + " " + value.Name + "\r\n";
            });
            return text;
        }

        function indexOfCardInMap(arrayOfMap, cardName) {
            for (var i = 0; i < arrayOfMap.length; i++) {
                if (arrayOfMap[i]["Name"] == cardName) {
                    return i;
                }
            }
            return -1;
        }

        function convertToTextFormat(card) {
            return "1 " + card.Name + "\r\n";
        }

        function saveData(data, fileName) {
            var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
            saveAs(blob, fileName + ".txt");
        }

        return service;
    }
})();

(function () {
    'use strict';

    var serviceId = 'graphAnalysis';
    angular.module('mtgApp').factory(serviceId,
        [graphAnalysis]);

    function graphAnalysis() {
        Chart.defaults.global.animation = false;

        var service = {
            setPieChartGraphElement: setPieChartGraphElement,
            setBarChartGraphElement: setBarChartGraphElement,
            setTypeChartHolder: setTypeChartHolder,
            displayChartsForCards: displayChartsForCards,
            resetAllCanvas: resetAllCanvas
        };

        var whiteCol = '#CCC';
        var blueColor ='#058dc7';
        var blackColor = '#11140c';
        var redColor = '#CC0000';
        var greenColor = '#50b432';
        var whiteCol_highlight = '#FFF';
        var blueColor_highlight = '#33CCFF';
        var blackColor_highlight = '#000000';
        var redColor_highlight = '#db4437';
        var greenColor_highlight = '#99FF99';

        var cardType_creature_color = greenColor;
        var cardType_creature_color_highlight = greenColor_highlight;
        var cardType_sorcery_color = redColor;
        var cardType_sorcery_color_highlight = redColor_highlight;
        var cardType_instant_color = blueColor;
        var cardType_instant_color_highlight = blueColor_highlight;
        var cardType_enchantment_color = whiteCol;
        var cardType_enchantment_color_highlight = whiteCol_highlight;
        var cardType_land_color = '#006600';
        var cardType_land_color_highlight = '#00CC66';
        var cardType_planeswalker_color = '#FF0066';
        var cardType_planeswalker_color_highlight = '#FF3399';
        var cardType_artifact_color = blackColor;
        var cardType_artifact_color_highlight = blackColor_highlight;

        var barChartColor = 'rgb(51,51,51)';
        var highlightColor = 'rgb(51,51,51)';
        var costBarChart_fillColor = barChartColor;
        var costBarChart_strokeColor = barChartColor;
        var costBarChart_highlightFill = highlightColor;
        var costBarChart_highlightStroke = highlightColor;

        function getChartElement(getterFunc) {
          var holder = getterFunc();
          if (holder != null) {
            return holder.firstChild.getContext("2d");
          }
          return null;
        }

        var pieChartContainer;
        var pieChartWidth;
        var pieChartHeight;
        function setPieChartGraphElement(elementID, width, height) {
            pieChartContainer = elementID;
            pieChartWidth = width;
            pieChartHeight = height;
        }
        function getPieChartHolder() {
            return document.getElementById(pieChartContainer);
        }
        function getPieChartElement() {
          return getChartElement(getPieChartHolder);
        }

        var barChartContainer;
        var barChartWidth;
        var barChartHeight;
        function setBarChartGraphElement(elementID, width, height) {
            barChartContainer = elementID;
            barChartWidth = width;
            barChartHeight = height;
        }
        function getBarChartHolder() {
            return document.getElementById(barChartContainer);
        }
        function getBarChartElement() {
          return getChartElement(getBarChartHolder);
        }

        var typeChartContainer;
        var typeChartWidth;
        var typeChartHeight;
        function setTypeChartHolder(elementID, width, height) {
            typeChartContainer = elementID;
            typeChartWidth = width;
            typeChartHeight = height;
        }
        function getTypeChartHolder() {
            return document.getElementById(typeChartContainer);
        }
        function getTypeChartElement() {
          return getChartElement(getTypeChartHolder);
        }

        function resetAllCanvas() {
            var pieChartHolder = getPieChartHolder();
            resetCanvas(pieChartHolder, pieChartWidth, pieChartHeight);
            var barChartHolder = getBarChartHolder();
            resetCanvas(barChartHolder, barChartWidth, barChartHeight);
            var typeChartHolder = getTypeChartHolder();
            resetCanvas(typeChartHolder, typeChartWidth, typeChartHeight);
        }

        function resetCanvas(canvasHolder, canvasWidth, canvasHeight) {
            if (canvasHolder != null) {
                while (canvasHolder.firstChild) {
                    canvasHolder.removeChild(canvasHolder.firstChild);
                }
                var canvas = document.createElement("canvas");
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                canvasHolder.appendChild(canvas);
            }
        }

        function displayChartsForCards(cardData) {
            resetAllCanvas();
            var colorData = collectGraphData(cardData);
            setUpColorPieChart(colorData.colorInfo);
            setUpManaCurveBarChart(colorData.totalCosts);
            setUpTypeBarChart(colorData.cardTypes);
        }

        function setUpTypeBarChart(typeData) {
          var el = getTypeChartElement();
          if (el != null) {
            var data = [
                {
                    value: typeData[cardType_creature],
                    color: cardType_creature_color,
                    highlight: cardType_creature_color_highlight,
                    label: "Creature"
                },
                {
                    value: typeData[cardType_sorcery],
                    color: cardType_sorcery_color,
                    highlight: cardType_sorcery_color_highlight,
                    label: "Sorcery"
                },
                {
                    value: typeData[cardType_instant],
                    color: cardType_instant_color,
                    highlight: cardType_instant_color_highlight,
                    label: "Instant"
                },
                {
                    value: typeData[cardType_enchantment],
                    color: cardType_enchantment_color,
                    highlight: cardType_enchantment_color_highlight,
                    label: "Enchantment"
                },
                {
                    value: typeData[cardType_land],
                    color: cardType_land_color,
                    highlight: cardType_land_color_highlight,
                    label: "Land"
                },
                {
                    value: typeData[cardType_planeswalker],
                    color: cardType_planeswalker_color,
                    highlight: cardType_planeswalker_color_highlight,
                    label: "Planeswalker"
                },
                {
                    value: typeData[cardType_artifact],
                    color: cardType_artifact_color,
                    highlight: cardType_artifact_color_highlight,
                    label: "Artifact"
                }
            ];
            var myPieChart = new Chart(el).Pie(data, {});
          }
        }

        function setUpManaCurveBarChart(manaData) {
          var el = getBarChartElement();
          if (el != null) {
            var data = {
                labels: ["0", "1", "2", "3", "4", "5", "6", "7+"],
                datasets: [
                    {
                        label: "Mana Curve",
                        fillColor: costBarChart_fillColor,
                        strokeColor: costBarChart_strokeColor,
                        highlightFill: costBarChart_highlightFill,
                        highlightStroke: costBarChart_highlightStroke,
                        data: [manaData[0], manaData[1], manaData[2], manaData[3], manaData[4], manaData[5], manaData[6], manaData[7]]
                    }
                ]
            };
            var myBarChart = new Chart(el).Bar(data, {});
          }
        }

        function setUpColorPieChart(colorData) {
          var el = getPieChartElement();
          if (el != null) {
            var data = [
                {
                    value: colorData[0],
                    color: whiteCol,
                    highlight: whiteCol_highlight,
                    label: "White"
                },
                {
                    value: colorData[1],
                    color: blueColor,
                    highlight: blueColor_highlight,
                    label: "Blue"
                },
                {
                    value: colorData[2],
                    color: blackColor,
                    highlight: blackColor_highlight,
                    label: "Black"
                },
                {
                    value: colorData[3],
                    color: redColor,
                    highlight: redColor_highlight,
                    label: "Red"
                },
                {
                    value: colorData[4],
                    color: greenColor,
                    highlight: greenColor_highlight,
                    label: "Green"
                }
            ];
            var myPieChart = new Chart(el).Pie(data, {});
          }
        }


        var cardType_creature = 0;
        var cardType_sorcery = 1;
        var cardType_instant = 2;
        var cardType_enchantment = 3;
        var cardType_land = 4;
        var cardType_planeswalker = 5;
        var cardType_artifact = 6;

        function collectGraphData(cardData) {
            var colorInfo = [];

            for (var i = 0; i < 5; i++) {
                colorInfo[i] = 0;
            }

            var cardCosts = [];
            var maxCardCostShown = 7;
            for (var i = 0 ; i < maxCardCostShown + 1; i++) {
                cardCosts[i] = 0;
            }

            var cardTypes = [];
            for (var i = 0; i < 7; i++) {
                cardTypes[i] = 0;
            }

            for (var i = 0; i < cardData.length; i++) {

                var thisCardCost = cardData[i].Cost;
                var colorlessCost = parseInt(thisCardCost.charAt(0), 10);
                for (var j = 1; j < thisCardCost.length; j++) {
                    switch (thisCardCost.charAt(j)) {
                        case "W":
                            colorInfo[0] = colorInfo[0] + 1;
                            break;
                        case "U":
                            colorInfo[1] = colorInfo[1] + 1;
                            break;
                        case "B":
                            colorInfo[2] = colorInfo[2] + 1;
                            break;
                        case "R":
                            colorInfo[3] = colorInfo[3] + 1;
                            break;
                        case "G":
                            colorInfo[4] = colorInfo[4] + 1;
                            break;
                        case "C":
                            colorInfo[5] = colorInfo[5] + 1;
                    }
                }

                var totalCost = colorlessCost + thisCardCost.length - 1;
                if (totalCost < maxCardCostShown) {
                    cardCosts[totalCost] = cardCosts[totalCost] + 1;
                } else {
                    cardCosts[maxCardCostShown] = cardCosts[maxCardCostShown] + 1;
                }

                var currentCardType = cardData[i].Type;
                for (var k = 0; k < currentCardType.length; k++) {
                    switch (currentCardType[k]) {
                        case "C":
                            cardTypes[cardType_creature] = cardTypes[cardType_creature] + 1;
                            break;
                        case "S":
                            cardTypes[cardType_sorcery] = cardTypes[cardType_sorcery] + 1;
                            break;
                        case "I":
                            cardTypes[cardType_instant] = cardTypes[cardType_instant] + 1;
                            break;
                        case "E":
                            cardTypes[cardType_enchantment] = cardTypes[cardType_enchantment] + 1;
                            break;
                        case "L":
                            cardTypes[cardType_land] = cardTypes[cardType_land] + 1;
                            break;
                        case "A":
                            cardTypes[cardType_artifact] = cardTypes[cardType_artifact] + 1;
                            break;
                        case "P":
                            cardTypes[cardType_planeswalker] = cardTypes[cardType_planeswalker] + 1;
                            break;
                    }
                }

            }
            var fullInfo = {
                colorInfo: colorInfo,
                totalCosts: cardCosts,
                cardTypes: cardTypes
            };

            return fullInfo;
        }

        return service;


    }

})();

(function () {
    'use strict';

    var serviceId = 'landcards';
    angular.module('mtgApp').service('landcards', function()  {


        this.getLandCards = function() {
            return [
                { Name: "Plains", Cost: "0", Color: ["C"], Rarity: "C", Type: ["L"], Rating: "1", Sort: "1", Set: "None", Number: "1", Image: "/Images/Lands/plains.png" },
                { Name: "Island", Cost: "0", Color: ["C"], Rarity: "C", Type: ["L"], Rating: "1", Sort: "1", Set: "None", Number: "2", Image: "/Images/Lands/island.png" },
                { Name: "Swamp", Cost: "0", Color: ["C"], Rarity: "C", Type: ["L"], Rating: "1", Sort: "1", Set: "None", Number: "3", Image: "/Images/Lands/swamp.png" },
                { Name: "Mountain", Cost: "0", Color: ["C"], Rarity: "C", Type: ["L"], Rating: "1", Sort: "1", Set: "None", Number: "4", Image: "/Images/Lands/mountain.png" },
                { Name: "Forest", Cost: "0", Color: ["C"], Rarity: "C", Type: ["L"], Rating: "1", Sort: "1", Set: "None", Number: "5", Image: "/Images/Lands/forest.png" }
            ];
        }
        
    }
  );
})();

(function () {
    'use strict';

    var serviceId = 'localStorageService';
    angular.module('mtgApp').factory(serviceId,
        [localStorageService]);

    function localStorageService() {

        var service = {
            getBoosterSim_numBoosters_setZero: getBoosterSim_numBoosters_setZero,
            getBoosterSim_numBoosters_setOne: getBoosterSim_numBoosters_setOne,
            getBoosterSim_numBoosters_setTwo: getBoosterSim_numBoosters_setTwo,
            getBoosterSim_numBoosters_setThree: getBoosterSim_numBoosters_setThree,
            setBoosterSim_numBoosters_setZero: setBoosterSim_numBoosters_setZero,
            setBoosterSim_numBoosters_setOne: setBoosterSim_numBoosters_setOne,
            setBoosterSim_numBoosters_setTwo: setBoosterSim_numBoosters_setTwo,
            setBoosterSim_numBoosters_setThree: setBoosterSim_numBoosters_setThree,
        };

        /*Booster Sim parts*/
        function getBoosterSim_numBoosters_setZero() {
            var storageName = "boosterSim_numBoosters_setZero";
            return getStorageItemNumber(storageName);
        }
        function getBoosterSim_numBoosters_setOne() {
            var storageName = "boosterSim_numBoosters_setOne";
            return getStorageItemNumber(storageName);
        }
        function getBoosterSim_numBoosters_setTwo() {
            var storageName = "boosterSim_numBoosters_setTwo";
            return getStorageItemNumber(storageName);
        }
        function getBoosterSim_numBoosters_setThree() {
            var storageName = "boosterSim_numBoosters_setThree";
            return getStorageItemNumber(storageName);
        }
        function setBoosterSim_numBoosters_setZero(data) {
            var storageName = "boosterSim_numBoosters_setZero";
            setStorageItem(storageName, data);
        }
        function setBoosterSim_numBoosters_setOne(data) {
            var storageName = "boosterSim_numBoosters_setOne";
            setStorageItem(storageName, data);
        }
        function setBoosterSim_numBoosters_setTwo(data) {
            var storageName = "boosterSim_numBoosters_setTwo";
            setStorageItem(storageName, data);
        }
        function setBoosterSim_numBoosters_setThree(data) {
            var storageName = "boosterSim_numBoosters_setThree";
            setStorageItem(storageName, data);
        }
        /*Booster Sim parts end*/


        /*Private methods*/
        function getStorageItemNumber(storageName) {
            if (supports_html5_storage()) {
                return Number(localStorage.getItem(storageName));
            }
        }

        function setStorageItem(storageName, data) {
            if (supports_html5_storage()) {
                localStorage.setItem(storageName, data);
            }
        }

        function supports_html5_storage() {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        }
        /*Private methods ends*/

        return service;
    }
})();

(function () {
    'use strict';

    var serviceId = 'ai';
    angular.module('mtgApp').factory(serviceId,
        [ai]);

    function ai() {

        function AI(name) {
            this.name = name;
            this.cards = [];
            this.colors = [];
            this.boosterCards = [];
        }

        AI.prototype.processTurn = function () {

            var cardToAdd;
            var cards = this.boosterCards;
            if (this.colors.length === 0) {
                cardToAdd = this.noColorsProcess(cards);
            } else if (this.colors.length === 1) {
                cardToAdd = this.singleColorProcess(cards);
            } else if (this.colors.length === 2) {
                cardToAdd = this.twoColorProcess(cards);
            } else {
                cardToAdd = this.standardProcess(cards);
            }

            if (cardToAdd != null) {
                var index = this.boosterCards.indexOf(cardToAdd);
                if (index > -1) {
                    this.boosterCards.splice(index, 1);
                }
                this.cards.push(cardToAdd);

                if (this.colors.length <= 3 - cardToAdd.Color.length) {
                    var currentAi = this;
                    cardToAdd.Color.forEach(function (color) {
                        if (color !== "C" && currentAi.colors.indexOf(color) === -1) {
                            currentAi.colors.push(color);
                        }
                    });
                }
            }

        };

        /*Get the card with the highest rating*/
        AI.prototype.noColorsProcess = function (cards) {
            var bestRate = 0;
            var bestNumber = 0;
            for (var i = 0; i < cards.length; i++) {
                var cardRating = parseInt(cards[i].Rating);
                if (cardRating > bestRate) {
                    bestRate = cardRating;
                    bestNumber = i;
                }
            }
            var pickedCard = cards[bestNumber];
            var pickedCardWithExtraConsiderations = additonalConsiderations(pickedCard, cards);
            return pickedCardWithExtraConsiderations;
        }

        /*Gets the card with the highest rating if it has a single color*/
        AI.prototype.singleColorProcess = function (cards) {
            var bestRate = 0;
            var bestNumber = 0;
            //Only one color.
            var color = this.colors[0];
            for (var i = 0; i < cards.length; i++) {
                var cardRating = parseInt(cards[i].Rating);
                if (cardRating > bestRate
                    &&
                    (cards[i].Color.length <= 2 ||
                    getNumberOfMatchingColors(cards[i], this.colors) == 1)) {
                    bestRate = cardRating;
                    bestNumber = i;
                }
            }
            var pickedCard = cards[bestNumber];
            var pickedCardWithExtraConsiderations = additonalConsiderations(pickedCard, cards);
            return pickedCardWithExtraConsiderations;
        }

        AI.prototype.twoColorProcess = function (cards) {
            var bestRate = 0;
            var bestNumber = 0;
            for (var i = 0; i < cards.length; i++) {
                var cardRating = parseInt(cards[i].Rating);
                if (cardRating > bestRate &&
                    (cards[i].Color.length == 1 ||
                    getNumberOfMatchingColors(cards[i], this.colors) == 2)) {
                    bestRate = cardRating;
                    bestNumber = i;
                }
            }
            var pickedCard = cards[bestNumber];
            var pickedCardWithExtraConsiderations = additonalConsiderations(pickedCard, cards);
            return pickedCardWithExtraConsiderations;
        }

        /*Gets the card with the highest rating from the AIs chosen colors.*/
        AI.prototype.standardProcess = function (cards) {
            var bestRate = 0;
            var bestNumber = 0;
            for (var i = 0; i < cards.length; i++) {
                var cardRating = parseInt(cards[i].Rating);
                if (cardRating > bestRate &&
                    (getNumberOfMatchingColors(cards[i], this.colors) >= cards[i].Color.length)) {
                    bestRate = cardRating;
                    bestNumber = i;
                }
            }
            var pickedCard = cards[bestNumber];
            if (pickedCard == null) {
                return pickedCard;
            }
            var pickedCardWithExtraConsiderations = additonalConsiderations(pickedCard, cards);
            return pickedCardWithExtraConsiderations;
        }

        function additonalConsiderations(chosenCard, cardsList) {
            if (isRareOrMythic(chosenCard)) {
                return chosenCard;
            } else {
                //Pick another card if theres a mythic rare other which isnt the card picked.
                for (var i = 0; i < cardsList.length; i++) {
                    var cardRating = parseInt(cardsList[i].Rating);
                    if (cardRating > 4 && (isRareOrMythic(cardsList[i]))) {
                        return cardsList[i];
                    }
                }
                return chosenCard;
            }
        }

        function isRareOrMythic(card) {
            if (card.Rarity === "M" || card.Rarity === "R") {
                return true;
            }
            return false;
        }



        function getNumberOfMatchingColors(card, aisColors) {
            var numberOfMatches = 0;
            card.Color.map(function(index, value) {
                if (aisColors.indexOf(value) != -1) {
                    numberOfMatches++;
                }
            });
            return numberOfMatches;
        }

        return {
            AI: AI
        }

    }
})();

(function() {
    'use strict';

    angular.module('mtgApp').factory('Mappings',
        [function() {


            var cardTypes = {

                'C': 'Creature',
                'I': 'Instant',
                'S': 'Sorcery',
                'E': 'Enchantment',
                'A': 'Artifact',
                'P': 'Planeswalker',
                'L': 'Land'

            };

            var cardColors = {

                'W': 'White',
                'U': 'Blue',
                'B': 'Black',
                'Red': 'Red',
                'G': 'Green',
                'Multicolor': 'Multicolor'

            };


            return {
                cardTypes: cardTypes,
                cardColors: cardColors
            }

        }]);


})();

(function() {
  'use strict';

  angular.module('mtgApp').factory('logger', ['$mdToast',  function($mdToast) {

    var loggerPosition = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };
    
    var toastPosition = angular.extend({},loggerPosition);
    var getToastPosition = function() {
      return Object.keys(loggerPosition)
        .filter(function(pos) { return toastPosition[pos]; })
        .join(' ');
    };

    function generalLog(msg, color) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .position(getToastPosition())
          .hideDelay(3000)
      );
    }

    function logError(msg) {
      generalLog(msg);
    }

    function logSuccess(msg) {
      generalLog(msg);
    }

    function logStandard(msg) {
      generalLog(msg);
    }

    return {
      logError: logError,
      logSuccess: logSuccess,
      logStandard: logStandard
    };

  }]);

})();

(function () {
    'use strict';

    angular.module('mtgApp').directive('cardDisplay', ['downloadDataService', 'Mappings', function (downloadDataService, Mappings) {
        return {
            scope: {
                title: '@',
                cards: '=',
                cardClick: '&',
                landCards: '=',
                landCardClick: '&',
                instructions: '@',
                clearFunction: '&',
                showSave: '@',
                allowTestHands: '@',

                allowSorting: '@',
                allowFilters: '@'
            },
            link: function($scope, elem, attrs) {

                function getCardCost(card) {
                    var colorlessCost = parseInt(card.Cost.charAt(0), 10);
                    return colorlessCost + card.Cost.length - 1;
                }

                $scope.cardDisplayClicked = function(card) {
                    card.isReversed = false;
                    $scope.cardClick({card: card});
                }

                $scope.sortCards = function(methodToGetPropValue) {
                    $scope.cardsToDisplay = {};
                    angular.forEach($scope.cards, function(card) {

                        var cardPropValue = methodToGetPropValue(card);

                        if ($scope.cardsToDisplay[cardPropValue] === undefined) {
                            $scope.cardsToDisplay[cardPropValue] = [];
                        }

                        $scope.cardsToDisplay[cardPropValue].push(card);
                    });
                }

                $scope.sortByCost = function() {
                    $scope.sortCards(function(card) {
                        return getCardCost(card);
                    });
                };
                $scope.sortByColor = function() {
                    $scope.sortCards(function(card) {
                        var cardColor;
                        if (card.Color.length == 1) {
                            cardColor = card.Color[0];
                        } else {
                            cardColor = specialCases.colorMulticolorFilter;
                        }
                        return Mappings.cardColors[cardColor];
                    });
                };
                $scope.sortByType = function() {
                    $scope.sortCards(function(card) {
                        return Mappings.cardTypes[card.Type[0]];
                    });
                }

                $scope.filtersApplied = false;
                $scope.applyAllFilters = function() {
                    $scope.cardsToDisplay = {
                        'Cards': $scope.cards
                    };
                    $scope.filtersApplied = false;


                    for(var prop in $scope.filters) {

                        var filterProp = $scope.filters[prop];

                        var cardsInFilterGroup = [];

                        filterProp.filters.forEach(function(filter) {
                             var cardsMatchingFilter = $scope.cards.filter(function(card) {
                                return filterProp.funcToFilter(card, filter);
                            });
                            cardsInFilterGroup = cardsInFilterGroup.concat(cardsMatchingFilter);
                            $scope.filtersApplied = true;
                        });

                        //Go through the existing group of cards and only include the ones that appear in both.
                        if (filterProp.filters.length > 0) {
                            var newCards = [];
                            cardsInFilterGroup.forEach(function(cardFromFilterGroup) {
                                if ($scope.cardsToDisplay.Cards.filter(function(card) {
                                    return card.Name == cardFromFilterGroup.Name;
                                }).length > 0) {
                                    newCards.push(cardFromFilterGroup);
                                }
                            });

                            $scope.cardsToDisplay.Cards = newCards;
                        }

                    }
                }

                $scope.clearFilters = function() {
                    for (var prop in $scope.filters) {
                        $scope.filters[prop].filters = [];
                    }
                    $scope.applyAllFilters();
                }

                function addOrRemoveFilter(filterBy, property) {
                    var indexOfFilterBy = $scope.filters[property].filters.indexOf(filterBy);
                    if (indexOfFilterBy > - 1) { //Already in array
                        $scope.filters[property].filters.splice(indexOfFilterBy, 1); //Remove from array.
                    } else {
                        $scope.filters[property].filters.push(filterBy);
                    }
                }

                $scope.filtersVisible = false;
                $scope.toggleFilters = function() {
                    $scope.filtersVisible = !$scope.filtersVisible;
                }

                $scope.filterColor = function(filterBy) {
                    addOrRemoveFilter(filterBy, 'color');
                    $scope.applyAllFilters();
                }

                $scope.filterType = function(filterBy) {
                    addOrRemoveFilter(filterBy, 'type');
                    $scope.applyAllFilters();
                }

                $scope.filterCost = function(filterBy) {
                    addOrRemoveFilter(filterBy, 'cost');
                    $scope.applyAllFilters();
                }

              $scope.showClear = function() {
                return angular.isDefined(attrs.clearFunction);
              };
              $scope.saveSelection = function() {
                downloadDataService.saveCardsList($scope.cards.concat($scope.landCards), $scope.title);
                // trackEvent(controllerId, 'save-selected-cards');
              };
              $scope.reverseCard = function(card) {
                if (!card.isReversed) {
                  card.isReversed = true;
                } else {
                  card.isReversed = false;
                }
                // $scope.$apply();
              }

              $scope.applyAllFilters();

              var specialCases = {
                  costSixPlusFilter: '6+',
                  colorMulticolorFilter: 'Multicolor'
              }

              $scope.filters = {
                  color: {
                      sectionTitle: 'Color',
                      filters: [],
                      funcToFilter: function(card, color) {
                          if (color != specialCases.colorMulticolorFilter) {
                              return card.Color.indexOf(color) > -1;
                          }
                          return card.Color.length > 1; //True if more than one color.
                      },
                      possibleFilters: [
                          {
                              value: 'W',
                              label: 'White',
                              filterFunc: function() {
                                  $scope.filterColor('W');
                              }
                          },
                          {
                              value: 'U',
                              label: 'Blue',
                              filterFunc: function() {
                                  $scope.filterColor('U')
                              }
                          },
                          {
                              value: 'B',
                              label: 'Black',
                              filterFunc: function() {
                                  $scope.filterColor('B')
                              }
                          },
                          {
                              value: 'R',
                              label: 'Red',
                              filterFunc: function() {
                                  $scope.filterColor('R')
                              }
                          },
                          {
                              value: 'G',
                              label: 'Green',
                              filterFunc: function() {
                                  $scope.filterColor('G')
                              }
                          },
                          {
                              value: specialCases.colorMulticolorFilter,
                              label: specialCases.colorMulticolorFilter,
                              filterFunc: function() {
                                  $scope.filterColor(specialCases.colorMulticolorFilter)
                              }
                          }
                      ]
                  },
                  type: {
                      sectionTitle: 'Type',
                      filters: [],
                      funcToFilter: function(card, type) {
                          return card.Type.indexOf(type) > -1;
                      },
                      possibleFilters: [
                          {
                              value: 'C',
                              label: 'Creature',
                              filterFunc: function() {
                                  $scope.filterType('C')
                              }
                          },
                          {
                              value: 'S',
                              label: 'Sorcery',
                              filterFunc: function() {
                                  $scope.filterType('S')
                              }
                          },
                          {
                              value: 'I',
                              label: 'Instant',
                              filterFunc: function() {
                                  $scope.filterType('I')
                              }
                          },
                          {
                              value: 'E',
                              label: 'Enchant',
                              filterFunc: function() {
                                  $scope.filterType('E')
                              }
                          },
                          {
                              value: 'A',
                              label: 'Artifact',
                              filterFunc: function() {
                                  $scope.filterType('A')
                              }
                          },
                          {
                              value: 'L',
                              label: 'Land',
                              filterFunc: function() {
                                  $scope.filterType('L')
                              }
                          },
                          {
                              value: 'P',
                              label: 'Planeswalker',
                              filterFunc: function() {
                                  $scope.filterType('P')
                              }
                          }
                      ]
                  },
                  cost: {
                      sectionTitle: 'Cost',
                      filters: [],
                      funcToFilter: function(card, cost) {

                          if (cost != specialCases.costSixPlusFilter) {
                              return getCardCost(card) == parseInt(cost, 10);
                          } else {
                              var cardCost = getCardCost(card);
                              return cardCost >= 6;
                          }

                      },
                      possibleFilters: [
                          {
                              value: '0',
                              label: '0',
                              filterFunc: function() {
                                  $scope.filterCost('0')
                              }
                          },
                          {
                              value: '1',
                              label: '1',
                              filterFunc: function() {
                                  $scope.filterCost('1')
                              }
                          },
                          {
                              value: '2',
                              label: '2',
                              filterFunc: function() {
                                  $scope.filterCost('2')
                              }
                          },
                          {
                              value: '3',
                              label: '3',
                              filterFunc: function() {
                                  $scope.filterCost('3')
                              }
                          },
                          {
                              value: '4',
                              label: '4',
                              filterFunc: function() {
                                  $scope.filterCost('4')
                              }
                          },
                          {
                              value: '5',
                              label: '5',
                              filterFunc: function() {
                                  $scope.filterCost('5')
                              }
                          },
                          {
                              value: specialCases.costSixPlusFilter,
                              label: specialCases.costSixPlusFilter,
                              filterFunc: function() {
                                  $scope.filterCost(specialCases.costSixPlusFilter)
                              }
                          }
                      ]
                  }
              }

              $scope.$watch('cards', function() {
                 $scope.applyAllFilters();
              });

            },
            restrict: 'AE',
            templateUrl: '/app/directives/cardDisplay.html'
        };
    }]);

})();

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

var KLD = [
{Name:"Acrobatic Maneuver", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"1", Image:"/Images/KLD/AcrobaticManeuver.jpg", },
{Name:"Aerial Responder", Cost:"1WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"2", Image:"/Images/KLD/AerialResponder.jpg", },
{Name:"Aetherstorm Roc", Cost:"2WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"3", Image:"/Images/KLD/AetherstormRoc.jpg", },
{Name:"Angel of Invention", Cost:"3WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"4", Image:"/Images/KLD/AngelofInvention.jpg", },
{Name:"Authority of the Consuls", Cost:"0W", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"KLD", Number:"5", Image:"/Images/KLD/AuthorityoftheConsuls.jpg", },
{Name:"Aviary Mechanic", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"6", Image:"/Images/KLD/AviaryMechanic.jpg", },
{Name:"Built to Last", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"7", Image:"/Images/KLD/BuilttoLast.jpg", },
{Name:"Captured by the Consulate", Cost:"3W", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"KLD", Number:"8", Image:"/Images/KLD/CapturedbytheConsulate.jpg", },
{Name:"Cataclysmic Gearhulk", Cost:"3WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"9", Image:"/Images/KLD/CataclysmicGearhulk.jpg", },
{Name:"Consulate Surveillance", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"KLD", Number:"10", Image:"/Images/KLD/ConsulateSurveillance.jpg", },
{Name:"Consul's Shieldguard", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"11", Image:"/Images/KLD/ConsulsShieldguard.jpg", },
{Name:"Eddytrail Hawk", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"12", Image:"/Images/KLD/EddytrailHawk.jpg", },
{Name:"Fairgrounds Warden", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"13", Image:"/Images/KLD/FairgroundsWarden.jpg", },
{Name:"Fragmentize", Cost:"0W", Color:["W"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"14", Image:"/Images/KLD/Fragmentize.jpg", },
{Name:"Fumigate", Cost:"3WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"KLD", Number:"15", Image:"/Images/KLD/Fumigate.jpg", },
{Name:"Gearshift Ace", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"16", Image:"/Images/KLD/GearshiftAce.jpg", },
{Name:"Glint-Sleeve Artisan", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"17", Image:"/Images/KLD/Glint-SleeveArtisan.jpg", },
{Name:"Herald of the Fair", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"18", Image:"/Images/KLD/HeraldoftheFair.jpg", },
{Name:"Impeccable Timing", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"19", Image:"/Images/KLD/ImpeccableTiming.jpg", },
{Name:"Inspired Charge", Cost:"2WW", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"20", Image:"/Images/KLD/InspiredCharge.jpg", },
{Name:"Master Trinketeer", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"21", Image:"/Images/KLD/MasterTrinketeer.jpg", },
{Name:"Ninth Bridge Patrol", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"22", Image:"/Images/KLD/NinthBridgePatrol.jpg", },
{Name:"Pressure Point", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"23", Image:"/Images/KLD/PressurePoint.jpg", },
{Name:"Propeller Pioneer", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"24", Image:"/Images/KLD/PropellerPioneer.jpg", },
{Name:"Refurbish", Cost:"3W", Color:["W"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"25", Image:"/Images/KLD/Refurbish.jpg", },
{Name:"Revoke Privileges", Cost:"2W", Color:["W"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"KLD", Number:"26", Image:"/Images/KLD/RevokePrivileges.jpg", },
{Name:"Servo Exhibition", Cost:"1W", Color:["W"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"27", Image:"/Images/KLD/ServoExhibition.jpg", },
{Name:"Skyswirl Harrier", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"28", Image:"/Images/KLD/SkyswirlHarrier.jpg", },
{Name:"Skywhaler's Shot", Cost:"2W", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"KLD", Number:"29", Image:"/Images/KLD/SkywhalersShot.jpg", },
{Name:"Tasseled Dromedary", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"KLD", Number:"30", Image:"/Images/KLD/TasseledDromedary.jpg", },
{Name:"Thriving Ibex", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"31", Image:"/Images/KLD/ThrivingIbex.jpg", },
{Name:"Toolcraft Exemplar", Cost:"0W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"32", Image:"/Images/KLD/ToolcraftExemplar.jpg", },
{Name:"Trusty Companion", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"33", Image:"/Images/KLD/TrustyCompanion.jpg", },
{Name:"Visionary Augmenter", Cost:"2WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"34", Image:"/Images/KLD/VisionaryAugmenter.jpg", },
{Name:"Wispweaver Angel", Cost:"4WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"35", Image:"/Images/KLD/WispweaverAngel.jpg", },
{Name:"Aether Meltdown", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"KLD", Number:"36", Image:"/Images/KLD/AetherMeltdown.jpg", },
{Name:"Aether Theorist", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"37", Image:"/Images/KLD/AetherTheorist.jpg", },
{Name:"Aether Tradewinds", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"38", Image:"/Images/KLD/AetherTradewinds.jpg", },
{Name:"Aethersquall Ancient", Cost:"5UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"39", Image:"/Images/KLD/AethersquallAncient.jpg", },
{Name:"Ceremonious Rejection", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"40", Image:"/Images/KLD/CeremoniousRejection.jpg", },
{Name:"Confiscation Coup", Cost:"3UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"KLD", Number:"41", Image:"/Images/KLD/ConfiscationCoup.jpg", },
{Name:"Curio Vendor", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"42", Image:"/Images/KLD/CurioVendor.jpg", },
{Name:"Disappearing Act", Cost:"1UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"43", Image:"/Images/KLD/DisappearingAct.jpg", },
{Name:"Dramatic Reversal", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"44", Image:"/Images/KLD/DramaticReversal.jpg", },
{Name:"Era of Innovation", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"KLD", Number:"45", Image:"/Images/KLD/EraofInnovation.jpg", },
{Name:"Experimental Aviator", Cost:"3UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"46", Image:"/Images/KLD/ExperimentalAviator.jpg", },
{Name:"Failed Inspection", Cost:"2UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"47", Image:"/Images/KLD/FailedInspection.jpg", },
{Name:"Gearseeker Serpent", Cost:"5UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"48", Image:"/Images/KLD/GearseekerSerpent.jpg", },
{Name:"Glimmer of Genius", Cost:"3U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"KLD", Number:"49", Image:"/Images/KLD/GlimmerofGenius.jpg", },
{Name:"Glint-Nest Crane", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"50", Image:"/Images/KLD/Glint-NestCrane.jpg", },
{Name:"Hightide Hermit", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"51", Image:"/Images/KLD/HightideHermit.jpg", },
{Name:"Insidious Will", Cost:"2UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"KLD", Number:"52", Image:"/Images/KLD/InsidiousWill.jpg", },
{Name:"Janjeet Sentry", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"53", Image:"/Images/KLD/JanjeetSentry.jpg", },
{Name:"Long-Finned Skywhale", Cost:"2UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"54", Image:"/Images/KLD/Long-FinnedSkywhale.jpg", },
{Name:"Malfunction", Cost:"3U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"KLD", Number:"55", Image:"/Images/KLD/Malfunction.jpg", },
{Name:"Metallurgic Summonings", Cost:"3UU", Color:["U"], Rarity:"M", Type:["E"], Rating:"9", Sort:"1", Set:"KLD", Number:"56", Image:"/Images/KLD/MetallurgicSummonings.jpg", },
{Name:"Minister of Inquiries", Cost:"0U", Color:["U"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"57", Image:"/Images/KLD/MinisterofInquiries.jpg", },
{Name:"Nimble Innovator", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"58", Image:"/Images/KLD/NimbleInnovator.jpg", },
{Name:"Padeem, Consul of Innovation", Cost:"3U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"59", Image:"/Images/KLD/Padeem--ConsulofInnovation.jpg", },
{Name:"Paradoxical Outcome", Cost:"3U", Color:["U"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"KLD", Number:"60", Image:"/Images/KLD/ParadoxicalOutcome.jpg", },
{Name:"Revolutionary Rebuff", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"61", Image:"/Images/KLD/RevolutionaryRebuff.jpg", },
{Name:"Saheeli's Artistry", Cost:"4UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"KLD", Number:"62", Image:"/Images/KLD/SaheelisArtistry.jpg", },
{Name:"Select for Inspection", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"63", Image:"/Images/KLD/SelectforInspection.jpg", },
{Name:"Shrewd Negotiation", Cost:"4U", Color:["U"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"64", Image:"/Images/KLD/ShrewdNegotiation.jpg", },
{Name:"Tezzeret's Ambition", Cost:"3UU", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"65", Image:"/Images/KLD/TezzeretsAmbition.jpg", },
{Name:"Thriving Turtle", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"66", Image:"/Images/KLD/ThrivingTurtle.jpg", },
{Name:"Torrential Gearhulk", Cost:"4UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"67", Image:"/Images/KLD/TorrentialGearhulk.jpg", },
{Name:"Vedalken Blademaster", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"68", Image:"/Images/KLD/VedalkenBlademaster.jpg", },
{Name:"Weldfast Wingsmith", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"69", Image:"/Images/KLD/WeldfastWingsmith.jpg", },
{Name:"Wind Drake", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"70", Image:"/Images/KLD/WindDrake.jpg", },
{Name:"Aetherborn Marauder", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"71", Image:"/Images/KLD/AetherbornMarauder.jpg", },
{Name:"Ambitious Aetherborn", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"72", Image:"/Images/KLD/AmbitiousAetherborn.jpg", },
{Name:"Demon of Dark Schemes", Cost:"3BBB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"73", Image:"/Images/KLD/DemonofDarkSchemes.jpg", },
{Name:"Dhund Operative", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"74", Image:"/Images/KLD/DhundOperative.jpg", },
{Name:"Diabolic Tutor", Cost:"2BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KLD", Number:"75", Image:"/Images/KLD/DiabolicTutor.jpg", },
{Name:"Die Young", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"76", Image:"/Images/KLD/DieYoung.jpg", },
{Name:"Dukhara Scavenger", Cost:"5B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"77", Image:"/Images/KLD/DukharaScavenger.jpg", },
{Name:"Eliminate the Competition", Cost:"4B", Color:["B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"KLD", Number:"78", Image:"/Images/KLD/EliminatetheCompetition.jpg", },
{Name:"Embraal Bruiser", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"79", Image:"/Images/KLD/EmbraalBruiser.jpg", },
{Name:"Essence Extraction", Cost:"1BB", Color:["B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"80", Image:"/Images/KLD/EssenceExtraction.jpg", },
{Name:"Fortuitous Find", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"81", Image:"/Images/KLD/FortuitousFind.jpg", },
{Name:"Foundry Screecher", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"82", Image:"/Images/KLD/FoundryScreecher.jpg", },
{Name:"Fretwork Colony", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"83", Image:"/Images/KLD/FretworkColony.jpg", },
{Name:"Gonti, Lord of Luxury", Cost:"2BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"84", Image:"/Images/KLD/Gonti--LordofLuxury.jpg", },
{Name:"Harsh Scrutiny", Cost:"0B", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KLD", Number:"85", Image:"/Images/KLD/HarshScrutiny.jpg", },
{Name:"Lawless Broker", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"86", Image:"/Images/KLD/LawlessBroker.jpg", },
{Name:"Live Fast", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"87", Image:"/Images/KLD/LiveFast.jpg", },
{Name:"Lost Legacy", Cost:"1BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"KLD", Number:"88", Image:"/Images/KLD/LostLegacy.jpg", },
{Name:"Make Obsolete", Cost:"2B", Color:["B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"89", Image:"/Images/KLD/MakeObsolete.jpg", },
{Name:"Marionette Master", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"90", Image:"/Images/KLD/MarionetteMaster.jpg", },
{Name:"Maulfist Squad", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"91", Image:"/Images/KLD/MaulfistSquad.jpg", },
{Name:"Midnight Oil", Cost:"2BB", Color:["B"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"KLD", Number:"92", Image:"/Images/KLD/MidnightOil.jpg", },
{Name:"Mind Rot", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"93", Image:"/Images/KLD/MindRot.jpg", },
{Name:"Morbid Curiosity", Cost:"1BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"94", Image:"/Images/KLD/MorbidCuriosity.jpg", },
{Name:"Night Market Lookout", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"KLD", Number:"95", Image:"/Images/KLD/NightMarketLookout.jpg", },
{Name:"Noxious Gearhulk", Cost:"4BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"96", Image:"/Images/KLD/NoxiousGearhulk.jpg", },
{Name:"Ovalchase Daredevil", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"97", Image:"/Images/KLD/OvalchaseDaredevil.jpg", },
{Name:"Prakhata Club Security", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"98", Image:"/Images/KLD/PrakhataClubSecurity.jpg", },
{Name:"Rush of Vitality", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"99", Image:"/Images/KLD/RushofVitality.jpg", },
{Name:"Subtle Strike", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"100", Image:"/Images/KLD/SubtleStrike.jpg", },
{Name:"Syndicate Trafficker", Cost:"1B", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"101", Image:"/Images/KLD/SyndicateTrafficker.jpg", },
{Name:"Thriving Rats", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"102", Image:"/Images/KLD/ThrivingRats.jpg", },
{Name:"Tidy Conclusion", Cost:"3BB", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"103", Image:"/Images/KLD/TidyConclusion.jpg", },
{Name:"Underhanded Designs", Cost:"1B", Color:["B"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"KLD", Number:"104", Image:"/Images/KLD/UnderhandedDesigns.jpg", },
{Name:"Weaponcraft Enthusiast", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"105", Image:"/Images/KLD/WeaponcraftEnthusiast.jpg", },
{Name:"Aethertorch Renegade", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"106", Image:"/Images/KLD/AethertorchRenegade.jpg", },
{Name:"Brazen Scourge", Cost:"1RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"107", Image:"/Images/KLD/BrazenScourge.jpg", },
{Name:"Built to Smash", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"108", Image:"/Images/KLD/BuilttoSmash.jpg", },
{Name:"Cathartic Reunion", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"109", Image:"/Images/KLD/CatharticReunion.jpg", },
{Name:"Chandra, Torch of Defiance", Cost:"2RR", Color:["R"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"KLD", Number:"110", Image:"/Images/KLD/Chandra--TorchofDefiance.jpg", },
{Name:"Chandra's Pyrohelix", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"111", Image:"/Images/KLD/ChandrasPyrohelix.jpg", },
{Name:"Combustible Gearhulk", Cost:"4RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"112", Image:"/Images/KLD/CombustibleGearhulk.jpg", },
{Name:"Demolish", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"113", Image:"/Images/KLD/Demolish.jpg", },
{Name:"Fateful Showdown", Cost:"2RR", Color:["R"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"KLD", Number:"114", Image:"/Images/KLD/FatefulShowdown.jpg", },
{Name:"Furious Reprisal", Cost:"3R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"115", Image:"/Images/KLD/FuriousReprisal.jpg", },
{Name:"Giant Spectacle", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"KLD", Number:"116", Image:"/Images/KLD/GiantSpectacle.jpg", },
{Name:"Harnessed Lightning", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"KLD", Number:"117", Image:"/Images/KLD/HarnessedLightning.jpg", },
{Name:"Hijack", Cost:"1RR", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"118", Image:"/Images/KLD/Hijack.jpg", },
{Name:"Incendiary Sabotage", Cost:"2RR", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"119", Image:"/Images/KLD/IncendiarySabotage.jpg", },
{Name:"Inventor's Apprentice", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"120", Image:"/Images/KLD/InventorsApprentice.jpg", },
{Name:"Lathnu Hellion", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"KLD", Number:"121", Image:"/Images/KLD/LathnuHellion.jpg", },
{Name:"Madcap Experiment", Cost:"3R", Color:["R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"KLD", Number:"122", Image:"/Images/KLD/MadcapExperiment.jpg", },
{Name:"Maulfist Doorbuster", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"123", Image:"/Images/KLD/MaulfistDoorbuster.jpg", },
{Name:"Pia Nalaar", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"124", Image:"/Images/KLD/PiaNalaar.jpg", },
{Name:"Quicksmith Genius", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"125", Image:"/Images/KLD/QuicksmithGenius.jpg", },
{Name:"Reckless Fireweaver", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"126", Image:"/Images/KLD/RecklessFireweaver.jpg", },
{Name:"Renegade Tactics", Cost:"0R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"127", Image:"/Images/KLD/RenegadeTactics.jpg", },
{Name:"Ruinous Gremlin", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"128", Image:"/Images/KLD/RuinousGremlin.jpg", },
{Name:"Salivating Gremlins", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"129", Image:"/Images/KLD/SalivatingGremlins.jpg", },
{Name:"Skyship Stalker", Cost:"2RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"130", Image:"/Images/KLD/SkyshipStalker.jpg", },
{Name:"Spark of Creativity", Cost:"0R", Color:["R"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KLD", Number:"131", Image:"/Images/KLD/SparkofCreativity.jpg", },
{Name:"Speedway Fanatic", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"132", Image:"/Images/KLD/SpeedwayFanatic.jpg", },
{Name:"Spireside Infiltrator", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"133", Image:"/Images/KLD/SpiresideInfiltrator.jpg", },
{Name:"Spontaneous Artist", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"134", Image:"/Images/KLD/SpontaneousArtist.jpg", },
{Name:"Start Your Engines", Cost:"3R", Color:["R"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"135", Image:"/Images/KLD/StartYourEngines.jpg", },
{Name:"Territorial Gorger", Cost:"3R", Color:["R"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"136", Image:"/Images/KLD/TerritorialGorger.jpg", },
{Name:"Terror of the Fairgrounds", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"137", Image:"/Images/KLD/TerroroftheFairgrounds.jpg", },
{Name:"Thriving Grubs", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"138", Image:"/Images/KLD/ThrivingGrubs.jpg", },
{Name:"Wayward Giant", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"139", Image:"/Images/KLD/WaywardGiant.jpg", },
{Name:"Welding Sparks", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"140", Image:"/Images/KLD/WeldingSparks.jpg", },
{Name:"Appetite for the Unnatural", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KLD", Number:"141", Image:"/Images/KLD/AppetitefortheUnnatural.jpg", },
{Name:"Arborback Stomper", Cost:"3GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"142", Image:"/Images/KLD/ArborbackStomper.jpg", },
{Name:"Architect of the Untamed", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"143", Image:"/Images/KLD/ArchitectoftheUntamed.jpg", },
{Name:"Armorcraft Judge", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"144", Image:"/Images/KLD/ArmorcraftJudge.jpg", },
{Name:"Attune with Aether", Cost:"0G", Color:["G"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"145", Image:"/Images/KLD/AttunewithAether.jpg", },
{Name:"Blossoming Defense", Cost:"0G", Color:["G"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KLD", Number:"146", Image:"/Images/KLD/BlossomingDefense.jpg", },
{Name:"Bristling Hydra", Cost:"2GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"147", Image:"/Images/KLD/BristlingHydra.jpg", },
{Name:"Commencement of Festivities", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"KLD", Number:"148", Image:"/Images/KLD/CommencementofFestivities.jpg", },
{Name:"Cowl Prowler", Cost:"4GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"149", Image:"/Images/KLD/CowlProwler.jpg", },
{Name:"Creeping Mold", Cost:"2GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"150", Image:"/Images/KLD/CreepingMold.jpg", },
{Name:"Cultivator of Blades", Cost:"3GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"151", Image:"/Images/KLD/CultivatorofBlades.jpg", },
{Name:"Dubious Challenge", Cost:"3G", Color:["G"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"KLD", Number:"152", Image:"/Images/KLD/DubiousChallenge.jpg", },
{Name:"Durable Handicraft", Cost:"1G", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"KLD", Number:"153", Image:"/Images/KLD/DurableHandicraft.jpg", },
{Name:"Elegant Edgecrafters", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"154", Image:"/Images/KLD/ElegantEdgecrafters.jpg", },
{Name:"Fairgrounds Trumpeter", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"155", Image:"/Images/KLD/FairgroundsTrumpeter.jpg", },
{Name:"Ghirapur Guide", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"156", Image:"/Images/KLD/GhirapurGuide.jpg", },
{Name:"Highspire Artisan", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"157", Image:"/Images/KLD/HighspireArtisan.jpg", },
{Name:"Hunt the Weak", Cost:"3G", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"158", Image:"/Images/KLD/HunttheWeak.jpg", },
{Name:"Kujar Seedsculptor", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"159", Image:"/Images/KLD/KujarSeedsculptor.jpg", },
{Name:"Larger Than Life", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"160", Image:"/Images/KLD/LargerThanLife.jpg", },
{Name:"Longtusk Cub", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"161", Image:"/Images/KLD/LongtuskCub.jpg", },
{Name:"Nature's Way", Cost:"1G", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KLD", Number:"162", Image:"/Images/KLD/NaturesWay.jpg", },
{Name:"Nissa, Vital Force", Cost:"3GG", Color:["G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"KLD", Number:"163", Image:"/Images/KLD/Nissa--VitalForce.jpg", },
{Name:"Ornamental Courage", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KLD", Number:"164", Image:"/Images/KLD/OrnamentalCourage.jpg", },
{Name:"Oviya Pashiri, Sage Lifecrafter", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"165", Image:"/Images/KLD/OviyaPashiri--SageLifecrafter.jpg", },
{Name:"Peema Outrider", Cost:"2GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"166", Image:"/Images/KLD/PeemaOutrider.jpg", },
{Name:"Riparian Tiger", Cost:"3GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"167", Image:"/Images/KLD/RiparianTiger.jpg", },
{Name:"Sage of Shaila's Claim", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"168", Image:"/Images/KLD/SageofShailasClaim.jpg", },
{Name:"Servant of the Conduit", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"169", Image:"/Images/KLD/ServantoftheConduit.jpg", },
{Name:"Take Down", Cost:"0G", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"KLD", Number:"170", Image:"/Images/KLD/TakeDown.jpg", },
{Name:"Thriving Rhino", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"171", Image:"/Images/KLD/ThrivingRhino.jpg", },
{Name:"Verdurous Gearhulk", Cost:"3GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"172", Image:"/Images/KLD/VerdurousGearhulk.jpg", },
{Name:"Wild Wanderer", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"173", Image:"/Images/KLD/WildWanderer.jpg", },
{Name:"Wildest Dreams", Cost:"0G", Color:["G"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"KLD", Number:"174", Image:"/Images/KLD/WildestDreams.jpg", },
{Name:"Wily Bandar", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"175", Image:"/Images/KLD/WilyBandar.jpg", },
{Name:"Cloudblazer", Cost:"3WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"176", Image:"/Images/KLD/Cloudblazer.jpg", },
{Name:"Contraband Kingpin", Cost:"0UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"177", Image:"/Images/KLD/ContrabandKingpin.jpg", },
{Name:"Depala, Pilot Exemplar", Cost:"1RW", Color:["R","W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"178", Image:"/Images/KLD/Depala--PilotExemplar.jpg", },
{Name:"Dovin Baan", Cost:"2WU", Color:["W","U"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"KLD", Number:"179", Image:"/Images/KLD/DovinBaan.jpg", },
{Name:"Empyreal Voyager", Cost:"1GU", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"180", Image:"/Images/KLD/EmpyrealVoyager.jpg", },
{Name:"Engineered Might", Cost:"3WG", Color:["G","W"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KLD", Number:"181", Image:"/Images/KLD/EngineeredMight.jpg", },
{Name:"Hazardous Conditions", Cost:"2BG", Color:["G","B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KLD", Number:"182", Image:"/Images/KLD/HazardousConditions.jpg", },
{Name:"Kambal, Consul of Allocation", Cost:"1WB", Color:["W","B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"183", Image:"/Images/KLD/Kambal--ConsulofAllocation.jpg", },
{Name:"Rashmi, Eternities Crafter", Cost:"2GU", Color:["G","U"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"KLD", Number:"184", Image:"/Images/KLD/Rashmi--EternitiesCrafter.jpg", },
{Name:"Restoration Gearsmith", Cost:"2WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"185", Image:"/Images/KLD/RestorationGearsmith.jpg", },
{Name:"Saheeli Rai", Cost:"1UR", Color:["U","R"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"KLD", Number:"186", Image:"/Images/KLD/SaheeliRai.jpg", },
{Name:"Unlicensed Disintegration", Cost:"1BR", Color:["B","R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"KLD", Number:"187", Image:"/Images/KLD/UnlicensedDisintegration.jpg", },
{Name:"Veteran Motorist", Cost:"0RW", Color:["R","W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KLD", Number:"188", Image:"/Images/KLD/VeteranMotorist.jpg", },
{Name:"Voltaic Brawler", Cost:"0RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"189", Image:"/Images/KLD/VoltaicBrawler.jpg", },
{Name:"Whirler Virtuoso", Cost:"1UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"190", Image:"/Images/KLD/WhirlerVirtuoso.jpg", },
{Name:"Accomplished Automaton", Cost:"7", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"191", Image:"/Images/KLD/AccomplishedAutomaton.jpg", },
{Name:"Aetherflux Reservoir", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"192", Image:"/Images/KLD/AetherfluxReservoir.jpg", },
{Name:"Aetherworks Marvel", Cost:"4", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"193", Image:"/Images/KLD/AetherworksMarvel.jpg", },
{Name:"Animation Module", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"194", Image:"/Images/KLD/AnimationModule.jpg", },
{Name:"Aradara Express", Cost:"5", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"195", Image:"/Images/KLD/AradaraExpress.jpg", },
{Name:"Ballista Charger", Cost:"5", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"196", Image:"/Images/KLD/BallistaCharger.jpg", },
{Name:"Bastion Mastodon", Cost:"5", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"197", Image:"/Images/KLD/BastionMastodon.jpg", },
{Name:"Bomat Bazaar Barge", Cost:"4", Color:["R"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"198", Image:"/Images/KLD/BomatBazaarBarge.jpg", },
{Name:"Bomat Courier", Cost:"1", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"199", Image:"/Images/KLD/BomatCourier.jpg", },
{Name:"Chief of the Foundry", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"200", Image:"/Images/KLD/ChiefoftheFoundry.jpg", },
{Name:"Cogworker's Puzzleknot", Cost:"2", Color:["W"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"201", Image:"/Images/KLD/CogworkersPuzzleknot.jpg", },
{Name:"Consulate Skygate", Cost:"2", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"202", Image:"/Images/KLD/ConsulateSkygate.jpg", },
{Name:"Cultivator's Caravan", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"203", Image:"/Images/KLD/CultivatorsCaravan.jpg", },
{Name:"Deadlock Trap", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"204", Image:"/Images/KLD/DeadlockTrap.jpg", },
{Name:"Decoction Module", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"205", Image:"/Images/KLD/DecoctionModule.jpg", },
{Name:"Demolition Stomper", Cost:"6", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"KLD", Number:"206", Image:"/Images/KLD/DemolitionStomper.jpg", },
{Name:"Dukhara Peafowl", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"207", Image:"/Images/KLD/DukharaPeafowl.jpg", },
{Name:"Dynavolt Tower", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"208", Image:"/Images/KLD/DynavoltTower.jpg", },
{Name:"Eager Construct", Cost:"2", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"209", Image:"/Images/KLD/EagerConstruct.jpg", },
{Name:"Electrostatic Pummeler", Cost:"3", Color:["C"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"KLD", Number:"210", Image:"/Images/KLD/ElectrostaticPummeler.jpg", },
{Name:"Fabrication Module", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"KLD", Number:"211", Image:"/Images/KLD/FabricationModule.jpg", },
{Name:"Filigree Familiar", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"212", Image:"/Images/KLD/FiligreeFamiliar.jpg", },
{Name:"Fireforger's Puzzleknot", Cost:"2", Color:["R"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"213", Image:"/Images/KLD/FireforgersPuzzleknot.jpg", },
{Name:"Fleetwheel Cruiser", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"214", Image:"/Images/KLD/FleetwheelCruiser.jpg", },
{Name:"Foundry Inspector", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KLD", Number:"215", Image:"/Images/KLD/FoundryInspector.jpg", },
{Name:"Ghirapur Orrery", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"KLD", Number:"216", Image:"/Images/KLD/GhirapurOrrery.jpg", },
{Name:"Glassblower's Puzzleknot", Cost:"2", Color:["U"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"217", Image:"/Images/KLD/GlassblowersPuzzleknot.jpg", },
{Name:"Inventor's Goggles", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"218", Image:"/Images/KLD/InventorsGoggles.jpg", },
{Name:"Iron League Steed", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"219", Image:"/Images/KLD/IronLeagueSteed.jpg", },
{Name:"Key to the City", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"220", Image:"/Images/KLD/KeytotheCity.jpg", },
{Name:"Metalspinner's Puzzleknot", Cost:"2", Color:["B"], Rarity:"C", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"221", Image:"/Images/KLD/MetalspinnersPuzzleknot.jpg", },
{Name:"Metalwork Colossus", Cost:"11", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KLD", Number:"222", Image:"/Images/KLD/MetalworkColossus.jpg", },
{Name:"Multiform Wonder", Cost:"5", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KLD", Number:"223", Image:"/Images/KLD/MultiformWonder.jpg", },
{Name:"Narnam Cobra", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"224", Image:"/Images/KLD/NarnamCobra.jpg", },
{Name:"Ovalchase Dragster", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"225", Image:"/Images/KLD/OvalchaseDragster.jpg", },
{Name:"Panharmonicon", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"KLD", Number:"226", Image:"/Images/KLD/Panharmonicon.jpg", },
{Name:"Perpetual Timepiece", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"2", Sort:"1", Set:"KLD", Number:"227", Image:"/Images/KLD/PerpetualTimepiece.jpg", },
{Name:"Prakhata Pillar-Bug", Cost:"3", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"228", Image:"/Images/KLD/PrakhataPillar-Bug.jpg", },
{Name:"Prophetic Prism", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"229", Image:"/Images/KLD/PropheticPrism.jpg", },
{Name:"Renegade Freighter", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"230", Image:"/Images/KLD/RenegadeFreighter.jpg", },
{Name:"Scrapheap Scrounger", Cost:"2", Color:["C"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"KLD", Number:"231", Image:"/Images/KLD/ScrapheapScrounger.jpg", },
{Name:"Self-Assembler", Cost:"5", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"232", Image:"/Images/KLD/Self-Assembler.jpg", },
{Name:"Sky Skiff", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"233", Image:"/Images/KLD/SkySkiff.jpg", },
{Name:"Skysovereign, Consul Flagship", Cost:"5", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"234", Image:"/Images/KLD/Skysovereign--ConsulFlagship.jpg", },
{Name:"Smuggler's Copter", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"KLD", Number:"235", Image:"/Images/KLD/SmugglersCopter.jpg", },
{Name:"Snare Thopter", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"236", Image:"/Images/KLD/SnareThopter.jpg", },
{Name:"Torch Gauntlet", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"KLD", Number:"237", Image:"/Images/KLD/TorchGauntlet.jpg", },
{Name:"Weldfast Monitor", Cost:"3", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"238", Image:"/Images/KLD/WeldfastMonitor.jpg", },
{Name:"Whirlermaker", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KLD", Number:"239", Image:"/Images/KLD/Whirlermaker.jpg", },
{Name:"Woodweaver's Puzzleknot", Cost:"2", Color:["G"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"KLD", Number:"240", Image:"/Images/KLD/WoodweaversPuzzleknot.jpg", },
{Name:"Workshop Assistant", Cost:"3", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KLD", Number:"241", Image:"/Images/KLD/WorkshopAssistant.jpg", },
{Name:"Aether Hub", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"5", Sort:"1", Set:"KLD", Number:"242", Image:"/Images/KLD/AetherHub.jpg", },
{Name:"Blooming Marsh", Cost:"0", Color:["B","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"KLD", Number:"243", Image:"/Images/KLD/BloomingMarsh.jpg", },
{Name:"Botanical Sanctum", Cost:"0", Color:["U","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"KLD", Number:"244", Image:"/Images/KLD/BotanicalSanctum.jpg", },
{Name:"Concealed Courtyard", Cost:"0", Color:["W","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"KLD", Number:"245", Image:"/Images/KLD/ConcealedCourtyard.jpg", },
{Name:"Inspiring Vantage", Cost:"0", Color:["W","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"KLD", Number:"246", Image:"/Images/KLD/InspiringVantage.jpg", },
{Name:"Inventors' Fair", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"KLD", Number:"247", Image:"/Images/KLD/InventorsFair.jpg", },
{Name:"Sequestered Stash", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"KLD", Number:"248", Image:"/Images/KLD/SequesteredStash.jpg", },
{Name:"Spirebluff Canal", Cost:"0", Color:["U","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"KLD", Number:"249", Image:"/Images/KLD/SpirebluffCanal.jpg"}
];
var KLDMaster = [
{Name:"Cataclysmic Gearhulk", Cost:"3WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"1", Image:"/Images/KLD/CataclysmicGearhulk.jpg", },
{Name:"Torrential Gearhulk", Cost:"4UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"2", Image:"/Images/KLD/TorrentialGearhulk.jpg", },
{Name:"Noxious Gearhulk", Cost:"4BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"3", Image:"/Images/KLD/NoxiousGearhulk.jpg", },
{Name:"Combustible Gearhulk", Cost:"4RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"4", Image:"/Images/KLD/CombustibleGearhulk.jpg", },
{Name:"Verdurous Gearhulk", Cost:"3GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"5", Image:"/Images/KLD/VerdurousGearhulk.jpg", },
{Name:"Sword of Light and Shadow", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"6", Image:"/Images/KLD/SwordofLightandShadow.jpg", },
{Name:"Sword of Fire and Ice", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"7", Image:"/Images/KLD/SwordofFireandIce.jpg", },
{Name:"Sword of Feast and Famine", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"8", Image:"/Images/KLD/SwordofFeastandFamine.jpg", },
{Name:"Steel Overseer", Cost:"2", Color:["C"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"9", Image:"/Images/KLD/SteelOverseer.jpg", },
{Name:"Static Orb", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"10", Image:"/Images/KLD/StaticOrb.jpg", },
{Name:"Solemn Simulacrum", Cost:"4", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"11", Image:"/Images/KLD/SolemnSimulacrum.jpg", },
{Name:"Sol Ring", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"12", Image:"/Images/KLD/SolRing.jpg", },
{Name:"Sculpting Steel", Cost:"1", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"13", Image:"/Images/KLD/SculptingSteel.jpg", },
{Name:"Mox Opal", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"14", Image:"/Images/KLD/MoxOpal.jpg", },
{Name:"Painter's Servant", Cost:"0", Color:["C"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"15", Image:"/Images/KLD/PaintersServant.jpg", },
{Name:"Rings of Brighthearth", Cost:"2", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"16", Image:"/Images/KLD/RingsofBrighthearth.jpg", },
{Name:"Scroll Rack", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"17", Image:"/Images/KLD/ScrollRack.jpg", },
{Name:"Lightning Greaves", Cost:"2", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"18", Image:"/Images/KLD/LightningGreaves.jpg", },
{Name:"Lotus Petal", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"19", Image:"/Images/KLD/LotusPetal.jpg", },
{Name:"Mana Vault", Cost:"1", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"20", Image:"/Images/KLD/ManaVault.jpg", },
{Name:"Mind's Eye", Cost:"5", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"21", Image:"/Images/KLD/MindsEye.jpg", },
{Name:"Crucible of Worlds", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"22", Image:"/Images/KLD/CrucibleofWorlds.jpg", },
{Name:"Cloudstone Curio", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"23", Image:"/Images/KLD/CloudstoneCurio.jpg", },
{Name:"Chrome Mox", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"24", Image:"/Images/KLD/ChromeMox.jpg", },
{Name:"Chromatic Lantern", Cost:"3", Color:["C"], Rarity:"M", Type:["A","A"], Rating:"9", Sort:"1", Set:"KLD", Number:"25", Image:"/Images/KLD/ChromaticLantern.jpg", },
{Name:"Champion's Helm", Cost:"3", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"26", Image:"/Images/KLD/ChampionsHelm.jpg", },
{Name:"Aether Vial", Cost:"1", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"27", Image:"/Images/KLD/AetherVial.jpg", },
{Name:"Mana Crypt", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"28", Image:"/Images/KLD/ManaCrypt.jpg", },
{Name:"Gauntlet of Power", Cost:"5", Color:["C"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"KLD", Number:"29", Image:"/Images/KLD/GauntletofPower.jpg", },
{Name:"Hangarback Walker", Cost:"0", Color:["C"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KLD", Number:"30", Image:"/Images/KLD/HangarbackWalker.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"31", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"32", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"33", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"34", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"35", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"36", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"37", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"38", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"39", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"40", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"41", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"42", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"43", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"44", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"45", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"46", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"47", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"48", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"49", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"50", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"51", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"52", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"53", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"54", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"55", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"56", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"57", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"58", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"59", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"60", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"61", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"62", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"63", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"64", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"65", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"66", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"67", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"68", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"69", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"70", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"71", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"72", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"73", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"74", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"75", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"76", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"77", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"78", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"79", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"80", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"81", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"82", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"83", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"84", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"85", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"86", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"87", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"88", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"89", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"90", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"91", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"92", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"93", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"94", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"95", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"96", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"97", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"98", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"99", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"100", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"101", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"102", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"103", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"104", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"105", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"106", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"107", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"108", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"109", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"110", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"111", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"112", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"113", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"114", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"115", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"116", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"117", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"118", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"119", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"120", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"121", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"122", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"123", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"124", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"125", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"126", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"127", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"128", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"129", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"130", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"131", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"132", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"133", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"134", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"135", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"136", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"137", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"138", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"139", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"140", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"141", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"142", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"143", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"144", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"145", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"146", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"147", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"148", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"149", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"150", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"151", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"152", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"153", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"154", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"155", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"156", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"157", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"158", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"159", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"160", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"161", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"162", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"163", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"164", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"165", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"166", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"167", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"168", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"169", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"170", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"171", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"172", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"173", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"174", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"175", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"176", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"177", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"178", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"179", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"180", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"181", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"182", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"183", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"184", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"185", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"186", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"187", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"188", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"189", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"190", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"191", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"192", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"193", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"194", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"195", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"196", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"197", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"198", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"199", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"200", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"201", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"202", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"203", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"204", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"205", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"206", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"207", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"208", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"209", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"210", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"211", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"212", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"213", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"214", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"215", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"216", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"217", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"218", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"219", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"220", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"221", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"222", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"223", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"224", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"225", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"226", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"227", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"228", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"229", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"230", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"231", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"232", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"233", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"234", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"235", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"236", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"237", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"238", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"239", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"240", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"241", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"242", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"243", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"244", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"245", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"246", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"247", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"248", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"249", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"250", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"251", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"252", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"253", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"254", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"255", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"256", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"257", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"258", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"259", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"260", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"261", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"262", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"263", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"264", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"265", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"266", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"267", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"268", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"269", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"270", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"271", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"KLD", Number:"272", Image:"/Images/KLD/.jpg", },
];
var EMN = [
{Name:"Blessed Alliance", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"EMN", Number:"1", Image:"/Images/EMN/BlessedAlliance.jpg", },
{Name:"Borrowed Grace", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"EMN", Number:"2", Image:"/Images/EMN/BorrowedGrace.jpg", },
{Name:"Choking Restraints", Cost:"2W", Color:["W"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"EMN", Number:"3", Image:"/Images/EMN/ChokingRestraints.jpg", },
{Name:"Collective Effort", Cost:"1WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"EMN", Number:"4", Image:"/Images/EMN/CollectiveEffort.jpg", },
{Name:"Courageous Outrider", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"5", Image:"/Images/EMN/CourageousOutrider.jpg", },
{Name:"Dawn Gryff", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"6", Image:"/Images/EMN/DawnGryff.jpg", },
{Name:"Deploy the Gatewatch", Cost:"4WW", Color:["W"], Rarity:"M", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"7", Image:"/Images/EMN/DeploytheGatewatch.jpg", },
{Name:"Desperate Sentry", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"8", Image:"/Images/EMN/DesperateSentry.jpg", },
{Name:"Drogskol Shieldmate", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"9", Image:"/Images/EMN/DrogskolShieldmate.jpg", },
{Name:"Faith Unbroken", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"EMN", Number:"10", Image:"/Images/EMN/FaithUnbroken.jpg", },
{Name:"Faithbearer Paladin", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"11", Image:"/Images/EMN/FaithbearerPaladin.jpg", },
{Name:"Fiend Binder", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"12", Image:"/Images/EMN/FiendBinder.jpg", },
{Name:"Geist of the Lonely Vigil", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"13", Image:"/Images/EMN/GeistoftheLonelyVigil.jpg", },
{Name:"Give No Ground", Cost:"3W", Color:["W"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"14", Image:"/Images/EMN/GiveNoGround.jpg", },
{Name:"Guardian of Pilgrims", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"15", Image:"/Images/EMN/GuardianofPilgrims.jpg", },
{Name:"Ironclad Slayer", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"16", Image:"/Images/EMN/IroncladSlayer.jpg", },
{Name:"Ironwright's Cleansing", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"EMN", Number:"17", Image:"/Images/EMN/IronwrightsCleansing.jpg", },
{Name:"Long Road Home", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"EMN", Number:"18", Image:"/Images/EMN/LongRoadHome.jpg", },
{Name:"Lunarch Mantle", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"EMN", Number:"19", Image:"/Images/EMN/LunarchMantle.jpg", },
{Name:"Peace of Mind", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"1", Sort:"1", Set:"EMN", Number:"20", Image:"/Images/EMN/PeaceofMind.jpg", },
{Name:"Providence", Cost:"5WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"21", Image:"/Images/EMN/Providence.jpg", },
{Name:"Repel the Abominable", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"22", Image:"/Images/EMN/RepeltheAbominable.jpg", },
{Name:"Sanctifier of Souls", Cost:"3W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"23", Image:"/Images/EMN/SanctifierofSouls.jpg", },
{Name:"Selfless Spirit", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"24", Image:"/Images/EMN/SelflessSpirit.jpg", },
{Name:"Sigarda's Aid", Cost:"0W", Color:["W"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"EMN", Number:"25", Image:"/Images/EMN/SigardasAid.jpg", },
{Name:"Sigardian Priest", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"26", Image:"/Images/EMN/SigardianPriest.jpg", },
{Name:"Spectral Reserves", Cost:"3W", Color:["W"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"27", Image:"/Images/EMN/SpectralReserves.jpg", },
{Name:"Steadfast Cathar", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"28", Image:"/Images/EMN/SteadfastCathar.jpg", },
{Name:"Subjugator Angel", Cost:"4WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"29", Image:"/Images/EMN/SubjugatorAngel.jpg", },
{Name:"Thalia, Heretic Cathar", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"30", Image:"/Images/EMN/Thalia--HereticCathar.jpg", },
{Name:"Thalia's Lancers", Cost:"3WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"31", Image:"/Images/EMN/ThaliasLancers.jpg", },
{Name:"Thraben Standard Bearer", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"32", Image:"/Images/EMN/ThrabenStandardBearer.jpg", },
{Name:"Advanced Stitchwing", Cost:"3UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"33", Image:"/Images/EMN/AdvancedStitchwing.jpg", },
{Name:"Chilling Grasp", Cost:"2U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"34", Image:"/Images/EMN/ChillingGrasp.jpg", },
{Name:"Coax from the Blind Eternities", Cost:"2U", Color:["U"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"35", Image:"/Images/EMN/CoaxfromtheBlindEternities.jpg", },
{Name:"Contingency Plan", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"36", Image:"/Images/EMN/ContingencyPlan.jpg", },
{Name:"Convolute", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"37", Image:"/Images/EMN/Convolute.jpg", },
{Name:"Displace", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"EMN", Number:"38", Image:"/Images/EMN/Displace.jpg", },
{Name:"Drag Under", Cost:"2U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"39", Image:"/Images/EMN/DragUnder.jpg", },
{Name:"Enlightened Maniac", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"40", Image:"/Images/EMN/EnlightenedManiac.jpg", },
{Name:"Exultant Cultist", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"41", Image:"/Images/EMN/ExultantCultist.jpg", },
{Name:"Fogwalker", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"42", Image:"/Images/EMN/Fogwalker.jpg", },
{Name:"Fortune's Favor", Cost:"2U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"EMN", Number:"43", Image:"/Images/EMN/FortunesFavor.jpg", },
{Name:"Geist of the Archives", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"44", Image:"/Images/EMN/GeistoftheArchives.jpg", },
{Name:"Identity Thief", Cost:"2UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"45", Image:"/Images/EMN/IdentityThief.jpg", },
{Name:"Imprisoned in the Moon", Cost:"2U", Color:["U"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"EMN", Number:"46", Image:"/Images/EMN/ImprisonedintheMoon.jpg", },
{Name:"Ingenious Skaab", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"47", Image:"/Images/EMN/IngeniousSkaab.jpg", },
{Name:"Laboratory Brute", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"48", Image:"/Images/EMN/LaboratoryBrute.jpg", },
{Name:"Lunar Force", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"EMN", Number:"49", Image:"/Images/EMN/LunarForce.jpg", },
{Name:"Mausoleum Wanderer", Cost:"0U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"50", Image:"/Images/EMN/MausoleumWanderer.jpg", },
{Name:"Mind's Dilation", Cost:"5UU", Color:["U"], Rarity:"M", Type:["E"], Rating:"7", Sort:"1", Set:"EMN", Number:"51", Image:"/Images/EMN/MindsDilation.jpg", },
{Name:"Nebelgast Herald", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"52", Image:"/Images/EMN/NebelgastHerald.jpg", },
{Name:"Niblis of Frost", Cost:"2UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"53", Image:"/Images/EMN/NiblisofFrost.jpg", },
{Name:"Scour the Laboratory", Cost:"4UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"54", Image:"/Images/EMN/ScourtheLaboratory.jpg", },
{Name:"Spontaneous Mutation", Cost:"0U", Color:["U"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"EMN", Number:"55", Image:"/Images/EMN/SpontaneousMutation.jpg", },
{Name:"Summary Dismissal", Cost:"2UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMN", Number:"56", Image:"/Images/EMN/SummaryDismissal.jpg", },
{Name:"Take Inventory", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMN", Number:"57", Image:"/Images/EMN/TakeInventory.jpg", },
{Name:"Tattered Haunter", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"58", Image:"/Images/EMN/TatteredHaunter.jpg", },
{Name:"Turn Aside", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"59", Image:"/Images/EMN/TurnAside.jpg", },
{Name:"Unsubstantiate", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"EMN", Number:"60", Image:"/Images/EMN/Unsubstantiate.jpg", },
{Name:"Wharf Infiltrator", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"61", Image:"/Images/EMN/WharfInfiltrator.jpg", },
{Name:"Boon of Emrakul", Cost:"2B", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"EMN", Number:"62", Image:"/Images/EMN/BoonofEmrakul.jpg", },
{Name:"Borrowed Malevolence", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"EMN", Number:"63", Image:"/Images/EMN/BorrowedMalevolence.jpg", },
{Name:"Cemetery Recruitment", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"EMN", Number:"64", Image:"/Images/EMN/CemeteryRecruitment.jpg", },
{Name:"Certain Death", Cost:"5B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"65", Image:"/Images/EMN/CertainDeath.jpg", },
{Name:"Collective Brutality", Cost:"1B", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMN", Number:"66", Image:"/Images/EMN/CollectiveBrutality.jpg", },
{Name:"Cryptbreaker", Cost:"0B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"67", Image:"/Images/EMN/Cryptbreaker.jpg", },
{Name:"Dark Salvation", Cost:"0B", Color:["B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"EMN", Number:"68", Image:"/Images/EMN/DarkSalvation.jpg", },
{Name:"Dusk Feaster", Cost:"5BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"69", Image:"/Images/EMN/DuskFeaster.jpg", },
{Name:"Gavony Unhallowed", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"70", Image:"/Images/EMN/GavonyUnhallowed.jpg", },
{Name:"Graf Harvest", Cost:"0B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMN", Number:"71", Image:"/Images/EMN/GrafHarvest.jpg", },
{Name:"Haunted Dead", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"72", Image:"/Images/EMN/HauntedDead.jpg", },
{Name:"Liliana, the Last Hope", Cost:"1BB", Color:["B"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"EMN", Number:"73", Image:"/Images/EMN/Liliana--theLastHope.jpg", },
{Name:"Liliana's Elite", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"74", Image:"/Images/EMN/LilianasElite.jpg", },
{Name:"Markov Crusader", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"75", Image:"/Images/EMN/MarkovCrusader.jpg", },
{Name:"Murder", Cost:"1BB", Color:["B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"EMN", Number:"76", Image:"/Images/EMN/Murder.jpg", },
{Name:"Noosegraf Mob", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"77", Image:"/Images/EMN/NoosegrafMob.jpg", },
{Name:"Oath of Liliana", Cost:"2B", Color:["B"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"EMN", Number:"78", Image:"/Images/EMN/OathofLiliana.jpg", },
{Name:"Olivia's Dragoon", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"79", Image:"/Images/EMN/OliviasDragoon.jpg", },
{Name:"Prying Questions", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"80", Image:"/Images/EMN/PryingQuestions.jpg", },
{Name:"Rise from the Grave", Cost:"4B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMN", Number:"81", Image:"/Images/EMN/RisefromtheGrave.jpg", },
{Name:"Ruthless Disposal", Cost:"4B", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"EMN", Number:"82", Image:"/Images/EMN/RuthlessDisposal.jpg", },
{Name:"Skirsdag Supplicant", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"83", Image:"/Images/EMN/SkirsdagSupplicant.jpg", },
{Name:"Strange Augmentation", Cost:"0B", Color:["B"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"EMN", Number:"84", Image:"/Images/EMN/StrangeAugmentation.jpg", },
{Name:"Stromkirk Condemned", Cost:"0BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"85", Image:"/Images/EMN/StromkirkCondemned.jpg", },
{Name:"Succumb to Temptation", Cost:"1BB", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"86", Image:"/Images/EMN/SuccumbtoTemptation.jpg", },
{Name:"Thraben Foulbloods", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"87", Image:"/Images/EMN/ThrabenFoulbloods.jpg", },
{Name:"Tree of Perdition", Cost:"3B", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"88", Image:"/Images/EMN/TreeofPerdition.jpg", },
{Name:"Vampire Cutthroat", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"89", Image:"/Images/EMN/VampireCutthroat.jpg", },
{Name:"Wailing Ghoul", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"90", Image:"/Images/EMN/WailingGhoul.jpg", },
{Name:"Weirded Vampire", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"91", Image:"/Images/EMN/WeirdedVampire.jpg", },
{Name:"Whispers of Emrakul", Cost:"1B", Color:["B"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"EMN", Number:"92", Image:"/Images/EMN/WhispersofEmrakul.jpg", },
{Name:"Abandon Reason", Cost:"2R", Color:["R"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"93", Image:"/Images/EMN/AbandonReason.jpg", },
{Name:"Alchemist's Greeting", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"94", Image:"/Images/EMN/AlchemistsGreeting.jpg", },
{Name:"Assembled Alphas", Cost:"5R", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"95", Image:"/Images/EMN/AssembledAlphas.jpg", },
{Name:"Bedlam Reveler", Cost:"6RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"96", Image:"/Images/EMN/BedlamReveler.jpg", },
{Name:"Blood Mist", Cost:"3R", Color:["R"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"EMN", Number:"97", Image:"/Images/EMN/BloodMist.jpg", },
{Name:"Bold Impaler", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"98", Image:"/Images/EMN/BoldImpaler.jpg", },
{Name:"Borrowed Hostility", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"99", Image:"/Images/EMN/BorrowedHostility.jpg", },
{Name:"Brazen Wolves", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"100", Image:"/Images/EMN/BrazenWolves.jpg", },
{Name:"Collective Defiance", Cost:"1RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"EMN", Number:"101", Image:"/Images/EMN/CollectiveDefiance.jpg", },
{Name:"Deranged Whelp", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"102", Image:"/Images/EMN/DerangedWhelp.jpg", },
{Name:"Distemper of the Blood", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"EMN", Number:"103", Image:"/Images/EMN/DistemperoftheBlood.jpg", },
{Name:"Falkenrath Reaver", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"104", Image:"/Images/EMN/FalkenrathReaver.jpg", },
{Name:"Furyblade Vampire", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"105", Image:"/Images/EMN/FurybladeVampire.jpg", },
{Name:"Galvanic Bombardment", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"106", Image:"/Images/EMN/GalvanicBombardment.jpg", },
{Name:"Harmless Offering", Cost:"2R", Color:["R"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"107", Image:"/Images/EMN/HarmlessOffering.jpg", },
{Name:"Impetuous Devils", Cost:"2RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"108", Image:"/Images/EMN/ImpetuousDevils.jpg", },
{Name:"Incendiary Flow", Cost:"1R", Color:["R"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"EMN", Number:"109", Image:"/Images/EMN/IncendiaryFlow.jpg", },
{Name:"Insatiable Gorgers", Cost:"2RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"110", Image:"/Images/EMN/InsatiableGorgers.jpg", },
{Name:"Make Mischief", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"111", Image:"/Images/EMN/MakeMischief.jpg", },
{Name:"Mirrorwing Dragon", Cost:"3RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"112", Image:"/Images/EMN/MirrorwingDragon.jpg", },
{Name:"Nahiri's Wrath", Cost:"2R", Color:["R"], Rarity:"M", Type:["S"], Rating:"7", Sort:"1", Set:"EMN", Number:"113", Image:"/Images/EMN/NahirisWrath.jpg", },
{Name:"Otherworldly Outburst", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"114", Image:"/Images/EMN/OtherworldlyOutburst.jpg", },
{Name:"Prophetic Ravings", Cost:"0R", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"EMN", Number:"115", Image:"/Images/EMN/PropheticRavings.jpg", },
{Name:"Savage Alliance", Cost:"2R", Color:["R"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"EMN", Number:"116", Image:"/Images/EMN/SavageAlliance.jpg", },
{Name:"Shreds of Sanity", Cost:"2R", Color:["R"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"EMN", Number:"117", Image:"/Images/EMN/ShredsofSanity.jpg", },
{Name:"Spreading Flames", Cost:"6R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"118", Image:"/Images/EMN/SpreadingFlames.jpg", },
{Name:"Stensia Banquet", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"EMN", Number:"119", Image:"/Images/EMN/StensiaBanquet.jpg", },
{Name:"Stensia Innkeeper", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"120", Image:"/Images/EMN/StensiaInnkeeper.jpg", },
{Name:"Stromkirk Occultist", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"121", Image:"/Images/EMN/StromkirkOccultist.jpg", },
{Name:"Thermo-Alchemist", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"122", Image:"/Images/EMN/Thermo-Alchemist.jpg", },
{Name:"Weaver of Lightning", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"123", Image:"/Images/EMN/WeaverofLightning.jpg", },
{Name:"Backwoods Survivalists", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"124", Image:"/Images/EMN/BackwoodsSurvivalists.jpg", },
{Name:"Bloodbriar", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"125", Image:"/Images/EMN/Bloodbriar.jpg", },
{Name:"Clear Shot", Cost:"2G", Color:["G"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMN", Number:"126", Image:"/Images/EMN/ClearShot.jpg", },
{Name:"Crop Sigil", Cost:"0G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"EMN", Number:"127", Image:"/Images/EMN/CropSigil.jpg", },
{Name:"Crossroads Consecrator", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"EMN", Number:"128", Image:"/Images/EMN/CrossroadsConsecrator.jpg", },
{Name:"Eldritch Evolution", Cost:"1GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"EMN", Number:"129", Image:"/Images/EMN/EldritchEvolution.jpg", },
{Name:"Emrakul's Evangel", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"130", Image:"/Images/EMN/EmrakulsEvangel.jpg", },
{Name:"Emrakul's Influence", Cost:"2GG", Color:["G"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"EMN", Number:"131", Image:"/Images/EMN/EmrakulsInfluence.jpg", },
{Name:"Foul Emissary", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"132", Image:"/Images/EMN/FoulEmissary.jpg", },
{Name:"Gnarlwood Dryad", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"133", Image:"/Images/EMN/GnarlwoodDryad.jpg", },
{Name:"Grapple with the Past", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"134", Image:"/Images/EMN/GrapplewiththePast.jpg", },
{Name:"Hamlet Captain", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"135", Image:"/Images/EMN/HamletCaptain.jpg", },
{Name:"Ishkanah, Grafwidow", Cost:"4G", Color:["G"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"136", Image:"/Images/EMN/Ishkanah--Grafwidow.jpg", },
{Name:"Noose Constrictor", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"137", Image:"/Images/EMN/NooseConstrictor.jpg", },
{Name:"Permeating Mass", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"138", Image:"/Images/EMN/PermeatingMass.jpg", },
{Name:"Prey Upon", Cost:"0G", Color:["G"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMN", Number:"139", Image:"/Images/EMN/PreyUpon.jpg", },
{Name:"Primal Druid", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"140", Image:"/Images/EMN/PrimalDruid.jpg", },
{Name:"Somberwald Stag", Cost:"3GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"141", Image:"/Images/EMN/SomberwaldStag.jpg", },
{Name:"Spirit of the Hunt", Cost:"1GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"142", Image:"/Images/EMN/SpiritoftheHunt.jpg", },
{Name:"Splendid Reclamation", Cost:"3G", Color:["G"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMN", Number:"143", Image:"/Images/EMN/SplendidReclamation.jpg", },
{Name:"Springsage Ritual", Cost:"3G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"EMN", Number:"144", Image:"/Images/EMN/SpringsageRitual.jpg", },
{Name:"Swift Spinner", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"145", Image:"/Images/EMN/SwiftSpinner.jpg", },
{Name:"Ulvenwald Observer", Cost:"4GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"146", Image:"/Images/EMN/UlvenwaldObserver.jpg", },
{Name:"Waxing Moon", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"EMN", Number:"147", Image:"/Images/EMN/WaxingMoon.jpg", },
{Name:"Wolfkin Bond", Cost:"4G", Color:["G"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"EMN", Number:"148", Image:"/Images/EMN/WolfkinBond.jpg", },
{Name:"Woodcutter's Grit", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"EMN", Number:"149", Image:"/Images/EMN/WoodcuttersGrit.jpg", },
{Name:"Woodland Patrol", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"150", Image:"/Images/EMN/WoodlandPatrol.jpg", },
{Name:"Bloodhall Priest", Cost:"2BR", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"151", Image:"/Images/EMN/BloodhallPriest.jpg", },
{Name:"Campaign of Vengeance", Cost:"3WB", Color:["W","B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMN", Number:"152", Image:"/Images/EMN/CampaignofVengeance.jpg", },
{Name:"Gisa and Geralf", Cost:"2UB", Color:["U","B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"EMN", Number:"153", Image:"/Images/EMN/GisaandGeralf.jpg", },
{Name:"Grim Flayer", Cost:"0BG", Color:["B","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"EMN", Number:"154", Image:"/Images/EMN/GrimFlayer.jpg", },
{Name:"Heron's Grace Champion", Cost:"2GW", Color:["G","W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"155", Image:"/Images/EMN/HeronsGraceChampion.jpg", },
{Name:"Mercurial Geists", Cost:"2UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"156", Image:"/Images/EMN/MercurialGeists.jpg", },
{Name:"Mournwillow", Cost:"1BG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"157", Image:"/Images/EMN/Mournwillow.jpg", },
{Name:"Ride Down", Cost:"0RW", Color:["R","W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"EMN", Number:"158", Image:"/Images/EMN/RideDown.jpg", },
{Name:"Spell Queller", Cost:"1WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"159", Image:"/Images/EMN/SpellQueller.jpg", },
{Name:"Tamiyo, Field Researcher", Cost:"1GWB", Color:["G","W","B"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"EMN", Number:"160", Image:"/Images/EMN/Tamiyo--FieldResearcher.jpg", },
{Name:"Abundant Maw", Cost:"8", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"161", Image:"/Images/EMN/AbundantMaw.jpg", },
{Name:"Decimator of the Provinces", Cost:"10", Color:["C"], Rarity:"M", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"162", Image:"/Images/EMN/DecimatoroftheProvinces.jpg", },
{Name:"Distended Mindbender", Cost:"8", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"163", Image:"/Images/EMN/DistendedMindbender.jpg", },
{Name:"Drownyard Behemoth", Cost:"9", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"164", Image:"/Images/EMN/DrownyardBehemoth.jpg", },
{Name:"Elder Deep-Fiend", Cost:"8", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"165", Image:"/Images/EMN/ElderDeep-Fiend.jpg", },
{Name:"Emrakul, the Promised End", Cost:"13", Color:["C"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"166", Image:"/Images/EMN/Emrakul--thePromisedEnd.jpg", },
{Name:"Eternal Scourge", Cost:"3", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"167", Image:"/Images/EMN/EternalScourge.jpg", },
{Name:"It of the Horrid Swarm", Cost:"8", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"168", Image:"/Images/EMN/ItoftheHorridSwarm.jpg", },
{Name:"Lashweed Lurker", Cost:"8", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"169", Image:"/Images/EMN/LashweedLurker.jpg", },
{Name:"Mockery of Nature", Cost:"9", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"170", Image:"/Images/EMN/MockeryofNature.jpg", },
{Name:"Vexing Scuttler", Cost:"8", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"171", Image:"/Images/EMN/VexingScuttler.jpg", },
{Name:"Wretched Gryff", Cost:"7", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"172", Image:"/Images/EMN/WretchedGryff.jpg", },
{Name:"Extricator of Sin", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"173", Image:"/Images/EMN/ExtricatorofSin.jpg", ReverseImage:"/Images/EMN/ExtricatorofFlesh.jpg"},
{Name:"Lone Rider", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"174", Image:"/Images/EMN/LoneRider.jpg", ReverseImage:"/Images/EMN/ItThatRidesasOne.jpg"},
{Name:"Curious Homunculus", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"175", Image:"/Images/EMN/CuriousHomunculus.jpg", ReverseImage:"/Images/EMN/VoraciousReader.jpg"},
{Name:"Docent of Perfection", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"176", Image:"/Images/EMN/DocentofPerfection.jpg", ReverseImage:"/Images/EMN/FinalIteration.jpg"},
{Name:"Grizzled Angler", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"177", Image:"/Images/EMN/GrizzledAngler.jpg", ReverseImage:"/Images/EMN/GrislyAnglerfish.jpg"},
{Name:"Voldaren Pariah", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"178", Image:"/Images/EMN/VoldarenPariah.jpg", ReverseImage:"/Images/EMN/AbolisherofBloodlines.jpg"},
{Name:"Conduit of Storms", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"179", Image:"/Images/EMN/ConduitofStorms.jpg", ReverseImage:"/Images/EMN/ConduitofEmrakul.jpg"},
{Name:"Smoldering Werewolf", Cost:"2RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"180", Image:"/Images/EMN/SmolderingWerewolf.jpg", ReverseImage:"/Images/EMN/EruptingDreadwolf.jpg"},
{Name:"Vildin-Pack Outcast", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"181", Image:"/Images/EMN/Vildin-PackOutcast.jpg", ReverseImage:"/Images/EMN/DronepackKindred.jpg"},
{Name:"Kessig Prowler", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"182", Image:"/Images/EMN/KessigProwler.jpg", ReverseImage:"/Images/EMN/SinuousPredator.jpg"},
{Name:"Shrill Howler", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"EMN", Number:"183", Image:"/Images/EMN/ShrillHowler.jpg", ReverseImage:"/Images/EMN/HowlingChorus.jpg"},
{Name:"Tangleclaw Werewolf", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"EMN", Number:"184", Image:"/Images/EMN/TangleclawWerewolf.jpg", ReverseImage:"/Images/EMN/FibrousEntangler.jpg"},
{Name:"Ulvenwald Captive", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"185", Image:"/Images/EMN/UlvenwaldCaptive.jpg", ReverseImage:"/Images/EMN/UlvenwaldAbomination.jpg"},
{Name:"Ulrich of the Krallenhorde", Cost:"3RG", Color:["R","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"EMN", Number:"186", Image:"/Images/EMN/UlrichoftheKrallenhorde.jpg", ReverseImage:"/Images/EMN/Ulrich--UncontestedAlpha.jpg"},
{Name:"Cryptolith Fragment", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"7", Sort:"1", Set:"EMN", Number:"187", Image:"/Images/EMN/CryptolithFragment.jpg", ReverseImage:"/Images/EMN/AuroraofEmrakul.jpg"},
{Name:"Cathar's Shield", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"EMN", Number:"188", Image:"/Images/EMN/CatharsShield.jpg", },
{Name:"Cultist's Staff", Cost:"0", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"EMN", Number:"189", Image:"/Images/EMN/CultistsStaff.jpg", },
{Name:"Field Creeper", Cost:"2", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"190", Image:"/Images/EMN/FieldCreeper.jpg", },
{Name:"Geist-Fueled Scarecrow", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"EMN", Number:"191", Image:"/Images/EMN/Geist-FueledScarecrow.jpg", },
{Name:"Lupine Prototype", Cost:"2", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"EMN", Number:"192", Image:"/Images/EMN/LupinePrototype.jpg", },
{Name:"Slayer's Cleaver", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"2", Sort:"1", Set:"EMN", Number:"193", Image:"/Images/EMN/SlayersCleaver.jpg", },
{Name:"Soul Separator", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"8", Sort:"1", Set:"EMN", Number:"194", Image:"/Images/EMN/SoulSeparator.jpg", },
{Name:"Stitcher's Graft", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMN", Number:"195", Image:"/Images/EMN/StitchersGraft.jpg", },
{Name:"Terrarion", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"EMN", Number:"196", Image:"/Images/EMN/Terrarion.jpg", },
{Name:"Thirsting Axe", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMN", Number:"197", Image:"/Images/EMN/ThirstingAxe.jpg", },
{Name:"Geier Reach Sanitarium", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"EMN", Number:"198", Image:"/Images/EMN/GeierReachSanitarium.jpg", },
{Name:"Nephalia Academy", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"5", Sort:"1", Set:"EMN", Number:"199", Image:"/Images/EMN/NephaliaAcademy.jpg", },
{Name:"Gisela, the Broken Blade", Cost:"2WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"EMN", Number:"200", Image:"/Images/EMN/Gisela--theBrokenBlade.jpg", ReverseImage:"/Images/EMN/Brisela--VoiceofNightmares(Top).jpg"},
{Name:"Bruna, the Fading Light", Cost:"5WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"EMN", Number:"201", Image:"/Images/EMN/Bruna--theFadingLight.jpg", ReverseImage:"/Images/EMN/Brisela--VoiceofNightmares(Bottom).jpg"},
{Name:"Graf Rats", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"202", Image:"/Images/EMN/GrafRats.jpg", ReverseImage:"/Images/EMN/ChitteringHost(Top).jpg"},
{Name:"Midnight Scavengers", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMN", Number:"203", Image:"/Images/EMN/MidnightScavengers.jpg", ReverseImage:"/Images/EMN/ChitteringHost(Bottom).jpg"},
{Name:"Hanweir Battlements", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"EMN", Number:"204", Image:"/Images/EMN/HanweirBattlements.jpg", ReverseImage:"/Images/EMN/Hanweir--theWrithingTownship(Top).jpg"},
{Name:"Hanweir Garrison", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"8", Sort:"1", Set:"EMN", Number:"205", Image:"/Images/EMN/HanweirGarrison.jpg", ReverseImage:"/Images/EMN/Hanweir--theWrithingTownship(Bottom).jpg"},
];

var EMA = [
{Name:"Aven Riftwatcher", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"1", Image:"/Images/EMA/AvenRiftwatcher.jpg"},
{Name:"Balance", Cost:"1W", Color:["W"], Rarity:"M", Type:["S"], Rating:"7", Sort:"1", Set:"EMA", Number:"2", Image:"/Images/EMA/Balance.jpg"},
{Name:"Ballynock Cohort", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"3", Image:"/Images/EMA/BallynockCohort.jpg"},
{Name:"Benevolent Bodyguard", Cost:"W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"4", Image:"/Images/EMA/BenevolentBodyguard.jpg"},
{Name:"Calciderm", Cost:"2WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"5", Image:"/Images/EMA/Calciderm.jpg"},
{Name:"Coalition Honor Guard", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"6", Image:"/Images/EMA/CoalitionHonorGuard.jpg"},
{Name:"Eight-and-a-Half-Tails", Cost:"0WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"7", Image:"/Images/EMA/Eight-and-a-Half-Tails.jpg"},
{Name:"Elite Vanguard", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"8", Image:"/Images/EMA/EliteVanguard.jpg"},
{Name:"Enlightened Tutor", Cost:"0W", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"9", Image:"/Images/EMA/EnlightenedTutor.jpg"},
{Name:"Faith's Fetters", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"10", Image:"/Images/EMA/FaithsFetters.jpg"},
{Name:"Field of Souls", Cost:"2WW", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"11", Image:"/Images/EMA/FieldofSouls.jpg"},
{Name:"Glimmerpoint Stag", Cost:"2WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"12", Image:"/Images/EMA/GlimmerpointStag.jpg"},
{Name:"Honden of Cleansing Fire", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"13", Image:"/Images/EMA/HondenofCleansingFire.jpg"},
{Name:"Humble", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"14", Image:"/Images/EMA/Humble.jpg"},
{Name:"Intangible Virtue", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"15", Image:"/Images/EMA/IntangibleVirtue.jpg"},
{Name:"Jareth, Leonine Titan", Cost:"3WWW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"16", Image:"/Images/EMA/Jareth--LeonineTitan.jpg"},
{Name:"Karmic Guide", Cost:"3WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"17", Image:"/Images/EMA/KarmicGuide.jpg"},
{Name:"Kor Hookmaster", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"18", Image:"/Images/EMA/KorHookmaster.jpg"},
{Name:"Mesa Enchantress", Cost:"1WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"19", Image:"/Images/EMA/MesaEnchantress.jpg"},
{Name:"Mistral Charger", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"20", Image:"/Images/EMA/MistralCharger.jpg"},
{Name:"Monk Idealist", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"21", Image:"/Images/EMA/MonkIdealist.jpg"},
{Name:"Mother of Runes", Cost:"0W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"22", Image:"/Images/EMA/MotherofRunes.jpg"},
{Name:"Pacifism", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"23", Image:"/Images/EMA/Pacifism.jpg"},
{Name:"Raise the Alarm", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"24", Image:"/Images/EMA/RaisetheAlarm.jpg"},
{Name:"Rally the Peasants", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"25", Image:"/Images/EMA/RallythePeasants.jpg"},
{Name:"Seal of Cleansing", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"26", Image:"/Images/EMA/SealofCleansing.jpg"},
{Name:"Second Thoughts", Cost:"4W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"27", Image:"/Images/EMA/SecondThoughts.jpg"},
{Name:"Serra Angel", Cost:"3WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"28", Image:"/Images/EMA/SerraAngel.jpg"},
{Name:"Shelter", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"29", Image:"/Images/EMA/Shelter.jpg"},
{Name:"Soulcatcher", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"30", Image:"/Images/EMA/Soulcatcher.jpg"},
{Name:"Squadron Hawk", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"31", Image:"/Images/EMA/SquadronHawk.jpg"},
{Name:"Swords to Plowshares", Cost:"0W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"32", Image:"/Images/EMA/SwordstoPlowshares.jpg"},
{Name:"Unexpectedly Absent", Cost:"0WW", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"33", Image:"/Images/EMA/UnexpectedlyAbsent.jpg"},
{Name:"Wall of Omens", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"34", Image:"/Images/EMA/WallofOmens.jpg"},
{Name:"War Priest of Thune", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"35", Image:"/Images/EMA/WarPriestofThune.jpg"},
{Name:"Welkin Guide", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"36", Image:"/Images/EMA/WelkinGuide.jpg"},
{Name:"Whitemane Lion", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"37", Image:"/Images/EMA/WhitemaneLion.jpg"},
{Name:"Wrath of God", Cost:"2WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"38", Image:"/Images/EMA/WrathofGod.jpg"},
{Name:"Arcanis the Omnipotent", Cost:"3UUU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"39", Image:"/Images/EMA/ArcanistheOmnipotent.jpg"},
{Name:"Brainstorm", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"40", Image:"/Images/EMA/Brainstorm.jpg"},
{Name:"Cephalid Sage", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"41", Image:"/Images/EMA/CephalidSage.jpg"},
{Name:"Control Magic", Cost:"2UU", Color:["U"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"42", Image:"/Images/EMA/ControlMagic.jpg"},
{Name:"Counterspell", Cost:"0UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"43", Image:"/Images/EMA/Counterspell.jpg"},
{Name:"Daze", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"44", Image:"/Images/EMA/Daze.jpg"},
{Name:"Deep Analysis", Cost:"3UU", Color:["U"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"45", Image:"/Images/EMA/DeepAnalysis.jpg"},
{Name:"Diminishing Returns", Cost:"2UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"46", Image:"/Images/EMA/DiminishingReturns.jpg"},
{Name:"Dream Twist", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"47", Image:"/Images/EMA/DreamTwist.jpg"},
{Name:"Fact or Fiction", Cost:"3U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"48", Image:"/Images/EMA/FactorFiction.jpg"},
{Name:"Force of Will", Cost:"3UU", Color:["U"], Rarity:"M", Type:["I"], Rating:"7", Sort:"1", Set:"EMA", Number:"49", Image:"/Images/EMA/ForceofWill.jpg"},
{Name:"Future Sight", Cost:"2UUU", Color:["U"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"50", Image:"/Images/EMA/FutureSight.jpg"},
{Name:"Gaseous Form", Cost:"2U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"51", Image:"/Images/EMA/GaseousForm.jpg"},
{Name:"Giant Tortoise", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"52", Image:"/Images/EMA/GiantTortoise.jpg"},
{Name:"Glacial Wall", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"53", Image:"/Images/EMA/GlacialWall.jpg"},
{Name:"Honden of Seeing Winds", Cost:"4U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"54", Image:"/Images/EMA/HondenofSeeingWinds.jpg"},
{Name:"Hydroblast", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"55", Image:"/Images/EMA/Hydroblast.jpg"},
{Name:"Inkwell Leviathan", Cost:"7UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"56", Image:"/Images/EMA/InkwellLeviathan.jpg"},
{Name:"Jace, the Mind Sculptor", Cost:"2UU", Color:["U"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"EMA", Number:"57", Image:"/Images/EMA/Jace--theMindSculptor.jpg"},
{Name:"Jetting Glasskite", Cost:"4UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"58", Image:"/Images/EMA/JettingGlasskite.jpg"},
{Name:"Man-o'-War", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"59", Image:"/Images/EMA/Man-o-War.jpg"},
{Name:"Memory Lapse", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"60", Image:"/Images/EMA/MemoryLapse.jpg"},
{Name:"Merfolk Looter", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"61", Image:"/Images/EMA/MerfolkLooter.jpg"},
{Name:"Mystical Tutor", Cost:"0U", Color:["U"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"62", Image:"/Images/EMA/MysticalTutor.jpg"},
{Name:"Oona's Grace", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"63", Image:"/Images/EMA/OonasGrace.jpg"},
{Name:"Peregrine Drake", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"64", Image:"/Images/EMA/PeregrineDrake.jpg"},
{Name:"Phantom Monster", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"65", Image:"/Images/EMA/PhantomMonster.jpg"},
{Name:"Phyrexian Ingester", Cost:"6U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"66", Image:"/Images/EMA/PhyrexianIngester.jpg"},
{Name:"Prodigal Sorcerer", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"67", Image:"/Images/EMA/ProdigalSorcerer.jpg"},
{Name:"Quiet Speculation", Cost:"1U", Color:["U"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"68", Image:"/Images/EMA/QuietSpeculation.jpg"},
{Name:"Screeching Skaab", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"69", Image:"/Images/EMA/ScreechingSkaab.jpg"},
{Name:"Serendib Efreet", Cost:"2U", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"70", Image:"/Images/EMA/SerendibEfreet.jpg"},
{Name:"Shoreline Ranger", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"71", Image:"/Images/EMA/ShorelineRanger.jpg"},
{Name:"Silent Departure", Cost:"0U", Color:["U"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"72", Image:"/Images/EMA/SilentDeparture.jpg"},
{Name:"Sprite Noble", Cost:"1UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"73", Image:"/Images/EMA/SpriteNoble.jpg"},
{Name:"Stupefying Touch", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"74", Image:"/Images/EMA/StupefyingTouch.jpg"},
{Name:"Tidal Wave", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"75", Image:"/Images/EMA/TidalWave.jpg"},
{Name:"Warden of Evos Isle", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"76", Image:"/Images/EMA/WardenofEvosIsle.jpg"},
{Name:"Wonder", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"77", Image:"/Images/EMA/Wonder.jpg"},
{Name:"Animate Dead", Cost:"1B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"78", Image:"/Images/EMA/AnimateDead.jpg"},
{Name:"Annihilate", Cost:"3BB", Color:["B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"79", Image:"/Images/EMA/Annihilate.jpg"},
{Name:"Blightsoil Druid", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"80", Image:"/Images/EMA/BlightsoilDruid.jpg"},
{Name:"Blood Artist", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"81", Image:"/Images/EMA/BloodArtist.jpg"},
{Name:"Braids, Cabal Minion", Cost:"2BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"82", Image:"/Images/EMA/Braids--CabalMinion.jpg"},
{Name:"Cabal Therapy", Cost:"0B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"83", Image:"/Images/EMA/CabalTherapy.jpg"},
{Name:"Carrion Feeder", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"84", Image:"/Images/EMA/CarrionFeeder.jpg"},
{Name:"Deadbridge Shaman", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"85", Image:"/Images/EMA/DeadbridgeShaman.jpg"},
{Name:"Duress", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"86", Image:"/Images/EMA/Duress.jpg"},
{Name:"Entomb", Cost:"0B", Color:["B"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"87", Image:"/Images/EMA/Entomb.jpg"},
{Name:"Eyeblight's Ending", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"88", Image:"/Images/EMA/EyeblightsEnding.jpg"},
{Name:"Gravedigger", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"89", Image:"/Images/EMA/Gravedigger.jpg"},
{Name:"Havoc Demon", Cost:"5BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"90", Image:"/Images/EMA/HavocDemon.jpg"},
{Name:"Honden of Night's Reach", Cost:"3B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"91", Image:"/Images/EMA/HondenofNightsReach.jpg"},
{Name:"Hymn to Tourach", Cost:"0BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"92", Image:"/Images/EMA/HymntoTourach.jpg"},
{Name:"Ichorid", Cost:"3B", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"93", Image:"/Images/EMA/Ichorid.jpg"},
{Name:"Innocent Blood", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"94", Image:"/Images/EMA/InnocentBlood.jpg"},
{Name:"Lys Alana Scarblade", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"95", Image:"/Images/EMA/LysAlanaScarblade.jpg"},
{Name:"Malicious Affliction", Cost:"0BB", Color:["B"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"96", Image:"/Images/EMA/MaliciousAffliction.jpg"},
{Name:"Nausea", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"97", Image:"/Images/EMA/Nausea.jpg"},
{Name:"Necropotence", Cost:"0BBB", Color:["B"], Rarity:"M", Type:["E"], Rating:"10", Sort:"1", Set:"EMA", Number:"98", Image:"/Images/EMA/Necropotence.jpg"},
{Name:"Nekrataal", Cost:"2BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"99", Image:"/Images/EMA/Nekrataal.jpg"},
{Name:"Night's Whisper", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"100", Image:"/Images/EMA/NightsWhisper.jpg"},
{Name:"Phyrexian Gargantua", Cost:"4BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"101", Image:"/Images/EMA/PhyrexianGargantua.jpg"},
{Name:"Phyrexian Rager", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"102", Image:"/Images/EMA/PhyrexianRager.jpg"},
{Name:"Plague Witch", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"103", Image:"/Images/EMA/PlagueWitch.jpg"},
{Name:"Prowling Pangolin", Cost:"3BB", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"104", Image:"/Images/EMA/ProwlingPangolin.jpg"},
{Name:"Sengir Autocrat", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"105", Image:"/Images/EMA/SengirAutocrat.jpg"},
{Name:"Sinkhole", Cost:"0BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"106", Image:"/Images/EMA/Sinkhole.jpg"},
{Name:"Skulking Ghost", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"107", Image:"/Images/EMA/SkulkingGhost.jpg"},
{Name:"Toxic Deluge", Cost:"2B", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"108", Image:"/Images/EMA/ToxicDeluge.jpg"},
{Name:"Tragic Slip", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"109", Image:"/Images/EMA/TragicSlip.jpg"},
{Name:"Twisted Abomination", Cost:"5B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"110", Image:"/Images/EMA/TwistedAbomination.jpg"},
{Name:"Urborg Uprising", Cost:"4B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"111", Image:"/Images/EMA/UrborgUprising.jpg"},
{Name:"Vampiric Tutor", Cost:"0B", Color:["B"], Rarity:"M", Type:["I"], Rating:"7", Sort:"1", Set:"EMA", Number:"112", Image:"/Images/EMA/VampiricTutor.jpg"},
{Name:"Victimize", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"113", Image:"/Images/EMA/Victimize.jpg"},
{Name:"Visara the Dreadful", Cost:"3BBB", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"114", Image:"/Images/EMA/VisaratheDreadful.jpg"},
{Name:"Wake of Vultures", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"115", Image:"/Images/EMA/WakeofVultures.jpg"},
{Name:"Wakedancer", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"116", Image:"/Images/EMA/Wakedancer.jpg"},
{Name:"Avarax", Cost:"3RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"117", Image:"/Images/EMA/Avarax.jpg"},
{Name:"Battle Squadron", Cost:"3RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"118", Image:"/Images/EMA/BattleSquadron.jpg"},
{Name:"Beetleback Chief", Cost:"2RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"119", Image:"/Images/EMA/BeetlebackChief.jpg"},
{Name:"Borderland Marauder", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"120", Image:"/Images/EMA/BorderlandMarauder.jpg"},
{Name:"Burning Vengeance", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"121", Image:"/Images/EMA/BurningVengeance.jpg"},
{Name:"Carbonize", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"122", Image:"/Images/EMA/Carbonize.jpg"},
{Name:"Chain Lightning", Cost:"0R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"123", Image:"/Images/EMA/ChainLightning.jpg"},
{Name:"Crater Hellion", Cost:"4RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"124", Image:"/Images/EMA/CraterHellion.jpg"},
{Name:"Desperate Ravings", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"125", Image:"/Images/EMA/DesperateRavings.jpg"},
{Name:"Dragon Egg", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"126", Image:"/Images/EMA/DragonEgg.jpg"},
{Name:"Dualcaster Mage", Cost:"1RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"127", Image:"/Images/EMA/DualcasterMage.jpg"},
{Name:"Faithless Looting", Cost:"0R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"128", Image:"/Images/EMA/FaithlessLooting.jpg"},
{Name:"Fervent Cathar", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"129", Image:"/Images/EMA/FerventCathar.jpg"},
{Name:"Firebolt", Cost:"0R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"130", Image:"/Images/EMA/Firebolt.jpg"},
{Name:"Flame Jab", Cost:"0R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"131", Image:"/Images/EMA/FlameJab.jpg"},
{Name:"Gamble", Cost:"0R", Color:["R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"132", Image:"/Images/EMA/Gamble.jpg"},
{Name:"Ghitu Slinger", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"133", Image:"/Images/EMA/GhituSlinger.jpg"},
{Name:"Honden of Infinite Rage", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"134", Image:"/Images/EMA/HondenofInfiniteRage.jpg"},
{Name:"Keldon Champion", Cost:"2RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"135", Image:"/Images/EMA/KeldonChampion.jpg"},
{Name:"Keldon Marauders", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"136", Image:"/Images/EMA/KeldonMarauders.jpg"},
{Name:"Kird Ape", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"137", Image:"/Images/EMA/KirdApe.jpg"},
{Name:"Mogg Fanatic", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"138", Image:"/Images/EMA/MoggFanatic.jpg"},
{Name:"Mogg War Marshal", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"139", Image:"/Images/EMA/MoggWarMarshal.jpg"},
{Name:"Orcish Oriflamme", Cost:"3R", Color:["R"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"140", Image:"/Images/EMA/OrcishOriflamme.jpg"},
{Name:"Price of Progress", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"141", Image:"/Images/EMA/PriceofProgress.jpg"},
{Name:"Pyroblast", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"142", Image:"/Images/EMA/Pyroblast.jpg"},
{Name:"Pyrokinesis", Cost:"4RR", Color:["R"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"EMA", Number:"143", Image:"/Images/EMA/Pyrokinesis.jpg"},
{Name:"Reckless Charge", Cost:"0R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"144", Image:"/Images/EMA/RecklessCharge.jpg"},
{Name:"Rorix Bladewing", Cost:"3RRR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"145", Image:"/Images/EMA/RorixBladewing.jpg"},
{Name:"Seismic Stomp", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"146", Image:"/Images/EMA/SeismicStomp.jpg"},
{Name:"Siege-Gang Commander", Cost:"3RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"147", Image:"/Images/EMA/Siege-GangCommander.jpg"},
{Name:"Sneak Attack", Cost:"3R", Color:["R"], Rarity:"M", Type:["E"], Rating:"7", Sort:"1", Set:"EMA", Number:"148", Image:"/Images/EMA/SneakAttack.jpg"},
{Name:"Stingscourger", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"149", Image:"/Images/EMA/Stingscourger.jpg"},
{Name:"Sulfuric Vortex", Cost:"1RR", Color:["R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"150", Image:"/Images/EMA/SulfuricVortex.jpg"},
{Name:"Tooth and Claw", Cost:"3R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"151", Image:"/Images/EMA/ToothandClaw.jpg"},
{Name:"Undying Rage", Cost:"2R", Color:["R"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"152", Image:"/Images/EMA/UndyingRage.jpg"},
{Name:"Wildfire Emissary", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"153", Image:"/Images/EMA/WildfireEmissary.jpg"},
{Name:"Worldgorger Dragon", Cost:"3RRR", Color:["R"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"EMA", Number:"154", Image:"/Images/EMA/WorldgorgerDragon.jpg"},
{Name:"Young Pyromancer", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"155", Image:"/Images/EMA/YoungPyromancer.jpg"},
{Name:"Abundant Growth", Cost:"0G", Color:["G"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"156", Image:"/Images/EMA/AbundantGrowth.jpg"},
{Name:"Ancestral Mask", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"157", Image:"/Images/EMA/AncestralMask.jpg"},
{Name:"Argothian Enchantress", Cost:"1G", Color:["G"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"EMA", Number:"158", Image:"/Images/EMA/ArgothianEnchantress.jpg"},
{Name:"Brawn", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"159", Image:"/Images/EMA/Brawn.jpg"},
{Name:"Centaur Chieftain", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"160", Image:"/Images/EMA/CentaurChieftain.jpg"},
{Name:"Civic Wayfinder", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"161", Image:"/Images/EMA/CivicWayfinder.jpg"},
{Name:"Commune with the Gods", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"162", Image:"/Images/EMA/CommunewiththeGods.jpg"},
{Name:"Elephant Guide", Cost:"2G", Color:["G"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"163", Image:"/Images/EMA/ElephantGuide.jpg"},
{Name:"Elvish Vanguard", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"164", Image:"/Images/EMA/ElvishVanguard.jpg"},
{Name:"Emperor Crocodile", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"165", Image:"/Images/EMA/EmperorCrocodile.jpg"},
{Name:"Flinthoof Boar", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"166", Image:"/Images/EMA/FlinthoofBoar.jpg"},
{Name:"Fog", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"167", Image:"/Images/EMA/Fog.jpg"},
{Name:"Gaea's Blessing", Cost:"1G", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"168", Image:"/Images/EMA/GaeasBlessing.jpg"},
{Name:"Green Sun's Zenith", Cost:"0G", Color:["G"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"169", Image:"/Images/EMA/GreenSunsZenith.jpg"},
{Name:"Harmonize", Cost:"2GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"170", Image:"/Images/EMA/Harmonize.jpg"},
{Name:"Heritage Druid", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"171", Image:"/Images/EMA/HeritageDruid.jpg"},
{Name:"Honden of Life's Web", Cost:"4G", Color:["G"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"172", Image:"/Images/EMA/HondenofLifesWeb.jpg"},
{Name:"Imperious Perfect", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"173", Image:"/Images/EMA/ImperiousPerfect.jpg"},
{Name:"Invigorate", Cost:"2G", Color:["G"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"174", Image:"/Images/EMA/Invigorate.jpg"},
{Name:"Llanowar Elves", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"175", Image:"/Images/EMA/LlanowarElves.jpg"},
{Name:"Lys Alana Huntmaster", Cost:"2GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"176", Image:"/Images/EMA/LysAlanaHuntmaster.jpg"},
{Name:"Natural Order", Cost:"2GG", Color:["G"], Rarity:"M", Type:["S"], Rating:"7", Sort:"1", Set:"EMA", Number:"177", Image:"/Images/EMA/NaturalOrder.jpg"},
{Name:"Nature's Claim", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"178", Image:"/Images/EMA/NaturesClaim.jpg"},
{Name:"Nimble Mongoose", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"179", Image:"/Images/EMA/NimbleMongoose.jpg"},
{Name:"Rancor", Cost:"0G", Color:["G"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"180", Image:"/Images/EMA/Rancor.jpg"},
{Name:"Regal Force", Cost:"4GGG", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"181", Image:"/Images/EMA/RegalForce.jpg"},
{Name:"Roar of the Wurm", Cost:"6G", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"182", Image:"/Images/EMA/RoaroftheWurm.jpg"},
{Name:"Roots", Cost:"3G", Color:["G"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"183", Image:"/Images/EMA/Roots.jpg"},
{Name:"Seal of Strength", Cost:"0G", Color:["G"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"184", Image:"/Images/EMA/SealofStrength.jpg"},
{Name:"Sentinel Spider", Cost:"3GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"185", Image:"/Images/EMA/SentinelSpider.jpg"},
{Name:"Silvos, Rogue Elemental", Cost:"3GGG", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"186", Image:"/Images/EMA/Silvos--RogueElemental.jpg"},
{Name:"Sylvan Library", Cost:"1G", Color:["G"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"187", Image:"/Images/EMA/SylvanLibrary.jpg"},
{Name:"Sylvan Might", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"188", Image:"/Images/EMA/SylvanMight.jpg"},
{Name:"Thornweald Archer", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"189", Image:"/Images/EMA/ThornwealdArcher.jpg"},
{Name:"Timberwatch Elf", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"190", Image:"/Images/EMA/TimberwatchElf.jpg"},
{Name:"Werebear", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"191", Image:"/Images/EMA/Werebear.jpg"},
{Name:"Wirewood Symbiote", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"192", Image:"/Images/EMA/WirewoodSymbiote.jpg"},
{Name:"Xantid Swarm", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"193", Image:"/Images/EMA/XantidSwarm.jpg"},
{Name:"Yavimaya Enchantress", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"194", Image:"/Images/EMA/YavimayaEnchantress.jpg"},
{Name:"Armadillo Cloak", Cost:"1GW", Color:["W","G"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"EMA", Number:"195", Image:"/Images/EMA/ArmadilloCloak.jpg"},
{Name:"Baleful Strix", Cost:"0UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"196", Image:"/Images/EMA/BalefulStrix.jpg"},
{Name:"Bloodbraid Elf", Cost:"2RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"197", Image:"/Images/EMA/BloodbraidElf.jpg"},
{Name:"Brago, King Eternal", Cost:"2WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"198", Image:"/Images/EMA/Brago--KingEternal.jpg"},
{Name:"Dack Fayden", Cost:"1UR", Color:["U","R"], Rarity:"M", Type:["P"], Rating:"7", Sort:"1", Set:"EMA", Number:"199", Image:"/Images/EMA/DackFayden.jpg"},
{Name:"Extract from Darkness", Cost:"3UB", Color:["U","B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"200", Image:"/Images/EMA/ExtractfromDarkness.jpg"},
{Name:"Flame-Kin Zealot", Cost:"1RRW", Color:["R","W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"201", Image:"/Images/EMA/Flame-KinZealot.jpg"},
{Name:"Glare of Subdual", Cost:"2GW", Color:["G","W"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"202", Image:"/Images/EMA/GlareofSubdual.jpg"},
{Name:"Goblin Trenches", Cost:"1RW", Color:["R","W"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"EMA", Number:"203", Image:"/Images/EMA/GoblinTrenches.jpg"},
{Name:"Maelstrom Wanderer", Cost:"5URG", Color:["U","R","G"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"EMA", Number:"204", Image:"/Images/EMA/MaelstromWanderer.jpg"},
{Name:"Shaman of the Pack", Cost:"1BG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"205", Image:"/Images/EMA/ShamanofthePack.jpg"},
{Name:"Shardless Agent", Cost:"1UG", Color:["G","U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"206", Image:"/Images/EMA/ShardlessAgent.jpg"},
{Name:"Sphinx of the Steel Wind", Cost:"5WUB", Color:["W","U","B"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"EMA", Number:"207", Image:"/Images/EMA/SphinxoftheSteelWind.jpg"},
{Name:"Thunderclap Wyvern", Cost:"2WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"208", Image:"/Images/EMA/ThunderclapWyvern.jpg"},
{Name:"Trygon Predator", Cost:"1GU", Color:["G","U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"209", Image:"/Images/EMA/TrygonPredator.jpg"},
{Name:"Vindicate", Cost:"1WB", Color:["W","B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"210", Image:"/Images/EMA/Vindicate.jpg"},
{Name:"Void", Cost:"3BR", Color:["B","R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"211", Image:"/Images/EMA/Void.jpg"},
{Name:"Wee Dragonauts", Cost:"1UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"212", Image:"/Images/EMA/WeeDragonauts.jpg"},
{Name:"Zealous Persecution", Cost:"0WB", Color:["W","B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"EMA", Number:"213", Image:"/Images/EMA/ZealousPersecution.jpg"},
{Name:"Call the Skybreaker", Cost:"5UR", Color:["U","R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"EMA", Number:"214", Image:"/Images/EMA/CalltheSkybreaker.jpg"},
{Name:"Deathrite Shaman", Cost:"0B", Color:["B","G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"215", Image:"/Images/EMA/DeathriteShaman.jpg"},
{Name:"Giant Solifuge", Cost:"2RG", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"216", Image:"/Images/EMA/GiantSolifuge.jpg"},
{Name:"Torrent of Souls", Cost:"4R", Color:["B","R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"EMA", Number:"217", Image:"/Images/EMA/TorrentofSouls.jpg"},
{Name:"Ashnod's Altar", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMA", Number:"218", Image:"/Images/EMA/AshnodsAltar.jpg"},
{Name:"Chrome Mox", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"7", Sort:"1", Set:"EMA", Number:"219", Image:"/Images/EMA/ChromeMox.jpg"},
{Name:"Duplicant", Cost:"6", Color:["C"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"EMA", Number:"220", Image:"/Images/EMA/Duplicant.jpg"},
{Name:"Emmessi Tome", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMA", Number:"221", Image:"/Images/EMA/EmmessiTome.jpg"},
{Name:"Goblin Charbelcher", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMA", Number:"222", Image:"/Images/EMA/GoblinCharbelcher.jpg"},
{Name:"Isochron Scepter", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMA", Number:"223", Image:"/Images/EMA/IsochronScepter.jpg"},
{Name:"Juggernaut", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"224", Image:"/Images/EMA/Juggernaut.jpg"},
{Name:"Mana Crypt", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"7", Sort:"1", Set:"EMA", Number:"225", Image:"/Images/EMA/ManaCrypt.jpg"},
{Name:"Millikin", Cost:"2", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"226", Image:"/Images/EMA/Millikin.jpg"},
{Name:"Mindless Automaton", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"227", Image:"/Images/EMA/MindlessAutomaton.jpg"},
{Name:"Nevinyrral's Disk", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMA", Number:"228", Image:"/Images/EMA/NevinyrralsDisk.jpg"},
{Name:"Pilgrim's Eye", Cost:"3", Color:["C"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"229", Image:"/Images/EMA/PilgrimsEye.jpg"},
{Name:"Prismatic Lens", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMA", Number:"230", Image:"/Images/EMA/PrismaticLens.jpg"},
{Name:"Relic of Progenitus", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMA", Number:"231", Image:"/Images/EMA/RelicofProgenitus.jpg"},
{Name:"Sensei's Divining Top", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMA", Number:"232", Image:"/Images/EMA/SenseisDiviningTop.jpg"},
{Name:"Ticking Gnomes", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"EMA", Number:"233", Image:"/Images/EMA/TickingGnomes.jpg"},
{Name:"Winter Orb", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"EMA", Number:"234", Image:"/Images/EMA/WinterOrb.jpg"},
{Name:"Worn Powerstone", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"EMA", Number:"235", Image:"/Images/EMA/WornPowerstone.jpg"},
{Name:"Bloodfell Caves", Cost:"0", Color:["B","R"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"236", Image:"/Images/EMA/BloodfellCaves.jpg"},
{Name:"Blossoming Sands", Cost:"0", Color:["W","G"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"237", Image:"/Images/EMA/BlossomingSands.jpg"},
{Name:"Dismal Backwater", Cost:"0", Color:["U","B"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"238", Image:"/Images/EMA/DismalBackwater.jpg"},
{Name:"Jungle Hollow", Cost:"0", Color:["B","G"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"239", Image:"/Images/EMA/JungleHollow.jpg"},
{Name:"Karakas", Cost:"0", Color:["W"], Rarity:"M", Type:["L"], Rating:"7", Sort:"1", Set:"EMA", Number:"240", Image:"/Images/EMA/Karakas.jpg"},
{Name:"Maze of Ith", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"EMA", Number:"241", Image:"/Images/EMA/MazeofIth.jpg"},
{Name:"Mishra's Factory", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"242", Image:"/Images/EMA/MishrasFactory.jpg"},
{Name:"Rugged Highlands", Cost:"0", Color:["R","G"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"243", Image:"/Images/EMA/RuggedHighlands.jpg"},
{Name:"Scoured Barrens", Cost:"0", Color:["W","B"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"244", Image:"/Images/EMA/ScouredBarrens.jpg"},
{Name:"Swiftwater Cliffs", Cost:"0", Color:["U","R"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"245", Image:"/Images/EMA/SwiftwaterCliffs.jpg"},
{Name:"Thornwood Falls", Cost:"0", Color:["G","U"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"246", Image:"/Images/EMA/ThornwoodFalls.jpg"},
{Name:"Tranquil Cove", Cost:"0", Color:["W","U"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"247", Image:"/Images/EMA/TranquilCove.jpg"},
{Name:"Wasteland", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"EMA", Number:"248", Image:"/Images/EMA/Wasteland.jpg"},
{Name:"Wind-Scarred Crag", Cost:"0", Color:["R","W"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"EMA", Number:"249", Image:"/Images/EMA/Wind-ScarredCrag.jpg"},
];
var SOI = [
{Name:"Always Watching", Cost:"1WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"1", Image:"/Images/SOI/AlwaysWatching.jpg", },
{Name:"Angel of Deliverance", Cost:"6WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"2", Image:"/Images/SOI/AngelofDeliverance.jpg", },
{Name:"Angelic Purge", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"3", Image:"/Images/SOI/AngelicPurge.jpg", },
{Name:"Apothecary Geist", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"4", Image:"/Images/SOI/ApothecaryGeist.jpg", },
{Name:"Archangel Avacyn", Cost:"3WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"5", Image:"/Images/SOI/ArchangelAvacyn.jpg", ReverseImage:"/Images/SOI/Avacyn--ThePurifier.jpg"},
{Name:"Avacynian Missionaries", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"6", Image:"/Images/SOI/AvacynianMissionaries.jpg", ReverseImage:"/Images/SOI/LunarchInquisitors.jpg"},
{Name:"Bound by Moonsilver", Cost:"2W", Color:["W"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"7", Image:"/Images/SOI/BoundbyMoonsilver.jpg", },
{Name:"Bygone Bishop", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"8", Image:"/Images/SOI/BygoneBishop.jpg", },
{Name:"Cathar's Companion", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"9", Image:"/Images/SOI/CatharsCompanion.jpg", },
{Name:"Chaplain's Blessing", Cost:"0W", Color:["W"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"SOI", Number:"10", Image:"/Images/SOI/ChaplainsBlessing.jpg", },
{Name:"Dauntless Cathar", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"11", Image:"/Images/SOI/DauntlessCathar.jpg", },
{Name:"Declaration in Stone", Cost:"1W", Color:["W"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"SOI", Number:"12", Image:"/Images/SOI/DeclarationinStone.jpg", },
{Name:"Descend upon the Sinful", Cost:"4WW", Color:["W"], Rarity:"M", Type:["S"], Rating:"9", Sort:"1", Set:"SOI", Number:"13", Image:"/Images/SOI/DescendupontheSinful.jpg", },
{Name:"Devilthorn Fox", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"14", Image:"/Images/SOI/DevilthornFox.jpg", },
{Name:"Drogskol Cavalry", Cost:"5WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"15", Image:"/Images/SOI/DrogskolCavalry.jpg", },
{Name:"Eerie Interlude", Cost:"2W", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"SOI", Number:"16", Image:"/Images/SOI/EerieInterlude.jpg", },
{Name:"Emissary of the Sleepless", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"17", Image:"/Images/SOI/EmissaryoftheSleepless.jpg", },
{Name:"Ethereal Guidance", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"SOI", Number:"18", Image:"/Images/SOI/EtherealGuidance.jpg", },
{Name:"Expose Evil", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"19", Image:"/Images/SOI/ExposeEvil.jpg", },
{Name:"Gryff's Boon", Cost:"0W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"20", Image:"/Images/SOI/GryffsBoon.jpg"},
{Name:"Hanweir Militia Captain", Cost:"1W", Color:["W"], Rarity:"R", Type:["R"], Rating:"7", Sort:"1", Set:"SOI", Number:"21", Image:"/Images/SOI/HanweirMilitiaCaptain.jpg", ReverseImage:"/Images/SOI/WestvaleCultLeader.jpg"},
{Name:"Hope Against Hope", Cost:"2W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"22", Image:"/Images/SOI/HopeAgainstHope.jpg", },
{Name:"Humble the Brute", Cost:"4W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"SOI", Number:"23", Image:"/Images/SOI/HumbletheBrute.jpg", },
{Name:"Inquisitor's Ox", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"24", Image:"/Images/SOI/InquisitorsOx.jpg", },
{Name:"Inspiring Captain", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"25", Image:"/Images/SOI/InspiringCaptain.jpg", },
{Name:"Militant Inquisitor", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"26", Image:"/Images/SOI/MilitantInquisitor.jpg", },
{Name:"Moorland Drifter", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"27", Image:"/Images/SOI/MoorlandDrifter.jpg", },
{Name:"Nahiri's Machinations", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"28", Image:"/Images/SOI/NahirisMachinations.jpg", },
{Name:"Nearheath Chaplain", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"29", Image:"/Images/SOI/NearheathChaplain.jpg", },
{Name:"Not Forgotten", Cost:"1W", Color:["W"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"30", Image:"/Images/SOI/NotForgotten.jpg", },
{Name:"Odric, Lunarch Marshal", Cost:"3W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"31", Image:"/Images/SOI/Odric--LunarchMarshal.jpg", },
{Name:"Open the Armory", Cost:"1W", Color:["W"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"SOI", Number:"32", Image:"/Images/SOI/OpentheArmory.jpg", },
{Name:"Paranoid Parish-Blade", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"33", Image:"/Images/SOI/ParanoidParish-Blade.jpg", },
{Name:"Pious Evangel", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"34", Image:"/Images/SOI/PiousEvangel.jpg", ReverseImage:"/Images/SOI/WaywardDisciple.jpg"},
{Name:"Puncturing Light", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"35", Image:"/Images/SOI/PuncturingLight.jpg", },
{Name:"Reaper of Flight Moonsilver", Cost:"3WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"36", Image:"/Images/SOI/ReaperofFlightMoonsilver.jpg", },
{Name:"Silverstrike", Cost:"3W", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"SOI", Number:"37", Image:"/Images/SOI/Silverstrike.jpg", },
{Name:"Spectral Shepherd", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"38", Image:"/Images/SOI/SpectralShepherd.jpg", },
{Name:"Stern Constable", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"SOI", Number:"39", Image:"/Images/SOI/SternConstable.jpg", },
{Name:"Strength of Arms", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"40", Image:"/Images/SOI/StrengthofArms.jpg", },
{Name:"Survive the Night", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"41", Image:"/Images/SOI/SurvivetheNight.jpg", },
{Name:"Tenacity", Cost:"3W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"42", Image:"/Images/SOI/Tenacity.jpg", },
{Name:"Thalia's Lieutenant", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"43", Image:"/Images/SOI/ThaliasLieutenant.jpg", },
{Name:"Thraben Inspector", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"44", Image:"/Images/SOI/ThrabenInspector.jpg", },
{Name:"Topplegeist", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"45", Image:"/Images/SOI/Topplegeist.jpg", },
{Name:"Town Gossipmonger", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"46", Image:"/Images/SOI/TownGossipmonger.jpg", ReverseImage:"/Images/SOI/IncitedRabble.jpg"},
{Name:"Unruly Mob", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"47", Image:"/Images/SOI/UnrulyMob.jpg", },
{Name:"Vessel of Ephemera", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"48", Image:"/Images/SOI/VesselofEphemera.jpg", },
{Name:"Aberrant Researcher", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"49", Image:"/Images/SOI/AberrantResearcher.jpg", ReverseImage:"/Images/SOI/PerfectedForm.jpg"},
{Name:"Broken Concentration", Cost:"1UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"50", Image:"/Images/SOI/BrokenConcentration.jpg", },
{Name:"Catalog", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"51", Image:"/Images/SOI/Catalog.jpg", },
{Name:"Compelling Deterrence", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"SOI", Number:"52", Image:"/Images/SOI/CompellingDeterrence.jpg", },
{Name:"Confirm Suspicions", Cost:"3UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"SOI", Number:"53", Image:"/Images/SOI/ConfirmSuspicions.jpg", },
{Name:"Daring Sleuth", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"54", Image:"/Images/SOI/DaringSleuth.jpg", ReverseImage:"/Images/SOI/BearerOfOverwhelmingTruths.jpg"},
{Name:"Deny Existence", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"55", Image:"/Images/SOI/DenyExistence.jpg", },
{Name:"Drownyard Explorers", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"56", Image:"/Images/SOI/DrownyardExplorers.jpg", },
{Name:"Drunau Corpse Trawler", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"57", Image:"/Images/SOI/DrunauCorpseTrawler.jpg", },
{Name:"Engulf the Shore", Cost:"3U", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"SOI", Number:"58", Image:"/Images/SOI/EngulftheShore.jpg", },
{Name:"Epiphany at the Drownyard", Cost:"0U", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"SOI", Number:"59", Image:"/Images/SOI/EpiphanyattheDrownyard.jpg", },
{Name:"Erdwal Illuminator", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"60", Image:"/Images/SOI/ErdwalIlluminator.jpg", },
{Name:"Essence Flux", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"61", Image:"/Images/SOI/EssenceFlux.jpg", },
{Name:"Fleeting Memories", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"62", Image:"/Images/SOI/FleetingMemories.jpg", },
{Name:"Forgotten Creation", Cost:"3U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"63", Image:"/Images/SOI/ForgottenCreation.jpg", },
{Name:"Furtive Homunculus", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"64", Image:"/Images/SOI/FurtiveHomunculus.jpg", },
{Name:"Geralf's Masterpiece", Cost:"3UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"65", Image:"/Images/SOI/GeralfsMasterpiece.jpg", },
{Name:"Ghostly Wings", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"SOI", Number:"66", Image:"/Images/SOI/GhostlyWings.jpg", },
{Name:"Gone Missing", Cost:"4U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"67", Image:"/Images/SOI/GoneMissing.jpg", },
{Name:"Invasive Surgery", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"68", Image:"/Images/SOI/InvasiveSurgery.jpg", },
{Name:"Jace, Unraveler of Secrets", Cost:"3UU", Color:["U"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"SOI", Number:"69", Image:"/Images/SOI/Jace--UnravelerofSecrets.jpg", },
{Name:"Jace's Scrutiny", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"70", Image:"/Images/SOI/JacesScrutiny.jpg", },
{Name:"Just the Wind", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"71", Image:"/Images/SOI/JusttheWind.jpg", },
{Name:"Lamplighter of Selhoff", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"72", Image:"/Images/SOI/LamplighterofSelhoff.jpg", },
{Name:"Manic Scribe", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"73", Image:"/Images/SOI/ManicScribe.jpg", },
{Name:"Nagging Thoughts", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"74", Image:"/Images/SOI/NaggingThoughts.jpg", },
{Name:"Nephalia Moondrakes", Cost:"5UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"75", Image:"/Images/SOI/NephaliaMoondrakes.jpg", },
{Name:"Niblis of Dusk", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"76", Image:"/Images/SOI/NiblisofDusk.jpg", },
{Name:"Ongoing Investigation", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"77", Image:"/Images/SOI/OngoingInvestigation.jpg", },
{Name:"Pieces of the Puzzle", Cost:"2U", Color:["U"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"SOI", Number:"78", Image:"/Images/SOI/PiecesofthePuzzle.jpg", },
{Name:"Pore Over the Pages", Cost:"3UU", Color:["U"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"79", Image:"/Images/SOI/PoreOverthePages.jpg", },
{Name:"Press for Answers", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"80", Image:"/Images/SOI/PressforAnswers.jpg", },
{Name:"Rattlechains", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"81", Image:"/Images/SOI/Rattlechains.jpg", },
{Name:"Reckless Scholar", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"82", Image:"/Images/SOI/RecklessScholar.jpg", },
{Name:"Rise from the Tides", Cost:"5U", Color:["U"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"83", Image:"/Images/SOI/RisefromtheTides.jpg", },
{Name:"Seagraf Skaab", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"84", Image:"/Images/SOI/SeagrafSkaab.jpg", },
{Name:"Silburlind Snapper", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"85", Image:"/Images/SOI/SilburlindSnapper.jpg"},
{Name:"Silent Observer", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"86", Image:"/Images/SOI/SilentObserver.jpg", },
{Name:"Sleep Paralysis", Cost:"3U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"87", Image:"/Images/SOI/SleepParalysis.jpg", },
{Name:"Startled Awake", Cost:"2UU", Color:["U"], Rarity:"M", Type:["S"], Rating:"9", Sort:"1", Set:"SOI", Number:"88", Image:"/Images/SOI/StartledAwake.jpg", ReverseImage:"/Images/SOI/PersistentNightmare.jpg"},
{Name:"Stitched Mangler", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"89", Image:"/Images/SOI/StitchedMangler.jpg", },
{Name:"Stitchwing Skaab", Cost:"3U", Color:["U"], Rarity:"U", Type:["U"], Rating:"6", Sort:"1", Set:"SOI", Number:"90", Image:"/Images/SOI/StitchwingSkaab.jpg", },
{Name:"Stormrider Spirit", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"91", Image:"/Images/SOI/StormriderSpirit.jpg", },
{Name:"Thing in the Ice", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"92", Image:"/Images/SOI/ThingintheIce.jpg", ReverseImage:"/Images/SOI/AwokenHorror.jpg"},
{Name:"Trail of Evidence", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"93", Image:"/Images/SOI/TrailofEvidence.jpg", },
{Name:"Uninvited Geist", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"94", Image:"/Images/SOI/UninvitedGeist.jpg", ReverseImage:"/Images/SOI/UnimpededTrespasser.jpg"},
{Name:"Vessel of Paramnesia", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"SOI", Number:"95", Image:"/Images/SOI/VesselofParamnesia.jpg", },
{Name:"Welcome to the Fold", Cost:"2UU", Color:["U"], Rarity:"R", Type:["U"], Rating:"5", Sort:"1", Set:"SOI", Number:"96", Image:"/Images/SOI/WelcometotheFold.jpg", },
{Name:"Accursed Witch", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"97", Image:"/Images/SOI/AccursedWitch.jpg", ReverseImage:"/Images/SOI/InfectiousCurse.jpg"},
{Name:"Alms of the Vein", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"SOI", Number:"98", Image:"/Images/SOI/AlmsoftheVein.jpg", },
{Name:"Asylum Visitor", Cost:"1B", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"99", Image:"/Images/SOI/AsylumVisitor.jpg", },
{Name:"Behind the Scenes", Cost:"2B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"100", Image:"/Images/SOI/BehindtheScenes.jpg", },
{Name:"Behold the Beyond", Cost:"5BB", Color:["B"], Rarity:"M", Type:["S"], Rating:"6", Sort:"1", Set:"SOI", Number:"101", Image:"/Images/SOI/BeholdtheBeyond.jpg", },
{Name:"Biting Rain", Cost:"2BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"102", Image:"/Images/SOI/BitingRain.jpg", },
{Name:"Call the Bloodline", Cost:"1B", Color:["B"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"103", Image:"/Images/SOI/CalltheBloodline.jpg", },
{Name:"Creeping Dread", Cost:"3B", Color:["B"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"104", Image:"/Images/SOI/CreepingDread.jpg", },
{Name:"Crow of Dark Tidings", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"105", Image:"/Images/SOI/CrowofDarkTidings.jpg", },
{Name:"Dead Weight", Cost:"0B", Color:["B"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"106", Image:"/Images/SOI/DeadWeight.jpg", },
{Name:"Diregraf Colossus", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"107", Image:"/Images/SOI/DiregrafColossus.jpg", },
{Name:"Elusive Tormentor", Cost:"2BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"108", Image:"/Images/SOI/ElusiveTormentor.jpg", ReverseImage:"/Images/SOI/InsidiousMist.jpg"},
{Name:"Ever After", Cost:"4BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"SOI", Number:"109", Image:"/Images/SOI/EverAfter.jpg", },
{Name:"Farbog Revenant", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"110", Image:"/Images/SOI/FarbogRevenant.jpg", },
{Name:"From Under the Floorboards", Cost:"3BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"SOI", Number:"111", Image:"/Images/SOI/FromUndertheFloorboards.jpg", },
{Name:"Ghoulcaller's Accomplice", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"112", Image:"/Images/SOI/GhoulcallersAccomplice.jpg", },
{Name:"Ghoulsteed", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"113", Image:"/Images/SOI/Ghoulsteed.jpg", },
{Name:"Gisa's Bidding", Cost:"2BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"114", Image:"/Images/SOI/GisasBidding.jpg", },
{Name:"Grotesque Mutation", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"115", Image:"/Images/SOI/GrotesqueMutation.jpg", },
{Name:"Heir of Falkenrath", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"116", Image:"/Images/SOI/HeirofFalkenrath.jpg", ReverseImage:"/Images/SOI/HeirToTheNight.jpg"},
{Name:"Hound of the Farbogs", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"117", Image:"/Images/SOI/HoundoftheFarbogs.jpg", },
{Name:"Indulgent Aristocrat", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"118", Image:"/Images/SOI/IndulgentAristocrat.jpg", },
{Name:"Kindly Stranger", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"119", Image:"/Images/SOI/KindlyStranger.jpg", ReverseImage:"/Images/SOI/Demon-PossessedWitch.jpg"},
{Name:"Liliana's Indignation", Cost:"0B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"SOI", Number:"120", Image:"/Images/SOI/LilianasIndignation.jpg", },
{Name:"Macabre Waltz", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"SOI", Number:"121", Image:"/Images/SOI/MacabreWaltz.jpg", },
{Name:"Markov Dreadknight", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"122", Image:"/Images/SOI/MarkovDreadknight.jpg", },
{Name:"Merciless Resolve", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"123", Image:"/Images/SOI/MercilessResolve.jpg", },
{Name:"Mindwrack Demon", Cost:"2BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"124", Image:"/Images/SOI/MindwrackDemon.jpg", },
{Name:"Morkrut Necropod", Cost:"5B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"125", Image:"/Images/SOI/MorkrutNecropod.jpg", },
{Name:"Murderous Compulsion", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"SOI", Number:"126", Image:"/Images/SOI/MurderousCompulsion.jpg", },
{Name:"Olivia's Bloodsworn", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"127", Image:"/Images/SOI/OliviasBloodsworn.jpg", },
{Name:"Pale Rider of Trostad", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"128", Image:"/Images/SOI/PaleRiderofTrostad.jpg", },
{Name:"Pick the Brain", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"129", Image:"/Images/SOI/PicktheBrain.jpg", },
{Name:"Rancid Rats", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"130", Image:"/Images/SOI/RancidRats.jpg", },
{Name:"Relentless Dead", Cost:"0BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"131", Image:"/Images/SOI/RelentlessDead.jpg", },
{Name:"Rottenheart Ghoul", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"132", Image:"/Images/SOI/RottenheartGhoul.jpg", },
{Name:"Sanitarium Skeleton", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"SOI", Number:"133", Image:"/Images/SOI/SanitariumSkeleton.jpg", },
{Name:"Shamble Back", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"SOI", Number:"134", Image:"/Images/SOI/ShambleBack.jpg", },
{Name:"Sinister Concoction", Cost:"0B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"135", Image:"/Images/SOI/SinisterConcoction.jpg", },
{Name:"Stallion of Ashmouth", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"136", Image:"/Images/SOI/StallionofAshmouth.jpg", },
{Name:"Stromkirk Mentor", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"137", Image:"/Images/SOI/StromkirkMentor.jpg", },
{Name:"Throttle", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"138", Image:"/Images/SOI/Throttle.jpg", },
{Name:"To the Slaughter", Cost:"2B", Color:["B"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"SOI", Number:"139", Image:"/Images/SOI/TotheSlaughter.jpg", },
{Name:"Tooth Collector", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"140", Image:"/Images/SOI/ToothCollector.jpg", },
{Name:"Triskaidekaphobia", Cost:"3B", Color:["B"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"141", Image:"/Images/SOI/Triskaidekaphobia.jpg", },
{Name:"Twins of Maurer Estate", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"142", Image:"/Images/SOI/TwinsofMaurerEstate.jpg", },
{Name:"Vampire Noble", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"143", Image:"/Images/SOI/VampireNoble.jpg", },
{Name:"Vessel of Malignity", Cost:"1B", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"144", Image:"/Images/SOI/VesselofMalignity.jpg", },
{Name:"Avacyn's Judgment", Cost:"1R", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"SOI", Number:"145", Image:"/Images/SOI/AvacynsJudgment.jpg", },
{Name:"Bloodmad Vampire", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"146", Image:"/Images/SOI/BloodmadVampire.jpg", },
{Name:"Breakneck Rider", Cost:"1RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"147", Image:"/Images/SOI/BreakneckRider.jpg", ReverseImage:"/Images/SOI/NeckBreaker.jpg"},
{Name:"Burn from Within", Cost:"0R", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"SOI", Number:"148", Image:"/Images/SOI/BurnfromWithin.jpg", },
{Name:"Convicted Killer", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"149", Image:"/Images/SOI/ConvictedKiller.jpg", ReverseImage:"/Images/SOI/BrandedHowler.jpg"},
{Name:"Dance with Devils", Cost:"3R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"SOI", Number:"150", Image:"/Images/SOI/DancewithDevils.jpg", },
{Name:"Devils' Playground", Cost:"4RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"SOI", Number:"151", Image:"/Images/SOI/DevilsPlayground.jpg", },
{Name:"Dissension in the Ranks", Cost:"3RR", Color:["R"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"SOI", Number:"152", Image:"/Images/SOI/DissensionintheRanks.jpg", },
{Name:"Dual Shot", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"153", Image:"/Images/SOI/DualShot.jpg", },
{Name:"Ember-Eye Wolf", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"154", Image:"/Images/SOI/Ember-EyeWolf.jpg", },
{Name:"Falkenrath Gorger", Cost:"0R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"155", Image:"/Images/SOI/FalkenrathGorger.jpg", },
{Name:"Fiery Temper", Cost:"1RR", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"156", Image:"/Images/SOI/FieryTemper.jpg", },
{Name:"Flameblade Angel", Cost:"4RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"157", Image:"/Images/SOI/FlamebladeAngel.jpg", },
{Name:"Gatstaf Arsonists", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"158", Image:"/Images/SOI/GatstafArsonists.jpg", ReverseImage:"/Images/SOI/GatstafRavagers.jpg"},
{Name:"Geier Reach Bandit", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"159", Image:"/Images/SOI/GeierReachBandit.jpg", ReverseImage:"/Images/SOI/Vildin-PackAlpha.jpg"},
{Name:"Geistblast", Cost:"2R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"SOI", Number:"160", Image:"/Images/SOI/Geistblast.jpg", },
{Name:"Gibbering Fiend", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"161", Image:"/Images/SOI/GibberingFiend.jpg", },
{Name:"Goldnight Castigator", Cost:"2RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"162", Image:"/Images/SOI/GoldnightCastigator.jpg", },
{Name:"Harness the Storm", Cost:"2R", Color:["R"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"163", Image:"/Images/SOI/HarnesstheStorm.jpg", },
{Name:"Howlpack Wolf", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"164", Image:"/Images/SOI/HowlpackWolf.jpg", },
{Name:"Hulking Devil", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"165", Image:"/Images/SOI/HulkingDevil.jpg", },
{Name:"Incorrigible Youths", Cost:"3RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"166", Image:"/Images/SOI/IncorrigibleYouths.jpg", },
{Name:"Inner Struggle", Cost:"3R", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"SOI", Number:"167", Image:"/Images/SOI/InnerStruggle.jpg", },
{Name:"Insolent Neonate", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"168", Image:"/Images/SOI/InsolentNeonate.jpg", },
{Name:"Kessig Forgemaster", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"169", Image:"/Images/SOI/KessigForgemaster.jpg", ReverseImage:"/Images/SOI/FlameheartWerewolf.jpg"},
{Name:"Lightning Axe", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"SOI", Number:"170", Image:"/Images/SOI/LightningAxe.jpg", },
{Name:"Mad Prophet", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"171", Image:"/Images/SOI/MadProphet.jpg", },
{Name:"Magmatic Chasm", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"SOI", Number:"172", Image:"/Images/SOI/MagmaticChasm.jpg", },
{Name:"Malevolent Whispers", Cost:"3R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"SOI", Number:"173", Image:"/Images/SOI/MalevolentWhispers.jpg", },
{Name:"Pyre Hound", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"174", Image:"/Images/SOI/PyreHound.jpg", },
{Name:"Ravenous Bloodseeker", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"175", Image:"/Images/SOI/RavenousBloodseeker.jpg", },
{Name:"Reduce to Ashes", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"SOI", Number:"176", Image:"/Images/SOI/ReducetoAshes.jpg", },
{Name:"Rush of Adrenaline", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"177", Image:"/Images/SOI/RushofAdrenaline.jpg", },
{Name:"Sanguinary Mage", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"178", Image:"/Images/SOI/SanguinaryMage.jpg", },
{Name:"Scourge Wolf", Cost:"0RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"179", Image:"/Images/SOI/ScourgeWolf.jpg", },
{Name:"Senseless Rage", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"SOI", Number:"180", Image:"/Images/SOI/SenselessRage.jpg", },
{Name:"Sin Prodder", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"181", Image:"/Images/SOI/SinProdder.jpg", },
{Name:"Skin Invasion", Cost:"0R", Color:["R"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"182", Image:"/Images/SOI/SkinInvasion.jpg", ReverseImage:"/Images/SOI/SkinShedder.jpg"},
{Name:"Spiteful Motives", Cost:"3R", Color:["R"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"183", Image:"/Images/SOI/SpitefulMotives.jpg", },
{Name:"Stensia Masquerade", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"SOI", Number:"184", Image:"/Images/SOI/StensiaMasquerade.jpg", },
{Name:"Structural Distortion", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"185", Image:"/Images/SOI/StructuralDistortion.jpg", },
{Name:"Tormenting Voice", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"186", Image:"/Images/SOI/TormentingVoice.jpg", },
{Name:"Ulrich's Kindred", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"187", Image:"/Images/SOI/UlrichsKindred.jpg", },
{Name:"Uncaged Fury", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"188", Image:"/Images/SOI/UncagedFury.jpg", },
{Name:"Vessel of Volatility", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"189", Image:"/Images/SOI/VesselofVolatility.jpg", },
{Name:"Village Messenger", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"190", Image:"/Images/SOI/VillageMessenger.jpg", ReverseImage:"/Images/SOI/MoonriseIntruder.jpg"},
{Name:"Voldaren Duelist", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"191", Image:"/Images/SOI/VoldarenDuelist.jpg", },
{Name:"Wolf of Devil's Breach", Cost:"3RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"192", Image:"/Images/SOI/WolfofDevilsBreach.jpg", },
{Name:"Aim High", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"193", Image:"/Images/SOI/AimHigh.jpg", },
{Name:"Autumnal Gloom", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"194", Image:"/Images/SOI/AutumnalGloom.jpg", ReverseImage:"/Images/SOI/AncientOfTheEquinox.jpg"},
{Name:"Briarbridge Patrol", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"195", Image:"/Images/SOI/BriarbridgePatrol.jpg", },
{Name:"Byway Courier", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"196", Image:"/Images/SOI/BywayCourier.jpg", },
{Name:"Clip Wings", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"197", Image:"/Images/SOI/ClipWings.jpg", },
{Name:"Confront the Unknown", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"198", Image:"/Images/SOI/ConfronttheUnknown.jpg", },
{Name:"Crawling Sensation", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"199", Image:"/Images/SOI/CrawlingSensation.jpg", },
{Name:"Cryptolith Rite", Cost:"1G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"SOI", Number:"200", Image:"/Images/SOI/CryptolithRite.jpg", },
{Name:"Cult of the Waxing Moon", Cost:"4G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"201", Image:"/Images/SOI/CultoftheWaxingMoon.jpg", },
{Name:"Deathcap Cultivator", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"202", Image:"/Images/SOI/DeathcapCultivator.jpg", },
{Name:"Duskwatch Recruiter", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"203", Image:"/Images/SOI/DuskwatchRecruiter.jpg", ReverseImage:"/Images/SOI/KrallenhordeHowler.jpg"},
{Name:"Equestrian Skill", Cost:"3G", Color:["G"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"SOI", Number:"204", Image:"/Images/SOI/EquestrianSkill.jpg", },
{Name:"Fork in the Road", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"SOI", Number:"205", Image:"/Images/SOI/ForkintheRoad.jpg", },
{Name:"Gloomwidow", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"206", Image:"/Images/SOI/Gloomwidow.jpg", },
{Name:"Graf Mole", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"207", Image:"/Images/SOI/GrafMole.jpg", },
{Name:"Groundskeeper", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"208", Image:"/Images/SOI/Groundskeeper.jpg", },
{Name:"Hermit of the Natterknolls", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"209", Image:"/Images/SOI/HermitoftheNatterknolls.jpg", ReverseImage:"/Images/SOI/LoneWolfOfTheNatterknolls.jpg"},
{Name:"Hinterland Logger", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"210", Image:"/Images/SOI/HinterlandLogger.jpg", ReverseImage:"/Images/SOI/TimberShredder.jpg"},
{Name:"Howlpack Resurgence", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"211", Image:"/Images/SOI/HowlpackResurgence.jpg", },
{Name:"Inexorable Blob", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"212", Image:"/Images/SOI/InexorableBlob.jpg", },
{Name:"Intrepid Provisioner", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"213", Image:"/Images/SOI/IntrepidProvisioner.jpg", },
{Name:"Kessig Dire Swine", Cost:"4GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"214", Image:"/Images/SOI/KessigDireSwine.jpg", },
{Name:"Lambholt Pacifist", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"215", Image:"/Images/SOI/LambholtPacifist.jpg", ReverseImage:"/Images/SOI/LambholtButcher.jpg"},
{Name:"Loam Dryad", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"216", Image:"/Images/SOI/LoamDryad.jpg", },
{Name:"Might Beyond Reason", Cost:"3G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"SOI", Number:"217", Image:"/Images/SOI/MightBeyondReason.jpg", },
{Name:"Moldgraf Scavenger", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"218", Image:"/Images/SOI/MoldgrafScavenger.jpg", },
{Name:"Moonlight Hunt", Cost:"1G", Color:["G"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"SOI", Number:"219", Image:"/Images/SOI/MoonlightHunt.jpg", },
{Name:"Obsessive Skinner", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"SOI", Number:"220", Image:"/Images/SOI/ObsessiveSkinner.jpg", },
{Name:"Pack Guardian", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"221", Image:"/Images/SOI/PackGuardian.jpg", },
{Name:"Quilled Wolf", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"222", Image:"/Images/SOI/QuilledWolf.jpg", },
{Name:"Rabid Bite", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"SOI", Number:"223", Image:"/Images/SOI/RabidBite.jpg", },
{Name:"Root Out", Cost:"2G", Color:["G"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"SOI", Number:"224", Image:"/Images/SOI/RootOut.jpg", },
{Name:"Sage of Ancient Lore", Cost:"4G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"225", Image:"/Images/SOI/SageofAncientLore.jpg", ReverseImage:"/Images/SOI/WerewolfofAncientHunger.jpg"},
{Name:"Seasons Past", Cost:"4GG", Color:["G"], Rarity:"M", Type:["S"], Rating:"6", Sort:"1", Set:"SOI", Number:"226", Image:"/Images/SOI/SeasonsPast.jpg", },
{Name:"Second Harvest", Cost:"2GG", Color:["G"], Rarity:"R", Type:["I"], Rating:"5", Sort:"1", Set:"SOI", Number:"227", Image:"/Images/SOI/SecondHarvest.jpg", },
{Name:"Silverfur Partisan", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"228", Image:"/Images/SOI/SilverfurPartisan.jpg", },
{Name:"Solitary Hunter", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"229", Image:"/Images/SOI/SolitaryHunter.jpg", ReverseImage:"/Images/SOI/OneOfThePack.jpg"},
{Name:"Soul Swallower", Cost:"2GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"230", Image:"/Images/SOI/SoulSwallower.jpg", },
{Name:"Stoic Builder", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"231", Image:"/Images/SOI/StoicBuilder.jpg", },
{Name:"Thornhide Wolves", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"232", Image:"/Images/SOI/ThornhideWolves.jpg", },
{Name:"Tireless Tracker", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"233", Image:"/Images/SOI/TirelessTracker.jpg", },
{Name:"Traverse the Ulvenwald", Cost:"0G", Color:["G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"SOI", Number:"234", Image:"/Images/SOI/TraversetheUlvenwald.jpg", },
{Name:"Ulvenwald Hydra", Cost:"4GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"235", Image:"/Images/SOI/UlvenwaldHydra.jpg", },
{Name:"Ulvenwald Mysteries", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"SOI", Number:"236", Image:"/Images/SOI/UlvenwaldMysteries.jpg", },
{Name:"Vessel of Nascency", Cost:"0G", Color:["G"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"SOI", Number:"237", Image:"/Images/SOI/VesselofNascency.jpg", },
{Name:"Veteran Cathar", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"238", Image:"/Images/SOI/VeteranCathar.jpg", },
{Name:"Watcher in the Web", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"239", Image:"/Images/SOI/WatcherintheWeb.jpg", },
{Name:"Weirding Wood", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"240", Image:"/Images/SOI/WeirdingWood.jpg", },
{Name:"Altered Ego", Cost:"2GU", Color:["G","U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"241", Image:"/Images/SOI/AlteredEgo.jpg", },
{Name:"Anguished Unmaking", Cost:"1WB", Color:["W","B"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"SOI", Number:"242", Image:"/Images/SOI/AnguishedUnmaking.jpg", },
{Name:"Arlinn Kord", Cost:"2RG", Color:["R","G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"SOI", Number:"243", Image:"/Images/SOI/ArlinnKord.jpg", ReverseImage:"/Images/SOI/Arlinn--EmbracedbytheMoon.jpg"},
{Name:"Fevered Visions", Cost:"1UR", Color:["U","R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"SOI", Number:"244", Image:"/Images/SOI/FeveredVisions.jpg", },
{Name:"The Gitrog Monster", Cost:"3BG", Color:["B","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"245", Image:"/Images/SOI/TheGitrogMonster.jpg"},
{Name:"Invocation of Saint Traft", Cost:"1WU", Color:["W","U"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"SOI", Number:"246", Image:"/Images/SOI/InvocationofSaintTraft.jpg", },
{Name:"Nahiri, the Harbinger", Cost:"2RW", Color:["R","W"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"SOI", Number:"247", Image:"/Images/SOI/Nahiri--theHarbinger.jpg", },
{Name:"Olivia, Mobilized for War", Cost:"1BR", Color:["B","R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"SOI", Number:"248", Image:"/Images/SOI/Olivia--MobilizedforWar.jpg", },
{Name:"Prized Amalgam", Cost:"1UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"SOI", Number:"249", Image:"/Images/SOI/PrizedAmalgam.jpg", },
{Name:"Sigarda, Heron's Grace", Cost:"3WG", Color:["W","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"SOI", Number:"250", Image:"/Images/SOI/Sigarda--HeronsGrace.jpg", },
{Name:"Sorin, Grim Nemesis", Cost:"4WB", Color:["W","B"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"SOI", Number:"251", Image:"/Images/SOI/Sorin--GrimNemesis.jpg", },
{Name:"Brain in a Jar", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"8", Sort:"1", Set:"SOI", Number:"252", Image:"/Images/SOI/BraininaJar.jpg", },
{Name:"Corrupted Grafstone", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"SOI", Number:"253", Image:"/Images/SOI/CorruptedGrafstone.jpg", },
{Name:"Epitaph Golem", Cost:"5", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"SOI", Number:"254", Image:"/Images/SOI/EpitaphGolem.jpg", },
{Name:"Explosive Apparatus", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"SOI", Number:"255", Image:"/Images/SOI/ExplosiveApparatus.jpg", },
{Name:"Harvest Hand", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"256", Image:"/Images/SOI/HarvestHand.jpg", ReverseImage:"/Images/SOI/ScroungedScythe.jpg"},
{Name:"Haunted Cloak", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"SOI", Number:"257", Image:"/Images/SOI/HauntedCloak.jpg", },
{Name:"Magnifying Glass", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"SOI", Number:"258", Image:"/Images/SOI/MagnifyingGlass.jpg", },
{Name:"Murderer's Axe", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"SOI", Number:"259", Image:"/Images/SOI/MurderersAxe.jpg", },
{Name:"Neglected Heirloom", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"SOI", Number:"260", Image:"/Images/SOI/NeglectedHeirloom.jpg", ReverseImage:"/Images/SOI/AshmouthBlade.jpg"},
{Name:"Runaway Carriage", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"2", Sort:"1", Set:"SOI", Number:"261", Image:"/Images/SOI/RunawayCarriage.jpg", },
{Name:"Shard of Broken Glass", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"SOI", Number:"262", Image:"/Images/SOI/ShardofBrokenGlass.jpg", },
{Name:"Skeleton Key", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"SOI", Number:"263", Image:"/Images/SOI/SkeletonKey.jpg", },
{Name:"Slayer's Plate", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"SOI", Number:"264", Image:"/Images/SOI/SlayersPlate.jpg", },
{Name:"Tamiyo's Journal", Cost:"5", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"SOI", Number:"265", Image:"/Images/SOI/TamiyosJournal.jpg", },
{Name:"Thraben Gargoyle", Cost:"1", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"SOI", Number:"266", Image:"/Images/SOI/ThrabenGargoyle.jpg", ReverseImage:"/Images/SOI/StonewingAntagonizer.jpg"},
{Name:"True-Faith Censer", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"1", Sort:"1", Set:"SOI", Number:"267", Image:"/Images/SOI/True-FaithCenser.jpg", },
{Name:"Wicker Witch", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"SOI", Number:"268", Image:"/Images/SOI/WickerWitch.jpg", },
{Name:"Wild-Field Scarecrow", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"SOI", Number:"269", Image:"/Images/SOI/Wild-FieldScarecrow.jpg", },
{Name:"Choked Estuary", Cost:"0", Color:["U","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"270", Image:"/Images/SOI/ChokedEstuary.jpg", },
{Name:"Drownyard Temple", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"271", Image:"/Images/SOI/DrownyardTemple.jpg", },
{Name:"Foreboding Ruins", Cost:"0", Color:["B","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/ForebodingRuins.jpg", },
{Name:"Forsaken Sanctuary", Cost:"0", Color:["W","B"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/ForsakenSanctuary.jpg", },
{Name:"Fortified Village", Cost:"0", Color:["W","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/FortifiedVillage.jpg", },
{Name:"Foul Orchard", Cost:"0", Color:["B","G"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/FoulOrchard.jpg", },
{Name:"Game Trail", Cost:"0", Color:["R","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/GameTrail.jpg", },
{Name:"Highland Lake", Cost:"0", Color:["U","R"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/HighlandLake.jpg", },
{Name:"Port Town", Cost:"0", Color:["W","U"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/PortTown.jpg", },
{Name:"Stone Quarry", Cost:"0", Color:["W","R"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/StoneQuarry.jpg", },
{Name:"Warped Landscape", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"1", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/WarpedLandscape.jpg", },
{Name:"Westvale Abbey", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/WestvaleAbbey.jpg", ReverseImage:"/Images/SOI/Ormendahl--ProfanePrince.jpg"},
{Name:"Woodland Stream", Cost:"0", Color:["U","B"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"SOI", Number:"272", Image:"/Images/SOI/WoodlandStream.jpg", },
];

var OGW = [
{Name:"Deceiver of Form", Cost:"7", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"1", Image:"/Images/OGW/DeceiverofForm.jpg", ReverseImage:"/Images/OGW/EldraziMimic.jpg"},
{Name:"Eldrazi Mimic", Cost:"2", Color:["C"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"2", Image:"/Images/OGW/EldraziMimic.jpg"},
{Name:"Endbringer", Cost:"6", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"3", Image:"/Images/OGW/Endbringer.jpg"},
{Name:"Kozilek, the Great Distortion", Cost:"10", Color:["C"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"4", Image:"/Images/OGW/Kozilek--theGreatDistortion.jpg"},
{Name:"Kozilek's Pathfinder", Cost:"6", Color:["C"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"OGW", Number:"5", Image:"/Images/OGW/KozileksPathfinder.jpg"},
{Name:"Matter Reshaper", Cost:"3", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"6", Image:"/Images/OGW/MatterReshaper.jpg"},
{Name:"Reality Smasher", Cost:"5", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"7", Image:"/Images/OGW/RealitySmasher.jpg"},
{Name:"Spatial Contortion", Cost:"2", Color:["C"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"8", Image:"/Images/OGW/SpatialContortion.jpg"},
{Name:"Thought-Knot Seer", Cost:"4", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"9", Image:"/Images/OGW/Thought-KnotSeer.jpg"},
{Name:"Walker of the Wastes", Cost:"5", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"10", Image:"/Images/OGW/WalkeroftheWastes.jpg"},
{Name:"Warden of Geometries", Cost:"4", Color:["C"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"11", Image:"/Images/OGW/WardenofGeometries.jpg"},
{Name:"Warping Wail", Cost:"2", Color:["C"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"12", Image:"/Images/OGW/WarpingWail.jpg"},
{Name:"Eldrazi Displacer", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"13", Image:"/Images/OGW/EldraziDisplacer.jpg"},
{Name:"Affa Protector", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"14", Image:"/Images/OGW/AffaProtector.jpg"},
{Name:"Allied Reinforcements", Cost:"3W", Color:["W"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"OGW", Number:"15", Image:"/Images/OGW/AlliedReinforcements.jpg"},
{Name:"Call the Gatewatch", Cost:"2W", Color:["W"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"OGW", Number:"16", Image:"/Images/OGW/CalltheGatewatch.jpg"},
{Name:"Dazzling Reflection", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"OGW", Number:"17", Image:"/Images/OGW/DazzlingReflection.jpg"},
{Name:"Expedition Raptor", Cost:"3WW", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"OGW", Number:"18", Image:"/Images/OGW/ExpeditionRaptor.jpg"},
{Name:"General Tazri", Cost:"4W", Color:["W"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"19", Image:"/Images/OGW/GeneralTazri.jpg"},
{Name:"Immolating Glare", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"20", Image:"/Images/OGW/ImmolatingGlare.jpg"},
{Name:"Iona's Blessing", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"OGW", Number:"21", Image:"/Images/OGW/IonasBlessing.jpg"},
{Name:"Isolation Zone", Cost:"2WW", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"OGW", Number:"22", Image:"/Images/OGW/IsolationZone.jpg"},
{Name:"Kor Scythemaster", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"23", Image:"/Images/OGW/KorScythemaster.jpg"},
{Name:"Kor Sky Climber", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"24", Image:"/Images/OGW/KorSkyClimber.jpg"},
{Name:"Linvala, the Preserver", Cost:"4WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"25", Image:"/Images/OGW/Linvala--thePreserver.jpg"},
{Name:"Make a Stand", Cost:"2W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"OGW", Number:"26", Image:"/Images/OGW/MakeaStand.jpg"},
{Name:"Makindi Aeronaut", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"27", Image:"/Images/OGW/MakindiAeronaut.jpg"},
{Name:"Mighty Leap", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"28", Image:"/Images/OGW/MightyLeap.jpg"},
{Name:"Munda's Vanguard", Cost:"4W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"29", Image:"/Images/OGW/MundasVanguard.jpg"},
{Name:"Oath of Gideon", Cost:"2W", Color:["W"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"OGW", Number:"30", Image:"/Images/OGW/OathofGideon.jpg"},
{Name:"Ondu War Cleric", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"31", Image:"/Images/OGW/OnduWarCleric.jpg"},
{Name:"Relief Captain", Cost:"2WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"32", Image:"/Images/OGW/ReliefCaptain.jpg"},
{Name:"Searing Light", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"33", Image:"/Images/OGW/SearingLight.jpg"},
{Name:"Shoulder to Shoulder", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"OGW", Number:"34", Image:"/Images/OGW/ShouldertoShoulder.jpg"},
{Name:"Spawnbinder Mage", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"35", Image:"/Images/OGW/SpawnbinderMage.jpg"},
{Name:"Steppe Glider", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"36", Image:"/Images/OGW/SteppeGlider.jpg"},
{Name:"Stone Haven Outfitter", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"37", Image:"/Images/OGW/StoneHavenOutfitter.jpg"},
{Name:"Stoneforge Acolyte", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"38", Image:"/Images/OGW/StoneforgeAcolyte.jpg"},
{Name:"Wall of Resurgence", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"39", Image:"/Images/OGW/WallofResurgence.jpg"},
{Name:"Abstruse Interference", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"OGW", Number:"40", Image:"/Images/OGW/AbstruseInterference.jpg"},
{Name:"Blinding Drone", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"41", Image:"/Images/OGW/BlindingDrone.jpg"},
{Name:"Cultivator Drone", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"42", Image:"/Images/OGW/CultivatorDrone.jpg"},
{Name:"Deepfathom Skulker", Cost:"5U", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"43", Image:"/Images/OGW/DeepfathomSkulker.jpg"},
{Name:"Dimensional Infiltrator", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"44", Image:"/Images/OGW/DimensionalInfiltrator.jpg"},
{Name:"Gravity Negator", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"45", Image:"/Images/OGW/GravityNegator.jpg"},
{Name:"Prophet of Distortion", Cost:"0U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"46", Image:"/Images/OGW/ProphetofDistortion.jpg"},
{Name:"Slip Through Space", Cost:"0U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"OGW", Number:"47", Image:"/Images/OGW/SlipThroughSpace.jpg"},
{Name:"Thought Harvester", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"48", Image:"/Images/OGW/ThoughtHarvester.jpg"},
{Name:"Void Shatter", Cost:"1UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"OGW", Number:"49", Image:"/Images/OGW/VoidShatter.jpg"},
{Name:"Ancient Crab", Cost:"1UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"OGW", Number:"50", Image:"/Images/OGW/AncientCrab.jpg"},
{Name:"Comparative Analysis", Cost:"3U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"OGW", Number:"51", Image:"/Images/OGW/ComparativeAnalysis.jpg"},
{Name:"Containment Membrane", Cost:"2U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"OGW", Number:"52", Image:"/Images/OGW/ContainmentMembrane.jpg"},
{Name:"Crush of Tentacles", Cost:"4UU", Color:["U"], Rarity:"M", Type:["S"], Rating:"7", Sort:"1", Set:"OGW", Number:"53", Image:"/Images/OGW/CrushofTentacles.jpg"},
{Name:"Cyclone Sire", Cost:"4U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"54", Image:"/Images/OGW/CycloneSire.jpg"},
{Name:"Gift of Tusks", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"55", Image:"/Images/OGW/GiftofTusks.jpg"},
{Name:"Grip of the Roil", Cost:"2U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"OGW", Number:"56", Image:"/Images/OGW/GripoftheRoil.jpg"},
{Name:"Hedron Alignment", Cost:"2U", Color:["U"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"OGW", Number:"57", Image:"/Images/OGW/HedronAlignment.jpg"},
{Name:"Jwar Isle Avenger", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"58", Image:"/Images/OGW/JwarIsleAvenger.jpg"},
{Name:"Negate", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"59", Image:"/Images/OGW/Negate.jpg"},
{Name:"Oath of Jace", Cost:"2U", Color:["U"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"OGW", Number:"60", Image:"/Images/OGW/OathofJace.jpg"},
{Name:"Overwhelming Denial", Cost:"2UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"5", Sort:"1", Set:"OGW", Number:"61", Image:"/Images/OGW/OverwhelmingDenial.jpg"},
{Name:"Roiling Waters", Cost:"5UU", Color:["U"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"OGW", Number:"62", Image:"/Images/OGW/RoilingWaters.jpg"},
{Name:"Sphinx of the Final Word", Cost:"5UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"OGW", Number:"63", Image:"/Images/OGW/SphinxoftheFinalWord.jpg"},
{Name:"Sweep Away", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"OGW", Number:"64", Image:"/Images/OGW/SweepAway.jpg"},
{Name:"Umara Entangler", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"65", Image:"/Images/OGW/UmaraEntangler.jpg"},
{Name:"Unity of Purpose", Cost:"3U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"66", Image:"/Images/OGW/UnityofPurpose.jpg"},
{Name:"Bearer of Silence", Cost:"1B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"67", Image:"/Images/OGW/BearerofSilence.jpg"},
{Name:"Dread Defiler", Cost:"6B", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"68", Image:"/Images/OGW/DreadDefiler.jpg"},
{Name:"Essence Depleter", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"69", Image:"/Images/OGW/EssenceDepleter.jpg"},
{Name:"Flaying Tendrils", Cost:"1BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"OGW", Number:"70", Image:"/Images/OGW/FlayingTendrils.jpg"},
{Name:"Havoc Sower", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"71", Image:"/Images/OGW/HavocSower.jpg"},
{Name:"Inverter of Truth", Cost:"2BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"72", Image:"/Images/OGW/InverterofTruth.jpg"},
{Name:"Kozilek's Shrieker", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"73", Image:"/Images/OGW/KozileksShrieker.jpg"},
{Name:"Kozilek's Translator", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"74", Image:"/Images/OGW/KozileksTranslator.jpg"},
{Name:"Oblivion Strike", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"7", Sort:"1", Set:"OGW", Number:"75", Image:"/Images/OGW/OblivionStrike.jpg"},
{Name:"Reaver Drone", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"76", Image:"/Images/OGW/ReaverDrone.jpg"},
{Name:"Sifter of Skulls", Cost:"3B", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"77", Image:"/Images/OGW/SifterofSkulls.jpg"},
{Name:"Sky Scourer", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"78", Image:"/Images/OGW/SkyScourer.jpg"},
{Name:"Slaughter Drone", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"79", Image:"/Images/OGW/SlaughterDrone.jpg"},
{Name:"Unnatural Endurance", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"80", Image:"/Images/OGW/UnnaturalEndurance.jpg"},
{Name:"Visions of Brutality", Cost:"1B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"OGW", Number:"81", Image:"/Images/OGW/VisionsofBrutality.jpg"},
{Name:"Witness the End", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"OGW", Number:"82", Image:"/Images/OGW/WitnesstheEnd.jpg"},
{Name:"Corpse Churn", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"83", Image:"/Images/OGW/CorpseChurn.jpg"},
{Name:"Drana's Chosen", Cost:"3B", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"84", Image:"/Images/OGW/DranasChosen.jpg"},
{Name:"Grasp of Darkness", Cost:"0BB", Color:["B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"85", Image:"/Images/OGW/GraspofDarkness.jpg"},
{Name:"Kalitas, Traitor of Ghet", Cost:"2BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"OGW", Number:"86", Image:"/Images/OGW/Kalitas--TraitorofGhet.jpg"},
{Name:"Malakir Soothsayer", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"87", Image:"/Images/OGW/MalakirSoothsayer.jpg"},
{Name:"Null Caller", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"88", Image:"/Images/OGW/NullCaller.jpg"},
{Name:"Remorseless Punishment", Cost:"3BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"OGW", Number:"89", Image:"/Images/OGW/RemorselessPunishment.jpg"},
{Name:"Tar Snare", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"OGW", Number:"90", Image:"/Images/OGW/TarSnare.jpg"},
{Name:"Untamed Hunger", Cost:"2B", Color:["B"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"OGW", Number:"91", Image:"/Images/OGW/UntamedHunger.jpg"},
{Name:"Vampire Envoy", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"92", Image:"/Images/OGW/VampireEnvoy.jpg"},
{Name:"Zulaport Chainmage", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"93", Image:"/Images/OGW/ZulaportChainmage.jpg"},
{Name:"Consuming Sinkhole", Cost:"3R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"94", Image:"/Images/OGW/ConsumingSinkhole.jpg"},
{Name:"Eldrazi Aggressor", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"95", Image:"/Images/OGW/EldraziAggressor.jpg"},
{Name:"Eldrazi Obligator", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"96", Image:"/Images/OGW/EldraziObligator.jpg"},
{Name:"Immobilizer Eldrazi", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"97", Image:"/Images/OGW/ImmobilizerEldrazi.jpg"},
{Name:"Kozilek's Return", Cost:"2R", Color:["R"], Rarity:"M", Type:["I"], Rating:"8", Sort:"1", Set:"OGW", Number:"98", Image:"/Images/OGW/KozileksReturn.jpg"},
{Name:"Maw of Kozilek", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"99", Image:"/Images/OGW/MawofKozilek.jpg"},
{Name:"Reality Hemorrhage", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"100", Image:"/Images/OGW/RealityHemorrhage.jpg"},
{Name:"Akoum Flameseeker", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"101", Image:"/Images/OGW/AkoumFlameseeker.jpg"},
{Name:"Boulder Salvo", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"OGW", Number:"102", Image:"/Images/OGW/BoulderSalvo.jpg"},
{Name:"Brute Strength", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"103", Image:"/Images/OGW/BruteStrength.jpg"},
{Name:"Chandra, Flamecaller", Cost:"4RR", Color:["R"], Rarity:"M", Type:["P"], Rating:"8", Sort:"1", Set:"OGW", Number:"104", Image:"/Images/OGW/Chandra--Flamecaller.jpg"},
{Name:"Cinder Hellion", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"105", Image:"/Images/OGW/CinderHellion.jpg"},
{Name:"Devour in Flames", Cost:"2R", Color:["R"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"OGW", Number:"106", Image:"/Images/OGW/DevourinFlames.jpg"},
{Name:"Embodiment of Fury", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"107", Image:"/Images/OGW/EmbodimentofFury.jpg"},
{Name:"Expedite", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"108", Image:"/Images/OGW/Expedite.jpg"},
{Name:"Fall of the Titans", Cost:"0R", Color:["R"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"OGW", Number:"109", Image:"/Images/OGW/FalloftheTitans.jpg"},
{Name:"Goblin Dark-Dwellers", Cost:"3RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"110", Image:"/Images/OGW/GoblinDark-Dwellers.jpg"},
{Name:"Goblin Freerunner", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"111", Image:"/Images/OGW/GoblinFreerunner.jpg"},
{Name:"Kazuul's Toll Collector", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"112", Image:"/Images/OGW/KazuulsTollCollector.jpg"},
{Name:"Oath of Chandra", Cost:"1R", Color:["R"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"OGW", Number:"113", Image:"/Images/OGW/OathofChandra.jpg"},
{Name:"Press into Service", Cost:"4R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"OGW", Number:"114", Image:"/Images/OGW/PressintoService.jpg"},
{Name:"Pyromancer's Assault", Cost:"3R", Color:["R"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"OGW", Number:"115", Image:"/Images/OGW/PyromancersAssault.jpg"},
{Name:"Reckless Bushwhacker", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"116", Image:"/Images/OGW/RecklessBushwhacker.jpg"},
{Name:"Sparkmage's Gambit", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"OGW", Number:"117", Image:"/Images/OGW/SparkmagesGambit.jpg"},
{Name:"Tears of Valakut", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"OGW", Number:"118", Image:"/Images/OGW/TearsofValakut.jpg"},
{Name:"Tyrant of Valakut", Cost:"5RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"119", Image:"/Images/OGW/TyrantofValakut.jpg"},
{Name:"Zada's Commando", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"120", Image:"/Images/OGW/ZadasCommando.jpg"},
{Name:"Birthing Hulk", Cost:"6G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"121", Image:"/Images/OGW/BirthingHulk.jpg"},
{Name:"Ruin in Their Wake", Cost:"1G", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"OGW", Number:"122", Image:"/Images/OGW/RuininTheirWake.jpg"},
{Name:"Scion Summoner", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"123", Image:"/Images/OGW/ScionSummoner.jpg"},
{Name:"Stalking Drone", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"124", Image:"/Images/OGW/StalkingDrone.jpg"},
{Name:"Vile Redeemer", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"125", Image:"/Images/OGW/VileRedeemer.jpg"},
{Name:"World Breaker", Cost:"6G", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"OGW", Number:"126", Image:"/Images/OGW/WorldBreaker.jpg"},
{Name:"Baloth Pup", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"127", Image:"/Images/OGW/BalothPup.jpg"},
{Name:"Bonds of Mortality", Cost:"1G", Color:["G"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"OGW", Number:"128", Image:"/Images/OGW/BondsofMortality.jpg"},
{Name:"Canopy Gorger", Cost:"4GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"129", Image:"/Images/OGW/CanopyGorger.jpg"},
{Name:"Elemental Uprising", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"130", Image:"/Images/OGW/ElementalUprising.jpg"},
{Name:"Embodiment of Insight", Cost:"4G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"131", Image:"/Images/OGW/EmbodimentofInsight.jpg"},
{Name:"Gladehart Cavalry", Cost:"5GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"132", Image:"/Images/OGW/GladehartCavalry.jpg"},
{Name:"Harvester Troll", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"133", Image:"/Images/OGW/HarvesterTroll.jpg"},
{Name:"Lead by Example", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"134", Image:"/Images/OGW/LeadbyExample.jpg"},
{Name:"Loam Larva", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"135", Image:"/Images/OGW/LoamLarva.jpg"},
{Name:"Natural State", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"OGW", Number:"136", Image:"/Images/OGW/NaturalState.jpg"},
{Name:"Netcaster Spider", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"137", Image:"/Images/OGW/NetcasterSpider.jpg"},
{Name:"Nissa, Voice of Zendikar", Cost:"1GG", Color:["G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"OGW", Number:"138", Image:"/Images/OGW/Nissa--VoiceofZendikar.jpg"},
{Name:"Nissa's Judgment", Cost:"4G", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"OGW", Number:"139", Image:"/Images/OGW/NissasJudgment.jpg"},
{Name:"Oath of Nissa", Cost:"0G", Color:["G"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"OGW", Number:"140", Image:"/Images/OGW/OathofNissa.jpg"},
{Name:"Pulse of Murasa", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"141", Image:"/Images/OGW/PulseofMurasa.jpg"},
{Name:"Saddleback Lagac", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"142", Image:"/Images/OGW/SaddlebackLagac.jpg"},
{Name:"Seed Guardian", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"143", Image:"/Images/OGW/SeedGuardian.jpg"},
{Name:"Sylvan Advocate", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"144", Image:"/Images/OGW/SylvanAdvocate.jpg"},
{Name:"Tajuru Pathwarden", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"145", Image:"/Images/OGW/TajuruPathwarden.jpg"},
{Name:"Vines of the Recluse", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"OGW", Number:"146", Image:"/Images/OGW/VinesoftheRecluse.jpg"},
{Name:"Zendikar Resurgent", Cost:"5GG", Color:["G"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"OGW", Number:"147", Image:"/Images/OGW/ZendikarResurgent.jpg"},
{Name:"Flayer Drone", Cost:"1BR", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"148", Image:"/Images/OGW/FlayerDrone.jpg"},
{Name:"Mindmelter", Cost:"1UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"149", Image:"/Images/OGW/Mindmelter.jpg"},
{Name:"Void Grafter", Cost:"1UG", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"150", Image:"/Images/OGW/VoidGrafter.jpg"},
{Name:"Ayli, Eternal Pilgrim", Cost:"0WB", Color:["W","B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"OGW", Number:"151", Image:"/Images/OGW/Ayli--EternalPilgrim.jpg"},
{Name:"Baloth Null", Cost:"4BG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"152", Image:"/Images/OGW/BalothNull.jpg"},
{Name:"Cliffhaven Vampire", Cost:"2WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"153", Image:"/Images/OGW/CliffhavenVampire.jpg"},
{Name:"Joraga Auxiliary", Cost:"1WG", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"OGW", Number:"154", Image:"/Images/OGW/JoragaAuxiliary.jpg"},
{Name:"Jori En, Ruin Diver", Cost:"1UR", Color:["U","R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"OGW", Number:"155", Image:"/Images/OGW/JoriEn--RuinDiver.jpg"},
{Name:"Mina and Denn, Wildborn", Cost:"2RG", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"OGW", Number:"156", Image:"/Images/OGW/MinaandDenn--Wildborn.jpg"},
{Name:"Reflector Mage", Cost:"1WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"157", Image:"/Images/OGW/ReflectorMage.jpg"},
{Name:"Relentless Hunter", Cost:"1RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"158", Image:"/Images/OGW/RelentlessHunter.jpg"},
{Name:"Stormchaser Mage", Cost:"0UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"159", Image:"/Images/OGW/StormchaserMage.jpg"},
{Name:"Weapons Trainer", Cost:"0WR", Color:["W","R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"OGW", Number:"160", Image:"/Images/OGW/WeaponsTrainer.jpg"},
{Name:"Bone Saw", Cost:"0", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"OGW", Number:"161", Image:"/Images/OGW/BoneSaw.jpg"},
{Name:"Captain's Claws", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"OGW", Number:"162", Image:"/Images/OGW/CaptainsClaws.jpg"},
{Name:"Chitinous Cloak", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"OGW", Number:"163", Image:"/Images/OGW/ChitinousCloak.jpg"},
{Name:"Hedron Crawler", Cost:"2", Color:["C"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"OGW", Number:"164", Image:"/Images/OGW/HedronCrawler.jpg"},
{Name:"Seer's Lantern", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"4", Sort:"1", Set:"OGW", Number:"165", Image:"/Images/OGW/SeersLantern.jpg"},
{Name:"Stoneforge Masterwork", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"OGW", Number:"166", Image:"/Images/OGW/StoneforgeMasterwork.jpg"},
{Name:"Strider Harness", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"OGW", Number:"167", Image:"/Images/OGW/StriderHarness.jpg"},
{Name:"Cinder Barrens", Cost:"0", Color:["B","R"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"168", Image:"/Images/OGW/CinderBarrens.jpg"},
{Name:"Corrupted Crossroads", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"169", Image:"/Images/OGW/CorruptedCrossroads.jpg"},
{Name:"Crumbling Vestige", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"5", Sort:"1", Set:"OGW", Number:"170", Image:"/Images/OGW/CrumblingVestige.jpg"},
{Name:"Hissing Quagmire", Cost:"0", Color:["B","G"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"OGW", Number:"171", Image:"/Images/OGW/HissingQuagmire.jpg"},
{Name:"Holdout Settlement", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"OGW", Number:"172", Image:"/Images/OGW/HoldoutSettlement.jpg"},
{Name:"Meandering River", Cost:"0", Color:["W","U"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"173", Image:"/Images/OGW/MeanderingRiver.jpg"},
{Name:"Mirrorpool", Cost:"0", Color:["C"], Rarity:"M", Type:["L"], Rating:"8", Sort:"1", Set:"OGW", Number:"174", Image:"/Images/OGW/Mirrorpool.jpg"},
{Name:"Needle Spires", Cost:"0", Color:["W","R"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"OGW", Number:"175", Image:"/Images/OGW/NeedleSpires.jpg"},
{Name:"Ruins of Oran-Rief", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"OGW", Number:"176", Image:"/Images/OGW/RuinsofOran-Rief.jpg"},
{Name:"Sea Gate Wreckage", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"177", Image:"/Images/OGW/SeaGateWreckage.jpg"},
{Name:"Submerged Boneyard", Cost:"0", Color:["U","B"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"178", Image:"/Images/OGW/SubmergedBoneyard.jpg"},
{Name:"Timber Gorge", Cost:"0", Color:["R","G"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"179", Image:"/Images/OGW/TimberGorge.jpg"},
{Name:"Tranquil Expanse", Cost:"0", Color:["W","G"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"OGW", Number:"180", Image:"/Images/OGW/TranquilExpanse.jpg"},
{Name:"Unknown Shores", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"5", Sort:"1", Set:"OGW", Number:"181", Image:"/Images/OGW/UnknownShores.jpg"},
{Name:"Wandering Fumarole", Cost:"0", Color:["U","B"], Rarity:"R", Type:["L"], Rating:"8", Sort:"1", Set:"OGW", Number:"182", Image:"/Images/OGW/WanderingFumarole.jpg"},
{Name:"Wastes", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"OGW", Number:"183", Image:"/Images/OGW/Wastes.jpg"},
{Name:"Wastes", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"OGW", Number:"183", Image:"/Images/OGW/Wastes.jpg"}
];

var ExpeditionsOGW = [
{ Name: "Ancient Tomb", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsAncientTomb.jpg" },
{ Name: "Cascade Bluffs", Cost: "0", Color: ["U", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsCascadeBluffs.jpg" },
{ Name: "Dust Bowl", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsDustBowl.jpg" },
{ Name: "Eye of Ugin", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsEyeOfUgin.jpg" },
{ Name: "Fetid Heath", Cost: "0", Color: ["W", "B"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsFetidHeath.jpg" },
{ Name: "Firelit Thicket", Cost: "0", Color: ["R", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsFireLitThicket.jpg" },
{ Name: "Flooded Grove", Cost: "0", Color: ["U", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsFloodedGrove.jpg" },
{ Name: "Forbidden Orchard", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsForbiddenOrchard.jpg" },
{ Name: "Graven Cairns", Cost: "0", Color: ["B", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsGravenCairns.jpg" },
{ Name: "Horizon Canopy", Cost: "0", Color: ["W", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsHorizonCanopy.jpg" },
{ Name: "Kor Haven", Cost: "0", Color: ["W"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsKorHaven.jpg" },
{ Name: "Mana Confluence", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsManaConfluence.jpg" },
{ Name: "Mystic Gate", Cost: "0", Color: ["W", "U"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsMysticGate.jpg" },
{ Name: "Rugged Prairie", Cost: "0", Color: ["W", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsRuggedPrairie.jpg" },
{ Name: "Strip Mine", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsSireMine.jpg" },
{ Name: "Sunken Ruins", Cost: "0", Color: ["U", "B"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsSunkenRuins.jpg" },
{ Name: "Tectonic Edge", Cost: "0", Color: ["C"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsTectonicEdge.jpg" },
{ Name: "Twilight Mire", Cost: "0", Color: ["B", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsTwilightMire.jpg" },
{ Name: "Wasteland", Cost: "0", Color: ["U", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsWasteland.jpg" },
{ Name: "Wooded Bastion", Cost: "0", Color: ["W", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/OGW/ExpeditionsWoodedBastion.jpg" }
];

var BFZ = [
{Name:"Bane of Bala Ged", Cost:"7", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"1", Image:"/Images/BFZ/BaneofBalaGed.jpg"},
{Name:"Blight Herder", Cost:"5", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"2", Image:"/Images/BFZ/BlightHerder.jpg"},
{Name:"Breaker of Armies", Cost:"8", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"3", Image:"/Images/BFZ/BreakerofArmies.jpg"},
{Name:"Conduit of Ruin", Cost:"6", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"4", Image:"/Images/BFZ/ConduitofRuin.jpg"},
{Name:"Deathless Behemoth", Cost:"6", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"5", Image:"/Images/BFZ/DeathlessBehemoth.jpg"},
{Name:"Desolation Twin", Cost:"9", Color:["C"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"6", Image:"/Images/BFZ/DesolationTwin.jpg"},
{Name:"Eldrazi Devastator", Cost:"8", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"7", Image:"/Images/BFZ/EldraziDevastator.jpg"},
{Name:"Endless One", Cost:"0", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"8", Image:"/Images/BFZ/EndlessOne.jpg"},
{Name:"Gruesome Slaughter", Cost:"6", Color:["C"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"BFZ", Number:"9", Image:"/Images/BFZ/GruesomeSlaughter.jpg"},
{Name:"Kozilek's Channeler", Cost:"5", Color:["C"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"10", Image:"/Images/BFZ/KozileksChanneler.jpg"},
{Name:"Oblivion Sower", Cost:"6", Color:["C"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"BFZ", Number:"11", Image:"/Images/BFZ/OblivionSower.jpg"},
{Name:"Ruin Processor", Cost:"7", Color:["C"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"12", Image:"/Images/BFZ/RuinProcessor.jpg"},
{Name:"Scour from Existence", Cost:"7", Color:["C"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"13", Image:"/Images/BFZ/ScourfromExistence.jpg"},
{Name:"Titan's Presence", Cost:"3", Color:["C"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"BFZ", Number:"14", Image:"/Images/BFZ/TitansPresence.jpg"},
{Name:"Ulamog, the Ceaseless Hunger", Cost:"9", Color:["C"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"15", Image:"/Images/BFZ/Ulamog--theCeaselessHunger.jpg"},
{Name:"Ulamog's Despoiler", Cost:"6", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"16", Image:"/Images/BFZ/UlamogsDespoiler.jpg"},
{Name:"Void Winnower", Cost:"9", Color:["C"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"17", Image:"/Images/BFZ/VoidWinnower.jpg"},
{Name:"Angel of Renewal", Cost:"5W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"18", Image:"/Images/BFZ/AngelofRenewal.jpg"},
{Name:"Angelic Gift", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"BFZ", Number:"19", Image:"/Images/BFZ/AngelicGift.jpg"},
{Name:"Cliffside Lookout", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"20", Image:"/Images/BFZ/CliffsideLookout.jpg"},
{Name:"Courier Griffin", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"21", Image:"/Images/BFZ/CourierGriffin.jpg"},
{Name:"Emeria Shepherd", Cost:"5WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"22", Image:"/Images/BFZ/EmeriaShepherd.jpg"},
{Name:"Encircling Fissure", Cost:"2W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"BFZ", Number:"23", Image:"/Images/BFZ/EncirclingFissure.jpg"},
{Name:"Expedition Envoy", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"24", Image:"/Images/BFZ/ExpeditionEnvoy.jpg"},
{Name:"Felidar Cub", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"25", Image:"/Images/BFZ/FelidarCub.jpg"},
{Name:"Felidar Sovereign", Cost:"4WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"26", Image:"/Images/BFZ/FelidarSovereign.jpg"},
{Name:"Fortified Rampart", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"27", Image:"/Images/BFZ/FortifiedRampart.jpg"},
{Name:"Ghostly Sentinel", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"28", Image:"/Images/BFZ/GhostlySentinel.jpg"},
{Name:"Gideon, Ally of Zendikar", Cost:"2WW", Color:["W"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"BFZ", Number:"29", Image:"/Images/BFZ/Gideon--AllyofZendikar.jpg"},
{Name:"Gideon's Reproach", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"BFZ", Number:"30", Image:"/Images/BFZ/GideonsReproach.jpg"},
{Name:"Hero of Goma Fada", Cost:"4W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"31", Image:"/Images/BFZ/HeroofGomaFada.jpg"},
{Name:"Inspired Charge", Cost:"2WW", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"32", Image:"/Images/BFZ/InspiredCharge.jpg"},
{Name:"Kitesail Scout", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"33", Image:"/Images/BFZ/KitesailScout.jpg"},
{Name:"Kor Bladewhirl", Cost:"1W", Color:["W"], Rarity:"U", Type:["U"], Rating:"7", Sort:"1", Set:"BFZ", Number:"34", Image:"/Images/BFZ/KorBladewhirl.jpg"},
{Name:"Kor Castigator", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"35", Image:"/Images/BFZ/KorCastigator.jpg"},
{Name:"Kor Entanglers", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"36", Image:"/Images/BFZ/KorEntanglers.jpg"},
{Name:"Lantern Scout", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"37", Image:"/Images/BFZ/LanternScout.jpg"},
{Name:"Lithomancer's Focus", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"38", Image:"/Images/BFZ/LithomancersFocus.jpg"},
{Name:"Makindi Patrol", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"39", Image:"/Images/BFZ/MakindiPatrol.jpg"},
{Name:"Ondu Greathorn", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"40", Image:"/Images/BFZ/OnduGreathorn.jpg"},
{Name:"Ondu Rising", Cost:"1W", Color:["W"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"BFZ", Number:"41", Image:"/Images/BFZ/OnduRising.jpg"},
{Name:"Planar Outburst", Cost:"3WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"BFZ", Number:"42", Image:"/Images/BFZ/PlanarOutburst.jpg"},
{Name:"Quarantine Field", Cost:"0WW", Color:["W"], Rarity:"M", Type:["E"], Rating:"7", Sort:"1", Set:"BFZ", Number:"43", Image:"/Images/BFZ/QuarantineField.jpg"},
{Name:"Retreat to Emeria", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"BFZ", Number:"44", Image:"/Images/BFZ/RetreattoEmeria.jpg"},
{Name:"Roil's Retribution", Cost:"3WW", Color:["W"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"BFZ", Number:"45", Image:"/Images/BFZ/RoilsRetribution.jpg"},
{Name:"Serene Steward", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"46", Image:"/Images/BFZ/SereneSteward.jpg"},
{Name:"Shadow Glider", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"47", Image:"/Images/BFZ/ShadowGlider.jpg"},
{Name:"Sheer Drop", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"BFZ", Number:"48", Image:"/Images/BFZ/SheerDrop.jpg"},
{Name:"Smite the Monstrous", Cost:"3W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"BFZ", Number:"49", Image:"/Images/BFZ/SmitetheMonstrous.jpg"},
{Name:"Stasis Snare", Cost:"1WW", Color:["W"], Rarity:"U", Type:["E"], Rating:"8", Sort:"1", Set:"BFZ", Number:"50", Image:"/Images/BFZ/StasisSnare.jpg"},
{Name:"Stone Haven Medic", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"51", Image:"/Images/BFZ/StoneHavenMedic.jpg"},
{Name:"Tandem Tactics", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"52", Image:"/Images/BFZ/TandemTactics.jpg"},
{Name:"Unified Front", Cost:"3W", Color:["W"], Rarity:"U", Type:["S"], Rating:"2", Sort:"1", Set:"BFZ", Number:"53", Image:"/Images/BFZ/UnifiedFront.jpg"},
{Name:"Adverse Conditions", Cost:"3U", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"BFZ", Number:"54", Image:"/Images/BFZ/AdverseConditions.jpg"},
{Name:"Benthic Infiltrator", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"55", Image:"/Images/BFZ/BenthicInfiltrator.jpg"},
{Name:"Cryptic Cruiser", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"56", Image:"/Images/BFZ/CrypticCruiser.jpg"},
{Name:"Drowner of Hope", Cost:"5U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"57", Image:"/Images/BFZ/DrownerofHope.jpg"},
{Name:"Eldrazi Skyspawner", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"58", Image:"/Images/BFZ/EldraziSkyspawner.jpg"},
{Name:"Horribly Awry", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"BFZ", Number:"59", Image:"/Images/BFZ/HorriblyAwry.jpg"},
{Name:"Incubator Drone", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"60", Image:"/Images/BFZ/IncubatorDrone.jpg"},
{Name:"Mist Intruder", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"61", Image:"/Images/BFZ/MistIntruder.jpg"},
{Name:"Murk Strider", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"62", Image:"/Images/BFZ/MurkStrider.jpg"},
{Name:"Oracle of Dust", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"63", Image:"/Images/BFZ/OracleofDust.jpg"},
{Name:"Ruination Guide", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"64", Image:"/Images/BFZ/RuinationGuide.jpg"},
{Name:"Salvage Drone", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"65", Image:"/Images/BFZ/SalvageDrone.jpg"},
{Name:"Spell Shrivel", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"BFZ", Number:"66", Image:"/Images/BFZ/SpellShrivel.jpg"},
{Name:"Tide Drifter", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"67", Image:"/Images/BFZ/TideDrifter.jpg"},
{Name:"Ulamog's Reclaimer", Cost:"4U", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"68", Image:"/Images/BFZ/UlamogsReclaimer.jpg"},
{Name:"Anticipate", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"69", Image:"/Images/BFZ/Anticipate.jpg"},
{Name:"Brilliant Spectrum", Cost:"3U", Color:["U"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"BFZ", Number:"70", Image:"/Images/BFZ/BrilliantSpectrum.jpg"},
{Name:"Cloud Manta", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"71", Image:"/Images/BFZ/CloudManta.jpg"},
{Name:"Clutch of Currents", Cost:"0U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"72", Image:"/Images/BFZ/ClutchofCurrents.jpg"},
{Name:"Coastal Discovery", Cost:"3U", Color:["U"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"BFZ", Number:"73", Image:"/Images/BFZ/CoastalDiscovery.jpg"},
{Name:"Coralhelm Guide", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"74", Image:"/Images/BFZ/CoralhelmGuide.jpg"},
{Name:"Dampening Pulse", Cost:"3U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"BFZ", Number:"75", Image:"/Images/BFZ/DampeningPulse.jpg"},
{Name:"Dispel", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"76", Image:"/Images/BFZ/Dispel.jpg"},
{Name:"Exert Influence", Cost:"4U", Color:["U"], Rarity:"R", Type:["S"], Rating:"4", Sort:"1", Set:"BFZ", Number:"77", Image:"/Images/BFZ/ExertInfluence.jpg"},
{Name:"Guardian of Tazeem", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"78", Image:"/Images/BFZ/GuardianofTazeem.jpg"},
{Name:"Halimar Tidecaller", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"79", Image:"/Images/BFZ/HalimarTidecaller.jpg"},
{Name:"Part the Waterveil", Cost:"4UU", Color:["U"], Rarity:"M", Type:["S"], Rating:"8", Sort:"1", Set:"BFZ", Number:"80", Image:"/Images/BFZ/ParttheWaterveil.jpg"},
{Name:"Prism Array", Cost:"4U", Color:["U"], Rarity:"R", Type:["E"], Rating:"4", Sort:"1", Set:"BFZ", Number:"81", Image:"/Images/BFZ/PrismArray.jpg"},
{Name:"Retreat to Coralhelm", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"BFZ", Number:"82", Image:"/Images/BFZ/RetreattoCoralhelm.jpg"},
{Name:"Roilmage's Trick", Cost:"3U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"83", Image:"/Images/BFZ/RoilmagesTrick.jpg"},
{Name:"Rush of Ice", Cost:"0U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"84", Image:"/Images/BFZ/RushofIce.jpg"},
{Name:"Scatter to the Winds", Cost:"1UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"BFZ", Number:"85", Image:"/Images/BFZ/ScattertotheWinds.jpg"},
{Name:"Tightening Coils", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"BFZ", Number:"86", Image:"/Images/BFZ/TighteningCoils.jpg"},
{Name:"Ugin's Insight", Cost:"3UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"BFZ", Number:"87", Image:"/Images/BFZ/UginsInsight.jpg"},
{Name:"Wave-Wing Elemental", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"88", Image:"/Images/BFZ/Wave-WingElemental.jpg"},
{Name:"Windrider Patrol", Cost:"3UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"89", Image:"/Images/BFZ/WindriderPatrol.jpg"},
{Name:"Complete Disregard", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"90", Image:"/Images/BFZ/CompleteDisregard.jpg"},
{Name:"Culling Drone", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"91", Image:"/Images/BFZ/CullingDrone.jpg"},
{Name:"Dominator Drone", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"92", Image:"/Images/BFZ/DominatorDrone.jpg"},
{Name:"Grave Birthing", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"93", Image:"/Images/BFZ/GraveBirthing.jpg"},
{Name:"Grip of Desolation", Cost:"4BB", Color:["B"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"BFZ", Number:"94", Image:"/Images/BFZ/GripofDesolation.jpg"},
{Name:"Mind Raker", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"95", Image:"/Images/BFZ/MindRaker.jpg"},
{Name:"Silent Skimmer", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"96", Image:"/Images/BFZ/SilentSkimmer.jpg"},
{Name:"Skitterskin", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"97", Image:"/Images/BFZ/Skitterskin.jpg"},
{Name:"Sludge Crawler", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"98", Image:"/Images/BFZ/SludgeCrawler.jpg"},
{Name:"Smothering Abomination", Cost:"2BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"99", Image:"/Images/BFZ/SmotheringAbomination.jpg"},
{Name:"Swarm Surge", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"100", Image:"/Images/BFZ/SwarmSurge.jpg"},
{Name:"Transgress the Mind", Cost:"1B", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"BFZ", Number:"101", Image:"/Images/BFZ/TransgresstheMind.jpg"},
{Name:"Wasteland Strangler", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"102", Image:"/Images/BFZ/WastelandStrangler.jpg"},
{Name:"Altar's Reap", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"103", Image:"/Images/BFZ/AltarsReap.jpg"},
{Name:"Bloodbond Vampire", Cost:"2BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"104", Image:"/Images/BFZ/BloodbondVampire.jpg"},
{Name:"Bone Splinters", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"105", Image:"/Images/BFZ/BoneSplinters.jpg"},
{Name:"Carrier Thrall", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"106", Image:"/Images/BFZ/CarrierThrall.jpg"},
{Name:"Defiant Bloodlord", Cost:"5BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"107", Image:"/Images/BFZ/DefiantBloodlord.jpg"},
{Name:"Demon's Grasp", Cost:"4B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"BFZ", Number:"108", Image:"/Images/BFZ/DemonsGrasp.jpg"},
{Name:"Drana, Liberator of Malakir", Cost:"1BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"109", Image:"/Images/BFZ/Drana--LiberatorofMalakir.jpg"},
{Name:"Dutiful Return", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"BFZ", Number:"110", Image:"/Images/BFZ/DutifulReturn.jpg"},
{Name:"Geyserfield Stalker", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"111", Image:"/Images/BFZ/GeyserfieldStalker.jpg"},
{Name:"Guul Draz Overseer", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"112", Image:"/Images/BFZ/GuulDrazOverseer.jpg"},
{Name:"Hagra Sharpshooter", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"113", Image:"/Images/BFZ/HagraSharpshooter.jpg"},
{Name:"Kalastria Healer", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"114", Image:"/Images/BFZ/KalastriaHealer.jpg"},
{Name:"Kalastria Nightwatch", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"115", Image:"/Images/BFZ/KalastriaNightwatch.jpg"},
{Name:"Malakir Familiar", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"116", Image:"/Images/BFZ/MalakirFamiliar.jpg"},
{Name:"Mire's Malice", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"117", Image:"/Images/BFZ/MiresMalice.jpg"},
{Name:"Nirkana Assassin", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"118", Image:"/Images/BFZ/NirkanaAssassin.jpg"},
{Name:"Ob Nixilis Reignited", Cost:"3BB", Color:["B"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"BFZ", Number:"119", Image:"/Images/BFZ/ObNixilisReignited.jpg"},
{Name:"Painful Truths", Cost:"2B", Color:["B"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"BFZ", Number:"120", Image:"/Images/BFZ/PainfulTruths.jpg"},
{Name:"Retreat to Hagra", Cost:"2B", Color:["B"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"BFZ", Number:"121", Image:"/Images/BFZ/RetreattoHagra.jpg"},
{Name:"Rising Miasma", Cost:"3B", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"BFZ", Number:"122", Image:"/Images/BFZ/RisingMiasma.jpg"},
{Name:"Ruinous Path", Cost:"1BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"BFZ", Number:"123", Image:"/Images/BFZ/RuinousPath.jpg"},
{Name:"Vampiric Rites", Cost:"0B", Color:["B"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"BFZ", Number:"124", Image:"/Images/BFZ/VampiricRites.jpg"},
{Name:"Voracious Null", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"125", Image:"/Images/BFZ/VoraciousNull.jpg"},
{Name:"Zulaport Cutthroat", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"126", Image:"/Images/BFZ/ZulaportCutthroat.jpg"},
{Name:"Barrage Tyrant", Cost:"4R", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"127", Image:"/Images/BFZ/BarrageTyrant.jpg"},
{Name:"Crumble to Dust", Cost:"3R", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"BFZ", Number:"128", Image:"/Images/BFZ/CrumbletoDust.jpg"},
{Name:"Kozilek's Sentinel", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"129", Image:"/Images/BFZ/KozileksSentinel.jpg"},
{Name:"Molten Nursery", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"BFZ", Number:"130", Image:"/Images/BFZ/MoltenNursery.jpg"},
{Name:"Nettle Drone", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"131", Image:"/Images/BFZ/NettleDrone.jpg"},
{Name:"Processor Assault", Cost:"1R", Color:["R"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"BFZ", Number:"132", Image:"/Images/BFZ/ProcessorAssault.jpg"},
{Name:"Serpentine Spike", Cost:"5RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"5", Sort:"1", Set:"BFZ", Number:"133", Image:"/Images/BFZ/SerpentineSpike.jpg"},
{Name:"Touch of the Void", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"BFZ", Number:"134", Image:"/Images/BFZ/TouchoftheVoid.jpg"},
{Name:"Turn Against", Cost:"4R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"BFZ", Number:"135", Image:"/Images/BFZ/TurnAgainst.jpg"},
{Name:"Vestige of Emrakul", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"136", Image:"/Images/BFZ/VestigeofEmrakul.jpg"},
{Name:"Vile Aggregate", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"137", Image:"/Images/BFZ/VileAggregate.jpg"},
{Name:"Akoum Firebird", Cost:"2RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"BFZ", Number:"138", Image:"/Images/BFZ/AkoumFirebird.jpg"},
{Name:"Akoum Hellkite", Cost:"4RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"139", Image:"/Images/BFZ/AkoumHellkite.jpg"},
{Name:"Akoum Stonewaker", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"140", Image:"/Images/BFZ/AkoumStonewaker.jpg"},
{Name:"Belligerent Whiptail", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"141", Image:"/Images/BFZ/BelligerentWhiptail.jpg"},
{Name:"Boiling Earth", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"142", Image:"/Images/BFZ/BoilingEarth.jpg"},
{Name:"Chasm Guide", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"143", Image:"/Images/BFZ/ChasmGuide.jpg"},
{Name:"Dragonmaster Outcast", Cost:"0R", Color:["R"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"BFZ", Number:"144", Image:"/Images/BFZ/DragonmasterOutcast.jpg"},
{Name:"Firemantle Mage", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"145", Image:"/Images/BFZ/FiremantleMage.jpg"},
{Name:"Goblin War Paint", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"BFZ", Number:"146", Image:"/Images/BFZ/GoblinWarPaint.jpg"},
{Name:"Lavastep Raider", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"147", Image:"/Images/BFZ/LavastepRaider.jpg"},
{Name:"Makindi Sliderunner", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"148", Image:"/Images/BFZ/MakindiSliderunner.jpg"},
{Name:"Ondu Champion", Cost:"2RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"149", Image:"/Images/BFZ/OnduChampion.jpg"},
{Name:"Outnumber", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"150", Image:"/Images/BFZ/Outnumber.jpg"},
{Name:"Radiant Flames", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"151", Image:"/Images/BFZ/RadiantFlames.jpg"},
{Name:"Reckless Cohort", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BFZ", Number:"152", Image:"/Images/BFZ/RecklessCohort.jpg"},
{Name:"Retreat to Valakut", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"BFZ", Number:"153", Image:"/Images/BFZ/RetreattoValakut.jpg"},
{Name:"Rolling Thunder", Cost:"0RR", Color:["R"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"BFZ", Number:"154", Image:"/Images/BFZ/RollingThunder.jpg"},
{Name:"Shatterskull Recruit", Cost:"3RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"155", Image:"/Images/BFZ/ShatterskullRecruit.jpg"},
{Name:"Stonefury", Cost:"3RR", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"156", Image:"/Images/BFZ/Stonefury.jpg"},
{Name:"Sure Strike", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"157", Image:"/Images/BFZ/SureStrike.jpg"},
{Name:"Tunneling Geopede", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"158", Image:"/Images/BFZ/TunnelingGeopede.jpg"},
{Name:"Valakut Invoker", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"159", Image:"/Images/BFZ/ValakutInvoker.jpg"},
{Name:"Valakut Predator", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"160", Image:"/Images/BFZ/ValakutPredator.jpg"},
{Name:"Volcanic Upheaval", Cost:"3R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"161", Image:"/Images/BFZ/VolcanicUpheaval.jpg"},
{Name:"Zada, Hedron Grinder", Cost:"3R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"162", Image:"/Images/BFZ/Zada--HedronGrinder.jpg"},
{Name:"Blisterpod", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"163", Image:"/Images/BFZ/Blisterpod.jpg"},
{Name:"Brood Monitor", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"164", Image:"/Images/BFZ/BroodMonitor.jpg"},
{Name:"Call the Scions", Cost:"2G", Color:["G"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"BFZ", Number:"165", Image:"/Images/BFZ/CalltheScions.jpg"},
{Name:"Eyeless Watcher", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"166", Image:"/Images/BFZ/EyelessWatcher.jpg"},
{Name:"From Beyond", Cost:"3G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"BFZ", Number:"167", Image:"/Images/BFZ/FromBeyond.jpg"},
{Name:"Unnatural Aggression", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"168", Image:"/Images/BFZ/UnnaturalAggression.jpg"},
{Name:"Void Attendant", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"169", Image:"/Images/BFZ/VoidAttendant.jpg"},
{Name:"Beastcaller Savant", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"170", Image:"/Images/BFZ/BeastcallerSavant.jpg"},
{Name:"Broodhunter Wurm", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"171", Image:"/Images/BFZ/BroodhunterWurm.jpg"},
{Name:"Earthen Arms", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"BFZ", Number:"172", Image:"/Images/BFZ/EarthenArms.jpg"},
{Name:"Giant Mantis", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"173", Image:"/Images/BFZ/GiantMantis.jpg"},
{Name:"Greenwarden of Murasa", Cost:"4GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"174", Image:"/Images/BFZ/GreenwardenofMurasa.jpg"},
{Name:"Infuse with the Elements", Cost:"3G", Color:["G"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"175", Image:"/Images/BFZ/InfusewiththeElements.jpg"},
{Name:"Jaddi Offshoot", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"BFZ", Number:"176", Image:"/Images/BFZ/JaddiOffshoot.jpg"},
{Name:"Lifespring Druid", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BFZ", Number:"177", Image:"/Images/BFZ/LifespringDruid.jpg"},
{Name:"Murasa Ranger", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"178", Image:"/Images/BFZ/MurasaRanger.jpg"},
{Name:"Natural Connection", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"BFZ", Number:"179", Image:"/Images/BFZ/NaturalConnection.jpg"},
{Name:"Nissa's Renewal", Cost:"5G", Color:["G"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"BFZ", Number:"180", Image:"/Images/BFZ/NissasRenewal.jpg"},
{Name:"Oran-Rief Hydra", Cost:"4GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"181", Image:"/Images/BFZ/Oran-RiefHydra.jpg"},
{Name:"Oran-Rief Invoker", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"182", Image:"/Images/BFZ/Oran-RiefInvoker.jpg"},
{Name:"Plated Crusher", Cost:"4GGG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"183", Image:"/Images/BFZ/PlatedCrusher.jpg"},
{Name:"Plummet", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"BFZ", Number:"184", Image:"/Images/BFZ/Plummet.jpg"},
{Name:"Reclaiming Vines", Cost:"2GG", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"185", Image:"/Images/BFZ/ReclaimingVines.jpg"},
{Name:"Retreat to Kazandu", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"BFZ", Number:"186", Image:"/Images/BFZ/RetreattoKazandu.jpg"},
{Name:"Rot Shambler", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"BFZ", Number:"187", Image:"/Images/BFZ/RotShambler.jpg"},
{Name:"Scythe Leopard", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"188", Image:"/Images/BFZ/ScytheLeopard.jpg"},
{Name:"Seek the Wilds", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BFZ", Number:"189", Image:"/Images/BFZ/SeektheWilds.jpg"},
{Name:"Snapping Gnarlid", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"190", Image:"/Images/BFZ/SnappingGnarlid.jpg"},
{Name:"Swell of Growth", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"BFZ", Number:"191", Image:"/Images/BFZ/SwellofGrowth.jpg"},
{Name:"Sylvan Scrying", Cost:"1G", Color:["G"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"BFZ", Number:"192", Image:"/Images/BFZ/SylvanScrying.jpg"},
{Name:"Tajuru Beastmaster", Cost:"5G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"193", Image:"/Images/BFZ/TajuruBeastmaster.jpg"},
{Name:"Tajuru Stalwart", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"194", Image:"/Images/BFZ/TajuruStalwart.jpg"},
{Name:"Tajuru Warcaller", Cost:"3GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"195", Image:"/Images/BFZ/TajuruWarcaller.jpg"},
{Name:"Territorial Baloth", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BFZ", Number:"196", Image:"/Images/BFZ/TerritorialBaloth.jpg"},
{Name:"Undergrowth Champion", Cost:"1GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"BFZ", Number:"197", Image:"/Images/BFZ/UndergrowthChampion.jpg"},
{Name:"Woodland Wanderer", Cost:"3G", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"198", Image:"/Images/BFZ/WoodlandWanderer.jpg"},
{Name:"Brood Butcher", Cost:"3BG", Color:["B","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"199", Image:"/Images/BFZ/BroodButcher.jpg"},
{Name:"Brutal Expulsion", Cost:"2UR", Color:["U","R"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"BFZ", Number:"200", Image:"/Images/BFZ/BrutalExpulsion.jpg"},
{Name:"Catacomb Sifter", Cost:"1BG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"201", Image:"/Images/BFZ/CatacombSifter.jpg"},
{Name:"Dust Stalker", Cost:"2BR", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"202", Image:"/Images/BFZ/DustStalker.jpg"},
{Name:"Fathom Feeder", Cost:"0UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"203", Image:"/Images/BFZ/FathomFeeder.jpg"},
{Name:"Forerunner of Slaughter", Cost:"0BR", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"204", Image:"/Images/BFZ/ForerunnerofSlaughter.jpg"},
{Name:"Herald of Kozilek", Cost:"1UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"205", Image:"/Images/BFZ/HeraldofKozilek.jpg"},
{Name:"Sire of Stagnation", Cost:"4UB", Color:["U","B"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"BFZ", Number:"206", Image:"/Images/BFZ/SireofStagnation.jpg"},
{Name:"Ulamog's Nullifier", Cost:"2UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"207", Image:"/Images/BFZ/UlamogsNullifier.jpg"},
{Name:"Angelic Captain", Cost:"3WR", Color:["W","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"208", Image:"/Images/BFZ/AngelicCaptain.jpg"},
{Name:"Bring to Light", Cost:"3UG", Color:["U","G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"BFZ", Number:"209", Image:"/Images/BFZ/BringtoLight.jpg"},
{Name:"Drana's Emissary", Cost:"1WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"210", Image:"/Images/BFZ/DranasEmissary.jpg"},
{Name:"Grove Rumbler", Cost:"2RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BFZ", Number:"211", Image:"/Images/BFZ/GroveRumbler.jpg"},
{Name:"Grovetender Druids", Cost:"2WG", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"212", Image:"/Images/BFZ/GrovetenderDruids.jpg"},
{Name:"Kiora, Master of the Depths", Cost:"2UG", Color:["U","G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"BFZ", Number:"213", Image:"/Images/BFZ/Kiora--MasteroftheDepths.jpg"},
{Name:"March from the Tomb", Cost:"3WB", Color:["W","B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"BFZ", Number:"214", Image:"/Images/BFZ/MarchfromtheTomb.jpg"},
{Name:"Munda, Ambush Leader", Cost:"2RW", Color:["R","W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"215", Image:"/Images/BFZ/Munda--AmbushLeader.jpg"},
{Name:"Noyan Dar, Roil Shaper", Cost:"3WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"216", Image:"/Images/BFZ/NoyanDar--RoilShaper.jpg"},
{Name:"Omnath, Locus of Rage", Cost:"3RRGG", Color:["R","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"BFZ", Number:"217", Image:"/Images/BFZ/Omnath--LocusofRage.jpg"},
{Name:"Resolute Blademaster", Cost:"3WR", Color:["W","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"218", Image:"/Images/BFZ/ResoluteBlademaster.jpg"},
{Name:"Roil Spout", Cost:"1WU", Color:["W","U"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"BFZ", Number:"219", Image:"/Images/BFZ/RoilSpout.jpg"},
{Name:"Skyrider Elf", Cost:"0UG", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"220", Image:"/Images/BFZ/SkyriderElf.jpg"},
{Name:"Veteran Warleader", Cost:"1WG", Color:["W","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"BFZ", Number:"221", Image:"/Images/BFZ/VeteranWarleader.jpg"},
{Name:"Aligned Hedron Network", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"8", Sort:"1", Set:"BFZ", Number:"222", Image:"/Images/BFZ/AlignedHedronNetwork.jpg"},
{Name:"Hedron Archive", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"6", Sort:"1", Set:"BFZ", Number:"223", Image:"/Images/BFZ/HedronArchive.jpg"},
{Name:"Hedron Blade", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"BFZ", Number:"224", Image:"/Images/BFZ/HedronBlade.jpg"},
{Name:"Pathway Arrows", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"BFZ", Number:"225", Image:"/Images/BFZ/PathwayArrows.jpg"},
{Name:"Pilgrim's Eye", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"BFZ", Number:"226", Image:"/Images/BFZ/PilgrimsEye.jpg"},
{Name:"Slab Hammer", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"BFZ", Number:"227", Image:"/Images/BFZ/SlabHammer.jpg"},
{Name:"Ally Encampment", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"BFZ", Number:"228", Image:"/Images/BFZ/AllyEncampment.jpg"},
{Name:"Blighted Cataract", Cost:"0", Color:["U"], Rarity:"U", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"229", Image:"/Images/BFZ/BlightedCataract.jpg"},
{Name:"Blighted Fen", Cost:"0", Color:["B"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"BFZ", Number:"230", Image:"/Images/BFZ/BlightedFen.jpg"},
{Name:"Blighted Gorge", Cost:"0", Color:["R"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"BFZ", Number:"231", Image:"/Images/BFZ/BlightedGorge.jpg"},
{Name:"Blighted Steppe", Cost:"0", Color:["W"], Rarity:"U", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"232", Image:"/Images/BFZ/BlightedSteppe.jpg"},
{Name:"Blighted Woodland", Cost:"0", Color:["G"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"233", Image:"/Images/BFZ/BlightedWoodland.jpg"},
{Name:"Canopy Vista", Cost:"0", Color:["W","G"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"234", Image:"/Images/BFZ/CanopyVista.jpg"},
{Name:"Cinder Glade", Cost:"0", Color:["R","G"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"235", Image:"/Images/BFZ/CinderGlade.jpg"},
{Name:"Evolving Wilds", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"236", Image:"/Images/BFZ/EvolvingWilds.jpg"},
{Name:"Fertile Thicket", Cost:"0", Color:["G"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"BFZ", Number:"237", Image:"/Images/BFZ/FertileThicket.jpg"},
{Name:"Looming Spires", Cost:"0", Color:["R"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"238", Image:"/Images/BFZ/LoomingSpires.jpg"},
{Name:"Lumbering Falls", Cost:"0", Color:["U","G"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"239", Image:"/Images/BFZ/LumberingFalls.jpg"},
{Name:"Mortuary Mire", Cost:"0", Color:["B"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"240", Image:"/Images/BFZ/MortuaryMire.jpg"},
{Name:"Prairie Stream", Cost:"0", Color:["W","U"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"BFZ", Number:"241", Image:"/Images/BFZ/PrairieStream.jpg"},
{Name:"Sanctum of Ugin", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"BFZ", Number:"242", Image:"/Images/BFZ/SanctumofUgin.jpg"},
{Name:"Sandstone Bridge", Cost:"0", Color:["W"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"243", Image:"/Images/BFZ/SandstoneBridge.jpg"},
{Name:"Shambling Vent", Cost:"0", Color:["W","B"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"244", Image:"/Images/BFZ/ShamblingVent.jpg"},
{Name:"Shrine of the Forsaken Gods", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"BFZ", Number:"245", Image:"/Images/BFZ/ShrineoftheForsakenGods.jpg"},
{Name:"Skyline Cascade", Cost:"0", Color:["U"], Rarity:"C", Type:["L"], Rating:"3", Sort:"1", Set:"BFZ", Number:"246", Image:"/Images/BFZ/SkylineCascade.jpg"},
{Name:"Smoldering Marsh", Cost:"0", Color:["B","R"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"247", Image:"/Images/BFZ/SmolderingMarsh.jpg"},
{Name:"Spawning Bed", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"5", Sort:"1", Set:"BFZ", Number:"248", Image:"/Images/BFZ/SpawningBed.jpg"},
{Name:"Sunken Hollow", Cost:"0", Color:["U","B"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"BFZ", Number:"249", Image:"/Images/BFZ/SunkenHollow.jpg"},
];
var BNG = [
{Name:"Acolyte's Reward", Cost:"2", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"BNG", Number:"1", Image:"/Images/BNG/1.jpg"},
{Name:"Akroan Phalanx", Cost:"4", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BNG", Number:"2", Image:"/Images/BNG/2.jpg"},
{Name:"Akroan Skyguard", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"BNG", Number:"3", Image:"/Images/BNG/3.jpg"},
{Name:"Archetype of Courage ", Cost:"3", Color:["W"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"BNG", Number:"4", Image:"/Images/BNG/4.jpg"},
{Name:"Brimaz, King of Oreskos", Cost:"3", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"BNG", Number:"5", Image:"/Images/BNG/5.jpg"},
{Name:"Dawn to Dusk", Cost:"4", Color:["W"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"BNG", Number:"6", Image:"/Images/BNG/6.jpg"},
{Name:"Eidolon of Countless Battles", Cost:"3", Color:["W"], Rarity:"R", Type:["C","E"], Rating:"8", Sort:"1", Set:"BNG", Number:"7", Image:"/Images/BNG/7.jpg"},
{Name:"Elite Skirmisher", Cost:"3", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"BNG", Number:"8", Image:"/Images/BNG/8.jpg"},
{Name:"Ephara's Radiance", Cost:"1", Color:["W"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"BNG", Number:"9", Image:"/Images/BNG/9.jpg"},
{Name:"Excoriate", Cost:"4", Color:["W"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"BNG", Number:"10", Image:"/Images/BNG/10.jpg"},
{Name:"Fated Retribution", Cost:"7", Color:["W"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"BNG", Number:"11", Image:"/Images/BNG/11.jpg"},
{Name:"Ghostblade Eidolon", Cost:"3", Color:["W"], Rarity:"U", Type:["C","E"], Rating:"7", Sort:"1", Set:"BNG", Number:"12", Image:"/Images/BNG/12.jpg"},
{Name:"Glimpse the Sun God", Cost:"1", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"BNG", Number:"13", Image:"/Images/BNG/13.jpg"},
{Name:"God-Favored General ", Cost:"2", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"BNG", Number:"14", Image:"/Images/BNG/14.jpg"},
{Name:"Great Hart", Cost:"4", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BNG", Number:"15", Image:"/Images/BNG/15.jpg"},
{Name:"Griffin Dreamfinder", Cost:"5", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BNG", Number:"16", Image:"/Images/BNG/16.jpg"},
{Name:"Hero of Iroas", Cost:"2", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BNG", Number:"17", Image:"/Images/BNG/17.jpg"},
{Name:"Hold at Bay", Cost:"", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"BNG", Number:"18", Image:"/Images/BNG/18.jpg"},
{Name:"Loyal Pegasus", Cost:"1", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"BNG", Number:"19", Image:"/Images/BNG/19.jpg"},
{Name:"Mortal's Ardor", Cost:"1", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"BNG", Number:"20", Image:"/Images/BNG/20.jpg"},
{Name:"Nyxborn Shieldmate", Cost:"1", Color:["W"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"1", Set:"BNG", Number:"21", Image:"/Images/BNG/21.jpg"},
{Name:"Oreskos Sun Guide", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"BNG", Number:"22", Image:"/Images/BNG/22.jpg"},
{Name:"Ornitharch", Cost:"5", Color:["W"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"BNG", Number:"23", Image:"/Images/BNG/23.jpg"},
{Name:"Plea for Guidance", Cost:"6", Color:["W"], Rarity:"R", Type:["S"], Rating:"2", Sort:"1", Set:"BNG", Number:"24", Image:"/Images/BNG/24.jpg"},
{Name:"Revoke Existence", Cost:"2", Color:["W"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"BNG", Number:"25", Image:"/Images/BNG/25.jpg"},
{Name:"Silent Sentinel", Cost:"7", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"BNG", Number:"26", Image:"/Images/BNG/26.jpg"},
{Name:"Spirit of the Labyrinth", Cost:"2", Color:["W"], Rarity:"R", Type:["C","E"], Rating:"6", Sort:"1", Set:"BNG", Number:"27", Image:"/Images/BNG/27.jpg"},
{Name:"Sunbond", Cost:"4", Color:["W"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"BNG", Number:"28", Image:"/Images/BNG/28.jpg"},
{Name:"Vanguard of Brimaz", Cost:"2", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"BNG", Number:"29", Image:"/Images/BNG/29.jpg"},
{Name:"Aerie Worshippers", Cost:"4", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"2", Set:"BNG", Number:"30", Image:"/Images/BNG/30.jpg"},
{Name:"Arbiter of the Ideal", Cost:"6", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"2", Set:"BNG", Number:"31", Image:"/Images/BNG/31.jpg"},
{Name:"Archetype of Imagination", Cost:"6", Color:["U"], Rarity:"U", Type:["C","E"], Rating:"8", Sort:"2", Set:"BNG", Number:"32", Image:"/Images/BNG/32.jpg"},
{Name:"Chrous of the Tides", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"2", Set:"BNG", Number:"33", Image:"/Images/BNG/33.jpg"},
{Name:"Crypsis", Cost:"2", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"2", Set:"BNG", Number:"34", Image:"/Images/BNG/34.jpg"},
{Name:"Deepwater Hypnotist", Cost:"2", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"2", Set:"BNG", Number:"35", Image:"/Images/BNG/35.jpg"},
{Name:"Divination", Cost:"3", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"2", Set:"BNG", Number:"36", Image:"/Images/BNG/36.jpg"},
{Name:"Eternity Snare", Cost:"6", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"2", Set:"BNG", Number:"37", Image:"/Images/BNG/37.jpg"},
{Name:"Evanescent Intellect ", Cost:"1", Color:["U"], Rarity:"C", Type:["E"], Rating:"3", Sort:"2", Set:"BNG", Number:"38", Image:"/Images/BNG/38.jpg"},
{Name:"Fated Infatuation", Cost:"3", Color:["U"], Rarity:"R", Type:["I"], Rating:"4", Sort:"2", Set:"BNG", Number:"39", Image:"/Images/BNG/39.jpg"},
{Name:"Flitterstep Eidolon ", Cost:"2", Color:["U"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"2", Set:"BNG", Number:"40", Image:"/Images/BNG/40.jpg"},
{Name:"Floodtide Serpent", Cost:"5", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"2", Set:"BNG", Number:"41", Image:"/Images/BNG/41.jpg"},
{Name:"Kraken of the Straits", Cost:"7", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"2", Set:"BNG", Number:"42", Image:"/Images/BNG/42.jpg"},
{Name:"Meletis Astronomer", Cost:"2", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"2", Set:"BNG", Number:"43", Image:"/Images/BNG/43.jpg"},
{Name:"Mindreaver", Cost:"2", Color:["U"], Rarity:"R", Type:["C"], Rating:"3", Sort:"2", Set:"BNG", Number:"44", Image:"/Images/BNG/44.jpg"},
{Name:"Nullify", Cost:"2", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"2", Set:"BNG", Number:"45", Image:"/Images/BNG/45.jpg"},
{Name:"Nyxborn Triton", Cost:"3", Color:["U"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"2", Set:"BNG", Number:"46", Image:"/Images/BNG/46.jpg"},
{Name:"Oracle’s Insight ", Cost:"4", Color:["U"], Rarity:"U", Type:["E"], Rating:"7", Sort:"2", Set:"BNG", Number:"47", Image:"/Images/BNG/47.jpg"},
{Name:"Perplexing Chimera", Cost:"5", Color:["U"], Rarity:"R", Type:["C","E"], Rating:"6", Sort:"2", Set:"BNG", Number:"48", Image:"/Images/BNG/48.jpg"},
{Name:"Retraction Helix ", Cost:"1", Color:["U"], Rarity:"C", Type:["I"], Rating:"7", Sort:"2", Set:"BNG", Number:"49", Image:"/Images/BNG/49.jpg"},
{Name:"Siren of the Fanged Coast ", Cost:"5", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"2", Set:"BNG", Number:"50", Image:"/Images/BNG/50.jpg"},
{Name:"Sphinx's Disciple", Cost:"5", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"2", Set:"BNG", Number:"51", Image:"/Images/BNG/51.jpg"},
{Name:"Stratus Walk", Cost:"2", Color:["U"], Rarity:"C", Type:["E"], Rating:"7", Sort:"2", Set:"BNG", Number:"52", Image:"/Images/BNG/52.jpg"},
{Name:"Sudden Storm", Cost:"4", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"2", Set:"BNG", Number:"53", Image:"/Images/BNG/53.jpg"},
{Name:"Thassa's Rebuff", Cost:"2", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"2", Set:"BNG", Number:"54", Image:"/Images/BNG/54.jpg"},
{Name:"Tromokratis", Cost:"7", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"2", Set:"BNG", Number:"55", Image:"/Images/BNG/55.jpg"},
{Name:"Vortex Elemental", Cost:"1", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"2", Set:"BNG", Number:"56", Image:"/Images/BNG/56.jpg"},
{Name:"Whelming Wave", Cost:"4", Color:["U"], Rarity:"R", Type:["S"], Rating:"4", Sort:"2", Set:"BNG", Number:"57", Image:"/Images/BNG/57.jpg"},
{Name:"Archetype of Finality ", Cost:"6", Color:["B"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"3", Set:"BNG", Number:"58", Image:"/Images/BNG/58.jpg"},
{Name:"Ashiok's Adept", Cost:"3", Color:["B"], Rarity:"U", Type:["C"], Rating:"3", Sort:"3", Set:"BNG", Number:"59", Image:"/Images/BNG/59.jpg"},
{Name:"Asphyxiate", Cost:"3", Color:["B"], Rarity:"C", Type:["S"], Rating:"6", Sort:"3", Set:"BNG", Number:"60", Image:"/Images/BNG/60.jpg"},
{Name:"Bile Blight", Cost:"2", Color:["B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"3", Set:"BNG", Number:"61", Image:"/Images/BNG/61.jpg"},
{Name:"Black Oak of Odunos", Cost:"3", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"3", Set:"BNG", Number:"62", Image:"/Images/BNG/62.jpg"},
{Name:"Champion of Stray Souls", Cost:"6", Color:["B"], Rarity:"M", Type:["C"], Rating:"3", Sort:"3", Set:"BNG", Number:"63", Image:"/Images/BNG/63.jpg"},
{Name:"Claim of Erebos", Cost:"2", Color:["B"], Rarity:"C", Type:["E"], Rating:"2", Sort:"3", Set:"BNG", Number:"64", Image:"/Images/BNG/64.jpg"},
{Name:"Drown in Sorrow", Cost:"3", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"3", Set:"BNG", Number:"65", Image:"/Images/BNG/65.jpg"},
{Name:"Eater of Hope", Cost:"7", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"3", Set:"BNG", Number:"66", Image:"/Images/BNG/66.jpg"},
{Name:"Eye Gouge", Cost:"1", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"3", Set:"BNG", Number:"67", Image:"/Images/BNG/67.jpg"},
{Name:"Fate Unraveler", Cost:"4", Color:["B"], Rarity:"R", Type:["C","E"], Rating:"7", Sort:"3", Set:"BNG", Number:"68", Image:"/Images/BNG/68.jpg"},
{Name:"Fated Return", Cost:"7", Color:["B"], Rarity:"R", Type:["I"], Rating:"3", Sort:"3", Set:"BNG", Number:"69", Image:"/Images/BNG/69.jpg"},
{Name:"Felhide Brawler", Cost:"2", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"3", Set:"BNG", Number:"70", Image:"/Images/BNG/70.jpg"},
{Name:"Forlorn Pseudamma", Cost:"4", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"3", Set:"BNG", Number:"71", Image:"/Images/BNG/71.jpg"},
{Name:"Forsaken Drifters ", Cost:"4", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"3", Set:"BNG", Number:"72", Image:"/Images/BNG/72.jpg"},
{Name:"Gild", Cost:"4", Color:["B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"3", Set:"BNG", Number:"73", Image:"/Images/BNG/73.jpg"},
{Name:"Grisly Transformation ", Cost:"3", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"3", Set:"BNG", Number:"74", Image:"/Images/BNG/74.jpg"},
{Name:"Herald of Torment", Cost:"3", Color:["B"], Rarity:"R", Type:["C","E"], Rating:"8", Sort:"3", Set:"BNG", Number:"75", Image:"/Images/BNG/75.jpg"},
{Name:"Marshmist Titan", Cost:"7", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"3", Set:"BNG", Number:"76", Image:"/Images/BNG/76.jpg"},
{Name:"Necrobite", Cost:"3", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"3", Set:"BNG", Number:"77", Image:"/Images/BNG/77.jpg"},
{Name:"Nyxborn Eidolon", Cost:"2", Color:["B"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"3", Set:"BNG", Number:"78", Image:"/Images/BNG/78.jpg"},
{Name:"Odunos River Trawler", Cost:"3", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"3", Set:"BNG", Number:"79", Image:"/Images/BNG/79.jpg"},
{Name:"Pain Seer", Cost:"2", Color:["B"], Rarity:"R", Type:["C"], Rating:"6", Sort:"3", Set:"BNG", Number:"80", Image:"/Images/BNG/80.jpg"},
{Name:"Sanguimancy ", Cost:"5", Color:["B"], Rarity:"U", Type:["S"], Rating:"3", Sort:"3", Set:"BNG", Number:"81", Image:"/Images/BNG/81.jpg"},
{Name:"Servant of Tymaret", Cost:"3", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"3", Set:"BNG", Number:"82", Image:"/Images/BNG/82.jpg"},
{Name:"Shrike Harpy", Cost:"5", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"3", Set:"BNG", Number:"83", Image:"/Images/BNG/83.jpg"},
{Name:"Spiteful Returned", Cost:"2", Color:["B"], Rarity:"U", Type:["C","E"], Rating:"4", Sort:"3", Set:"BNG", Number:"84", Image:"/Images/BNG/84.jpg"},
{Name:"Warchanter of Mogis", Cost:"5", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"3", Set:"BNG", Number:"85", Image:"/Images/BNG/85.jpg"},
{Name:"Weight of the Underwold", Cost:"4", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"3", Set:"BNG", Number:"86", Image:"/Images/BNG/86.jpg"},
{Name:"Akroan Conscriptor", Cost:"5", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"4", Set:"BNG", Number:"87", Image:"/Images/BNG/87.jpg"},
{Name:"Archetype of Aggression ", Cost:"3", Color:["R"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"4", Set:"BNG", Number:"88", Image:"/Images/BNG/88.jpg"},
{Name:"Bolt of Keranos", Cost:"3", Color:["R"], Rarity:"C", Type:["S"], Rating:"6", Sort:"4", Set:"BNG", Number:"89", Image:"/Images/BNG/89.jpg"},
{Name:"Cyclops of One-Eyed Pass", Cost:"4", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"4", Set:"BNG", Number:"90", Image:"/Images/BNG/90.jpg"},
{Name:"Epiphany Storm", Cost:"1", Color:["R"], Rarity:"C", Type:["E"], Rating:"4", Sort:"4", Set:"BNG", Number:"91", Image:"/Images/BNG/91.jpg"},
{Name:"Everflame Eidolon", Cost:"2", Color:["R"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"4", Set:"BNG", Number:"92", Image:"/Images/BNG/92.jpg"},
{Name:"Fall of the Hammer", Cost:"2", Color:["R"], Rarity:"C", Type:["I"], Rating:"6", Sort:"4", Set:"BNG", Number:"93", Image:"/Images/BNG/93.jpg"},
{Name:"Fated Conflagration", Cost:"4", Color:["R"], Rarity:"R", Type:["I"], Rating:"6", Sort:"4", Set:"BNG", Number:"94", Image:"/Images/BNG/94.jpg"},
{Name:"Fearsome Temper", Cost:"3", Color:["R"], Rarity:"C", Type:["E"], Rating:"4", Sort:"4", Set:"BNG", Number:"95", Image:"/Images/BNG/95.jpg"},
{Name:"Felhide Spiritbinder", Cost:"4", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"4", Set:"BNG", Number:"96", Image:"/Images/BNG/96.jpg"},
{Name:"Flame-Wreathed Phoenix", Cost:"4", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"4", Set:"BNG", Number:"97", Image:"/Images/BNG/97.jpg"},
{Name:"Forgestoker Dragon", Cost:"6", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"4", Set:"BNG", Number:"98", Image:"/Images/BNG/98.jpg"},
{Name:"Impetuous Sunchaser", Cost:"2", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"4", Set:"BNG", Number:"99", Image:"/Images/BNG/99.jpg"},
{Name:"Kragma Butcher ", Cost:"3", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"4", Set:"BNG", Number:"100", Image:"/Images/BNG/100.jpg"},
{Name:"Lightning Volley", Cost:"4", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"4", Set:"BNG", Number:"101", Image:"/Images/BNG/101.jpg"},
{Name:"Nyxborn Rollicker", Cost:"1", Color:["R"], Rarity:"C", Type:["C","E"], Rating:"5", Sort:"4", Set:"BNG", Number:"102", Image:"/Images/BNG/102.jpg"},
{Name:"Oracle of Bones", Cost:"4", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"4", Set:"BNG", Number:"103", Image:"/Images/BNG/103.jpg"},
{Name:"Pharagax Giant", Cost:"5", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"4", Set:"BNG", Number:"104", Image:"/Images/BNG/104.jpg"},
{Name:"Pinnacle of Rage", Cost:"6", Color:["R"], Rarity:"U", Type:["S"], Rating:"7", Sort:"4", Set:"BNG", Number:"105", Image:"/Images/BNG/105.jpg"},
{Name:"Reckless Reveler ", Cost:"2", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"4", Set:"BNG", Number:"106", Image:"/Images/BNG/106.jpg"},
{Name:"Rise to the Challenge ", Cost:"2", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"4", Set:"BNG", Number:"107", Image:"/Images/BNG/107.jpg"},
{Name:"Satyr Firedancer", Cost:"2", Color:["R"], Rarity:"R", Type:["E","C"], Rating:"2", Sort:"4", Set:"BNG", Number:"108", Image:"/Images/BNG/108.jpg"},
{Name:"Satyr Nyx-Smith", Cost:"3", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"4", Set:"BNG", Number:"109", Image:"/Images/BNG/109.jpg"},
{Name:"Scouring Sands ", Cost:"2", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"4", Set:"BNG", Number:"110", Image:"/Images/BNG/110.jpg"},
{Name:"Searing Blood", Cost:"2", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"4", Set:"BNG", Number:"111", Image:"/Images/BNG/111.jpg"},
{Name:"Stormcaller of Keranos ", Cost:"3", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"4", Set:"BNG", Number:"112", Image:"/Images/BNG/112.jpg"},
{Name:"Thunder Brute", Cost:"6", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"4", Set:"BNG", Number:"113", Image:"/Images/BNG/113.jpg"},
{Name:"Thunderous Might", Cost:"2", Color:["R"], Rarity:"U", Type:["E"], Rating:"2", Sort:"4", Set:"BNG", Number:"114", Image:"/Images/BNG/114.jpg"},
{Name:"Whims of the Fates", Cost:"6", Color:["R"], Rarity:"R", Type:["S"], Rating:"2", Sort:"4", Set:"BNG", Number:"115", Image:"/Images/BNG/115.jpg"},
{Name:"Archetype of Endurance", Cost:"8", Color:["G"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"5", Set:"BNG", Number:"116", Image:"/Images/BNG/116.jpg"},
{Name:"Aspect of Hydra", Cost:"1", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"5", Set:"BNG", Number:"117", Image:"/Images/BNG/117.jpg"},
{Name:"Charging Badger ", Cost:"1", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"5", Set:"BNG", Number:"118", Image:"/Images/BNG/118.jpg"},
{Name:"Courser of Kruphix", Cost:"3", Color:["G"], Rarity:"R", Type:["C","E"], Rating:"8", Sort:"5", Set:"BNG", Number:"119", Image:"/Images/BNG/119.jpg"},
{Name:"Culling Mark", Cost:"3", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"5", Set:"BNG", Number:"120", Image:"/Images/BNG/120.jpg"},
{Name:"Fated Intervention", Cost:"5", Color:["G"], Rarity:"R", Type:["I"], Rating:"7", Sort:"5", Set:"BNG", Number:"121", Image:"/Images/BNG/121.jpg"},
{Name:"Graverobber Spider", Cost:"4", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"5", Set:"BNG", Number:"122", Image:"/Images/BNG/122.jpg"},
{Name:"Hero of Leina Tower", Cost:"1", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"5", Set:"BNG", Number:"123", Image:"/Images/BNG/123.jpg"},
{Name:"Hunter's Prowess", Cost:"5", Color:["G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"5", Set:"BNG", Number:"124", Image:"/Images/BNG/124.jpg"},
{Name:"Karametra’s Favor ", Cost:"2", Color:["G"], Rarity:"C", Type:["E"], Rating:"6", Sort:"5", Set:"BNG", Number:"125", Image:"/Images/BNG/125.jpg"},
{Name:"Mischief and Mayhem ", Cost:"5", Color:["G"], Rarity:"U", Type:["S"], Rating:"3", Sort:"5", Set:"BNG", Number:"126", Image:"/Images/BNG/126.jpg"},
{Name:"Mortal’s Resolve ", Cost:"2", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"5", Set:"BNG", Number:"127", Image:"/Images/BNG/127.jpg"},
{Name:"Nessian Demlock", Cost:"5", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"5", Set:"BNG", Number:"128", Image:"/Images/BNG/128.jpg"},
{Name:"Nessian Wilds Ravager", Cost:"6", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"5", Set:"BNG", Number:"129", Image:"/Images/BNG/129.jpg"},
{Name:"Noble Quarry ", Cost:"3", Color:["G"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"5", Set:"BNG", Number:"130", Image:"/Images/BNG/130.jpg"},
{Name:"Nyxborn Wolf", Cost:"3", Color:["G"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"5", Set:"BNG", Number:"131", Image:"/Images/BNG/131.jpg"},
{Name:"Peregrination", Cost:"4", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"5", Set:"BNG", Number:"132", Image:"/Images/BNG/132.jpg"},
{Name:"Pheres-Band Raiders ", Cost:"6", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"5", Set:"BNG", Number:"133", Image:"/Images/BNG/133.jpg"},
{Name:"Pheres-Band Tromper ", Cost:"4", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"5", Set:"BNG", Number:"134", Image:"/Images/BNG/134.jpg"},
{Name:"Raised by Wolves", Cost:"5", Color:["G"], Rarity:"U", Type:["E"], Rating:"7", Sort:"5", Set:"BNG", Number:"135", Image:"/Images/BNG/135.jpg"},
{Name:"Satyr Wayfinder ", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"5", Set:"BNG", Number:"136", Image:"/Images/BNG/136.jpg"},
{Name:"Scourge of Skola Vale", Cost:"3", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"5", Set:"BNG", Number:"137", Image:"/Images/BNG/137.jpg"},
{Name:"Setessan Oathsworn ", Cost:"3", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"5", Set:"BNG", Number:"138", Image:"/Images/BNG/138.jpg"},
{Name:"Setessan Starbreaker ", Cost:"4", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"5", Set:"BNG", Number:"139", Image:"/Images/BNG/139.jpg"},
{Name:"Skyreaping", Cost:"2", Color:["G"], Rarity:"U", Type:["S"], Rating:"1", Sort:"5", Set:"BNG", Number:"140", Image:"/Images/BNG/140.jpg"},
{Name:"Snake of the Golden Grove", Cost:"5", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"5", Set:"BNG", Number:"141", Image:"/Images/BNG/141.jpg"},
{Name:"Swordwise Centaur ", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"5", Set:"BNG", Number:"142", Image:"/Images/BNG/142.jpg"},
{Name:"Unravel the Æther", Cost:"2", Color:["G"], Rarity:"U", Type:["I"], Rating:"3", Sort:"5", Set:"BNG", Number:"143", Image:"/Images/BNG/143.jpg"},
{Name:"Chromanticore", Cost:"5", Color:["W","U","B","R","G"], Rarity:"M", Type:["C","E"], Rating:"3", Sort:"6", Set:"BNG", Number:"144", Image:"/Images/BNG/144.jpg"},
{Name:"Ephara, God of the Polis ", Cost:"4", Color:["W","U"], Rarity:"M", Type:["C","E"], Rating:"8", Sort:"6", Set:"BNG", Number:"145", Image:"/Images/BNG/145.jpg"},
{Name:"Ephara's Enlightenment", Cost:"3", Color:["W","U"], Rarity:"U", Type:["E"], Rating:"6", Sort:"6", Set:"BNG", Number:"146", Image:"/Images/BNG/146.jpg"},
{Name:"Fanatic of Xenagos", Cost:"3", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"6", Set:"BNG", Number:"147", Image:"/Images/BNG/147.jpg"},
{Name:"Karametra, God of Harvests", Cost:"5", Color:["G","W"], Rarity:"M", Type:["C","E"], Rating:"4", Sort:"6", Set:"BNG", Number:"148", Image:"/Images/BNG/148.jpg"},
{Name:"Kiora, the Crashing Wave", Cost:"4", Color:["G","U"], Rarity:"M", Type:["P"], Rating:"8", Sort:"6", Set:"BNG", Number:"149", Image:"/Images/BNG/149.jpg"},
{Name:"Kiora's Follower", Cost:"2", Color:["G","U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"6", Set:"BNG", Number:"150", Image:"/Images/BNG/150.jpg"},
{Name:"Mogis, God of Slaughter", Cost:"4", Color:["B","R"], Rarity:"M", Type:["C","E"], Rating:"8", Sort:"6", Set:"BNG", Number:"151", Image:"/Images/BNG/151.jpg"},
{Name:"Phenax, God of Deception", Cost:"5", Color:["U","B"], Rarity:"M", Type:["C","E"], Rating:"8", Sort:"6", Set:"BNG", Number:"152", Image:"/Images/BNG/152.jpg"},
{Name:"Ragemonger", Cost:"3", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"6", Set:"BNG", Number:"153", Image:"/Images/BNG/153.jpg"},
{Name:"Reap What Is Sown", Cost:"3", Color:["G","W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"6", Set:"BNG", Number:"154", Image:"/Images/BNG/154.jpg"},
{Name:"Siren of Silent Song", Cost:"3", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"6", Set:"BNG", Number:"155", Image:"/Images/BNG/155.jpg"},
{Name:"Xenagos, God of Revels", Cost:"5", Color:["R","G"], Rarity:"M", Type:["C","E"], Rating:"8", Sort:"6", Set:"BNG", Number:"156", Image:"/Images/BNG/156.jpg"},
{Name:"Astral Cornucopia", Cost:"0", Color:["C"], Rarity:"R", Type:["A"], Rating:"3", Sort:"7", Set:"BNG", Number:"157", Image:"/Images/BNG/157.jpg"},
{Name:"Gorgon’s Head ", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"7", Set:"BNG", Number:"158", Image:"/Images/BNG/158.jpg"},
{Name:"Heroes' Podium", Cost:"5", Color:["C"], Rarity:"R", Type:["A"], Rating:"1", Sort:"7", Set:"BNG", Number:"159", Image:"/Images/BNG/159.jpg"},
{Name:"Pillar of War", Cost:"3", Color:["C"], Rarity:"U", Type:["A","C"], Rating:"4", Sort:"7", Set:"BNG", Number:"160", Image:"/Images/BNG/160.jpg"},
{Name:"Siren Song Lyre ", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"7", Set:"BNG", Number:"161", Image:"/Images/BNG/161.jpg"},
{Name:"Springleaf Drum", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"7", Set:"BNG", Number:"162", Image:"/Images/BNG/162.jpg"},
{Name:"Temple of Enlightenment", Cost:"0", Color:["W","U"], Rarity:"R", Type:["L"], Rating:"6", Sort:"6", Set:"BNG", Number:"163", Image:"/Images/BNG/163.jpg"},
{Name:"Temple of Malice", Cost:"0", Color:["B","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"6", Set:"BNG", Number:"164", Image:"/Images/BNG/164.jpg"},
{Name:"Temple of Plenty", Cost:"0", Color:["G","W"], Rarity:"R", Type:["L"], Rating:"6", Sort:"6", Set:"BNG", Number:"165", Image:"/Images/BNG/165.jpg"},
];
var DTK = [
{Name:"Scion of Ugin", Cost:"6", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"1", Image:"/Images/DTK/ScionofUgin.jpg"},
{Name:"Anafenza, Kin-Tree Spirit", Cost:"0WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"2", Image:"/Images/DTK/Anafenza--Kin-TreeSpirit.jpg"},
{Name:"Arashin Foremost", Cost:"1WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"3", Image:"/Images/DTK/ArashinForemost.jpg"},
{Name:"Artful Maneuver", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"4", Image:"/Images/DTK/ArtfulManeuver.jpg"},
{Name:"Aven Sunstriker", Cost:"1WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"5", Image:"/Images/DTK/AvenSunstriker.jpg"},
{Name:"Aven Tactician", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"DTK", Number:"6", Image:"/Images/DTK/AvenTactician.jpg"},
{Name:"Battle Mastery", Cost:"2W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"DTK", Number:"7", Image:"/Images/DTK/BattleMastery.jpg"},
{Name:"Center Soul", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"8", Image:"/Images/DTK/CenterSoul.jpg"},
{Name:"Champion of Arashin", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"9", Image:"/Images/DTK/ChampionofArashin.jpg"},
{Name:"Dragon Hunter", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"10", Image:"/Images/DTK/DragonHunter.jpg"},
{Name:"Dragon's Eye Sentry", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"11", Image:"/Images/DTK/DragonsEyeSentry.jpg"},
{Name:"Dromoka Captain", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"12", Image:"/Images/DTK/DromokaCaptain.jpg"},
{Name:"Dromoka Dunecaster", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"13", Image:"/Images/DTK/DromokaDunecaster.jpg"},
{Name:"Dromoka Warrior", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"14", Image:"/Images/DTK/DromokaWarrior.jpg"},
{Name:"Echoes of the Kin Tree", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"15", Image:"/Images/DTK/EchoesoftheKinTree.jpg"},
{Name:"Enduring Victory", Cost:"4W", Color:["W"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"16", Image:"/Images/DTK/EnduringVictory.jpg"},
{Name:"Fate Forgotten", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"DTK", Number:"17", Image:"/Images/DTK/FateForgotten.jpg"},
{Name:"Glaring Aegis", Cost:"0W", Color:["W"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"DTK", Number:"18", Image:"/Images/DTK/GlaringAegis.jpg"},
{Name:"Gleam of Authority", Cost:"1W", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"DTK", Number:"19", Image:"/Images/DTK/GleamofAuthority.jpg"},
{Name:"Graceblade Artisan", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"20", Image:"/Images/DTK/GracebladeArtisan.jpg"},
{Name:"Great Teacher's Decree", Cost:"3W", Color:["W"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"DTK", Number:"21", Image:"/Images/DTK/GreatTeachersDecree.jpg"},
{Name:"Herald of Dromoka", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"22", Image:"/Images/DTK/HeraldofDromoka.jpg"},
{Name:"Hidden Dragonslayer", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"23", Image:"/Images/DTK/HiddenDragonslayer.jpg"},
{Name:"Lightwalker", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"24", Image:"/Images/DTK/Lightwalker.jpg"},
{Name:"Misthoof Kirin", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"25", Image:"/Images/DTK/MisthoofKirin.jpg"},
{Name:"Myth Realized", Cost:"0W", Color:["W"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"DTK", Number:"26", Image:"/Images/DTK/MythRealized.jpg"},
{Name:"Orator of Ojutai", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"27", Image:"/Images/DTK/OratorofOjutai.jpg"},
{Name:"Ojutai Exemplars", Cost:"2WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"28", Image:"/Images/DTK/OjutaiExemplars.jpg"},
{Name:"Pacifism", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"29", Image:"/Images/DTK/Pacifism.jpg"},
{Name:"Profound Journey", Cost:"5WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"DTK", Number:"30", Image:"/Images/DTK/ProfoundJourney.jpg"},
{Name:"Radiant Purge", Cost:"1W", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"31", Image:"/Images/DTK/RadiantPurge.jpg"},
{Name:"Resupply", Cost:"5W", Color:["W"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"DTK", Number:"32", Image:"/Images/DTK/Resupply.jpg"},
{Name:"Sandcrafter Mage", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"33", Image:"/Images/DTK/SandcrafterMage.jpg"},
{Name:"Sandstorm Charger", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"34", Image:"/Images/DTK/SandstormCharger.jpg"},
{Name:"Scale Blessing", Cost:"3W", Color:["W"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"35", Image:"/Images/DTK/ScaleBlessing.jpg"},
{Name:"Secure the Wastes", Cost:"0W", Color:["W"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"36", Image:"/Images/DTK/SecuretheWastes.jpg"},
{Name:"Shieldhide Dragon", Cost:"5W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"37", Image:"/Images/DTK/ShieldhideDragon.jpg"},
{Name:"Silkwrap", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"DTK", Number:"38", Image:"/Images/DTK/Silkwrap.jpg"},
{Name:"Strongarm Monk", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"39", Image:"/Images/DTK/StrongarmMonk.jpg"},
{Name:"Student of Ojutai", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"DTK", Number:"40", Image:"/Images/DTK/StudentofOjutai.jpg"},
{Name:"Sunscorch Regent", Cost:"3WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"41", Image:"/Images/DTK/SunscorchRegent.jpg"},
{Name:"Surge of Righteousness", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"42", Image:"/Images/DTK/SurgeofRighteousness.jpg"},
{Name:"Territorial Roc", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"43", Image:"/Images/DTK/TerritorialRoc.jpg"},
{Name:"Ancient Carp", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"DTK", Number:"44", Image:"/Images/DTK/AncientCarp.jpg"},
{Name:"Anticipate", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"45", Image:"/Images/DTK/Anticipate.jpg"},
{Name:"Belltoll Dragon", Cost:"5U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"46", Image:"/Images/DTK/BelltollDragon.jpg"},
{Name:"Blessed Reincarnation", Cost:"3U", Color:["U"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"47", Image:"/Images/DTK/BlessedReincarnation.jpg"},
{Name:"Clone Legion", Cost:"7UU", Color:["U"], Rarity:"M", Type:["S"], Rating:"7", Sort:"1", Set:"DTK", Number:"48", Image:"/Images/DTK/CloneLegion.jpg"},
{Name:"Contradict", Cost:"3UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"49", Image:"/Images/DTK/Contradict.jpg"},
{Name:"Dance of the Skywise", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"50", Image:"/Images/DTK/DanceoftheSkywise.jpg"},
{Name:"Dirgur Nemesis", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"51", Image:"/Images/DTK/DirgurNemesis.jpg"},
{Name:"Dragonlord's Prerogative", Cost:"4UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"52", Image:"/Images/DTK/DragonlordsPrerogative.jpg"},
{Name:"Elusive Spellfist", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"53", Image:"/Images/DTK/ElusiveSpellfist.jpg"},
{Name:"Encase in Ice", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"DTK", Number:"54", Image:"/Images/DTK/EncaseinIce.jpg"},
{Name:"Glint", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"55", Image:"/Images/DTK/Glint.jpg"},
{Name:"Gudul Lurker", Cost:"0U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"56", Image:"/Images/DTK/GudulLurker.jpg"},
{Name:"Gurmag Drowner", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"57", Image:"/Images/DTK/GurmagDrowner.jpg"},
{Name:"Icefall Regent", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"58", Image:"/Images/DTK/IcefallRegent.jpg"},
{Name:"Illusory Gains", Cost:"3UU", Color:["U"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"59", Image:"/Images/DTK/IllusoryGains.jpg"},
{Name:"Learn from the Past", Cost:"3U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"60", Image:"/Images/DTK/LearnfromthePast.jpg"},
{Name:"Living Lore", Cost:"3U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"61", Image:"/Images/DTK/LivingLore.jpg"},
{Name:"Mirror Mockery", Cost:"1U", Color:["U"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"DTK", Number:"62", Image:"/Images/DTK/MirrorMockery.jpg"},
{Name:"Monastery Loremaster", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"63", Image:"/Images/DTK/MonasteryLoremaster.jpg"},
{Name:"Mystic Meditation", Cost:"3U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"64", Image:"/Images/DTK/MysticMeditation.jpg"},
{Name:"Negate", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"65", Image:"/Images/DTK/Negate.jpg"},
{Name:"Ojutai Interceptor", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"66", Image:"/Images/DTK/OjutaiInterceptor.jpg"},
{Name:"Ojutai's Breath", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"67", Image:"/Images/DTK/OjutaisBreath.jpg"},
{Name:"Ojutai's Summons", Cost:"3UU", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"68", Image:"/Images/DTK/OjutaisSummons.jpg"},
{Name:"Palace Familiar", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"69", Image:"/Images/DTK/PalaceFamiliar.jpg"},
{Name:"Profaner of the Dead", Cost:"3U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"70", Image:"/Images/DTK/ProfaneroftheDead.jpg"},
{Name:"Qarsi Deceiver", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"71", Image:"/Images/DTK/QarsiDeceiver.jpg"},
{Name:"Reduce in Stature", Cost:"2U", Color:["U"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"72", Image:"/Images/DTK/ReduceinStature.jpg"},
{Name:"Shorecrasher Elemental", Cost:"0UUU", Color:["U"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"73", Image:"/Images/DTK/ShorecrasherElemental.jpg"},
{Name:"Sidisi's Faithful", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"74", Image:"/Images/DTK/SidisisFaithful.jpg"},
{Name:"Sight Beyond Sight", Cost:"3U", Color:["U"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"DTK", Number:"75", Image:"/Images/DTK/SightBeyondSight.jpg"},
{Name:"Silumgar Sorcerer", Cost:"1UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"76", Image:"/Images/DTK/SilumgarSorcerer.jpg"},
{Name:"Silumgar Spell-Eater", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"77", Image:"/Images/DTK/SilumgarSpell-Eater.jpg"},
{Name:"Silumgar's Scorn", Cost:"0UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"78", Image:"/Images/DTK/SilumgarsScorn.jpg"},
{Name:"Skywise Teachings", Cost:"0UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"79", Image:"/Images/DTK/SkywiseTeachings.jpg"},
{Name:"Stratus Dancer", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"80", Image:"/Images/DTK/StratusDancer.jpg"},
{Name:"Taigam's Strike", Cost:"3U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"81", Image:"/Images/DTK/TaigamsStrike.jpg"},
{Name:"Updraft Elemental", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"82", Image:"/Images/DTK/UpdraftElemental.jpg"},
{Name:"Void Squall", Cost:"4U", Color:["U"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"DTK", Number:"83", Image:"/Images/DTK/VoidSquall.jpg"},
{Name:"Youthful Scholar", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"84", Image:"/Images/DTK/YouthfulScholar.jpg"},
{Name:"Zephyr Scribe", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"85", Image:"/Images/DTK/ZephyrScribe.jpg"},
{Name:"Acid-Spewer Dragon", Cost:"5B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"86", Image:"/Images/DTK/Acid-SpewerDragon.jpg"},
{Name:"Ambuscade Shaman", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"87", Image:"/Images/DTK/AmbuscadeShaman.jpg"},
{Name:"Blood-Chin Fanatic", Cost:"1BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"88", Image:"/Images/DTK/Blood-ChinFanatic.jpg"},
{Name:"Blood-Chin Rager", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"89", Image:"/Images/DTK/Blood-ChinRager.jpg"},
{Name:"Butcher's Glee", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"90", Image:"/Images/DTK/ButchersGlee.jpg"},
{Name:"Coat with Venom", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"91", Image:"/Images/DTK/CoatwithVenom.jpg"},
{Name:"Corpseweft", Cost:"2B", Color:["B"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"DTK", Number:"92", Image:"/Images/DTK/Corpseweft.jpg"},
{Name:"Damnable Pact", Cost:"0BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"DTK", Number:"93", Image:"/Images/DTK/DamnablePact.jpg"},
{Name:"Deadly Wanderings", Cost:"3BB", Color:["B"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"94", Image:"/Images/DTK/DeadlyWanderings.jpg"},
{Name:"Death Wind", Cost:"0B", Color:["B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"95", Image:"/Images/DTK/DeathWind.jpg"},
{Name:"Deathbringer Regent", Cost:"5BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"96", Image:"/Images/DTK/DeathbringerRegent.jpg"},
{Name:"Defeat", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"DTK", Number:"97", Image:"/Images/DTK/Defeat.jpg"},
{Name:"Duress", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"DTK", Number:"98", Image:"/Images/DTK/Duress.jpg"},
{Name:"Dutiful Attendant", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"99", Image:"/Images/DTK/DutifulAttendant.jpg"},
{Name:"Flatten", Cost:"3B", Color:["B"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"100", Image:"/Images/DTK/Flatten.jpg"},
{Name:"Foul Renewal", Cost:"3B", Color:["B"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"101", Image:"/Images/DTK/FoulRenewal.jpg"},
{Name:"Foul-Tongue Invocation", Cost:"2B", Color:["B"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"102", Image:"/Images/DTK/Foul-TongueInvocation.jpg"},
{Name:"Foul-Tongue Shriek", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"DTK", Number:"103", Image:"/Images/DTK/Foul-TongueShriek.jpg"},
{Name:"Gravepurge", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"104", Image:"/Images/DTK/Gravepurge.jpg"},
{Name:"Hand of Silumgar", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"105", Image:"/Images/DTK/HandofSilumgar.jpg"},
{Name:"Hedonist's Trove", Cost:"5BB", Color:["B"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"DTK", Number:"106", Image:"/Images/DTK/HedonistsTrove.jpg"},
{Name:"Kolaghan Skirmisher", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"107", Image:"/Images/DTK/KolaghanSkirmisher.jpg"},
{Name:"Marang River Skeleton", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"108", Image:"/Images/DTK/MarangRiverSkeleton.jpg"},
{Name:"Marsh Hulk", Cost:"4BB", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"109", Image:"/Images/DTK/MarshHulk.jpg"},
{Name:"Mind Rot", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"110", Image:"/Images/DTK/MindRot.jpg"},
{Name:"Minister of Pain", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"111", Image:"/Images/DTK/MinisterofPain.jpg"},
{Name:"Pitiless Horde", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"112", Image:"/Images/DTK/PitilessHorde.jpg"},
{Name:"Qarsi Sadist", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"113", Image:"/Images/DTK/QarsiSadist.jpg"},
{Name:"Rakshasa Gravecaller", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"114", Image:"/Images/DTK/RakshasaGravecaller.jpg"},
{Name:"Reckless Imp", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"115", Image:"/Images/DTK/RecklessImp.jpg"},
{Name:"Risen Executioner", Cost:"2BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"116", Image:"/Images/DTK/RisenExecutioner.jpg"},
{Name:"Self-Inflicted Wound", Cost:"1B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"DTK", Number:"117", Image:"/Images/DTK/Self-InflictedWound.jpg"},
{Name:"Shambling Goblin", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"118", Image:"/Images/DTK/ShamblingGoblin.jpg"},
{Name:"Sibsig Icebreakers", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"119", Image:"/Images/DTK/SibsigIcebreakers.jpg"},
{Name:"Sidisi, Undead Vizier", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"120", Image:"/Images/DTK/Sidisi--UndeadVizier.jpg"},
{Name:"Silumgar's Assassin", Cost:"1B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"121", Image:"/Images/DTK/SilumgarsAssassin.jpg"},
{Name:"Silumgar Butcher", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"122", Image:"/Images/DTK/SilumgarButcher.jpg"},
{Name:"Ukud Cobra", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"123", Image:"/Images/DTK/UkudCobra.jpg"},
{Name:"Ultimate Price", Cost:"1B", Color:["B"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"124", Image:"/Images/DTK/UltimatePrice.jpg"},
{Name:"Virulent Plague", Cost:"2B", Color:["B"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"DTK", Number:"125", Image:"/Images/DTK/VirulentPlague.jpg"},
{Name:"Vulturous Aven", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"126", Image:"/Images/DTK/VulturousAven.jpg"},
{Name:"Wandering Tombshell", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"127", Image:"/Images/DTK/WanderingTombshell.jpg"},
{Name:"Atarka Efreet", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"128", Image:"/Images/DTK/AtarkaEfreet.jpg"},
{Name:"Atarka Pummeler", Cost:"4R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"129", Image:"/Images/DTK/AtarkaPummeler.jpg"},
{Name:"Berserkers' Onslaught", Cost:"3RR", Color:["R"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"DTK", Number:"130", Image:"/Images/DTK/BerserkersOnslaught.jpg"},
{Name:"Commune with Lava", Cost:"0RR", Color:["R"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"131", Image:"/Images/DTK/CommunewithLava.jpg"},
{Name:"Crater Elemental", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"132", Image:"/Images/DTK/CraterElemental.jpg"},
{Name:"Descent of the Dragons", Cost:"4RR", Color:["R"], Rarity:"M", Type:["S"], Rating:"9", Sort:"1", Set:"DTK", Number:"133", Image:"/Images/DTK/DescentoftheDragons.jpg"},
{Name:"Draconic Roar", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"134", Image:"/Images/DTK/DraconicRoar.jpg"},
{Name:"Dragon Fodder", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"DTK", Number:"135", Image:"/Images/DTK/DragonFodder.jpg"},
{Name:"Dragon Tempest", Cost:"1R", Color:["R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"136", Image:"/Images/DTK/DragonTempest.jpg"},
{Name:"Dragon Whisperer", Cost:"0RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"137", Image:"/Images/DTK/DragonWhisperer.jpg"},
{Name:"Dragonlord's Servant", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"138", Image:"/Images/DTK/DragonlordsServant.jpg"},
{Name:"Hardened Berserker", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"139", Image:"/Images/DTK/HardenedBerserker.jpg"},
{Name:"Impact Tremors", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"DTK", Number:"140", Image:"/Images/DTK/ImpactTremors.jpg"},
{Name:"Ire Shaman", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"141", Image:"/Images/DTK/IreShaman.jpg"},
{Name:"Kindled Fury", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"142", Image:"/Images/DTK/KindledFury.jpg"},
{Name:"Kolaghan Aspirant", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"143", Image:"/Images/DTK/KolaghanAspirant.jpg"},
{Name:"Kolaghan Forerunners", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"144", Image:"/Images/DTK/KolaghanForerunners.jpg"},
{Name:"Kolaghan Stormsinger", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"145", Image:"/Images/DTK/KolaghanStormsinger.jpg"},
{Name:"Lightning Berserker", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"146", Image:"/Images/DTK/LightningBerserker.jpg"},
{Name:"Lose Calm", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"147", Image:"/Images/DTK/LoseCalm.jpg"},
{Name:"Magmatic Chasm", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"DTK", Number:"148", Image:"/Images/DTK/MagmaticChasm.jpg"},
{Name:"Qal Sisma Behemoth", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"149", Image:"/Images/DTK/QalSismaBehemoth.jpg"},
{Name:"Rending Volley", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"150", Image:"/Images/DTK/RendingVolley.jpg"},
{Name:"Roast", Cost:"1R", Color:["R"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"DTK", Number:"151", Image:"/Images/DTK/Roast.jpg"},
{Name:"Sabertooth Outrider", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"152", Image:"/Images/DTK/SabertoothOutrider.jpg"},
{Name:"Sarkhan's Rage", Cost:"4R", Color:["R"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"153", Image:"/Images/DTK/SarkhansRage.jpg"},
{Name:"Sarkhan's Triumph", Cost:"2R", Color:["R"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"154", Image:"/Images/DTK/SarkhansTriumph.jpg"},
{Name:"Screamreach Brawler", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"155", Image:"/Images/DTK/ScreamreachBrawler.jpg"},
{Name:"Seismic Rupture", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"156", Image:"/Images/DTK/SeismicRupture.jpg"},
{Name:"Sprinting Warbrute", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"157", Image:"/Images/DTK/SprintingWarbrute.jpg"},
{Name:"Stormcrag Elemental", Cost:"5R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"158", Image:"/Images/DTK/StormcragElemental.jpg"},
{Name:"Stormwing Dragon", Cost:"5R", Color:["R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"159", Image:"/Images/DTK/StormwingDragon.jpg"},
{Name:"Summit Prowler", Cost:"2RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"160", Image:"/Images/DTK/SummitProwler.jpg"},
{Name:"Tail Slash", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"161", Image:"/Images/DTK/TailSlash.jpg"},
{Name:"Thunderbreak Regent", Cost:"2RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"162", Image:"/Images/DTK/ThunderbreakRegent.jpg"},
{Name:"Tormenting Voice", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"DTK", Number:"163", Image:"/Images/DTK/TormentingVoice.jpg"},
{Name:"Twin Bolt", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"164", Image:"/Images/DTK/TwinBolt.jpg"},
{Name:"Vandalize", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"DTK", Number:"165", Image:"/Images/DTK/Vandalize.jpg"},
{Name:"Volcanic Rush", Cost:"4R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"DTK", Number:"166", Image:"/Images/DTK/VolcanicRush.jpg"},
{Name:"Volcanic Vision", Cost:"5RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"DTK", Number:"167", Image:"/Images/DTK/VolcanicVision.jpg"},
{Name:"Warbringer", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"168", Image:"/Images/DTK/Warbringer.jpg"},
{Name:"Zurgo Bellstriker", Cost:"0R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"169", Image:"/Images/DTK/ZurgoBellstriker.jpg"},
{Name:"Aerie Bowmasters", Cost:"2GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"170", Image:"/Images/DTK/AerieBowmasters.jpg"},
{Name:"Ainok Artillerist", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"171", Image:"/Images/DTK/AinokArtillerist.jpg"},
{Name:"Ainok Survivalist", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"172", Image:"/Images/DTK/AinokSurvivalist.jpg"},
{Name:"Assault Formation", Cost:"1G", Color:["G"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"DTK", Number:"173", Image:"/Images/DTK/AssaultFormation.jpg"},
{Name:"Atarka Beastbreaker", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"174", Image:"/Images/DTK/AtarkaBeastbreaker.jpg"},
{Name:"Avatar of the Resolute", Cost:"0GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"175", Image:"/Images/DTK/AvataroftheResolute.jpg"},
{Name:"Circle of Elders", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"176", Image:"/Images/DTK/CircleofElders.jpg"},
{Name:"Collected Company", Cost:"3G", Color:["G"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"177", Image:"/Images/DTK/CollectedCompany.jpg"},
{Name:"Colossodon Yearling", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"178", Image:"/Images/DTK/ColossodonYearling.jpg"},
{Name:"Conifer Strider", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"179", Image:"/Images/DTK/ConiferStrider.jpg"},
{Name:"Deathmist Raptor", Cost:"1GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"180", Image:"/Images/DTK/DeathmistRaptor.jpg"},
{Name:"Den Protector", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"181", Image:"/Images/DTK/DenProtector.jpg"},
{Name:"Display of Dominance", Cost:"1G", Color:["G"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"182", Image:"/Images/DTK/DisplayofDominance.jpg"},
{Name:"Dragon-Scarred Bear", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"183", Image:"/Images/DTK/Dragon-ScarredBear.jpg"},
{Name:"Dromoka's Gift", Cost:"4G", Color:["G"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"184", Image:"/Images/DTK/DromokasGift.jpg"},
{Name:"Epic Confrontation", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"DTK", Number:"185", Image:"/Images/DTK/EpicConfrontation.jpg"},
{Name:"Explosive Vegetation", Cost:"3G", Color:["G"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"DTK", Number:"186", Image:"/Images/DTK/ExplosiveVegetation.jpg"},
{Name:"Foe-Razer Regent", Cost:"5GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"187", Image:"/Images/DTK/Foe-RazerRegent.jpg"},
{Name:"Glade Watcher", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"188", Image:"/Images/DTK/GladeWatcher.jpg"},
{Name:"Guardian Shield-Bearer", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"189", Image:"/Images/DTK/GuardianShield-Bearer.jpg"},
{Name:"Herdchaser Dragon", Cost:"5G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"190", Image:"/Images/DTK/HerdchaserDragon.jpg"},
{Name:"Inspiring Call", Cost:"2G", Color:["G"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"DTK", Number:"191", Image:"/Images/DTK/InspiringCall.jpg"},
{Name:"Lurking Arynx", Cost:"4G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"192", Image:"/Images/DTK/LurkingArynx.jpg"},
{Name:"Naturalize", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"DTK", Number:"193", Image:"/Images/DTK/Naturalize.jpg"},
{Name:"Obscuring AEther", Cost:"0G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"DTK", Number:"194", Image:"/Images/DTK/ObscuringAEther.jpg"},
{Name:"Pinion Feast", Cost:"4G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"DTK", Number:"195", Image:"/Images/DTK/PinionFeast.jpg"},
{Name:"Press the Advantage", Cost:"2GG", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"DTK", Number:"196", Image:"/Images/DTK/PresstheAdvantage.jpg"},
{Name:"Revealing Wind", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"DTK", Number:"197", Image:"/Images/DTK/RevealingWind.jpg"},
{Name:"Salt Road Ambushers", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"198", Image:"/Images/DTK/SaltRoadAmbushers.jpg"},
{Name:"Salt Road Quartermasters", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"199", Image:"/Images/DTK/SaltRoadQuartermasters.jpg"},
{Name:"Sandsteppe Scavenger", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"200", Image:"/Images/DTK/SandsteppeScavenger.jpg"},
{Name:"Scaleguard Sentinels", Cost:"0GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"201", Image:"/Images/DTK/ScaleguardSentinels.jpg"},
{Name:"Segmented Krotiq", Cost:"5G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"202", Image:"/Images/DTK/SegmentedKrotiq.jpg"},
{Name:"Servant of the Scale", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"DTK", Number:"203", Image:"/Images/DTK/ServantoftheScale.jpg"},
{Name:"Shaman of Forgotten Ways", Cost:"2G", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"204", Image:"/Images/DTK/ShamanofForgottenWays.jpg"},
{Name:"Shape the Sands", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"205", Image:"/Images/DTK/ShapetheSands.jpg"},
{Name:"Sheltered Aerie", Cost:"2G", Color:["G"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"DTK", Number:"206", Image:"/Images/DTK/ShelteredAerie.jpg"},
{Name:"Sight of the Scalelords", Cost:"4G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"DTK", Number:"207", Image:"/Images/DTK/SightoftheScalelords.jpg"},
{Name:"Stampeding Elk Herd", Cost:"3GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"208", Image:"/Images/DTK/StampedingElkHerd.jpg"},
{Name:"Sunbringer's Touch", Cost:"2GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"DTK", Number:"209", Image:"/Images/DTK/SunbringersTouch.jpg"},
{Name:"Surrak, the Hunt Caller", Cost:"2GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"210", Image:"/Images/DTK/Surrak--theHuntCaller.jpg"},
{Name:"Tread Upon", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"DTK", Number:"211", Image:"/Images/DTK/TreadUpon.jpg"},
{Name:"Arashin Sovereign", Cost:"5WG", Color:["W","G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"212", Image:"/Images/DTK/ArashinSovereign.jpg"},
{Name:"Atarka's Command", Cost:"0RG", Color:["R","G"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"213", Image:"/Images/DTK/AtarkasCommand.jpg"},
{Name:"Boltwing Marauder", Cost:"3BR", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"214", Image:"/Images/DTK/BoltwingMarauder.jpg"},
{Name:"Cunning Breezedancer", Cost:"4WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"DTK", Number:"215", Image:"/Images/DTK/CunningBreezedancer.jpg"},
{Name:"Dragonlord Atarka", Cost:"5RG", Color:["R","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"216", Image:"/Images/DTK/DragonlordAtarka.jpg"},
{Name:"Dragonlord Dromoka", Cost:"4WG", Color:["W","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"217", Image:"/Images/DTK/DragonlordDromoka.jpg"},
{Name:"Dragonlord Kolaghan", Cost:"4BR", Color:["B","R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"218", Image:"/Images/DTK/DragonlordKolaghan.jpg"},
{Name:"Dragonlord Ojutai", Cost:"3WU", Color:["W","U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"219", Image:"/Images/DTK/DragonlordOjutai.jpg"},
{Name:"Dragonlord Silumgar", Cost:"4UB", Color:["U","B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"220", Image:"/Images/DTK/DragonlordSilumgar.jpg"},
{Name:"Dromoka's Command", Cost:"0WG", Color:["W","G"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"DTK", Number:"221", Image:"/Images/DTK/DromokasCommand.jpg"},
{Name:"Enduring Scalelord", Cost:"4WG", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"222", Image:"/Images/DTK/EnduringScalelord.jpg"},
{Name:"Harbinger of the Hunt", Cost:"3RG", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"223", Image:"/Images/DTK/HarbingeroftheHunt.jpg"},
{Name:"Kolaghan's Command", Cost:"1BR", Color:["B","R"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"224", Image:"/Images/DTK/KolaghansCommand.jpg"},
{Name:"Narset Transcendent", Cost:"2WU", Color:["W","U"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"DTK", Number:"225", Image:"/Images/DTK/NarsetTranscendent.jpg"},
{Name:"Necromaster Dragon", Cost:"3UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"DTK", Number:"226", Image:"/Images/DTK/NecromasterDragon.jpg"},
{Name:"Ojutai's Command", Cost:"2WU", Color:["W","U"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"DTK", Number:"227", Image:"/Images/DTK/OjutaisCommand.jpg"},
{Name:"Pristine Skywise", Cost:"4WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"DTK", Number:"228", Image:"/Images/DTK/PristineSkywise.jpg"},
{Name:"Ruthless Deathfang", Cost:"4UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"229", Image:"/Images/DTK/RuthlessDeathfang.jpg"},
{Name:"Sarkhan Unbroken", Cost:"2URG", Color:["U","R","G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"DTK", Number:"230", Image:"/Images/DTK/SarkhanUnbroken.jpg"},
{Name:"Savage Ventmaw", Cost:"4RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"231", Image:"/Images/DTK/SavageVentmaw.jpg"},
{Name:"Silumgar's Command", Cost:"3UB", Color:["U","B"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"DTK", Number:"232", Image:"/Images/DTK/SilumgarsCommand.jpg"},
{Name:"Swift Warkite", Cost:"4BR", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"DTK", Number:"233", Image:"/Images/DTK/SwiftWarkite.jpg"},
{Name:"Ancestral Statue", Cost:"4", Color:["C"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"DTK", Number:"234", Image:"/Images/DTK/AncestralStatue.jpg"},
{Name:"Atarka Monument", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"DTK", Number:"235", Image:"/Images/DTK/AtarkaMonument.jpg"},
{Name:"Custodian of the Trove", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"DTK", Number:"236", Image:"/Images/DTK/CustodianoftheTrove.jpg"},
{Name:"Dragonloft Idol", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"DTK", Number:"237", Image:"/Images/DTK/DragonloftIdol.jpg"},
{Name:"Dromoka Monument", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"DTK", Number:"238", Image:"/Images/DTK/DromokaMonument.jpg"},
{Name:"Gate Smasher", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"DTK", Number:"239", Image:"/Images/DTK/GateSmasher.jpg"},
{Name:"Keeper of the Lens", Cost:"1", Color:["C"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"DTK", Number:"240", Image:"/Images/DTK/KeeperoftheLens.jpg"},
{Name:"Kolaghan Monument", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"DTK", Number:"241", Image:"/Images/DTK/KolaghanMonument.jpg"},
{Name:"Ojutai Monument", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"DTK", Number:"242", Image:"/Images/DTK/OjutaiMonument.jpg"},
{Name:"Silumgar Monument", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"DTK", Number:"243", Image:"/Images/DTK/SilumgarMonument.jpg"},
{Name:"Spidersilk Net", Cost:"0", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"DTK", Number:"244", Image:"/Images/DTK/SpidersilkNet.jpg"},
{Name:"Stormrider Rig", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"DTK", Number:"245", Image:"/Images/DTK/StormriderRig.jpg"},
{Name:"Tapestry of the Ages", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"DTK", Number:"246", Image:"/Images/DTK/TapestryoftheAges.jpg"},
{Name:"Vial of Dragonfire", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"4", Sort:"1", Set:"DTK", Number:"247", Image:"/Images/DTK/VialofDragonfire.jpg"},
{Name:"Evolving Wilds", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"5", Sort:"1", Set:"DTK", Number:"248", Image:"/Images/DTK/EvolvingWilds.jpg"},
{Name:"Haven of the Spirit Dragon", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"DTK", Number:"249", Image:"/Images/DTK/HavenoftheSpiritDragon.jpg"},
];
var ExpeditionsBFZ = [
{ Name: "Canopy Vista", Cost: "0", Color: ["W", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "234", Image: "/Images/BFZ/ExpeditionCanopyVista.jpg" },
{ Name: "Cinder Glade", Cost: "0", Color: ["R", "G"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "235", Image: "/Images/BFZ/ExpeditionCinderGlade.jpg" },
{ Name: "Prairie Stream", Cost: "0", Color: ["W", "U"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "241", Image: "/Images/BFZ/ExpeditionPrairieStream.jpg" },
{ Name: "Smoldering Marsh", Cost: "0", Color: ["B", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "247", Image: "/Images/BFZ/ExpeditionSmolderingMarsh.jpg" },
{ Name: "Sunken Hollow", Cost: "0", Color: ["U", "B"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/BFZ/ExpeditionSunkenHollow.jpg" },
{ Name: "Arid Mesa", Cost: "0", Color: ["W", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/BFZ/ExpeditionAridMesa.jpg" },
{ Name: "Steam Vents", Cost: "0", Color: ["U", "R"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/BFZ/ExpeditionSteamVents.jpg" },
{ Name: "Hallowed Fountain", Cost: "0", Color: ["U", "B"], Rarity: "M", Type: ["L"], Rating: "7", Sort: "1", Set: "BFZ", Number: "249", Image: "/Images/BFZ/ExpeditionHallowedFountain.jpg" },
];
var FRF = [
{Name:"Ugin, the Spirit Dragon", Cost:"8", Color:["C"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"FRF", Number:"1", Image:"/Images/FRF/Ugin--theSpiritDragon.jpg"},
{Name:"Abzan Advantage", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"FRF", Number:"2", Image:"/Images/FRF/AbzanAdvantage.jpg"},
{Name:"Abzan Runemark", Cost:"2W", Color:["W"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"FRF", Number:"3", Image:"/Images/FRF/AbzanRunemark.jpg"},
{Name:"Abzan Skycaptain", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"4", Image:"/Images/FRF/AbzanSkycaptain.jpg"},
{Name:"Arashin Cleric", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"5", Image:"/Images/FRF/ArashinCleric.jpg"},
{Name:"Aven Skirmisher", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"6", Image:"/Images/FRF/AvenSkirmisher.jpg"},
{Name:"Channel Harm", Cost:"5W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"7", Image:"/Images/FRF/ChannelHarm.jpg"},
{Name:"Citadel Siege", Cost:"2WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"FRF", Number:"8", Image:"/Images/FRF/CitadelSiege.jpg"},
{Name:"Daghatar the Adamant", Cost:"3W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"9", Image:"/Images/FRF/DaghatartheAdamant.jpg"},
{Name:"Dragon Bell Monk", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"10", Image:"/Images/FRF/DragonBellMonk.jpg"},
{Name:"Dragonscale General", Cost:"3W", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"11", Image:"/Images/FRF/DragonscaleGeneral.jpg"},
{Name:"Elite Scaleguard", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"12", Image:"/Images/FRF/EliteScaleguard.jpg"},
{Name:"Great-Horn Krushok", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"13", Image:"/Images/FRF/Great-HornKrushok.jpg"},
{Name:"Honor's Reward", Cost:"2W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"14", Image:"/Images/FRF/HonorsReward.jpg"},
{Name:"Jeskai Barricade", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"15", Image:"/Images/FRF/JeskaiBarricade.jpg"},
{Name:"Lightform", Cost:"1WW", Color:["W"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"FRF", Number:"16", Image:"/Images/FRF/Lightform.jpg"},
{Name:"Lotus-Eye Mystics", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"17", Image:"/Images/FRF/Lotus-EyeMystics.jpg"},
{Name:"Mardu Woe-Reaper", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"18", Image:"/Images/FRF/MarduWoe-Reaper.jpg"},
{Name:"Mastery of the Unseen", Cost:"1W", Color:["W"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"FRF", Number:"19", Image:"/Images/FRF/MasteryoftheUnseen.jpg"},
{Name:"Monastery Mentor", Cost:"2W", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"20", Image:"/Images/FRF/MonasteryMentor.jpg"},
{Name:"Pressure Point", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"21", Image:"/Images/FRF/PressurePoint.jpg"},
{Name:"Rally the Ancestors", Cost:"0WW", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"FRF", Number:"22", Image:"/Images/FRF/RallytheAncestors.jpg"},
{Name:"Sage's Reverie", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"FRF", Number:"23", Image:"/Images/FRF/SagesReverie.jpg"},
{Name:"Sandblast", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"24", Image:"/Images/FRF/Sandblast.jpg"},
{Name:"Sandsteppe Outcast", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"25", Image:"/Images/FRF/SandsteppeOutcast.jpg"},
{Name:"Soul Summons", Cost:"1W", Color:["W"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"FRF", Number:"26", Image:"/Images/FRF/SoulSummons.jpg"},
{Name:"Soulfire Grand Master", Cost:"1W", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"27", Image:"/Images/FRF/SoulfireGrandMaster.jpg"},
{Name:"Valorous Stance", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"FRF", Number:"28", Image:"/Images/FRF/ValorousStance.jpg"},
{Name:"Wandering Champion", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"29", Image:"/Images/FRF/WanderingChampion.jpg"},
{Name:"Wardscale Dragon", Cost:"4WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"30", Image:"/Images/FRF/WardscaleDragon.jpg"},
{Name:"Aven Surveyor", Cost:"3UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"31", Image:"/Images/FRF/AvenSurveyor.jpg"},
{Name:"Cloudform", Cost:"1UU", Color:["U"], Rarity:"U", Type:["E"], Rating:"8", Sort:"1", Set:"FRF", Number:"32", Image:"/Images/FRF/Cloudform.jpg"},
{Name:"Enhanced Awareness", Cost:"4U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"33", Image:"/Images/FRF/EnhancedAwareness.jpg"},
{Name:"Fascination", Cost:"0UU", Color:["U"], Rarity:"U", Type:["S"], Rating:"2", Sort:"1", Set:"FRF", Number:"34", Image:"/Images/FRF/Fascination.jpg"},
{Name:"Frost Walker", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"35", Image:"/Images/FRF/FrostWalker.jpg"},
{Name:"Jeskai Infiltrator", Cost:"2U", Color:["U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"36", Image:"/Images/FRF/JeskaiInfiltrator.jpg"},
{Name:"Jeskai Runemark", Cost:"2U", Color:["U"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"FRF", Number:"37", Image:"/Images/FRF/JeskaiRunemark.jpg"},
{Name:"Jeskai Sage", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"38", Image:"/Images/FRF/JeskaiSage.jpg"},
{Name:"Lotus Path Djinn", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"39", Image:"/Images/FRF/LotusPathDjinn.jpg"},
{Name:"Marang River Prowler", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"40", Image:"/Images/FRF/MarangRiverProwler.jpg"},
{Name:"Mindscour Dragon", Cost:"4UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"41", Image:"/Images/FRF/MindscourDragon.jpg"},
{Name:"Mistfire Adept", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"42", Image:"/Images/FRF/MistfireAdept.jpg"},
{Name:"Monastery Siege", Cost:"2U", Color:["U"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"FRF", Number:"43", Image:"/Images/FRF/MonasterySiege.jpg"},
{Name:"Neutralizing Blast", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"44", Image:"/Images/FRF/NeutralizingBlast.jpg"},
{Name:"Rakshasa's Disdain", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"45", Image:"/Images/FRF/RakshasasDisdain.jpg"},
{Name:"Reality Shift", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"FRF", Number:"46", Image:"/Images/FRF/RealityShift.jpg"},
{Name:"Refocus", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"47", Image:"/Images/FRF/Refocus.jpg"},
{Name:"Renowned Weaponsmith", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"48", Image:"/Images/FRF/RenownedWeaponsmith.jpg"},
{Name:"Rite of Undoing", Cost:"4U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"49", Image:"/Images/FRF/RiteofUndoing.jpg"},
{Name:"Sage-Eye Avengers", Cost:"4UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"50", Image:"/Images/FRF/Sage-EyeAvengers.jpg"},
{Name:"Shifting Loyalties", Cost:"5U", Color:["U"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"FRF", Number:"51", Image:"/Images/FRF/ShiftingLoyalties.jpg"},
{Name:"Shu Yun, the Silent Tempest", Cost:"2U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"52", Image:"/Images/FRF/ShuYun--theSilentTempest.jpg"},
{Name:"Sultai Skullkeeper", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"53", Image:"/Images/FRF/SultaiSkullkeeper.jpg"},
{Name:"Supplant Form", Cost:"4UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"FRF", Number:"54", Image:"/Images/FRF/SupplantForm.jpg"},
{Name:"Temporal Trespass", Cost:"8UUU", Color:["U"], Rarity:"M", Type:["S"], Rating:"9", Sort:"1", Set:"FRF", Number:"55", Image:"/Images/FRF/TemporalTrespass.jpg"},
{Name:"Torrent Elemental", Cost:"3UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"56", Image:"/Images/FRF/TorrentElemental.jpg"},
{Name:"Whisk Away", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"FRF", Number:"57", Image:"/Images/FRF/WhiskAway.jpg"},
{Name:"Will of the Naga", Cost:"4UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"58", Image:"/Images/FRF/WilloftheNaga.jpg"},
{Name:"Write into Being", Cost:"2U", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"FRF", Number:"59", Image:"/Images/FRF/WriteintoBeing.jpg"},
{Name:"Alesha's Vanguard", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"60", Image:"/Images/FRF/AleshasVanguard.jpg"},
{Name:"Ancestral Vengeance", Cost:"0BB", Color:["B"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"FRF", Number:"61", Image:"/Images/FRF/AncestralVengeance.jpg"},
{Name:"Archfiend of Depravity", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"62", Image:"/Images/FRF/ArchfiendofDepravity.jpg"},
{Name:"Battle Brawler", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"63", Image:"/Images/FRF/BattleBrawler.jpg"},
{Name:"Brutal Hordechief", Cost:"3B", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"64", Image:"/Images/FRF/BrutalHordechief.jpg"},
{Name:"Crux of Fate", Cost:"3BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"FRF", Number:"65", Image:"/Images/FRF/CruxofFate.jpg"},
{Name:"Dark Deal", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"2", Sort:"1", Set:"FRF", Number:"66", Image:"/Images/FRF/DarkDeal.jpg"},
{Name:"Diplomacy of the Wastes", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"FRF", Number:"67", Image:"/Images/FRF/DiplomacyoftheWastes.jpg"},
{Name:"Douse in Gloom", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"68", Image:"/Images/FRF/DouseinGloom.jpg"},
{Name:"Fearsome Awakening", Cost:"4B", Color:["B"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"FRF", Number:"69", Image:"/Images/FRF/FearsomeAwakening.jpg"},
{Name:"Ghastly Conscription", Cost:"5BB", Color:["B"], Rarity:"M", Type:["S"], Rating:"6", Sort:"1", Set:"FRF", Number:"70", Image:"/Images/FRF/GhastlyConscription.jpg"},
{Name:"Grave Strength", Cost:"1B", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"FRF", Number:"71", Image:"/Images/FRF/GraveStrength.jpg"},
{Name:"Gurmag Angler", Cost:"6B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"72", Image:"/Images/FRF/GurmagAngler.jpg"},
{Name:"Hooded Assassin", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"73", Image:"/Images/FRF/HoodedAssassin.jpg"},
{Name:"Mardu Shadowspear", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"74", Image:"/Images/FRF/MarduShadowspear.jpg"},
{Name:"Mardu Strike Leader", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"75", Image:"/Images/FRF/MarduStrikeLeader.jpg"},
{Name:"Merciless Executioner", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"76", Image:"/Images/FRF/MercilessExecutioner.jpg"},
{Name:"Noxious Dragon", Cost:"4BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"77", Image:"/Images/FRF/NoxiousDragon.jpg"},
{Name:"Orc Sureshot", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"78", Image:"/Images/FRF/OrcSureshot.jpg"},
{Name:"Palace Siege", Cost:"3BB", Color:["B"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"FRF", Number:"79", Image:"/Images/FRF/PalaceSiege.jpg"},
{Name:"Qarsi High Priest", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"80", Image:"/Images/FRF/QarsiHighPriest.jpg"},
{Name:"Reach of Shadows", Cost:"4B", Color:["B"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"FRF", Number:"81", Image:"/Images/FRF/ReachofShadows.jpg"},
{Name:"Sibsig Host", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"82", Image:"/Images/FRF/SibsigHost.jpg"},
{Name:"Sibsig Muckdraggers", Cost:"8B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"83", Image:"/Images/FRF/SibsigMuckdraggers.jpg"},
{Name:"Soulflayer", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"84", Image:"/Images/FRF/Soulflayer.jpg"},
{Name:"Sultai Emissary", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"85", Image:"/Images/FRF/SultaiEmissary.jpg"},
{Name:"Sultai Runemark", Cost:"2B", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"FRF", Number:"86", Image:"/Images/FRF/SultaiRunemark.jpg"},
{Name:"Tasigur, the Golden Fang", Cost:"5B", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"87", Image:"/Images/FRF/Tasigur--theGoldenFang.jpg"},
{Name:"Tasigur's Cruelty", Cost:"5B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"FRF", Number:"88", Image:"/Images/FRF/TasigursCruelty.jpg"},
{Name:"Typhoid Rats", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"89", Image:"/Images/FRF/TyphoidRats.jpg"},
{Name:"Alesha, Who Smiles at Death", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"90", Image:"/Images/FRF/Alesha--WhoSmilesatDeath.jpg"},
{Name:"Arcbond", Cost:"2R", Color:["R"], Rarity:"R", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"91", Image:"/Images/FRF/Arcbond.jpg"},
{Name:"Bathe in Dragonfire", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"FRF", Number:"92", Image:"/Images/FRF/BatheinDragonfire.jpg"},
{Name:"Bloodfire Enforcers", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"93", Image:"/Images/FRF/BloodfireEnforcers.jpg"},
{Name:"Break Through the Line", Cost:"1R", Color:["R"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"FRF", Number:"94", Image:"/Images/FRF/BreakThroughtheLine.jpg"},
{Name:"Collateral Damage", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"FRF", Number:"95", Image:"/Images/FRF/CollateralDamage.jpg"},
{Name:"Defiant Ogre", Cost:"5R", Color:["R"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"FRF", Number:"96", Image:"/Images/FRF/DefiantOgre.jpg"},
{Name:"Dragonrage", Cost:"2R", Color:["R"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"97", Image:"/Images/FRF/Dragonrage.jpg"},
{Name:"Fierce Invocation", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"FRF", Number:"98", Image:"/Images/FRF/FierceInvocation.jpg"},
{Name:"Flamerush Rider", Cost:"4R", Color:["R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"99", Image:"/Images/FRF/FlamerushRider.jpg"},
{Name:"Flamewake Phoenix", Cost:"1RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"100", Image:"/Images/FRF/FlamewakePhoenix.jpg"},
{Name:"Friendly Fire", Cost:"3R", Color:["R"], Rarity:"U", Type:["I"], Rating:"1", Sort:"1", Set:"FRF", Number:"101", Image:"/Images/FRF/FriendlyFire.jpg"},
{Name:"Goblin Heelcutter", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"102", Image:"/Images/FRF/GoblinHeelcutter.jpg"},
{Name:"Gore Swine", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"103", Image:"/Images/FRF/GoreSwine.jpg"},
{Name:"Humble Defector", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"104", Image:"/Images/FRF/HumbleDefector.jpg"},
{Name:"Hungering Yeti", Cost:"4R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"105", Image:"/Images/FRF/HungeringYeti.jpg"},
{Name:"Lightning Shrieker", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"106", Image:"/Images/FRF/LightningShrieker.jpg"},
{Name:"Mardu Runemark", Cost:"2R", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"FRF", Number:"107", Image:"/Images/FRF/MarduRunemark.jpg"},
{Name:"Mardu Scout", Cost:"0RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"108", Image:"/Images/FRF/MarduScout.jpg"},
{Name:"Mob Rule", Cost:"4RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"FRF", Number:"109", Image:"/Images/FRF/MobRule.jpg"},
{Name:"Outpost Siege", Cost:"3R", Color:["R"], Rarity:"R", Type:["E"], Rating:"9", Sort:"1", Set:"FRF", Number:"110", Image:"/Images/FRF/OutpostSiege.jpg"},
{Name:"Pyrotechnics", Cost:"4R", Color:["R"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"FRF", Number:"111", Image:"/Images/FRF/Pyrotechnics.jpg"},
{Name:"Rageform", Cost:"2RR", Color:["R"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"FRF", Number:"112", Image:"/Images/FRF/Rageform.jpg"},
{Name:"Shaman of the Great Hunt", Cost:"3R", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"113", Image:"/Images/FRF/ShamanoftheGreatHunt.jpg"},
{Name:"Shockmaw Dragon", Cost:"4RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"114", Image:"/Images/FRF/ShockmawDragon.jpg"},
{Name:"Smoldering Efreet", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"FRF", Number:"115", Image:"/Images/FRF/SmolderingEfreet.jpg"},
{Name:"Temur Battle Rage", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"116", Image:"/Images/FRF/TemurBattleRage.jpg"},
{Name:"Vaultbreaker", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"117", Image:"/Images/FRF/Vaultbreaker.jpg"},
{Name:"Wild Slash", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"FRF", Number:"118", Image:"/Images/FRF/WildSlash.jpg"},
{Name:"Abzan Beastmaster", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"119", Image:"/Images/FRF/AbzanBeastmaster.jpg"},
{Name:"Abzan Kin-Guard", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"120", Image:"/Images/FRF/AbzanKin-Guard.jpg"},
{Name:"Ainok Guide", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"FRF", Number:"121", Image:"/Images/FRF/AinokGuide.jpg"},
{Name:"Ambush Krotiq", Cost:"5G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"122", Image:"/Images/FRF/AmbushKrotiq.jpg"},
{Name:"Arashin War Beast", Cost:"5GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"123", Image:"/Images/FRF/ArashinWarBeast.jpg"},
{Name:"Archers of Qarsi", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"FRF", Number:"124", Image:"/Images/FRF/ArchersofQarsi.jpg"},
{Name:"Battlefront Krushok", Cost:"4G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"125", Image:"/Images/FRF/BattlefrontKrushok.jpg"},
{Name:"Cached Defenses", Cost:"2G", Color:["G"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"FRF", Number:"126", Image:"/Images/FRF/CachedDefenses.jpg"},
{Name:"Destructor Dragon", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"127", Image:"/Images/FRF/DestructorDragon.jpg"},
{Name:"Feral Krushok", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"128", Image:"/Images/FRF/FeralKrushok.jpg"},
{Name:"Formless Nurturing", Cost:"3G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"FRF", Number:"129", Image:"/Images/FRF/FormlessNurturing.jpg"},
{Name:"Frontier Mastodon", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"130", Image:"/Images/FRF/FrontierMastodon.jpg"},
{Name:"Frontier Siege", Cost:"3G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"FRF", Number:"131", Image:"/Images/FRF/FrontierSiege.jpg"},
{Name:"Fruit of the First Tree", Cost:"3G", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"FRF", Number:"132", Image:"/Images/FRF/FruitoftheFirstTree.jpg"},
{Name:"Hunt the Weak", Cost:"3G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"FRF", Number:"133", Image:"/Images/FRF/HunttheWeak.jpg"},
{Name:"Map the Wastes", Cost:"2G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"FRF", Number:"134", Image:"/Images/FRF/MaptheWastes.jpg"},
{Name:"Return to the Earth", Cost:"3G", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"135", Image:"/Images/FRF/ReturntotheEarth.jpg"},
{Name:"Ruthless Instincts", Cost:"2G", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"136", Image:"/Images/FRF/RuthlessInstincts.jpg"},
{Name:"Sandsteppe Mastodon", Cost:"5GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"137", Image:"/Images/FRF/SandsteppeMastodon.jpg"},
{Name:"Shamanic Revelation", Cost:"3GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"FRF", Number:"138", Image:"/Images/FRF/ShamanicRevelation.jpg"},
{Name:"Sudden Reclamation", Cost:"3G", Color:["G"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"FRF", Number:"139", Image:"/Images/FRF/SuddenReclamation.jpg"},
{Name:"Temur Runemark", Cost:"2G", Color:["G"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"FRF", Number:"140", Image:"/Images/FRF/TemurRunemark.jpg"},
{Name:"Temur Sabertooth", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"141", Image:"/Images/FRF/TemurSabertooth.jpg"},
{Name:"Temur War Shaman", Cost:"4GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"142", Image:"/Images/FRF/TemurWarShaman.jpg"},
{Name:"Warden of the First Tree", Cost:"0G", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"143", Image:"/Images/FRF/WardenoftheFirstTree.jpg"},
{Name:"Whisperer of the Wilds", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"FRF", Number:"144", Image:"/Images/FRF/WhispereroftheWilds.jpg"},
{Name:"Whisperwood Elemental", Cost:"3GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"FRF", Number:"145", Image:"/Images/FRF/WhisperwoodElemental.jpg"},
{Name:"Wildcall", Cost:"0GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"FRF", Number:"146", Image:"/Images/FRF/Wildcall.jpg"},
{Name:"Winds of Qal Sisma", Cost:"1G", Color:["G"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"147", Image:"/Images/FRF/WindsofQalSisma.jpg"},
{Name:"Yasova Dragonclaw", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"148", Image:"/Images/FRF/YasovaDragonclaw.jpg"},
{Name:"Atarka, World Render", Cost:"5RG", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"149", Image:"/Images/FRF/Atarka--WorldRender.jpg"},
{Name:"Cunning Strike", Cost:"3UR", Color:["U","R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"150", Image:"/Images/FRF/CunningStrike.jpg"},
{Name:"Dromoka, the Eternal", Cost:"3WG", Color:["W","G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"151", Image:"/Images/FRF/Dromoka--theEternal.jpg"},
{Name:"Ethereal Ambush", Cost:"3GU", Color:["G","U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"152", Image:"/Images/FRF/EtherealAmbush.jpg"},
{Name:"Grim Contest", Cost:"1BG", Color:["B","G"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"FRF", Number:"153", Image:"/Images/FRF/GrimContest.jpg"},
{Name:"Harsh Sustenance", Cost:"1WB", Color:["W","B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"FRF", Number:"154", Image:"/Images/FRF/HarshSustenance.jpg"},
{Name:"Kolaghan, the Storm's Fury", Cost:"3BR", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"FRF", Number:"155", Image:"/Images/FRF/Kolaghan--theStormsFury.jpg"},
{Name:"Ojutai, Soul of Winter", Cost:"5WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"FRF", Number:"156", Image:"/Images/FRF/Ojutai--SoulofWinter.jpg"},
{Name:"Silumgar, the Drifting Death", Cost:"4UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"FRF", Number:"157", Image:"/Images/FRF/Silumgar--theDriftingDeath.jpg"},
{Name:"War Flare", Cost:"2RW", Color:["R","W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"FRF", Number:"158", Image:"/Images/FRF/WarFlare.jpg"},
{Name:"Goblin Boom Keg", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"FRF", Number:"159", Image:"/Images/FRF/GoblinBoomKeg.jpg"},
{Name:"Hero's Blade", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"FRF", Number:"160", Image:"/Images/FRF/HerosBlade.jpg"},
{Name:"Hewed Stone Retainers", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"FRF", Number:"161", Image:"/Images/FRF/HewedStoneRetainers.jpg"},
{Name:"Pilgrim of the Fires", Cost:"7", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"FRF", Number:"162", Image:"/Images/FRF/PilgrimoftheFires.jpg"},
{Name:"Scroll of the Masters", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"FRF", Number:"163", Image:"/Images/FRF/ScrolloftheMasters.jpg"},
{Name:"Ugin's Construct", Cost:"4", Color:["C"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"FRF", Number:"163", Image:"/Images/FRF/UginsConstruct.jpg"},
{Name:"Crucible of the Spirit Dragon", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"5", Sort:"1", Set:"FRF", Number:"164", Image:"/Images/FRF/CrucibleoftheSpiritDragon.jpg"},
];
var JOU = [
{Name:"Aegis of the Gods", Cost:"2", Color:["W"], Rarity:"R", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"1", Image:"/Images/JOU/1.jpg"},
{Name:"Ajani's Presence", Cost:"1", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"2", Image:"/Images/JOU/2.jpg"},
{Name:"Akroan Mastiff", Cost:"4", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"3", Image:"/Images/JOU/3.jpg"},
{Name:"Arnament of Nyx", Cost:"3", Color:["W"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"JOU", Number:"4", Image:"/Images/JOU/4.jpg"},
{Name:"Banishing Light", Cost:"3", Color:["W"], Rarity:"U", Type:["E"], Rating:"8", Sort:"1", Set:"JOU", Number:"5", Image:"/Images/JOU/5.jpg"},
{Name:"Dawnbringer Charioteers", Cost:"4", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"6", Image:"/Images/JOU/6.jpg"},
{Name:"Deicide", Cost:"2", Color:["W"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"JOU", Number:"7", Image:"/Images/JOU/7.jpg"},
{Name:"Dictate of Heliod", Cost:"5", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"JOU", Number:"8", Image:"/Images/JOU/8.jpg"},
{Name:"Eagle of the Watch", Cost:"3", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"9", Image:"/Images/JOU/9.jpg"},
{Name:"Eidolon of Rhetoric", Cost:"3", Color:["W"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"1", Set:"JOU", Number:"10", Image:"/Images/JOU/10.jpg"},
{Name:"Font of Vigor", Cost:"2", Color:["W"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"JOU", Number:"11", Image:"/Images/JOU/11.jpg"},
{Name:"Godsend", Cost:"3", Color:["W"], Rarity:"M", Type:["A"], Rating:"9", Sort:"1", Set:"JOU", Number:"12", Image:"/Images/JOU/12.jpg"},
{Name:"Harvest Alseids", Cost:"3", Color:["W"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"13", Image:"/Images/JOU/13.jpg"},
{Name:"Lagonna-Band Trailblazer", Cost:"1", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"14", Image:"/Images/JOU/14.jpg"},
{Name:"Launch the Fleet", Cost:"1", Color:["W"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"JOU", Number:"15", Image:"/Images/JOU/15.jpg"},
{Name:"Leonin Ironoclast", Cost:"4", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"16", Image:"/Images/JOU/16.jpg"},
{Name:"Mortal Obstinancy", Cost:"1", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"17", Image:"/Images/JOU/17.jpg"},
{Name:"Nyx-Fleece Ram", Cost:"2", Color:["W"], Rarity:"U", Type:["C","E"], Rating:"8", Sort:"1", Set:"JOU", Number:"18", Image:"/Images/JOU/18.jpg"},
{Name:"Oppressive Rays", Cost:"1", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"19", Image:"/Images/JOU/19.jpg"},
{Name:"Oreskos Swiftclaw", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"20", Image:"/Images/JOU/20.jpg"},
{Name:"Phalanx Formation", Cost:"3", Color:["W"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"21", Image:"/Images/JOU/21.jpg"},
{Name:"Quarry Colossus", Cost:"7", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"22", Image:"/Images/JOU/22.jpg"},
{Name:"Reprisal", Cost:"2", Color:["W"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"23", Image:"/Images/JOU/23.jpg"},
{Name:"Sightless Brawler", Cost:"2", Color:["W"], Rarity:"U", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"24", Image:"/Images/JOU/24.jpg"},
{Name:"Skybind", Cost:"5", Color:["W"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"25", Image:"/Images/JOU/25.jpg"},
{Name:"Skyspear Cavalry", Cost:"5", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"26", Image:"/Images/JOU/26.jpg"},
{Name:"Stonewise Fortifier", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"27", Image:"/Images/JOU/27.jpg"},
{Name:"Supply-Line Cranes", Cost:"5", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"JOU", Number:"28", Image:"/Images/JOU/28.jpg"},
{Name:"Tethmos High Priest", Cost:"3", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"29", Image:"/Images/JOU/29.jpg"},
{Name:"Aerial Formation", Cost:"1", Color:["U"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"JOU", Number:"30", Image:"/Images/JOU/30.jpg"},
{Name:"Battlefield Thaumaturge", Cost:"2", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"JOU", Number:"31", Image:"/Images/JOU/31.jpg"},
{Name:"Cloaked Siren", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"32", Image:"/Images/JOU/32.jpg"},
{Name:"Countermand", Cost:"4", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"33", Image:"/Images/JOU/33.jpg"},
{Name:"Crystalline Nautilus", Cost:"3", Color:["U"], Rarity:"U", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"34", Image:"/Images/JOU/34.jpg"},
{Name:"Dakra Mystic", Cost:"1", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"35", Image:"/Images/JOU/35.jpg"},
{Name:"Daring Thief", Cost:"3", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"36", Image:"/Images/JOU/36.jpg"},
{Name:"Dictate of Kruphix", Cost:"3", Color:["U"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"37", Image:"/Images/JOU/37.jpg"},
{Name:"Font of Fortunes", Cost:"2", Color:["U"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"38", Image:"/Images/JOU/38.jpg"},
{Name:"Godhunter Octopus", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"JOU", Number:"39", Image:"/Images/JOU/39.jpg"},
{Name:"Hour of Need", Cost:"3", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"JOU", Number:"40", Image:"/Images/JOU/40.jpg"},
{Name:"Hubris", Cost:"2", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"41", Image:"/Images/JOU/41.jpg"},
{Name:"Hypnotic Siren", Cost:"1", Color:["U"], Rarity:"R", Type:["C","E"], Rating:"8", Sort:"1", Set:"JOU", Number:"42", Image:"/Images/JOU/42.jpg"},
{Name:"Interpret the Signs", Cost:"6", Color:["U"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"43", Image:"/Images/JOU/43.jpg"},
{Name:"Kiora's Dismissal", Cost:"1", Color:["U"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"JOU", Number:"44", Image:"/Images/JOU/44.jpg"},
{Name:"Pin to the Earth", Cost:"2", Color:["U"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"JOU", Number:"45", Image:"/Images/JOU/45.jpg"},
{Name:"Polymorphous Rush", Cost:"3", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"JOU", Number:"46", Image:"/Images/JOU/46.jpg"},
{Name:"Pull from the Deep", Cost:"4", Color:["U"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"JOU", Number:"47", Image:"/Images/JOU/47.jpg"},
{Name:"Riptide Chimera", Cost:"3", Color:["U"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"48", Image:"/Images/JOU/48.jpg"},
{Name:"Rise of Eagles", Cost:"6", Color:["U"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"JOU", Number:"49", Image:"/Images/JOU/49.jpg"},
{Name:"Sage of Hours", Cost:"2", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"JOU", Number:"50", Image:"/Images/JOU/50.jpg"},
{Name:"Scourge of Fleets", Cost:"7", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"51", Image:"/Images/JOU/51.jpg"},
{Name:"Sigiled Starfish", Cost:"2", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"52", Image:"/Images/JOU/52.jpg"},
{Name:"Thassa's Devourer", Cost:"5", Color:["U"], Rarity:"C", Type:["C","E"], Rating:"3", Sort:"1", Set:"JOU", Number:"53", Image:"/Images/JOU/53.jpg"},
{Name:"Thassa's Ire", Cost:"1", Color:["U"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"JOU", Number:"54", Image:"/Images/JOU/54.jpg"},
{Name:"Triton Cavalry", Cost:"4", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"55", Image:"/Images/JOU/55.jpg"},
{Name:"Triton Shorestalker", Cost:"1", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"56", Image:"/Images/JOU/56.jpg"},
{Name:"War-Wing Siren", Cost:"3", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"57", Image:"/Images/JOU/57.jpg"},
{Name:"Whitewater Naiads", Cost:"5", Color:["U"], Rarity:"U", Type:["C","E"], Rating:"4", Sort:"1", Set:"JOU", Number:"58", Image:"/Images/JOU/58.jpg"},
{Name:"Agent of Erebos", Cost:"4", Color:["B"], Rarity:"U", Type:["C","E"], Rating:"3", Sort:"1", Set:"JOU", Number:"59", Image:"/Images/JOU/59.jpg"},
{Name:"Aspect of Gorgon", Cost:"3", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"JOU", Number:"60", Image:"/Images/JOU/60.jpg"},
{Name:"Bloodcrazed Hoplite", Cost:"2", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"61", Image:"/Images/JOU/61.jpg"},
{Name:"Brain Maggot", Cost:"2", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"62", Image:"/Images/JOU/62.jpg"},
{Name:"Cast into Darkness", Cost:"2", Color:["B"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"JOU", Number:"63", Image:"/Images/JOU/63.jpg"},
{Name:"Cruel Feeding", Cost:"1", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"JOU", Number:"64", Image:"/Images/JOU/64.jpg"},
{Name:"Dictate of Erebos", Cost:"5", Color:["B"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"JOU", Number:"65", Image:"/Images/JOU/65.jpg"},
{Name:"Doomwake Giant", Cost:"5", Color:["B"], Rarity:"R", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"66", Image:"/Images/JOU/66.jpg"},
{Name:"Deadbringer Lampads", Cost:"5", Color:["B"], Rarity:"C", Type:["C","E"], Rating:"5", Sort:"1", Set:"JOU", Number:"67", Image:"/Images/JOU/67.jpg"},
{Name:"Extinguish All Hope", Cost:"6", Color:["B"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"JOU", Number:"68", Image:"/Images/JOU/68.jpg"},
{Name:"Feast of Dreams", Cost:"2", Color:["B"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"JOU", Number:"69", Image:"/Images/JOU/69.jpg"},
{Name:"Felhide Petrifier", Cost:"3", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"70", Image:"/Images/JOU/70.jpg"},
{Name:"Font of Return", Cost:"2", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"JOU", Number:"71", Image:"/Images/JOU/71.jpg"},
{Name:"Gnarled Scarhide", Cost:"1", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"72", Image:"/Images/JOU/72.jpg"},
{Name:"Grim Guardian", Cost:"3", Color:["B"], Rarity:"C", Type:["C","E"], Rating:"5", Sort:"1", Set:"JOU", Number:"73", Image:"/Images/JOU/73.jpg"},
{Name:"King Macar, the Gold-Cursed", Cost:"4", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"JOU", Number:"74", Image:"/Images/JOU/74.jpg"},
{Name:"Master of the Feast", Cost:"3", Color:["B"], Rarity:"R", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"75", Image:"/Images/JOU/75.jpg"},
{Name:"Nightmarish End", Cost:"3", Color:["B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"JOU", Number:"76", Image:"/Images/JOU/76.jpg"},
{Name:"Nyx Infusion", Cost:"3", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"JOU", Number:"77", Image:"/Images/JOU/77.jpg"},
{Name:"Pharika's Chosen", Cost:"1", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"78", Image:"/Images/JOU/78.jpg"},
{Name:"Returned Reveler", Cost:"2", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"79", Image:"/Images/JOU/79.jpg"},
{Name:"Ritual of the Returned", Cost:"4", Color:["B"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"80", Image:"/Images/JOU/80.jpg"},
{Name:"Rotted Hulk", Cost:"4", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"81", Image:"/Images/JOU/81.jpg"},
{Name:"Silence the Believers", Cost:"4", Color:["B"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"JOU", Number:"82", Image:"/Images/JOU/82.jpg"},
{Name:"Spiteful Blow", Cost:"6", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"83", Image:"/Images/JOU/83.jpg"},
{Name:"Squelching Leeches", Cost:"4", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"84", Image:"/Images/JOU/84.jpg"},
{Name:"Thoughtrender Lamia", Cost:"6", Color:["B"], Rarity:"U", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"85", Image:"/Images/JOU/85.jpg"},
{Name:"Tormented Thoughts", Cost:"3", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"86", Image:"/Images/JOU/86.jpg"},
{Name:"Worst Fears", Cost:"8", Color:["B"], Rarity:"M", Type:["S"], Rating:"9", Sort:"1", Set:"JOU", Number:"87", Image:"/Images/JOU/87.jpg"},
{Name:"Akroan Line Breaker", Cost:"3", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"88", Image:"/Images/JOU/88.jpg"},
{Name:"Bearer of the Heavens", Cost:"8", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"89", Image:"/Images/JOU/89.jpg"},
{Name:"Bladetusk Boar", Cost:"4", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"90", Image:"/Images/JOU/90.jpg"},
{Name:"Blinding Flare", Cost:"1", Color:["R"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"JOU", Number:"91", Image:"/Images/JOU/91.jpg"},
{Name:"Cyclops of Eternal Fury", Cost:"6", Color:["R"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"92", Image:"/Images/JOU/92.jpg"},
{Name:"Dictate of the Twin Gods", Cost:"5", Color:["R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"93", Image:"/Images/JOU/93.jpg"},
{Name:"Eidolon of the Great Revel", Cost:"2", Color:["R"], Rarity:"R", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"94", Image:"/Images/JOU/94.jpg"},
{Name:"Flamespeaker's Will", Cost:"1", Color:["R"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"95", Image:"/Images/JOU/95.jpg"},
{Name:"Flurry of Horns", Cost:"5", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"JOU", Number:"96", Image:"/Images/JOU/96.jpg"},
{Name:"Font of Ire", Cost:"2", Color:["R"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"JOU", Number:"97", Image:"/Images/JOU/97.jpg"},
{Name:"Forgeborn Oreads", Cost:"4", Color:["R"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"98", Image:"/Images/JOU/98.jpg"},
{Name:"Gluttonous Cyclops", Cost:"6", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"99", Image:"/Images/JOU/99.jpg"},
{Name:"Harness by Force", Cost:"3", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"JOU", Number:"100", Image:"/Images/JOU/100.jpg"},
{Name:"Knowledge and Power", Cost:"5", Color:["R"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"JOU", Number:"101", Image:"/Images/JOU/101.jpg"},
{Name:"Lightning Diadem", Cost:"6", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"JOU", Number:"102", Image:"/Images/JOU/102.jpg"},
{Name:"Magma Spray", Cost:"1", Color:["R"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"JOU", Number:"103", Image:"/Images/JOU/103.jpg"},
{Name:"Mogis's Warhound", Cost:"2", Color:["R"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"104", Image:"/Images/JOU/104.jpg"},
{Name:"Pensive Minotaur", Cost:"3", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"105", Image:"/Images/JOU/105.jpg"},
{Name:"Prophetic Flamespeaker", Cost:"3", Color:["R"], Rarity:"M", Type:["C","E"], Rating:"10", Sort:"1", Set:"JOU", Number:"106", Image:"/Images/JOU/106.jpg"},
{Name:"Riddle of Lightning", Cost:"5", Color:["R"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"107", Image:"/Images/JOU/107.jpg"},
{Name:"Rollick of Abandon", Cost:"5", Color:["R"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"JOU", Number:"108", Image:"/Images/JOU/108.jpg"},
{Name:"Rouse the Mob", Cost:"1", Color:["R"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"109", Image:"/Images/JOU/109.jpg"},
{Name:"Satyr Hoplite", Cost:"1", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"JOU", Number:"110", Image:"/Images/JOU/110.jpg"},
{Name:"Sigiled Skink", Cost:"2", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"111", Image:"/Images/JOU/111.jpg"},
{Name:"Spawn of Thraxes", Cost:"7", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"112", Image:"/Images/JOU/112.jpg"},
{Name:"Spite of Mogis", Cost:"1", Color:["R"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"JOU", Number:"113", Image:"/Images/JOU/113.jpg"},
{Name:"Starfall", Cost:"5", Color:["R"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"114", Image:"/Images/JOU/114.jpg"},
{Name:"Twinflame", Cost:"2", Color:["R"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"JOU", Number:"115", Image:"/Images/JOU/115.jpg"},
{Name:"Wildfire Cerberus", Cost:"5", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"116", Image:"/Images/JOU/116.jpg"},
{Name:"Bassara Tower Archer", Cost:"2", Color:["G"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"JOU", Number:"117", Image:"/Images/JOU/117.jpg"},
{Name:"Colossal Heroics", Cost:"3", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"118", Image:"/Images/JOU/118.jpg"},
{Name:"Consign to Dust", Cost:"3", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"119", Image:"/Images/JOU/119.jpg"},
{Name:"Desecration Plague", Cost:"4", Color:["G"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"120", Image:"/Images/JOU/120.jpg"},
{Name:"Dictate of Karametra", Cost:"5", Color:["G"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"JOU", Number:"121", Image:"/Images/JOU/121.jpg"},
{Name:"Eidolon of Blossoms", Cost:"4", Color:["G"], Rarity:"R", Type:["C","E"], Rating:"8", Sort:"1", Set:"JOU", Number:"122", Image:"/Images/JOU/122.jpg"},
{Name:"Font of Fertility", Cost:"1", Color:["G"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"123", Image:"/Images/JOU/123.jpg"},
{Name:"Golden Hind", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"124", Image:"/Images/JOU/124.jpg"},
{Name:"Goldenhide Ox", Cost:"6", Color:["G"], Rarity:"U", Type:["C","E"], Rating:"4", Sort:"1", Set:"JOU", Number:"125", Image:"/Images/JOU/125.jpg"},
{Name:"Heroes' Bane", Cost:"5", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"JOU", Number:"126", Image:"/Images/JOU/126.jpg"},
{Name:"Humbler of Mortals", Cost:"6", Color:["G"], Rarity:"C", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"127", Image:"/Images/JOU/127.jpg"},
{Name:"Hydra Broodmaster", Cost:"6", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"JOU", Number:"128", Image:"/Images/JOU/128.jpg"},
{Name:"Kruphix's Insight", Cost:"3", Color:["G"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"129", Image:"/Images/JOU/129.jpg"},
{Name:"Market Festival", Cost:"4", Color:["G"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"JOU", Number:"130", Image:"/Images/JOU/130.jpg"},
{Name:"Nature's Panoply", Cost:"1", Color:["G"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"JOU", Number:"131", Image:"/Images/JOU/131.jpg"},
{Name:"Nessian Game Warden", Cost:"5", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"132", Image:"/Images/JOU/132.jpg"},
{Name:"Oakheart Dryads", Cost:"3", Color:["G"], Rarity:"C", Type:["C","E"], Rating:"7", Sort:"1", Set:"JOU", Number:"133", Image:"/Images/JOU/133.jpg"},
{Name:"Pheres-Band Thunderhoof", Cost:"5", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"134", Image:"/Images/JOU/134.jpg"},
{Name:"Pheres-Band Warchief", Cost:"4", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"135", Image:"/Images/JOU/135.jpg"},
{Name:"Ravenous Leucrocota", Cost:"4", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"136", Image:"/Images/JOU/136.jpg"},
{Name:"Renowned Weaver", Cost:"1", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"137", Image:"/Images/JOU/137.jpg"},
{Name:"Reviving Melody", Cost:"3", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"JOU", Number:"138", Image:"/Images/JOU/138.jpg"},
{Name:"Satyr Grovedancer", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"JOU", Number:"139", Image:"/Images/JOU/139.jpg"},
{Name:"Setessan Tactics", Cost:"2", Color:["G"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"JOU", Number:"140", Image:"/Images/JOU/140.jpg"},
{Name:"Solidarity of Heroes", Cost:"2", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"JOU", Number:"141", Image:"/Images/JOU/141.jpg"},
{Name:"Spirespine", Cost:"3", Color:["G"], Rarity:"U", Type:["C","E"], Rating:"5", Sort:"1", Set:"JOU", Number:"142", Image:"/Images/JOU/142.jpg"},
{Name:"Strength of the Fallen", Cost:"2", Color:["G"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"JOU", Number:"143", Image:"/Images/JOU/143.jpg"},
{Name:"Swarmborn Giant", Cost:"4", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"144", Image:"/Images/JOU/144.jpg"},
{Name:"Ajani, Mentor of Heroes", Cost:"5", Color:["W","G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"JOU", Number:"145", Image:"/Images/JOU/145.jpg"},
{Name:"Athreos, God of Passage", Cost:"3", Color:["W","B"], Rarity:"M", Type:["C","E"], Rating:"10", Sort:"1", Set:"JOU", Number:"146", Image:"/Images/JOU/146.jpg"},
{Name:"Desperate Stand", Cost:"2", Color:["W","R"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"JOU", Number:"147", Image:"/Images/JOU/147.jpg"},
{Name:"Disciple of Deceit", Cost:"2", Color:["B","U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"JOU", Number:"148", Image:"/Images/JOU/148.jpg"},
{Name:"Fleetfeather Cockatrice", Cost:"5", Color:["G","U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"JOU", Number:"149", Image:"/Images/JOU/149.jpg"},
{Name:"Iroas, God of Victory", Cost:"4", Color:["W","R"], Rarity:"M", Type:["C","E"], Rating:"10", Sort:"1", Set:"JOU", Number:"150", Image:"/Images/JOU/150.jpg"},
{Name:"Keranos, God of Storms", Cost:"5", Color:["R","U"], Rarity:"M", Type:["C","E"], Rating:"10", Sort:"1", Set:"JOU", Number:"151", Image:"/Images/JOU/151.jpg"},
{Name:"Kruphix, God of Horizons", Cost:"5", Color:["G","U"], Rarity:"M", Type:["C","E"], Rating:"9", Sort:"1", Set:"JOU", Number:"152", Image:"/Images/JOU/152.jpg"},
{Name:"Nyxborn Weaver", Cost:"3", Color:["G","B"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"153", Image:"/Images/JOU/153.jpg"},
{Name:"Pharika, God of Affliction", Cost:"3", Color:["G","B"], Rarity:"M", Type:["C","E"], Rating:"9", Sort:"1", Set:"JOU", Number:"154", Image:"/Images/JOU/154.jpg"},
{Name:"Revel of the Fallen God", Cost:"7", Color:["G","R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"JOU", Number:"155", Image:"/Images/JOU/155.jpg"},
{Name:"Stormchaser Chimera", Cost:"4", Color:["R","U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"JOU", Number:"156", Image:"/Images/JOU/156.jpg"},
{Name:"Underworld Coinsmith", Cost:"2", Color:["W","B"], Rarity:"U", Type:["C","E"], Rating:"6", Sort:"1", Set:"JOU", Number:"157", Image:"/Images/JOU/157.jpg"},
{Name:"Armory of Iroas", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"7", Sort:"1", Set:"JOU", Number:"158", Image:"/Images/JOU/158.jpg"},
{Name:"Chariot of Victory", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"6", Sort:"1", Set:"JOU", Number:"159", Image:"/Images/JOU/159.jpg"},
{Name:"Deserter's Quarters", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"JOU", Number:"160", Image:"/Images/JOU/160.jpg"},
{Name:"Gold-Forged Sentinel", Cost:"6", Color:["C"], Rarity:"U", Type:["A","C"], Rating:"4", Sort:"1", Set:"JOU", Number:"161", Image:"/Images/JOU/161.jpg"},
{Name:"Hall of Triumph", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"JOU", Number:"162", Image:"/Images/JOU/162.jpg"},
{Name:"Mana Confluence", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"8", Sort:"1", Set:"JOU", Number:"163", Image:"/Images/JOU/163.jpg"},
{Name:"Temple of Epiphany", Cost:"0", Color:["U","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"JOU", Number:"164", Image:"/Images/JOU/164.jpg"},
{Name:"Temple of Malady", Cost:"0", Color:["G","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"JOU", Number:"165", Image:"/Images/JOU/165.jpg"},
];
var KTK = [
{Name:"Abzan Battle Priest", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"1", Image:"/Images/KTK/AbzanBattlePriest.jpg"},
{Name:"Abzan Falconer", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"2", Image:"/Images/KTK/AbzanFalconer.jpg"},
{Name:"Ainok Bond-Kin", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"3", Image:"/Images/KTK/AinokBond-Kin.jpg"},
{Name:"Alabaster Kirin", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"4", Image:"/Images/KTK/AlabasterKirin.jpg"},
{Name:"Brave the Sands", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"KTK", Number:"5", Image:"/Images/KTK/BravetheSands.jpg"},
{Name:"Dazzling Ramparts", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"6", Image:"/Images/KTK/DazzlingRamparts.jpg"},
{Name:"Defiant Strike", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"7", Image:"/Images/KTK/DefiantStrike.jpg"},
{Name:"End Hostilities", Cost:"5WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"8", Image:"/Images/KTK/EndHostilities.jpg"},
{Name:"Erase", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KTK", Number:"9", Image:"/Images/KTK/Erase.jpg"},
{Name:"Feat of Resistance", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"10", Image:"/Images/KTK/FeatofResistance.jpg"},
{Name:"Firehoof Cavalry", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"11", Image:"/Images/KTK/FirehoofCavalry.jpg"},
{Name:"Herald of Anafenza", Cost:"0W", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"12", Image:"/Images/KTK/HeraldofAnafenza.jpg"},
{Name:"High Sentinels of Arashin", Cost:"3W", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"13", Image:"/Images/KTK/HighSentinelsofArashin.jpg"},
{Name:"Jeskai Student", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"14", Image:"/Images/KTK/JeskaiStudent.jpg"},
{Name:"Kill Shot", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"KTK", Number:"15", Image:"/Images/KTK/KillShot.jpg"},
{Name:"Mardu Hateblade", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"16", Image:"/Images/KTK/MarduHateblade.jpg"},
{Name:"Mardu Hordechief", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"17", Image:"/Images/KTK/MarduHordechief.jpg"},
{Name:"Master of Pearls", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"18", Image:"/Images/KTK/MasterofPearls.jpg"},
{Name:"Rush of Battle", Cost:"3W", Color:["W"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KTK", Number:"19", Image:"/Images/KTK/RushofBattle.jpg"},
{Name:"Sage-Eye Harrier", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"20", Image:"/Images/KTK/Sage-EyeHarrier.jpg"},
{Name:"Salt Road Patrol", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"21", Image:"/Images/KTK/SaltRoadPatrol.jpg"},
{Name:"Seeker of the Way", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"22", Image:"/Images/KTK/SeekeroftheWay.jpg"},
{Name:"Siegecraft", Cost:"3W", Color:["W"], Rarity:"C", Type:["E"], Rating:"1", Sort:"1", Set:"KTK", Number:"23", Image:"/Images/KTK/Siegecraft.jpg"},
{Name:"Smite the Monstrous", Cost:"3W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"24", Image:"/Images/KTK/SmitetheMonstrous.jpg"},
{Name:"Suspension Field", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"8", Sort:"1", Set:"KTK", Number:"25", Image:"/Images/KTK/SuspensionField.jpg"},
{Name:"Take Up Arms", Cost:"4W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"26", Image:"/Images/KTK/TakeUpArms.jpg"},
{Name:"Timely Hordemate", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"27", Image:"/Images/KTK/TimelyHordemate.jpg"},
{Name:"Venerable Lammasu", Cost:"6W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"28", Image:"/Images/KTK/VenerableLammasu.jpg"},
{Name:"War Behemoth", Cost:"5W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"29", Image:"/Images/KTK/WarBehemoth.jpg"},
{Name:"Watcher of the Roost", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"30", Image:"/Images/KTK/WatcheroftheRoost.jpg"},
{Name:"Wingmate Roc", Cost:"3WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"31", Image:"/Images/KTK/WingmateRoc.jpg"},
{Name:"Blinding Spray", Cost:"4U", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"KTK", Number:"32", Image:"/Images/KTK/BlindingSpray.jpg"},
{Name:"Cancel", Cost:"1UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"33", Image:"/Images/KTK/Cancel.jpg"},
{Name:"Clever Impersonator", Cost:"2UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"34", Image:"/Images/KTK/CleverImpersonator.jpg"},
{Name:"Crippling Chill", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"35", Image:"/Images/KTK/CripplingChill.jpg"},
{Name:"Dig Through Time", Cost:"6UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"KTK", Number:"36", Image:"/Images/KTK/DigThroughTime.jpg"},
{Name:"Disdainful Stroke", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"37", Image:"/Images/KTK/DisdainfulStroke.jpg"},
{Name:"Dragon's Eye Savants", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"38", Image:"/Images/KTK/DragonsEyeSavants.jpg"},
{Name:"Embodiment of Spring", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"39", Image:"/Images/KTK/EmbodimentofSpring.jpg"},
{Name:"Force Away", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KTK", Number:"40", Image:"/Images/KTK/ForceAway.jpg"},
{Name:"Glacial Stalker", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"41", Image:"/Images/KTK/GlacialStalker.jpg"},
{Name:"Icy Blast", Cost:"0U", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"42", Image:"/Images/KTK/IcyBlast.jpg"},
{Name:"Jeskai Elder", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"43", Image:"/Images/KTK/JeskaiElder.jpg"},
{Name:"Jeskai Windscout", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"44", Image:"/Images/KTK/JeskaiWindscout.jpg"},
{Name:"Kheru Spellsnatcher", Cost:"4UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"45", Image:"/Images/KTK/KheruSpellsnatcher.jpg"},
{Name:"Mistfire Weaver", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"46", Image:"/Images/KTK/MistfireWeaver.jpg"},
{Name:"Monastery Flock", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"47", Image:"/Images/KTK/MonasteryFlock.jpg"},
{Name:"Mystic of the Hidden Way", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"48", Image:"/Images/KTK/MysticoftheHiddenWay.jpg"},
{Name:"Pearl Lake Ancient", Cost:"5UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"49", Image:"/Images/KTK/PearlLakeAncient.jpg"},
{Name:"Quiet Contemplation", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"KTK", Number:"50", Image:"/Images/KTK/QuietContemplation.jpg"},
{Name:"Riverwheel Aerialists", Cost:"5U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"51", Image:"/Images/KTK/RiverwheelAerialists.jpg"},
{Name:"Scaldkin", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"52", Image:"/Images/KTK/Scaldkin.jpg"},
{Name:"Scion of Glaciers", Cost:"2UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"53", Image:"/Images/KTK/ScionofGlaciers.jpg"},
{Name:"Set Adrift", Cost:"5U", Color:["U"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KTK", Number:"54", Image:"/Images/KTK/SetAdrift.jpg"},
{Name:"Singing Bell Strike", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"KTK", Number:"55", Image:"/Images/KTK/SingingBellStrike.jpg"},
{Name:"Stubborn Denial", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"KTK", Number:"56", Image:"/Images/KTK/StubbornDenial.jpg"},
{Name:"Taigam's Scheming", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"KTK", Number:"57", Image:"/Images/KTK/TaigamsScheming.jpg"},
{Name:"Thousand Winds", Cost:"4UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"58", Image:"/Images/KTK/ThousandWinds.jpg"},
{Name:"Treasure Cruise", Cost:"7U", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"KTK", Number:"59", Image:"/Images/KTK/TreasureCruise.jpg"},
{Name:"Waterwhirl", Cost:"4UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"60", Image:"/Images/KTK/Waterwhirl.jpg"},
{Name:"Weave Fate", Cost:"3U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"61", Image:"/Images/KTK/WeaveFate.jpg"},
{Name:"Wetland Sambar", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"62", Image:"/Images/KTK/WetlandSambar.jpg"},
{Name:"Whirlwind Adept", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"63", Image:"/Images/KTK/WhirlwindAdept.jpg"},
{Name:"Bellowing Saddlebrute", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"64", Image:"/Images/KTK/BellowingSaddlebrute.jpg"},
{Name:"Bitter Revelation", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"7", Sort:"1", Set:"KTK", Number:"65", Image:"/Images/KTK/BitterRevelation.jpg"},
{Name:"Bloodsoaked Champion", Cost:"0B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"66", Image:"/Images/KTK/BloodsoakedChampion.jpg"},
{Name:"Dead Drop", Cost:"9B", Color:["B"], Rarity:"U", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"67", Image:"/Images/KTK/DeadDrop.jpg"},
{Name:"Debilitating Injury", Cost:"1B", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"KTK", Number:"68", Image:"/Images/KTK/DebilitatingInjury.jpg"},
{Name:"Despise", Cost:"0B", Color:["B"], Rarity:"U", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"69", Image:"/Images/KTK/Despise.jpg"},
{Name:"Disowned Ancestor", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"70", Image:"/Images/KTK/DisownedAncestor.jpg"},
{Name:"Dutiful Return", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"71", Image:"/Images/KTK/DutifulReturn.jpg"},
{Name:"Empty the Pits", Cost:"0BBBB", Color:["B"], Rarity:"M", Type:["I"], Rating:"9", Sort:"1", Set:"KTK", Number:"72", Image:"/Images/KTK/EmptythePits.jpg"},
{Name:"Grim Haruspex", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"10", Sort:"1", Set:"KTK", Number:"73", Image:"/Images/KTK/GrimHaruspex.jpg"},
{Name:"Gurmag Swiftwing", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"74", Image:"/Images/KTK/GurmagSwiftwing.jpg"},
{Name:"Kheru Bloodsucker", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"75", Image:"/Images/KTK/KheruBloodsucker.jpg"},
{Name:"Kheru Dreadmaw", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"76", Image:"/Images/KTK/KheruDreadmaw.jpg"},
{Name:"Krumar Bond-Kin", Cost:"3BB", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"77", Image:"/Images/KTK/KrumarBond-Kin.jpg"},
{Name:"Mardu Skullhunter", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"78", Image:"/Images/KTK/MarduSkullhunter.jpg"},
{Name:"Mer-Ek Nightblade", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"79", Image:"/Images/KTK/Mer-EkNightblade.jpg"},
{Name:"Molting Snakeskin", Cost:"0B", Color:["B"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"KTK", Number:"80", Image:"/Images/KTK/MoltingSnakeskin.jpg"},
{Name:"Murderous Cut", Cost:"4B", Color:["B"], Rarity:"U", Type:["I"], Rating:"9", Sort:"1", Set:"KTK", Number:"81", Image:"/Images/KTK/MurderousCut.jpg"},
{Name:"Necropolis Fiend", Cost:"7BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"82", Image:"/Images/KTK/NecropolisFiend.jpg"},
{Name:"Raider's Spoils", Cost:"3B", Color:["B"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"KTK", Number:"83", Image:"/Images/KTK/RaidersSpoils.jpg"},
{Name:"Rakshasa's Secret", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"84", Image:"/Images/KTK/RakshasasSecret.jpg"},
{Name:"Retribution of the Ancients", Cost:"0B", Color:["B"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"KTK", Number:"85", Image:"/Images/KTK/RetributionoftheAncients.jpg"},
{Name:"Rite of the Serpent", Cost:"4BB", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"86", Image:"/Images/KTK/RiteoftheSerpent.jpg"},
{Name:"Rotting Mastodon", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"KTK", Number:"87", Image:"/Images/KTK/RottingMastodon.jpg"},
{Name:"Ruthless Ripper", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"88", Image:"/Images/KTK/RuthlessRipper.jpg"},
{Name:"Shambling Attendants", Cost:"7B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"89", Image:"/Images/KTK/ShamblingAttendants.jpg"},
{Name:"Sidisi's Pet", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"90", Image:"/Images/KTK/SidisisPet.jpg"},
{Name:"Sultai Scavenger", Cost:"5B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"91", Image:"/Images/KTK/SultaiScavenger.jpg"},
{Name:"Swarm of Bloodflies", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"92", Image:"/Images/KTK/SwarmofBloodflies.jpg"},
{Name:"Throttle", Cost:"4B", Color:["B"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"93", Image:"/Images/KTK/Throttle.jpg"},
{Name:"Unyielding Krumar", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"94", Image:"/Images/KTK/UnyieldingKrumar.jpg"},
{Name:"Act of Treason", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"KTK", Number:"95", Image:"/Images/KTK/ActofTreason.jpg"},
{Name:"Ainok Tracker", Cost:"5R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"96", Image:"/Images/KTK/AinokTracker.jpg"},
{Name:"Arc Lightning", Cost:"2R", Color:["R"], Rarity:"U", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"97", Image:"/Images/KTK/ArcLightning.jpg"},
{Name:"Arrow Storm", Cost:"3RR", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"98", Image:"/Images/KTK/ArrowStorm.jpg"},
{Name:"Ashcloud Phoenix", Cost:"2RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"99", Image:"/Images/KTK/AshcloudPhoenix.jpg"},
{Name:"Barrage of Boulders", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"KTK", Number:"100", Image:"/Images/KTK/BarrageofBoulders.jpg"},
{Name:"Bloodfire Expert", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"101", Image:"/Images/KTK/BloodfireExpert.jpg"},
{Name:"Bloodfire Mentor", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"102", Image:"/Images/KTK/BloodfireMentor.jpg"},
{Name:"Bring Low", Cost:"3R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KTK", Number:"103", Image:"/Images/KTK/BringLow.jpg"},
{Name:"Burn Away", Cost:"4R", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"KTK", Number:"104", Image:"/Images/KTK/BurnAway.jpg"},
{Name:"Canyon Lurkers", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"105", Image:"/Images/KTK/CanyonLurkers.jpg"},
{Name:"Crater's Claws", Cost:"0R", Color:["R"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"106", Image:"/Images/KTK/CratersClaws.jpg"},
{Name:"Dragon Grip", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"KTK", Number:"107", Image:"/Images/KTK/DragonGrip.jpg"},
{Name:"Dragon-Style Twins", Cost:"3RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"108", Image:"/Images/KTK/Dragon-StyleTwins.jpg"},
{Name:"Goblinslide", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"KTK", Number:"109", Image:"/Images/KTK/Goblinslide.jpg"},
{Name:"Horde Ambusher", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"110", Image:"/Images/KTK/HordeAmbusher.jpg"},
{Name:"Hordeling Outburst", Cost:"1RR", Color:["R"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KTK", Number:"111", Image:"/Images/KTK/HordelingOutburst.jpg"},
{Name:"Howl of the Horde", Cost:"2R", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"KTK", Number:"112", Image:"/Images/KTK/HowloftheHorde.jpg"},
{Name:"Jeering Instigator", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"113", Image:"/Images/KTK/JeeringInstigator.jpg"},
{Name:"Leaping Master", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"114", Image:"/Images/KTK/LeapingMaster.jpg"},
{Name:"Mardu Blazebringer", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"115", Image:"/Images/KTK/MarduBlazebringer.jpg"},
{Name:"Mardu Heart-Piercer", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"116", Image:"/Images/KTK/MarduHeart-Piercer.jpg"},
{Name:"Mardu Warshrieker", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"117", Image:"/Images/KTK/MarduWarshrieker.jpg"},
{Name:"Monastery Swiftspear", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"118", Image:"/Images/KTK/MonasterySwiftspear.jpg"},
{Name:"Sarkhan, the Dragonspeaker", Cost:"3RR", Color:["R"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"KTK", Number:"119", Image:"/Images/KTK/Sarkhan--theDragonspeaker.jpg"},
{Name:"Shatter", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"KTK", Number:"120", Image:"/Images/KTK/Shatter.jpg"},
{Name:"Summit Prowler", Cost:"2RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"121", Image:"/Images/KTK/SummitProwler.jpg"},
{Name:"Swift Kick", Cost:"3R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"122", Image:"/Images/KTK/SwiftKick.jpg"},
{Name:"Tormenting Voice", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"KTK", Number:"123", Image:"/Images/KTK/TormentingVoice.jpg"},
{Name:"Trumpet Blast", Cost:"2R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"KTK", Number:"124", Image:"/Images/KTK/TrumpetBlast.jpg"},
{Name:"Valley Dasher", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"125", Image:"/Images/KTK/ValleyDasher.jpg"},
{Name:"War-Name Aspirant", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"126", Image:"/Images/KTK/War-NameAspirant.jpg"},
{Name:"Alpine Grizzly", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"127", Image:"/Images/KTK/AlpineGrizzly.jpg"},
{Name:"Archers' Parapet", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"128", Image:"/Images/KTK/ArchersParapet.jpg"},
{Name:"Awaken the Bear", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"129", Image:"/Images/KTK/AwakentheBear.jpg"},
{Name:"Become Immense", Cost:"5G", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"130", Image:"/Images/KTK/BecomeImmense.jpg"},
{Name:"Dragonscale Boon", Cost:"3G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"131", Image:"/Images/KTK/DragonscaleBoon.jpg"},
{Name:"Feed the Clan", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"KTK", Number:"132", Image:"/Images/KTK/FeedtheClan.jpg"},
{Name:"Hardened Scales", Cost:"0G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"KTK", Number:"133", Image:"/Images/KTK/HardenedScales.jpg"},
{Name:"Heir of the Wilds", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"134", Image:"/Images/KTK/HeiroftheWilds.jpg"},
{Name:"Highland Game", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"135", Image:"/Images/KTK/HighlandGame.jpg"},
{Name:"Hooded Hydra", Cost:"0GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"136", Image:"/Images/KTK/HoodedHydra.jpg"},
{Name:"Hooting Mandrills", Cost:"5G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"137", Image:"/Images/KTK/HootingMandrills.jpg"},
{Name:"Incremental Growth", Cost:"3GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"138", Image:"/Images/KTK/IncrementalGrowth.jpg"},
{Name:"Kin-Tree Warden", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"139", Image:"/Images/KTK/Kin-TreeWarden.jpg"},
{Name:"Longshot Squad", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"140", Image:"/Images/KTK/LongshotSquad.jpg"},
{Name:"Meandering Towershell", Cost:"3GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"141", Image:"/Images/KTK/MeanderingTowershell.jpg"},
{Name:"Naturalize", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"KTK", Number:"142", Image:"/Images/KTK/Naturalize.jpg"},
{Name:"Pine Walker", Cost:"3GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"143", Image:"/Images/KTK/PineWalker.jpg"},
{Name:"Rattleclaw Mystic", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"144", Image:"/Images/KTK/RattleclawMystic.jpg"},
{Name:"Roar of Challenge", Cost:"2G", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"KTK", Number:"145", Image:"/Images/KTK/RoarofChallenge.jpg"},
{Name:"Sagu Archer", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"146", Image:"/Images/KTK/SaguArcher.jpg"},
{Name:"Savage Punch", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"KTK", Number:"147", Image:"/Images/KTK/SavagePunch.jpg"},
{Name:"Scout the Borders", Cost:"2G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"KTK", Number:"148", Image:"/Images/KTK/ScouttheBorders.jpg"},
{Name:"See the Unwritten", Cost:"4GG", Color:["G"], Rarity:"M", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"149", Image:"/Images/KTK/SeetheUnwritten.jpg"},
{Name:"Seek the Horizon", Cost:"3G", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"KTK", Number:"150", Image:"/Images/KTK/SeektheHorizon.jpg"},
{Name:"Smoke Teller", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"KTK", Number:"151", Image:"/Images/KTK/SmokeTeller.jpg"},
{Name:"Sultai Flayer", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"152", Image:"/Images/KTK/SultaiFlayer.jpg"},
{Name:"Temur Charger", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"153", Image:"/Images/KTK/TemurCharger.jpg"},
{Name:"Trail of Mystery", Cost:"1G", Color:["G"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"KTK", Number:"154", Image:"/Images/KTK/TrailofMystery.jpg"},
{Name:"Tusked Colossodon", Cost:"4GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"155", Image:"/Images/KTK/TuskedColossodon.jpg"},
{Name:"Tuskguard Captain", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"156", Image:"/Images/KTK/TuskguardCaptain.jpg"},
{Name:"Windstorm", Cost:"0G", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"KTK", Number:"157", Image:"/Images/KTK/Windstorm.jpg"},
{Name:"Woolly Loxodon", Cost:"5GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"158", Image:"/Images/KTK/WoollyLoxodon.jpg"},
{Name:"Abomination of Gudul", Cost:"3BGU", Color:["B","G","U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"159", Image:"/Images/KTK/AbominationofGudul.jpg"},
{Name:"Abzan Ascendancy", Cost:"0WBG", Color:["W","B","G"], Rarity:"R", Type:["E"], Rating:"9", Sort:"1", Set:"KTK", Number:"160", Image:"/Images/KTK/AbzanAscendancy.jpg"},
{Name:"Abzan Charm", Cost:"0WBG", Color:["W","B","G"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"161", Image:"/Images/KTK/AbzanCharm.jpg"},
{Name:"Abzan Guide", Cost:"3WBG", Color:["W","B","G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"162", Image:"/Images/KTK/AbzanGuide.jpg"},
{Name:"Anafenza, the Foremost", Cost:"0WBG", Color:["W","B","G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"163", Image:"/Images/KTK/Anafenza--theForemost.jpg"},
{Name:"Ankle Shanker", Cost:"2RWB", Color:["R","W","B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"164", Image:"/Images/KTK/AnkleShanker.jpg"},
{Name:"Armament Corps", Cost:"2WBG", Color:["W","B","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"165", Image:"/Images/KTK/ArmamentCorps.jpg"},
{Name:"Avalanche Tusker", Cost:"2GUR", Color:["G","U","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"166", Image:"/Images/KTK/AvalancheTusker.jpg"},
{Name:"Bear's Companion", Cost:"2GUR", Color:["G","U","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"167", Image:"/Images/KTK/BearsCompanion.jpg"},
{Name:"Butcher of the Horde", Cost:"1RWB", Color:["R","W","B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"168", Image:"/Images/KTK/ButcheroftheHorde.jpg"},
{Name:"Chief of the Edge", Cost:"0WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"169", Image:"/Images/KTK/ChiefoftheEdge.jpg"},
{Name:"Chief of the Scale", Cost:"0WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"170", Image:"/Images/KTK/ChiefoftheScale.jpg"},
{Name:"Crackling Doom", Cost:"0RWB", Color:["R","W","B"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"KTK", Number:"171", Image:"/Images/KTK/CracklingDoom.jpg"},
{Name:"Death Frenzy", Cost:"3BG", Color:["B","G","U"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"KTK", Number:"172", Image:"/Images/KTK/DeathFrenzy.jpg"},
{Name:"Deflecting Palm", Cost:"0RW", Color:["R","W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"KTK", Number:"173", Image:"/Images/KTK/DeflectingPalm.jpg"},
{Name:"Duneblast", Cost:"4WBG", Color:["W","B","G"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"174", Image:"/Images/KTK/Duneblast.jpg"},
{Name:"Efreet Weaponmaster", Cost:"3URW", Color:["U","R","W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"175", Image:"/Images/KTK/EfreetWeaponmaster.jpg"},
{Name:"Flying Crane Technique", Cost:"3URW", Color:["U","R","W"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"176", Image:"/Images/KTK/FlyingCraneTechnique.jpg"},
{Name:"Highspire Mantis", Cost:"2RW", Color:["R","W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"177", Image:"/Images/KTK/HighspireMantis.jpg"},
{Name:"Icefeather Aven", Cost:"0GU", Color:["G","U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"178", Image:"/Images/KTK/IcefeatherAven.jpg"},
{Name:"Ivorytusk Fortress", Cost:"2WBG", Color:["W","B","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"179", Image:"/Images/KTK/IvorytuskFortress.jpg"},
{Name:"Jeskai Ascendancy", Cost:"0URW", Color:["U","R","W"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"KTK", Number:"180", Image:"/Images/KTK/JeskaiAscendancy.jpg"},
{Name:"Jeskai Charm", Cost:"0URW", Color:["U","R","W"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"181", Image:"/Images/KTK/JeskaiCharm.jpg"},
{Name:"Kheru Lich Lord", Cost:"3BGU", Color:["B","G","U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"182", Image:"/Images/KTK/KheruLichLord.jpg"},
{Name:"Kin-Tree Invocation", Cost:"0BG", Color:["B","G"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"KTK", Number:"183", Image:"/Images/KTK/Kin-TreeInvocation.jpg"},
{Name:"Mantis Rider", Cost:"0URW", Color:["U","R","W"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"184", Image:"/Images/KTK/MantisRider.jpg"},
{Name:"Mardu Ascendancy", Cost:"0RWB", Color:["R","W","B"], Rarity:"R", Type:["E"], Rating:"9", Sort:"1", Set:"KTK", Number:"185", Image:"/Images/KTK/MarduAscendancy.jpg"},
{Name:"Mardu Charm", Cost:"0RWB", Color:["R","W","B"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"186", Image:"/Images/KTK/MarduCharm.jpg"},
{Name:"Mardu Roughrider", Cost:"2RWB", Color:["R","W","B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"KTK", Number:"187", Image:"/Images/KTK/MarduRoughrider.jpg"},
{Name:"Master the Way", Cost:"3UR", Color:["U","R"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"KTK", Number:"188", Image:"/Images/KTK/MastertheWay.jpg"},
{Name:"Mindswipe", Cost:"0UR", Color:["U","R"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"KTK", Number:"189", Image:"/Images/KTK/Mindswipe.jpg"},
{Name:"Narset, Enlightened Master", Cost:"3URW", Color:["U","R","W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"190", Image:"/Images/KTK/Narset--EnlightenedMaster.jpg"},
{Name:"Ponyback Brigade", Cost:"3RWB", Color:["R","W","B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"191", Image:"/Images/KTK/PonybackBrigade.jpg"},
{Name:"Rakshasa Deathdealer", Cost:"0BG", Color:["B","G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"192", Image:"/Images/KTK/RakshasaDeathdealer.jpg"},
{Name:"Rakshasa Vizier", Cost:"2BGU", Color:["B","G","U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"KTK", Number:"193", Image:"/Images/KTK/RakshasaVizier.jpg"},
{Name:"Ride Down", Cost:"0RW", Color:["R","W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"KTK", Number:"194", Image:"/Images/KTK/RideDown.jpg"},
{Name:"Sage of the Inward Eye", Cost:"2URW", Color:["U","R","W"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"195", Image:"/Images/KTK/SageoftheInwardEye.jpg"},
{Name:"Sagu Mauler", Cost:"4GU", Color:["G","U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"KTK", Number:"196", Image:"/Images/KTK/SaguMauler.jpg"},
{Name:"Savage Knuckleblade", Cost:"0GUR", Color:["G","U","R"], Rarity:"R", Type:["C"], Rating:"10", Sort:"1", Set:"KTK", Number:"197", Image:"/Images/KTK/SavageKnuckleblade.jpg"},
{Name:"Secret Plans", Cost:"0GU", Color:["G","U"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"KTK", Number:"198", Image:"/Images/KTK/SecretPlans.jpg"},
{Name:"Sidisi, Brood Tyrant", Cost:"1BGU", Color:["B","G","U"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"KTK", Number:"199", Image:"/Images/KTK/Sidisi--BroodTyrant.jpg"},
{Name:"Siege Rhino", Cost:"1WBG", Color:["W","B","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"KTK", Number:"200", Image:"/Images/KTK/SiegeRhino.jpg"},
{Name:"Snowhorn Rider", Cost:"3GUR", Color:["G","U","R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"KTK", Number:"201", Image:"/Images/KTK/SnowhornRider.jpg"},
{Name:"Sorin, Solemn Visitor", Cost:"2WB", Color:["W","B"], Rarity:"M", Type:["P"], Rating:"10", Sort:"1", Set:"KTK", Number:"202", Image:"/Images/KTK/Sorin--SolemnVisitor.jpg"},
{Name:"Sultai Ascendancy", Cost:"0GBU", Color:["G","B","U"], Rarity:"R", Type:["E"], Rating:"9", Sort:"1", Set:"KTK", Number:"203", Image:"/Images/KTK/SultaiAscendancy.jpg"},
{Name:"Sultai Charm", Cost:"0BGU", Color:["B","G","U"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"204", Image:"/Images/KTK/SultaiCharm.jpg"},
{Name:"Sultai Soothsayer", Cost:"2BGU", Color:["B","G","U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"KTK", Number:"205", Image:"/Images/KTK/SultaiSoothsayer.jpg"},
{Name:"Surrak Dragonclaw", Cost:"3GUR", Color:["G","U","R"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"KTK", Number:"206", Image:"/Images/KTK/SurrakDragonclaw.jpg"},
{Name:"Temur Ascendancy", Cost:"0GUR", Color:["G","U","R"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"KTK", Number:"207", Image:"/Images/KTK/TemurAscendancy.jpg"},
{Name:"Temur Charm", Cost:"0GUR", Color:["G","U","R"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"KTK", Number:"208", Image:"/Images/KTK/TemurCharm.jpg"},
{Name:"Trap Essence", Cost:"0GUR", Color:["G","U","R"], Rarity:"R", Type:["I"], Rating:"7", Sort:"1", Set:"KTK", Number:"209", Image:"/Images/KTK/TrapEssence.jpg"},
{Name:"Utter End", Cost:"2WB", Color:["W","B"], Rarity:"R", Type:["I"], Rating:"9", Sort:"1", Set:"KTK", Number:"210", Image:"/Images/KTK/UtterEnd.jpg"},
{Name:"Villainous Wealth", Cost:"0BGU", Color:["B","G","U"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"KTK", Number:"211", Image:"/Images/KTK/VillainousWealth.jpg"},
{Name:"Warden of the Eye", Cost:"2URW", Color:["U","R","W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"KTK", Number:"212", Image:"/Images/KTK/WardenoftheEye.jpg"},
{Name:"Winterflame", Cost:"1UR", Color:["U","R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"KTK", Number:"213", Image:"/Images/KTK/Winterflame.jpg"},
{Name:"Zurgo Helmsmasher", Cost:"2RWB", Color:["R","W","B"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"KTK", Number:"214", Image:"/Images/KTK/ZurgoHelmsmasher.jpg"},
{Name:"Abzan Banner", Cost:"3", Color:["W","B","G"], Rarity:"C", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"215", Image:"/Images/KTK/AbzanBanner.jpg"},
{Name:"Altar of the Brood", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"216", Image:"/Images/KTK/AltaroftheBrood.jpg"},
{Name:"Briber's Purse", Cost:"0", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KTK", Number:"217", Image:"/Images/KTK/BribersPurse.jpg"},
{Name:"Cranial Archive", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KTK", Number:"218", Image:"/Images/KTK/CranialArchive.jpg"},
{Name:"Dragon Throne of Tarkir", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"KTK", Number:"219", Image:"/Images/KTK/DragonThroneofTarkir.jpg"},
{Name:"Ghostfire Blade", Cost:"1", Color:["C"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"KTK", Number:"220", Image:"/Images/KTK/GhostfireBlade.jpg"},
{Name:"Heart-Piercer Bow", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"KTK", Number:"221", Image:"/Images/KTK/Heart-PiercerBow.jpg"},
{Name:"Jeskai Banner", Cost:"3", Color:["U","R","W"], Rarity:"C", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"222", Image:"/Images/KTK/JeskaiBanner.jpg"},
{Name:"Lens of Clarity", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"KTK", Number:"223", Image:"/Images/KTK/LensofClarity.jpg"},
{Name:"Mardu Banner", Cost:"3", Color:["R","W","B"], Rarity:"C", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"224", Image:"/Images/KTK/MarduBanner.jpg"},
{Name:"Sultai Banner", Cost:"3", Color:["B","G","U"], Rarity:"C", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"225", Image:"/Images/KTK/SultaiBanner.jpg"},
{Name:"Temur Banner", Cost:"3", Color:["G","U","R"], Rarity:"C", Type:["A"], Rating:"5", Sort:"1", Set:"KTK", Number:"226", Image:"/Images/KTK/TemurBanner.jpg"},
{Name:"Ugin's Nexus", Cost:"5", Color:["C"], Rarity:"M", Type:["A"], Rating:"6", Sort:"1", Set:"KTK", Number:"227", Image:"/Images/KTK/UginsNexus.jpg"},
{Name:"Witness of the Ages", Cost:"6", Color:["C"], Rarity:"U", Type:["C","A"], Rating:"5", Sort:"1", Set:"KTK", Number:"228", Image:"/Images/KTK/WitnessoftheAges.jpg"},
{Name:"Bloodfell Caves", Cost:"0", Color:["B","R"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"229", Image:"/Images/KTK/BloodfellCaves.jpg"},
{Name:"Bloodstained Mire", Cost:"0", Color:["B","R"], Rarity:"R", Type:["L"], Rating:"9", Sort:"1", Set:"KTK", Number:"230", Image:"/Images/KTK/BloodstainedMire.jpg"},
{Name:"Blossoming Sands", Cost:"0", Color:["G","W"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"231", Image:"/Images/KTK/BlossomingSands.jpg"},
{Name:"Dismal Backwater", Cost:"0", Color:["B","U"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"232", Image:"/Images/KTK/DismalBackwater.jpg"},
{Name:"Flooded Strand", Cost:"0", Color:["W","U"], Rarity:"R", Type:["L"], Rating:"9", Sort:"1", Set:"KTK", Number:"233", Image:"/Images/KTK/FloodedStrand.jpg"},
{Name:"Frontier Bivouac", Cost:"0", Color:["G","U","R"], Rarity:"U", Type:["L"], Rating:"8", Sort:"1", Set:"KTK", Number:"234", Image:"/Images/KTK/FrontierBivouac.jpg"},
{Name:"Jungle Hollow", Cost:"0", Color:["B","G"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"235", Image:"/Images/KTK/JungleHollow.jpg"},
{Name:"Mystic Monastery", Cost:"0", Color:["U","R","W"], Rarity:"U", Type:["L"], Rating:"8", Sort:"1", Set:"KTK", Number:"236", Image:"/Images/KTK/MysticMonastery.jpg"},
{Name:"Nomad Outpost", Cost:"0", Color:["R","W","B"], Rarity:"U", Type:["L"], Rating:"8", Sort:"1", Set:"KTK", Number:"237", Image:"/Images/KTK/NomadOutpost.jpg"},
{Name:"Opulent Palace", Cost:"0", Color:["B","G","U"], Rarity:"U", Type:["L"], Rating:"8", Sort:"1", Set:"KTK", Number:"238", Image:"/Images/KTK/OpulentPalace.jpg"},
{Name:"Polluted Delta", Cost:"0", Color:["B","U"], Rarity:"R", Type:["L"], Rating:"9", Sort:"1", Set:"KTK", Number:"239", Image:"/Images/KTK/PollutedDelta.jpg"},
{Name:"Rugged Highlands", Cost:"0", Color:["R","G"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"240", Image:"/Images/KTK/RuggedHighlands.jpg"},
{Name:"Sandsteppe Citadel", Cost:"0", Color:["W","B","G"], Rarity:"U", Type:["L"], Rating:"8", Sort:"1", Set:"KTK", Number:"241", Image:"/Images/KTK/SandsteppeCitadel.jpg"},
{Name:"Scoured Barrens", Cost:"0", Color:["B","W"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"242", Image:"/Images/KTK/ScouredBarrens.jpg"},
{Name:"Swiftwater Cliffs", Cost:"0", Color:["R","U"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"243", Image:"/Images/KTK/SwiftwaterCliffs.jpg"},
{Name:"Thornwood Falls", Cost:"0", Color:["G","U"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"244", Image:"/Images/KTK/ThornwoodFalls.jpg"},
{Name:"Tomb of the Spirit Dragon", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"1", Sort:"1", Set:"KTK", Number:"245", Image:"/Images/KTK/TomboftheSpiritDragon.jpg"},
{Name:"Tranquil Cove", Cost:"0", Color:["W","U"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"246", Image:"/Images/KTK/TranquilCove.jpg"},
{Name:"Wind-Scarred Crag", Cost:"0", Color:["R","W"], Rarity:"C", Type:["L"], Rating:"7", Sort:"1", Set:"KTK", Number:"247", Image:"/Images/KTK/Wind-ScarredCrag.jpg"},
{Name:"Windswept Heath", Cost:"0", Color:["W","G"], Rarity:"R", Type:["L"], Rating:"9", Sort:"1", Set:"KTK", Number:"248", Image:"/Images/KTK/WindsweptHeath.jpg"},
{Name:"Wooded Foothills", Cost:"0", Color:["R","G"], Rarity:"R", Type:["L"], Rating:"9", Sort:"1", Set:"KTK", Number:"249", Image:"/Images/KTK/WoodedFoothills.jpg"},
];
var M15 = [
{Name:"Ajani Steadfast", Cost:"3W", Color:["W"], Rarity:"M", Type:["P"], Rating:"10", Sort:"", Set:"M15", Number:"1", Image:"/Images/M15/AjaniSteadfast.jpg"},
{Name:"Ajani's Pridemate", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"2", Image:"/Images/M15/AjanisPridemate.jpg"},
{Name:"Avacyn, Guardian Angel", Cost:"2WWW", Color:["W"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"3", Image:"/Images/M15/Avacyn--GuardianAngel.jpg"},
{Name:"Battle Mastery", Cost:"2W", Color:["W"], Rarity:"U", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"4", Image:"/Images/M15/BattleMastery.jpg"},
{Name:"Boonweaver Giant", Cost:"6W", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"5", Image:"/Images/M15/BoonweaverGiant.jpg"},
{Name:"Congregate", Cost:"3W", Color:["W"], Rarity:"U", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"6", Image:"/Images/M15/Congregate.jpg"},
{Name:"Constricting Sliver", Cost:"5W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"7", Image:"/Images/M15/ConstrictingSliver.jpg"},
{Name:"Dauntless River Marshal", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"8", Image:"/Images/M15/DauntlessRiverMarshal.jpg"},
{Name:"Devouring Light", Cost:"1WW", Color:["W"], Rarity:"U", Type:["I"], Rating:"7", Sort:"", Set:"M15", Number:"9", Image:"/Images/M15/DevouringLight.jpg"},
{Name:"Divine Favor", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"10", Image:"/Images/M15/DivineFavor.jpg"},
{Name:"Ephemeral Shields", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"11", Image:"/Images/M15/EphemeralShields.jpg"},
{Name:"First Response", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"", Set:"M15", Number:"12", Image:"/Images/M15/FirstResponse.jpg"},
{Name:"Geist of the Moors", Cost:"1WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"13", Image:"/Images/M15/GeistoftheMoors.jpg"},
{Name:"Heliods Pilgrim", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"14", Image:"/Images/M15/HeliodsPilgrim.jpg"},
{Name:"Hushwing Gryff", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"15", Image:"/Images/M15/HushwingGryff.jpg"},
{Name:"Kinsbaile Skirmisher", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"16", Image:"/Images/M15/KinsbaileSkirmisher.jpg"},
{Name:"Marked by Honor", Cost:"3W", Color:["W"], Rarity:"C", Type:["E"], Rating:"3", Sort:"", Set:"M15", Number:"17", Image:"/Images/M15/MarkedbyHonor.jpg"},
{Name:"Mass Calcify", Cost:"5WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"5", Sort:"", Set:"M15", Number:"18", Image:"/Images/M15/MassCalcify.jpg"},
{Name:"Meditation Puzzle", Cost:"3WW", Color:["W"], Rarity:"C", Type:["I"], Rating:"1", Sort:"", Set:"M15", Number:"19", Image:"/Images/M15/MeditationPuzzle.jpg"},
{Name:"Midnight Guard", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"", Set:"M15", Number:"20", Image:"/Images/M15/MidnightGuard.jpg"},
{Name:"Oppressive Rays", Cost:"0W", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"21", Image:"/Images/M15/OppressiveRays.jpg"},
{Name:"Oreskos Swiftclaw", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"22", Image:"/Images/M15/OreskosSwiftclaw.jpg"},
{Name:"Paragon of New Dawns", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"23", Image:"/Images/M15/ParagonofNewDawns.jpg"},
{Name:"Pillar of Light", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"24", Image:"/Images/M15/PillarofLight.jpg"},
{Name:"Preeminent Captain", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"25", Image:"/Images/M15/PreeminentCaptain.jpg"},
{Name:"Raise the Alarm", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"26", Image:"/Images/M15/RaisetheAlarm.jpg"},
{Name:"Razorfoot Griffin", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"27", Image:"/Images/M15/RazorfootGriffin.jpg"},
{Name:"Resolute Archangel", Cost:"5WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"28", Image:"/Images/M15/ResoluteArchangel.jpg"},
{Name:"Return to the Ranks", Cost:"0WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"7", Sort:"", Set:"M15", Number:"29", Image:"/Images/M15/ReturntotheRanks.jpg"},
{Name:"Sanctified Charge", Cost:"4W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"30", Image:"/Images/M15/SanctifiedCharge.jpg"},
{Name:"Selfless Cathar", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"31", Image:"/Images/M15/SelflessCathar.jpg"},
{Name:"Seraph of the Masses", Cost:"5WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"32", Image:"/Images/M15/SeraphoftheMasses.jpg"},
{Name:"Solemn Offering", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"5", Sort:"", Set:"M15", Number:"33", Image:"/Images/M15/SolemnOffering.jpg"},
{Name:"Soul of Theros", Cost:"4WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"34", Image:"/Images/M15/SoulofTheros.jpg"},
{Name:"Soulmender", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"35", Image:"/Images/M15/Soulmender.jpg"},
{Name:"Spectral Ward", Cost:"3WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"9", Sort:"", Set:"M15", Number:"36", Image:"/Images/M15/SpectralWard.jpg"},
{Name:"Spirit Bonds", Cost:"1W", Color:["W"], Rarity:"R", Type:["E"], Rating:"9", Sort:"", Set:"M15", Number:"37", Image:"/Images/M15/SpiritBonds.jpg"},
{Name:"Sungrace Pegasus", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"38", Image:"/Images/M15/SungracePegasus.jpg"},
{Name:"Tireless Missionaries", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"", Set:"M15", Number:"39", Image:"/Images/M15/TirelessMissionaries.jpg"},
{Name:"Triplicate Spirits", Cost:"4WW", Color:["W"], Rarity:"C", Type:["S"], Rating:"5", Sort:"", Set:"M15", Number:"40", Image:"/Images/M15/TriplicateSpirits.jpg"},
{Name:"Wall of Essence", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"41", Image:"/Images/M15/WallofEssence.jpg"},
{Name:"Warden of the Beyond", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"42", Image:"/Images/M15/WardenoftheBeyond.jpg"},
{Name:"Aeronaut Tinkerer", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"43", Image:"/Images/M15/AeronautTinkerer.jpg"},
{Name:"AEtherspouts", Cost:"3UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"44", Image:"/Images/M15/AEtherspouts.jpg"},
{Name:"Amphin Pathmage", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"45", Image:"/Images/M15/AmphinPathmage.jpg"},
{Name:"Chasm Skulker", Cost:"2U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"46", Image:"/Images/M15/ChasmSkulker.jpg"},
{Name:"Chief Engineer", Cost:"1U", Color:["U"], Rarity:"R", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"47", Image:"/Images/M15/ChiefEngineer.jpg"},
{Name:"Chronostutter", Cost:"5U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"48", Image:"/Images/M15/Chronostutter.jpg"},
{Name:"Coral Barrier", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"49", Image:"/Images/M15/CoralBarrier.jpg"},
{Name:"Diffusion Sliver", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"3", Sort:"", Set:"M15", Number:"50", Image:"/Images/M15/DiffusionSliver.jpg"},
{Name:"Dissipate", Cost:"1UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"51", Image:"/Images/M15/Dissipate.jpg"},
{Name:"Divination", Cost:"2U", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"52", Image:"/Images/M15/Divination.jpg"},
{Name:"Encrust", Cost:"1UU", Color:["U"], Rarity:"C", Type:["E"], Rating:"7", Sort:"", Set:"M15", Number:"53", Image:"/Images/M15/Encrust.jpg"},
{Name:"Ensoul Artifact", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"54", Image:"/Images/M15/EnsoulArtifact.jpg"},
{Name:"Frost Lynx", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"55", Image:"/Images/M15/FrostLynx.jpg"},
{Name:"Fugitive Wizard", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"1", Sort:"", Set:"M15", Number:"56", Image:"/Images/M15/FugitiveWizard.jpg"},
{Name:"Glacial Crasher", Cost:"4UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"57", Image:"/Images/M15/GlacialCrasher.jpg"},
{Name:"Hydrosurge", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"", Set:"M15", Number:"58", Image:"/Images/M15/Hydrosurge.jpg"},
{Name:"Illusory Angel", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"59", Image:"/Images/M15/IllusoryAngel.jpg"},
{Name:"Into the Void", Cost:"3U", Color:["U"], Rarity:"U", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"60", Image:"/Images/M15/IntotheVoid.jpg"},
{Name:"Invisibility", Cost:"0UU", Color:["U"], Rarity:"C", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"61", Image:"/Images/M15/Invisibility.jpg"},
{Name:"Jace, the Living Guildpact", Cost:"2UU", Color:["U"], Rarity:"M", Type:["P"], Rating:"10", Sort:"", Set:"M15", Number:"62", Image:"/Images/M15/Jace--theLivingGuildpact.jpg"},
{Name:"Jace's Ingenuity", Cost:"3UU", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"", Set:"M15", Number:"63", Image:"/Images/M15/JacesIngenuity.jpg"},
{Name:"Jalira, Master Polymorphist", Cost:"3U", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"64", Image:"/Images/M15/Jalira--MasterPolymorphist.jpg"},
{Name:"Jorubai Murk Lurker", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"65", Image:"/Images/M15/JorubaiMurkLurker.jpg"},
{Name:"Kapsho Kitefins", Cost:"4UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"66", Image:"/Images/M15/KapshoKitefins.jpg"},
{Name:"Master of Predicaments", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"67", Image:"/Images/M15/MasterofPredicaments.jpg"},
{Name:"Mercurial Pretender", Cost:"4U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"68", Image:"/Images/M15/MercurialPretender.jpg"},
{Name:"Military Intelligence", Cost:"1U", Color:["U"], Rarity:"U", Type:["E"], Rating:"7", Sort:"", Set:"M15", Number:"69", Image:"/Images/M15/MilitaryIntelligence.jpg"},
{Name:"Mind Sculpt", Cost:"1U", Color:["U"], Rarity:"C", Type:["S"], Rating:"2", Sort:"", Set:"M15", Number:"70", Image:"/Images/M15/MindSculpt.jpg"},
{Name:"Negate", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"71", Image:"/Images/M15/Negate.jpg"},
{Name:"Nimbus of the Isles", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"72", Image:"/Images/M15/NimbusoftheIsles.jpg"},
{Name:"Paragon of Gathering Mists", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"73", Image:"/Images/M15/ParagonofGatheringMists.jpg"},
{Name:"Peel from Reality", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"74", Image:"/Images/M15/PeelfromReality.jpg"},
{Name:"Polymorphist's Jest", Cost:"1UU", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"75", Image:"/Images/M15/PolymorphistsJest.jpg"},
{Name:"Quickling", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"76", Image:"/Images/M15/Quickling.jpg"},
{Name:"Research Assistant", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"77", Image:"/Images/M15/ResearchAssistant.jpg"},
{Name:"Soul of Ravnica", Cost:"4UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"78", Image:"/Images/M15/SoulofRavnica.jpg"},
{Name:"Statute of Denial", Cost:"2UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"79", Image:"/Images/M15/StatuteofDenial.jpg"},
{Name:"Stormtide Leviathan", Cost:"5UUU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"80", Image:"/Images/M15/StormtideLeviathan.jpg"},
{Name:"Turn to Frog", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"81", Image:"/Images/M15/TurntoFrog.jpg"},
{Name:"Void Snare", Cost:"0U", Color:["U"], Rarity:"C", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"82", Image:"/Images/M15/VoidSnare.jpg"},
{Name:"Wall of Frost", Cost:"1UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"83", Image:"/Images/M15/WallofFrost.jpg"},
{Name:"Welkin Tern", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"84", Image:"/Images/M15/WelkinTern.jpg"},
{Name:"Accursed Spirit", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"85", Image:"/Images/M15/AccursedSpirit.jpg"},
{Name:"Black Cat", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"86", Image:"/Images/M15/BlackCat.jpg"},
{Name:"Blood Host", Cost:"3BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"87", Image:"/Images/M15/BloodHost.jpg"},
{Name:"Carrion Crow", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"88", Image:"/Images/M15/CarrionCrow.jpg"},
{Name:"Caustic Tar", Cost:"4BB", Color:["B"], Rarity:"U", Type:["E"], Rating:"3", Sort:"", Set:"M15", Number:"89", Image:"/Images/M15/CausticTar.jpg"},
{Name:"Child of Night", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"90", Image:"/Images/M15/ChildofNight.jpg"},
{Name:"Covenant of Blood", Cost:"6B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"", Set:"M15", Number:"91", Image:"/Images/M15/CovenantofBlood.jpg"},
{Name:"Crippling Blight", Cost:"0B", Color:["B"], Rarity:"C", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"92", Image:"/Images/M15/CripplingBlight.jpg"},
{Name:"Cruel Sadist", Cost:"0B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"93", Image:"/Images/M15/CruelSadist.jpg"},
{Name:"Endless Obedience", Cost:"4BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"94", Image:"/Images/M15/EndlessObedience.jpg"},
{Name:"Eternal Thirst", Cost:"1B", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"95", Image:"/Images/M15/EternalThirst.jpg"},
{Name:"Feast on the Fallen", Cost:"2B", Color:["B"], Rarity:"U", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"96", Image:"/Images/M15/FeastontheFallen.jpg"},
{Name:"Festergloom", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"", Set:"M15", Number:"97", Image:"/Images/M15/Festergloom.jpg"},
{Name:"Flesh to Dust", Cost:"3BB", Color:["B"], Rarity:"C", Type:["I"], Rating:"7", Sort:"", Set:"M15", Number:"98", Image:"/Images/M15/FleshtoDust.jpg"},
{Name:"Gravedigger", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"99", Image:"/Images/M15/Gravedigger.jpg"},
{Name:"In Garruk's Wake", Cost:"7BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"4", Sort:"", Set:"M15", Number:"100", Image:"/Images/M15/InGarruksWake.jpg"},
{Name:"Indulgent Tormentor", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"101", Image:"/Images/M15/IndulgentTormentor.jpg"},
{Name:"Leeching Sliver", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"102", Image:"/Images/M15/LeechingSliver.jpg"},
{Name:"Liliana Vess", Cost:"3BB", Color:["B"], Rarity:"M", Type:["P"], Rating:"10", Sort:"", Set:"M15", Number:"103", Image:"/Images/M15/LilianaVess.jpg"},
{Name:"Mind Rot", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"", Set:"M15", Number:"104", Image:"/Images/M15/MindRot.jpg"},
{Name:"Necrobite", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"7", Sort:"", Set:"M15", Number:"105", Image:"/Images/M15/Necrobite.jpg"},
{Name:"Necrogen Scudder", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"106", Image:"/Images/M15/NecrogenScudder.jpg"},
{Name:"Necromancer's Assistant", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"107", Image:"/Images/M15/NecromancersAssistant.jpg"},
{Name:"Necromancer's Stockpile", Cost:"1B", Color:["B"], Rarity:"R", Type:["E"], Rating:"3", Sort:"", Set:"M15", Number:"108", Image:"/Images/M15/NecromancersStockpile.jpg"},
{Name:"Nightfire Giant", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"109", Image:"/Images/M15/NightfireGiant.jpg"},
{Name:"Ob Nixilis, Unshackled", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"110", Image:"/Images/M15/ObNixilis--Unshackled.jpg"},
{Name:"Paragon of Open Graves", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"111", Image:"/Images/M15/ParagonofOpenGraves.jpg"},
{Name:"Rotfeaster Maggot", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"112", Image:"/Images/M15/RotfeasterMaggot.jpg"},
{Name:"Shadowcloak Vampire", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"113", Image:"/Images/M15/ShadowcloakVampire.jpg"},
{Name:"Sign in Blood", Cost:"0BB", Color:["B"], Rarity:"C", Type:["S"], Rating:"7", Sort:"", Set:"M15", Number:"114", Image:"/Images/M15/SigninBlood.jpg"},
{Name:"Soul of Innistrad", Cost:"4BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"115", Image:"/Images/M15/SoulofInnistrad.jpg"},
{Name:"Stab Wound", Cost:"2B", Color:["B"], Rarity:"U", Type:["E"], Rating:"4", Sort:"", Set:"M15", Number:"116", Image:"/Images/M15/StabWound.jpg"},
{Name:"Stain the Mind", Cost:"4B", Color:["B"], Rarity:"R", Type:["S"], Rating:"4", Sort:"", Set:"M15", Number:"117", Image:"/Images/M15/StaintheMind.jpg"},
{Name:"Typhoid Rats", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"118", Image:"/Images/M15/TyphoidRats.jpg"},
{Name:"Ulcerate", Cost:"0B", Color:["B"], Rarity:"U", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"119", Image:"/Images/M15/Ulcerate.jpg"},
{Name:"Unmake the Graves", Cost:"4B", Color:["B"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"120", Image:"/Images/M15/UnmaketheGraves.jpg"},
{Name:"Wall of Limbs", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"121", Image:"/Images/M15/WallofLimbs.jpg"},
{Name:"Waste Not", Cost:"1B", Color:["B"], Rarity:"R", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"122", Image:"/Images/M15/WasteNot.jpg"},
{Name:"Witch's Familiar", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"", Set:"M15", Number:"123", Image:"/Images/M15/WitchsFamiliar.jpg"},
{Name:"Xathrid Slyblade", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"124", Image:"/Images/M15/XathridSlyblade.jpg"},
{Name:"Zof Shade", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"125", Image:"/Images/M15/ZofShade.jpg"},
{Name:"Act on Impulse", Cost:"2R", Color:["R"], Rarity:"U", Type:["S"], Rating:"7", Sort:"", Set:"M15", Number:"126", Image:"/Images/M15/ActonImpulse.jpg"},
{Name:"Aggressive Mining", Cost:"3R", Color:["R"], Rarity:"R", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"127", Image:"/Images/M15/AggressiveMining.jpg"},
{Name:"Altac Bloodseeker", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"128", Image:"/Images/M15/AltacBloodseeker.jpg"},
{Name:"Belligerent Sliver", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"129", Image:"/Images/M15/BelligerentSliver.jpg"},
{Name:"Blastfire Bolt", Cost:"5R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"130", Image:"/Images/M15/BlastfireBolt.jpg"},
{Name:"Borderland Marauder", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"131", Image:"/Images/M15/BorderlandMarauder.jpg"},
{Name:"Brood Keeper", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"132", Image:"/Images/M15/BroodKeeper.jpg"},
{Name:"Burning Anger", Cost:"4R", Color:["R"], Rarity:"R", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"133", Image:"/Images/M15/BurningAnger.jpg"},
{Name:"Chandra, Pyromaster", Cost:"2RR", Color:["R"], Rarity:"M", Type:["P"], Rating:"10", Sort:"", Set:"M15", Number:"134", Image:"/Images/M15/Chandra--Pyromaster.jpg"},
{Name:"Circle of Flame", Cost:"1R", Color:["R"], Rarity:"U", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"135", Image:"/Images/M15/CircleofFlame.jpg"},
{Name:"Clear a Path", Cost:"0R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"", Set:"M15", Number:"136", Image:"/Images/M15/ClearaPath.jpg"},
{Name:"Cone of Flame", Cost:"3RR", Color:["R"], Rarity:"U", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"137", Image:"/Images/M15/ConeofFlame.jpg"},
{Name:"Crowd's Favor", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"138", Image:"/Images/M15/CrowdsFavor.jpg"},
{Name:"Crucible of Fire", Cost:"3R", Color:["R"], Rarity:"R", Type:["E"], Rating:"4", Sort:"", Set:"M15", Number:"139", Image:"/Images/M15/CrucibleofFire.jpg"},
{Name:"Forge Devil", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"140", Image:"/Images/M15/ForgeDevil.jpg"},
{Name:"Foundry Street Denizen", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"141", Image:"/Images/M15/FoundryStreetDenizen.jpg"},
{Name:"Frenzied Goblin", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"142", Image:"/Images/M15/FrenziedGoblin.jpg"},
{Name:"Generator Servant", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"143", Image:"/Images/M15/GeneratorServant.jpg"},
{Name:"Goblin Kaboomist", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"144", Image:"/Images/M15/GoblinKaboomist.jpg"},
{Name:"Goblin Rabblemaster", Cost:"2R", Color:["R"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"145", Image:"/Images/M15/GoblinRabblemaster.jpg"},
{Name:"Goblin Roughrider", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"146", Image:"/Images/M15/GoblinRoughrider.jpg"},
{Name:"Hammerhand", Cost:"0R", Color:["R"], Rarity:"C", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"147", Image:"/Images/M15/Hammerhand.jpg"},
{Name:"Heat Ray", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"", Set:"M15", Number:"148", Image:"/Images/M15/HeatRay.jpg"},
{Name:"Hoarding Dragon", Cost:"3RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"149", Image:"/Images/M15/HoardingDragon.jpg"},
{Name:"Inferno Fist", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"7", Sort:"", Set:"M15", Number:"150", Image:"/Images/M15/InfernoFist.jpg"},
{Name:"Kird Chieftain", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"151", Image:"/Images/M15/KirdChieftain.jpg"},
{Name:"Krenko's Enforcer", Cost:"1RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"152", Image:"/Images/M15/KrenkosEnforcer.jpg"},
{Name:"Kurkesh, Onakke Ancient", Cost:"2RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"153", Image:"/Images/M15/Kurkesh--OnakkeAncient.jpg"},
{Name:"Lava Axe", Cost:"4R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"", Set:"M15", Number:"154", Image:"/Images/M15/LavaAxe.jpg"},
{Name:"Lightning Strike", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"155", Image:"/Images/M15/LightningStrike.jpg"},
{Name:"Might Makes Right", Cost:"5R", Color:["R"], Rarity:"U", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"156", Image:"/Images/M15/MightMakesRight.jpg"},
{Name:"Miner's Bane", Cost:"4RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"157", Image:"/Images/M15/MinersBane.jpg"},
{Name:"Paragon of Fierce Defiance", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"158", Image:"/Images/M15/ParagonofFierceDefiance.jpg"},
{Name:"Rummaging Goblin", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"", Set:"M15", Number:"159", Image:"/Images/M15/RummagingGoblin.jpg"},
{Name:"Scrapyard Mongrel", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"160", Image:"/Images/M15/ScrapyardMongrel.jpg"},
{Name:"Shrapnel Blast", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"161", Image:"/Images/M15/ShrapnelBlast.jpg"},
{Name:"Siege Dragon", Cost:"5RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"", Set:"M15", Number:"162", Image:"/Images/M15/SiegeDragon.jpg"},
{Name:"Soul of Shandalar", Cost:"4RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"163", Image:"/Images/M15/SoulofShandalar.jpg"},
{Name:"Stoke the Flames", Cost:"2RR", Color:["R"], Rarity:"U", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"164", Image:"/Images/M15/StoketheFlames.jpg"},
{Name:"Thundering Giant", Cost:"3RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"165", Image:"/Images/M15/ThunderingGiant.jpg"},
{Name:"Torch Fiend", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"166", Image:"/Images/M15/TorchFiend.jpg"},
{Name:"Wall of Fire", Cost:"1RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"167", Image:"/Images/M15/WallofFire.jpg"},
{Name:"Ancient Silverback", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"168", Image:"/Images/M15/AncientSilverback.jpg"},
{Name:"Back to Nature", Cost:"1G", Color:["G"], Rarity:"U", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"169", Image:"/Images/M15/BacktoNature.jpg"},
{Name:"Carnivorous Moss-Beast", Cost:"4GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"170", Image:"/Images/M15/CarnivorousMoss-Beast.jpg"},
{Name:"Charging Rhino", Cost:"3GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"171", Image:"/Images/M15/ChargingRhino.jpg"},
{Name:"Chord of Calling", Cost:"0GGG", Color:["G"], Rarity:"R", Type:["I"], Rating:"8", Sort:"", Set:"M15", Number:"172", Image:"/Images/M15/ChordofCalling.jpg"},
{Name:"Elvish Mystic", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"173", Image:"/Images/M15/ElvishMystic.jpg"},
{Name:"Feral Incarnation", Cost:"8G", Color:["G"], Rarity:"U", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"174", Image:"/Images/M15/FeralIncarnation.jpg"},
{Name:"Gather Courage", Cost:"0G", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"", Set:"M15", Number:"175", Image:"/Images/M15/GatherCourage.jpg"},
{Name:"Genesis Hydra", Cost:"0GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"176", Image:"/Images/M15/GenesisHydra.jpg"},
{Name:"Hornet Nest", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"177", Image:"/Images/M15/HornetNest.jpg"},
{Name:"Hornet Queen", Cost:"4GGG", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"178", Image:"/Images/M15/HornetQueen.jpg"},
{Name:"Hunt the Weak", Cost:"3G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"", Set:"M15", Number:"179", Image:"/Images/M15/HunttheWeak.jpg"},
{Name:"Hunter's Ambush", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"180", Image:"/Images/M15/HuntersAmbush.jpg"},
{Name:"Invasive Species", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"181", Image:"/Images/M15/InvasiveSpecies.jpg"},
{Name:"Kalonian Twingrove", Cost:"5G", Color:["G"], Rarity:"R", Type:["C"], Rating:"9", Sort:"", Set:"M15", Number:"182", Image:"/Images/M15/KalonianTwingrove.jpg"},
{Name:"Life's Legacy", Cost:"1G", Color:["G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"", Set:"M15", Number:"183", Image:"/Images/M15/LifesLegacy.jpg"},
{Name:"Living Totem", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"184", Image:"/Images/M15/LivingTotem.jpg"},
{Name:"Naturalize", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"185", Image:"/Images/M15/Naturalize.jpg"},
{Name:"Netcaster Spider", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"186", Image:"/Images/M15/NetcasterSpider.jpg"},
{Name:"Nissa, Worldwaker", Cost:"3GG", Color:["G"], Rarity:"M", Type:["P"], Rating:"10", Sort:"", Set:"M15", Number:"187", Image:"/Images/M15/Nissa--Worldwaker.jpg"},
{Name:"Nissa's Expedition", Cost:"4G", Color:["G"], Rarity:"U", Type:["S"], Rating:"7", Sort:"", Set:"M15", Number:"188", Image:"/Images/M15/NissasExpedition.jpg"},
{Name:"Overwhelm", Cost:"5GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"6", Sort:"", Set:"M15", Number:"189", Image:"/Images/M15/Overwhelm.jpg"},
{Name:"Paragon of Eternal Wilds", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"190", Image:"/Images/M15/ParagonofEternalWilds.jpg"},
{Name:"Phytotitan", Cost:"4GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"10", Sort:"", Set:"M15", Number:"191", Image:"/Images/M15/Phytotitan.jpg"},
{Name:"Plummet", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"", Set:"M15", Number:"192", Image:"/Images/M15/Plummet.jpg"},
{Name:"Ranger's Guile", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"193", Image:"/Images/M15/RangersGuile.jpg"},
{Name:"Reclamation Sage", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"194", Image:"/Images/M15/ReclamationSage.jpg"},
{Name:"Restock", Cost:"3GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"5", Sort:"", Set:"M15", Number:"195", Image:"/Images/M15/Restock.jpg"},
{Name:"Roaring Primadox", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"196", Image:"/Images/M15/RoaringPrimadox.jpg"},
{Name:"Runeclaw Bear", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"197", Image:"/Images/M15/RuneclawBear.jpg"},
{Name:"Satyr Wayfinder", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"198", Image:"/Images/M15/SatyrWayfinder.jpg"},
{Name:"Shaman of Spring", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"", Set:"M15", Number:"199", Image:"/Images/M15/ShamanofSpring.jpg"},
{Name:"Siege Wurm", Cost:"5GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"200", Image:"/Images/M15/SiegeWurm.jpg"},
{Name:"Soul of Zendikar", Cost:"4GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"10", Sort:"", Set:"M15", Number:"201", Image:"/Images/M15/SoulofZendikar.jpg"},
{Name:"Sunblade Elf", Cost:"0G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"202", Image:"/Images/M15/SunbladeElf.jpg"},
{Name:"Titanic Growth", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"6", Sort:"", Set:"M15", Number:"203", Image:"/Images/M15/TitanicGrowth.jpg"},
{Name:"Undergrowth Scavenger", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"204", Image:"/Images/M15/UndergrowthScavenger.jpg"},
{Name:"Venom Sliver", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"", Set:"M15", Number:"205", Image:"/Images/M15/VenomSliver.jpg"},
{Name:"Verdant Haven", Cost:"2G", Color:["G"], Rarity:"C", Type:["E"], Rating:"5", Sort:"", Set:"M15", Number:"206", Image:"/Images/M15/VerdantHaven.jpg"},
{Name:"Vineweft", Cost:"0G", Color:["G"], Rarity:"C", Type:["E"], Rating:"6", Sort:"", Set:"M15", Number:"207", Image:"/Images/M15/Vineweft.jpg"},
{Name:"Wall of Mulch", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"208", Image:"/Images/M15/WallofMulch.jpg"},
{Name:"Yisan, the Wanderer Bard", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"", Set:"M15", Number:"209", Image:"/Images/M15/Yisan--theWandererBard.jpg"},
{Name:"Garruk, Apex Predator", Cost:"5BG", Color:["B","G"], Rarity:"M", Type:["P"], Rating:"9", Sort:"", Set:"M15", Number:"210", Image:"/Images/M15/Garruk--ApexPredator.jpg"},
{Name:"Sliver Hivelord", Cost:"0WUBRG", Color:["W","U","B","R","G"], Rarity:"M", Type:["C"], Rating:"4", Sort:"", Set:"M15", Number:"211", Image:"/Images/M15/SliverHivelord.jpg"},
{Name:"Avarice Amulet", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"", Set:"M15", Number:"212", Image:"/Images/M15/AvariceAmulet.jpg"},
{Name:"Brawler's Plate", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"", Set:"M15", Number:"213", Image:"/Images/M15/BrawlersPlate.jpg"},
{Name:"Bronze Sable", Cost:"2", Color:["C"], Rarity:"C", Type:["C","A"], Rating:"4", Sort:"", Set:"M15", Number:"214", Image:"/Images/M15/BronzeSable.jpg"},
{Name:"The Chain Veil", Cost:"4", Color:["C"], Rarity:"M", Type:["A"], Rating:"3", Sort:"", Set:"M15", Number:"215", Image:"/Images/M15/TheChainVeil.jpg"},
{Name:"Gargoyle Sentinel", Cost:"3", Color:["C"], Rarity:"U", Type:["C","A"], Rating:"5", Sort:"", Set:"M15", Number:"216", Image:"/Images/M15/GargoyleSentinel.jpg"},
{Name:"Grindclock", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"", Set:"M15", Number:"217", Image:"/Images/M15/Grindclock.jpg"},
{Name:"Haunted Plate Mail", Cost:"4", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"", Set:"M15", Number:"218", Image:"/Images/M15/HauntedPlateMail.jpg"},
{Name:"Hot Soup", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"", Set:"M15", Number:"219", Image:"/Images/M15/HotSoup.jpg"},
{Name:"Juggernaut", Cost:"4", Color:["C"], Rarity:"U", Type:["C","A"], Rating:"7", Sort:"", Set:"M15", Number:"220", Image:"/Images/M15/Juggernaut.jpg"},
{Name:"Meteorite", Cost:"5", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"", Set:"M15", Number:"221", Image:"/Images/M15/Meteorite.jpg"},
{Name:"Obelisk of Urd", Cost:"6", Color:["C"], Rarity:"R", Type:["A"], Rating:"4", Sort:"", Set:"M15", Number:"222", Image:"/Images/M15/ObeliskofUrd.jpg"},
{Name:"Ornithopter", Cost:"0", Color:["C"], Rarity:"C", Type:["C","A"], Rating:"6", Sort:"", Set:"M15", Number:"223", Image:"/Images/M15/Ornithopter.jpg"},
{Name:"Perilous Vault", Cost:"4", Color:["C"], Rarity:"M", Type:["A"], Rating:"7", Sort:"", Set:"M15", Number:"224", Image:"/Images/M15/PerilousVault.jpg"},
{Name:"Phyrexian Revoker", Cost:"2", Color:["C"], Rarity:"R", Type:["C","A"], Rating:"6", Sort:"", Set:"M15", Number:"225", Image:"/Images/M15/PhyrexianRevoker.jpg"},
{Name:"Profane Memento", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"", Set:"M15", Number:"226", Image:"/Images/M15/ProfaneMemento.jpg"},
{Name:"Rogue's Gloves", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"6", Sort:"", Set:"M15", Number:"227", Image:"/Images/M15/RoguesGloves.jpg"},
{Name:"Sacred Armory", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"", Set:"M15", Number:"228", Image:"/Images/M15/SacredArmory.jpg"},
{Name:"Scuttling Doom Engine", Cost:"6", Color:["C"], Rarity:"R", Type:["C","A"], Rating:"9", Sort:"", Set:"M15", Number:"229", Image:"/Images/M15/ScuttlingDoomEngine.jpg"},
{Name:"Shield of the Avatar", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"", Set:"M15", Number:"230", Image:"/Images/M15/ShieldoftheAvatar.jpg"},
{Name:"Soul of New Phyrexia", Cost:"6", Color:["C"], Rarity:"M", Type:["C","A"], Rating:"10", Sort:"", Set:"M15", Number:"231", Image:"/Images/M15/SoulofNewPhyrexia.jpg"},
{Name:"Staff of the Death Magus", Cost:"3", Color:["B"], Rarity:"U", Type:["A"], Rating:"2", Sort:"", Set:"M15", Number:"232", Image:"/Images/M15/StaffoftheDeathMagus.jpg"},
{Name:"Staff of the Flame Magus", Cost:"3", Color:["R"], Rarity:"U", Type:["A"], Rating:"2", Sort:"", Set:"M15", Number:"233", Image:"/Images/M15/StaffoftheFlameMagus.jpg"},
{Name:"Staff of the Mind Magus", Cost:"3", Color:["U"], Rarity:"U", Type:["A"], Rating:"2", Sort:"", Set:"M15", Number:"234", Image:"/Images/M15/StaffoftheMindMagus.jpg"},
{Name:"Staff of the Sun Magus", Cost:"3", Color:["W"], Rarity:"U", Type:["A"], Rating:"2", Sort:"", Set:"M15", Number:"235", Image:"/Images/M15/StaffoftheSunMagus.jpg"},
{Name:"Staff of the Wild Magus", Cost:"3", Color:["G"], Rarity:"U", Type:["A"], Rating:"2", Sort:"", Set:"M15", Number:"236", Image:"/Images/M15/StaffoftheWildMagus.jpg"},
{Name:"Tormod's Crypt", Cost:"0", Color:["C"], Rarity:"U", Type:["A"], Rating:"1", Sort:"", Set:"M15", Number:"237", Image:"/Images/M15/TormodsCrypt.jpg"},
{Name:"Tyrant's Machine", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"4", Sort:"", Set:"M15", Number:"238", Image:"/Images/M15/TyrantsMachine.jpg"},
{Name:"Will-Forged Golem", Cost:"6", Color:["C"], Rarity:"C", Type:["C","A"], Rating:"3", Sort:"", Set:"M15", Number:"239", Image:"/Images/M15/Will-ForgedGolem.jpg"},
{Name:"Battlefield Forge", Cost:"0", Color:["W","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"240", Image:"/Images/M15/BattlefieldForge.jpg"},
{Name:"Caves of Koilos", Cost:"0", Color:["W","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"241", Image:"/Images/M15/CavesofKoilos.jpg"},
{Name:"Darksteel Citadel", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"3", Sort:"", Set:"M15", Number:"242", Image:"/Images/M15/DarksteelCitadel.jpg"},
{Name:"Evolving Wilds", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"243", Image:"/Images/M15/EvolvingWilds.jpg"},
{Name:"Llanowar Wastes", Cost:"0", Color:["B","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"244", Image:"/Images/M15/LlanowarWastes.jpg"},
{Name:"Radiant Fountain", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"3", Sort:"", Set:"M15", Number:"245", Image:"/Images/M15/RadiantFountain.jpg"},
{Name:"Shivan Reef", Cost:"0", Color:["U","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"246", Image:"/Images/M15/ShivanReef.jpg"},
{Name:"Sliver Hive", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"3", Sort:"", Set:"M15", Number:"247", Image:"/Images/M15/SliverHive.jpg"},
{Name:"Urborg, Tomb of Yawgmoth", Cost:"0", Color:["B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"248", Image:"/Images/M15/Urborg--TombofYawgmoth.jpg"},
{Name:"Yavimaya Coast", Cost:"0", Color:["G","U"], Rarity:"R", Type:["L"], Rating:"6", Sort:"", Set:"M15", Number:"249", Image:"/Images/M15/YavimayaCoast.jpg"},
];
var MM2 = [
{Name:"All Is Dust", Cost:"7", Color:["C"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"MM2", Number:"1", Image:"/Images/MM2/AllIsDust.jpg"},
{Name:"Artisan of Kozilek", Cost:"9", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"2", Image:"/Images/MM2/ArtisanofKozilek.jpg"},
{Name:"Emrakul, the Aeons Torn", Cost:"15", Color:["C"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"3", Image:"/Images/MM2/Emrakul--theAeonsTorn.jpg"},
{Name:"Karn Liberated", Cost:"7", Color:["C"], Rarity:"M", Type:["P"], Rating:"8", Sort:"1", Set:"MM2", Number:"4", Image:"/Images/MM2/KarnLiberated.jpg"},
{Name:"Kozilek, Butcher of Truth", Cost:"10", Color:["C"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"5", Image:"/Images/MM2/Kozilek--ButcherofTruth.jpg"},
{Name:"Ulamog, the Infinite Gyre", Cost:"11", Color:["C"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"6", Image:"/Images/MM2/Ulamog--theInfiniteGyre.jpg"},
{Name:"Ulamog's Crusher", Cost:"8", Color:["C"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"7", Image:"/Images/MM2/UlamogsCrusher.jpg"},
{Name:"Apostle's Blessing", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"8", Image:"/Images/MM2/ApostlesBlessing.jpg"},
{Name:"Arrest", Cost:"2W", Color:["W"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"MM2", Number:"9", Image:"/Images/MM2/Arrest.jpg"},
{Name:"Battlegrace Angel", Cost:"3WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"10", Image:"/Images/MM2/BattlegraceAngel.jpg"},
{Name:"Celestial Purge", Cost:"1W", Color:["W"], Rarity:"U", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"11", Image:"/Images/MM2/CelestialPurge.jpg"},
{Name:"Conclave Phalanx", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"12", Image:"/Images/MM2/ConclavePhalanx.jpg"},
{Name:"Court Homunculus", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"13", Image:"/Images/MM2/CourtHomunculus.jpg"},
{Name:"Daybreak Coronet", Cost:"0WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"4", Sort:"1", Set:"MM2", Number:"14", Image:"/Images/MM2/DaybreakCoronet.jpg"},
{Name:"Dispatch", Cost:"0W", Color:["W"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"15", Image:"/Images/MM2/Dispatch.jpg"},
{Name:"Elesh Norn, Grand Cenobite", Cost:"5WW", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"16", Image:"/Images/MM2/EleshNorn--GrandCenobite.jpg"},
{Name:"Fortify", Cost:"2W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"17", Image:"/Images/MM2/Fortify.jpg"},
{Name:"Hikari, Twilight Guardian", Cost:"3WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"18", Image:"/Images/MM2/Hikari--TwilightGuardian.jpg"},
{Name:"Indomitable Archangel", Cost:"2WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"19", Image:"/Images/MM2/IndomitableArchangel.jpg"},
{Name:"Iona, Shield of Emeria", Cost:"6WWW", Color:["W"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"20", Image:"/Images/MM2/Iona--ShieldofEmeria.jpg"},
{Name:"Kami of Ancient Law", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"21", Image:"/Images/MM2/KamiofAncientLaw.jpg"},
{Name:"Kor Duelist", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"22", Image:"/Images/MM2/KorDuelist.jpg"},
{Name:"Leyline of Sanctity", Cost:"2WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"MM2", Number:"23", Image:"/Images/MM2/LeylineofSanctity.jpg"},
{Name:"Mighty Leap", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"24", Image:"/Images/MM2/MightyLeap.jpg"},
{Name:"Mirran Crusader", Cost:"1WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"25", Image:"/Images/MM2/MirranCrusader.jpg"},
{Name:"Mirror Entity", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"26", Image:"/Images/MM2/MirrorEntity.jpg"},
{Name:"Moonlit Strider", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"27", Image:"/Images/MM2/MoonlitStrider.jpg"},
{Name:"Myrsmith", Cost:"1W", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"28", Image:"/Images/MM2/Myrsmith.jpg"},
{Name:"Oblivion Ring", Cost:"2W", Color:["W"], Rarity:"U", Type:["E"], Rating:"9", Sort:"1", Set:"MM2", Number:"29", Image:"/Images/MM2/OblivionRing.jpg"},
{Name:"Otherworldly Journey", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"30", Image:"/Images/MM2/OtherworldlyJourney.jpg"},
{Name:"Raise the Alarm", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"31", Image:"/Images/MM2/RaisetheAlarm.jpg"},
{Name:"Skyhunter Skirmisher", Cost:"1WW", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"32", Image:"/Images/MM2/SkyhunterSkirmisher.jpg"},
{Name:"Spectral Procession", Cost:"0WWW", Color:["W"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"33", Image:"/Images/MM2/SpectralProcession.jpg"},
{Name:"Sunlance", Cost:"0W", Color:["W"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"MM2", Number:"34", Image:"/Images/MM2/Sunlance.jpg"},
{Name:"Sunspear Shikari", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"35", Image:"/Images/MM2/SunspearShikari.jpg"},
{Name:"Taj-Nar Swordsmith", Cost:"3W", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"36", Image:"/Images/MM2/Taj-NarSwordsmith.jpg"},
{Name:"Terashi's Grasp", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"MM2", Number:"37", Image:"/Images/MM2/TerashisGrasp.jpg"},
{Name:"Waxmane Baku", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"38", Image:"/Images/MM2/WaxmaneBaku.jpg"},
{Name:"AEthersnipe", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"39", Image:"/Images/MM2/AEthersnipe.jpg"},
{Name:"Air Servant", Cost:"4U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"40", Image:"/Images/MM2/AirServant.jpg"},
{Name:"Argent Sphinx", Cost:"2UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"41", Image:"/Images/MM2/ArgentSphinx.jpg"},
{Name:"Cloud Elemental", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"42", Image:"/Images/MM2/CloudElemental.jpg"},
{Name:"Cryptic Command", Cost:"1UUU", Color:["U"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"43", Image:"/Images/MM2/CrypticCommand.jpg"},
{Name:"Faerie Mechanist", Cost:"3U", Color:["U"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"44", Image:"/Images/MM2/FaerieMechanist.jpg"},
{Name:"Flashfreeze", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"45", Image:"/Images/MM2/Flashfreeze.jpg"},
{Name:"Guile", Cost:"3UUU", Color:["U"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"46", Image:"/Images/MM2/Guile.jpg"},
{Name:"Helium Squirter", Cost:"4U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"47", Image:"/Images/MM2/HeliumSquirter.jpg"},
{Name:"Hurkyl's Recall", Cost:"1U", Color:["U"], Rarity:"R", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"48", Image:"/Images/MM2/HurkylsRecall.jpg"},
{Name:"Inexorable Tide", Cost:"3UU", Color:["U"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"MM2", Number:"49", Image:"/Images/MM2/InexorableTide.jpg"},
{Name:"Mana Leak", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"50", Image:"/Images/MM2/ManaLeak.jpg"},
{Name:"Mulldrifter", Cost:"4U", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"51", Image:"/Images/MM2/Mulldrifter.jpg"},
{Name:"Narcolepsy", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"7", Sort:"1", Set:"MM2", Number:"52", Image:"/Images/MM2/Narcolepsy.jpg"},
{Name:"Novijen Sages", Cost:"4UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"53", Image:"/Images/MM2/NovijenSages.jpg"},
{Name:"Qumulox", Cost:"6UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"54", Image:"/Images/MM2/Qumulox.jpg"},
{Name:"Remand", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"MM2", Number:"55", Image:"/Images/MM2/Remand.jpg"},
{Name:"Repeal", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"56", Image:"/Images/MM2/Repeal.jpg"},
{Name:"Somber Hoverguard", Cost:"5U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"57", Image:"/Images/MM2/SomberHoverguard.jpg"},
{Name:"Steady Progress", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"58", Image:"/Images/MM2/SteadyProgress.jpg"},
{Name:"Stoic Rebuttal", Cost:"1UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"59", Image:"/Images/MM2/StoicRebuttal.jpg"},
{Name:"Surrakar Spellblade", Cost:"1UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"60", Image:"/Images/MM2/SurrakarSpellblade.jpg"},
{Name:"Telling Time", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"MM2", Number:"61", Image:"/Images/MM2/TellingTime.jpg"},
{Name:"Tezzeret the Seeker", Cost:"3UU", Color:["U"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"MM2", Number:"62", Image:"/Images/MM2/TezzerettheSeeker.jpg"},
{Name:"Tezzeret's Gambit", Cost:"3U", Color:["U"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"MM2", Number:"63", Image:"/Images/MM2/TezzeretsGambit.jpg"},
{Name:"Thoughtcast", Cost:"4U", Color:["U"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"MM2", Number:"64", Image:"/Images/MM2/Thoughtcast.jpg"},
{Name:"Thrummingbird", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"65", Image:"/Images/MM2/Thrummingbird.jpg"},
{Name:"Vapor Snag", Cost:"0U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"MM2", Number:"66", Image:"/Images/MM2/VaporSnag.jpg"},
{Name:"Vendilion Clique", Cost:"1UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"67", Image:"/Images/MM2/VendilionClique.jpg"},
{Name:"Vigean Graftmage", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"68", Image:"/Images/MM2/VigeanGraftmage.jpg"},
{Name:"Water Servant", Cost:"2UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"69", Image:"/Images/MM2/WaterServant.jpg"},
{Name:"Wings of Velis Vel", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"70", Image:"/Images/MM2/WingsofVelisVel.jpg"},
{Name:"Bitterblossom", Cost:"1B", Color:["B"], Rarity:"M", Type:["E"], Rating:"9", Sort:"1", Set:"MM2", Number:"71", Image:"/Images/MM2/Bitterblossom.jpg"},
{Name:"Bloodthrone Vampire", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"72", Image:"/Images/MM2/BloodthroneVampire.jpg"},
{Name:"Bone Splinters", Cost:"0B", Color:["B"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"MM2", Number:"73", Image:"/Images/MM2/BoneSplinters.jpg"},
{Name:"Daggerclaw Imp", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"74", Image:"/Images/MM2/DaggerclawImp.jpg"},
{Name:"Dark Confidant", Cost:"1B", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"MM2", Number:"75", Image:"/Images/MM2/DarkConfidant.jpg"},
{Name:"Death Denied", Cost:"0BB", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"76", Image:"/Images/MM2/DeathDenied.jpg"},
{Name:"Deathmark", Cost:"0B", Color:["B"], Rarity:"U", Type:["S"], Rating:"2", Sort:"1", Set:"MM2", Number:"77", Image:"/Images/MM2/Deathmark.jpg"},
{Name:"Devouring Greed", Cost:"2BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"MM2", Number:"78", Image:"/Images/MM2/DevouringGreed.jpg"},
{Name:"Dismember", Cost:"1BB", Color:["C"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"79", Image:"/Images/MM2/Dismember.jpg"},
{Name:"Dread Drone", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"80", Image:"/Images/MM2/DreadDrone.jpg"},
{Name:"Duskhunter Bat", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"81", Image:"/Images/MM2/DuskhunterBat.jpg"},
{Name:"Endrek Sahr, Master Breeder", Cost:"4B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"82", Image:"/Images/MM2/EndrekSahr--MasterBreeder.jpg"},
{Name:"Ghostly Changeling", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"83", Image:"/Images/MM2/GhostlyChangeling.jpg"},
{Name:"Grim Affliction", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"84", Image:"/Images/MM2/GrimAffliction.jpg"},
{Name:"Instill Infection", Cost:"3B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"85", Image:"/Images/MM2/InstillInfection.jpg"},
{Name:"Midnight Banshee", Cost:"3BBB", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"86", Image:"/Images/MM2/MidnightBanshee.jpg"},
{Name:"Nameless Inversion", Cost:"1B", Color:["B"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"MM2", Number:"87", Image:"/Images/MM2/NamelessInversion.jpg"},
{Name:"Necroskitter", Cost:"1BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"88", Image:"/Images/MM2/Necroskitter.jpg"},
{Name:"Plagued Rusalka", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"89", Image:"/Images/MM2/PlaguedRusalka.jpg"},
{Name:"Profane Command", Cost:"0BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"MM2", Number:"90", Image:"/Images/MM2/ProfaneCommand.jpg"},
{Name:"Puppeteer Clique", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"91", Image:"/Images/MM2/PuppeteerClique.jpg"},
{Name:"Reassembling Skeleton", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"92", Image:"/Images/MM2/ReassemblingSkeleton.jpg"},
{Name:"Scavenger Drake", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"93", Image:"/Images/MM2/ScavengerDrake.jpg"},
{Name:"Scuttling Death", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"94", Image:"/Images/MM2/ScuttlingDeath.jpg"},
{Name:"Shrivel", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"MM2", Number:"95", Image:"/Images/MM2/Shrivel.jpg"},
{Name:"Sickle Ripper", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"96", Image:"/Images/MM2/SickleRipper.jpg"},
{Name:"Sign in Blood", Cost:"0BB", Color:["B"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"MM2", Number:"97", Image:"/Images/MM2/SigninBlood.jpg"},
{Name:"Spread the Sickness", Cost:"4B", Color:["B"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"98", Image:"/Images/MM2/SpreadtheSickness.jpg"},
{Name:"Surgical Extraction", Cost:"0B", Color:["B"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"MM2", Number:"99", Image:"/Images/MM2/SurgicalExtraction.jpg"},
{Name:"Thief of Hope", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"100", Image:"/Images/MM2/ThiefofHope.jpg"},
{Name:"Vampire Lacerator", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"101", Image:"/Images/MM2/VampireLacerator.jpg"},
{Name:"Vampire Outcasts", Cost:"2BB", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"102", Image:"/Images/MM2/VampireOutcasts.jpg"},
{Name:"Waking Nightmare", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"MM2", Number:"103", Image:"/Images/MM2/WakingNightmare.jpg"},
{Name:"Banefire", Cost:"0R", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"104", Image:"/Images/MM2/Banefire.jpg"},
{Name:"Blades of Velis Vel", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"105", Image:"/Images/MM2/BladesofVelisVel.jpg"},
{Name:"Blood Ogre", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"106", Image:"/Images/MM2/BloodOgre.jpg"},
{Name:"Bloodshot Trainee", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"107", Image:"/Images/MM2/BloodshotTrainee.jpg"},
{Name:"Brute Force", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"108", Image:"/Images/MM2/BruteForce.jpg"},
{Name:"Burst Lightning", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"109", Image:"/Images/MM2/BurstLightning.jpg"},
{Name:"Combust", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"1", Sort:"1", Set:"MM2", Number:"110", Image:"/Images/MM2/Combust.jpg"},
{Name:"Comet Storm", Cost:"0RR", Color:["R"], Rarity:"M", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"111", Image:"/Images/MM2/CometStorm.jpg"},
{Name:"Dragonsoul Knight", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"112", Image:"/Images/MM2/DragonsoulKnight.jpg"},
{Name:"Fiery Fall", Cost:"5R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"113", Image:"/Images/MM2/FieryFall.jpg"},
{Name:"Goblin Fireslinger", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"114", Image:"/Images/MM2/GoblinFireslinger.jpg"},
{Name:"Goblin War Paint", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"MM2", Number:"115", Image:"/Images/MM2/GoblinWarPaint.jpg"},
{Name:"Gorehorn Minotaurs", Cost:"2RR", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"116", Image:"/Images/MM2/GorehornMinotaurs.jpg"},
{Name:"Gut Shot", Cost:"0R", Color:["C"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"MM2", Number:"117", Image:"/Images/MM2/GutShot.jpg"},
{Name:"Hellkite Charger", Cost:"4RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"118", Image:"/Images/MM2/HellkiteCharger.jpg"},
{Name:"Incandescent Soulstoke", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"119", Image:"/Images/MM2/IncandescentSoulstoke.jpg"},
{Name:"Inner-Flame Igniter", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"120", Image:"/Images/MM2/Inner-FlameIgniter.jpg"},
{Name:"Kiki-Jiki, Mirror Breaker", Cost:"2RRR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"MM2", Number:"121", Image:"/Images/MM2/Kiki-Jiki--MirrorBreaker.jpg"},
{Name:"Lightning Bolt", Cost:"0R", Color:["R"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"122", Image:"/Images/MM2/LightningBolt.jpg"},
{Name:"Skarrgan Firebird", Cost:"4RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"123", Image:"/Images/MM2/SkarrganFirebird.jpg"},
{Name:"Smash to Smithereens", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"MM2", Number:"124", Image:"/Images/MM2/SmashtoSmithereens.jpg"},
{Name:"Smokebraider", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"125", Image:"/Images/MM2/Smokebraider.jpg"},
{Name:"Soulbright Flamekin", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"126", Image:"/Images/MM2/SoulbrightFlamekin.jpg"},
{Name:"Spikeshot Elder", Cost:"0R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"127", Image:"/Images/MM2/SpikeshotElder.jpg"},
{Name:"Spitebellows", Cost:"5R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"128", Image:"/Images/MM2/Spitebellows.jpg"},
{Name:"Splinter Twin", Cost:"2RR", Color:["R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"MM2", Number:"129", Image:"/Images/MM2/SplinterTwin.jpg"},
{Name:"Stormblood Berserker", Cost:"1R", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"130", Image:"/Images/MM2/StormbloodBerserker.jpg"},
{Name:"Thunderblust", Cost:"2RRR", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"131", Image:"/Images/MM2/Thunderblust.jpg"},
{Name:"Tribal Flames", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"MM2", Number:"132", Image:"/Images/MM2/TribalFlames.jpg"},
{Name:"Viashino Slaughtermaster", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"133", Image:"/Images/MM2/ViashinoSlaughtermaster.jpg"},
{Name:"Wildfire", Cost:"4RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"134", Image:"/Images/MM2/Wildfire.jpg"},
{Name:"Worldheart Phoenix", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"135", Image:"/Images/MM2/WorldheartPhoenix.jpg"},
{Name:"Wrap in Flames", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"MM2", Number:"136", Image:"/Images/MM2/WrapinFlames.jpg"},
{Name:"Algae Gharial", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"137", Image:"/Images/MM2/AlgaeGharial.jpg"},
{Name:"All Suns' Dawn", Cost:"4G", Color:["G"], Rarity:"R", Type:["S"], Rating:"3", Sort:"1", Set:"MM2", Number:"138", Image:"/Images/MM2/AllSunsDawn.jpg"},
{Name:"Ant Queen", Cost:"3GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"139", Image:"/Images/MM2/AntQueen.jpg"},
{Name:"Aquastrand Spider", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"140", Image:"/Images/MM2/AquastrandSpider.jpg"},
{Name:"Bestial Menace", Cost:"3GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"141", Image:"/Images/MM2/BestialMenace.jpg"},
{Name:"Commune with Nature", Cost:"0G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"MM2", Number:"142", Image:"/Images/MM2/CommunewithNature.jpg"},
{Name:"Cytoplast Root-Kin", Cost:"2GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"143", Image:"/Images/MM2/CytoplastRoot-Kin.jpg"},
{Name:"Gnarlid Pack", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"144", Image:"/Images/MM2/GnarlidPack.jpg"},
{Name:"Karplusan Strider", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"145", Image:"/Images/MM2/KarplusanStrider.jpg"},
{Name:"Kavu Primarch", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"146", Image:"/Images/MM2/KavuPrimarch.jpg"},
{Name:"Kozilek's Predator", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"147", Image:"/Images/MM2/KozileksPredator.jpg"},
{Name:"Matca Rioters", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"148", Image:"/Images/MM2/MatcaRioters.jpg"},
{Name:"Mutagenic Growth", Cost:"0G", Color:["C"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"MM2", Number:"149", Image:"/Images/MM2/MutagenicGrowth.jpg"},
{Name:"Nest Invader", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"150", Image:"/Images/MM2/NestInvader.jpg"},
{Name:"Noble Hierarch", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"151", Image:"/Images/MM2/NobleHierarch.jpg"},
{Name:"Overwhelm", Cost:"5GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"MM2", Number:"152", Image:"/Images/MM2/Overwhelm.jpg"},
{Name:"Overwhelming Stampede", Cost:"3GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"MM2", Number:"153", Image:"/Images/MM2/OverwhelmingStampede.jpg"},
{Name:"Pelakka Wurm", Cost:"4GGG", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"154", Image:"/Images/MM2/PelakkaWurm.jpg"},
{Name:"Plummet", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"155", Image:"/Images/MM2/Plummet.jpg"},
{Name:"Primeval Titan", Cost:"4GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"MM2", Number:"156", Image:"/Images/MM2/PrimevalTitan.jpg"},
{Name:"Rampant Growth", Cost:"1G", Color:["G"], Rarity:"C", Type:["S"], Rating:"7", Sort:"1", Set:"MM2", Number:"157", Image:"/Images/MM2/RampantGrowth.jpg"},
{Name:"Root-Kin Ally", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"158", Image:"/Images/MM2/Root-KinAlly.jpg"},
{Name:"Scatter the Seeds", Cost:"3GG", Color:["G"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"MM2", Number:"159", Image:"/Images/MM2/ScattertheSeeds.jpg"},
{Name:"Scion of the Wild", Cost:"1GG", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"160", Image:"/Images/MM2/ScionoftheWild.jpg"},
{Name:"Scute Mob", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"161", Image:"/Images/MM2/ScuteMob.jpg"},
{Name:"Simic Initiate", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"MM2", Number:"162", Image:"/Images/MM2/SimicInitiate.jpg"},
{Name:"Sundering Vitae", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"MM2", Number:"163", Image:"/Images/MM2/SunderingVitae.jpg"},
{Name:"Sylvan Bounty", Cost:"5G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"MM2", Number:"164", Image:"/Images/MM2/SylvanBounty.jpg"},
{Name:"Tarmogoyf", Cost:"1G", Color:["G"], Rarity:"M", Type:["C"], Rating:"10", Sort:"1", Set:"MM2", Number:"165", Image:"/Images/MM2/Tarmogoyf.jpg"},
{Name:"Thrive", Cost:"0G", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"MM2", Number:"166", Image:"/Images/MM2/Thrive.jpg"},
{Name:"Tukatongue Thallid", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"167", Image:"/Images/MM2/TukatongueThallid.jpg"},
{Name:"Vines of Vastwood", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"MM2", Number:"168", Image:"/Images/MM2/VinesofVastwood.jpg"},
{Name:"Wolfbriar Elemental", Cost:"2GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"169", Image:"/Images/MM2/WolfbriarElemental.jpg"},
{Name:"Agony Warp", Cost:"0UB", Color:["U","B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"MM2", Number:"170", Image:"/Images/MM2/AgonyWarp.jpg"},
{Name:"Apocalypse Hydra", Cost:"0RG", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"171", Image:"/Images/MM2/ApocalypseHydra.jpg"},
{Name:"Ashenmoor Gouger", Cost:"0RRB", Color:["R","B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"172", Image:"/Images/MM2/AshenmoorGouger.jpg"},
{Name:"Boros Swiftblade", Cost:"0RW", Color:["R","W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"173", Image:"/Images/MM2/BorosSwiftblade.jpg"},
{Name:"Creakwood Liege", Cost:"1BBG", Color:["B","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"174", Image:"/Images/MM2/CreakwoodLiege.jpg"},
{Name:"Dimir Guildmage", Cost:"0UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"175", Image:"/Images/MM2/DimirGuildmage.jpg"},
{Name:"Drooling Groodion", Cost:"3BBG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"MM2", Number:"176", Image:"/Images/MM2/DroolingGroodion.jpg"},
{Name:"Electrolyze", Cost:"1UR", Color:["U","R"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"177", Image:"/Images/MM2/Electrolyze.jpg"},
{Name:"Ethercaste Knight", Cost:"0WU", Color:["W","U"], Rarity:"U", Type:["A","C"], Rating:"5", Sort:"1", Set:"MM2", Number:"178", Image:"/Images/MM2/EthercasteKnight.jpg"},
{Name:"Fulminator Mage", Cost:"1BR", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"179", Image:"/Images/MM2/FulminatorMage.jpg"},
{Name:"Ghost Council of Orzhova", Cost:"0WWBB", Color:["W","B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"180", Image:"/Images/MM2/GhostCouncilofOrzhova.jpg"},
{Name:"Glassdust Hulk", Cost:"3WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"181", Image:"/Images/MM2/GlassdustHulk.jpg"},
{Name:"Hearthfire Hobgoblin", Cost:"0WWR", Color:["W","R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"MM2", Number:"182", Image:"/Images/MM2/HearthfireHobgoblin.jpg"},
{Name:"Horde of Notions", Cost:"0WUBRG", Color:["W","U","B","R","G"], Rarity:"R", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"183", Image:"/Images/MM2/HordeofNotions.jpg"},
{Name:"Lorescale Coatl", Cost:"1UG", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"184", Image:"/Images/MM2/LorescaleCoatl.jpg"},
{Name:"Mystic Snake", Cost:"1UUG", Color:["U","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"185", Image:"/Images/MM2/MysticSnake.jpg"},
{Name:"Necrogenesis", Cost:"0BG", Color:["B","G"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"MM2", Number:"186", Image:"/Images/MM2/Necrogenesis.jpg"},
{Name:"Niv-Mizzet, the Firemind", Cost:"2UURR", Color:["U","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"187", Image:"/Images/MM2/Niv-Mizzet--theFiremind.jpg"},
{Name:"Nobilis of War", Cost:"0WWRRR", Color:["W","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"188", Image:"/Images/MM2/NobilisofWar.jpg"},
{Name:"Pillory of the Sleepless", Cost:"1WB", Color:["W","B"], Rarity:"U", Type:["E"], Rating:"7", Sort:"1", Set:"MM2", Number:"189", Image:"/Images/MM2/PilloryoftheSleepless.jpg"},
{Name:"Plaxcaster Frogling", Cost:"1UG", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"190", Image:"/Images/MM2/PlaxcasterFrogling.jpg"},
{Name:"Restless Apparition", Cost:"0WBB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"191", Image:"/Images/MM2/RestlessApparition.jpg"},
{Name:"Savage Twister", Cost:"0RG", Color:["R","G"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"MM2", Number:"192", Image:"/Images/MM2/SavageTwister.jpg"},
{Name:"Selesnya Guildmage", Cost:"0WG", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"MM2", Number:"193", Image:"/Images/MM2/SelesnyaGuildmage.jpg"},
{Name:"Shadowmage Infiltrator", Cost:"1UB", Color:["U","B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"MM2", Number:"194", Image:"/Images/MM2/ShadowmageInfiltrator.jpg"},
{Name:"Shrewd Hatchling", Cost:"2UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"195", Image:"/Images/MM2/ShrewdHatchling.jpg"},
{Name:"Sigil Blessing", Cost:"0WG", Color:["W","G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"MM2", Number:"196", Image:"/Images/MM2/SigilBlessing.jpg"},
{Name:"Swans of Bryn Argoll", Cost:"2WU", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"MM2", Number:"197", Image:"/Images/MM2/SwansofBrynArgoll.jpg"},
{Name:"Vengeful Rebirth", Cost:"4RG", Color:["R","G"], Rarity:"U", Type:["S"], Rating:"4", Sort:"1", Set:"MM2", Number:"198", Image:"/Images/MM2/VengefulRebirth.jpg"},
{Name:"Wilt-Leaf Liege", Cost:"1WGG", Color:["W","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"MM2", Number:"199", Image:"/Images/MM2/Wilt-LeafLiege.jpg"},
{Name:"Wrecking Ball", Cost:"2BR", Color:["B","R"], Rarity:"U", Type:["I"], Rating:"8", Sort:"1", Set:"MM2", Number:"200", Image:"/Images/MM2/WreckingBall.jpg"},
{Name:"Alloy Myr", Cost:"3", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"201", Image:"/Images/MM2/AlloyMyr.jpg"},
{Name:"Blinding Souleater", Cost:"3", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"202", Image:"/Images/MM2/BlindingSouleater.jpg"},
{Name:"Cathodion", Cost:"3", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"203", Image:"/Images/MM2/Cathodion.jpg"},
{Name:"Chimeric Mass", Cost:"0", Color:["C"], Rarity:"R", Type:["A"], Rating:"6", Sort:"1", Set:"MM2", Number:"204", Image:"/Images/MM2/ChimericMass.jpg"},
{Name:"Copper Carapace", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"205", Image:"/Images/MM2/CopperCarapace.jpg"},
{Name:"Cranial Plating", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"206", Image:"/Images/MM2/CranialPlating.jpg"},
{Name:"Culling Dais", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"6", Sort:"1", Set:"MM2", Number:"207", Image:"/Images/MM2/CullingDais.jpg"},
{Name:"Darksteel Axe", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"MM2", Number:"208", Image:"/Images/MM2/DarksteelAxe.jpg"},
{Name:"Etched Champion", Cost:"3", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"7", Sort:"1", Set:"MM2", Number:"209", Image:"/Images/MM2/EtchedChampion.jpg"},
{Name:"Etched Monstrosity", Cost:"5", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"6", Sort:"1", Set:"MM2", Number:"210", Image:"/Images/MM2/EtchedMonstrosity.jpg"},
{Name:"Etched Oracle", Cost:"4", Color:["C"], Rarity:"U", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"211", Image:"/Images/MM2/EtchedOracle.jpg"},
{Name:"Everflowing Chalice", Cost:"0", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"MM2", Number:"212", Image:"/Images/MM2/EverflowingChalice.jpg"},
{Name:"Expedition Map", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"213", Image:"/Images/MM2/ExpeditionMap.jpg"},
{Name:"Flayer Husk", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"214", Image:"/Images/MM2/FlayerHusk.jpg"},
{Name:"Frogmite", Cost:"4", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"215", Image:"/Images/MM2/Frogmite.jpg"},
{Name:"Glint Hawk Idol", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"216", Image:"/Images/MM2/GlintHawkIdol.jpg"},
{Name:"Gust-Skimmer", Cost:"2", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"217", Image:"/Images/MM2/Gust-Skimmer.jpg"},
{Name:"Kitesail", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"218", Image:"/Images/MM2/Kitesail.jpg"},
{Name:"Lodestone Golem", Cost:"4", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"6", Sort:"1", Set:"MM2", Number:"219", Image:"/Images/MM2/LodestoneGolem.jpg"},
{Name:"Lodestone Myr", Cost:"4", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"6", Sort:"1", Set:"MM2", Number:"220", Image:"/Images/MM2/LodestoneMyr.jpg"},
{Name:"Long-Forgotten Gohei", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"4", Sort:"1", Set:"MM2", Number:"221", Image:"/Images/MM2/Long-ForgottenGohei.jpg"},
{Name:"Mortarpod", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"MM2", Number:"222", Image:"/Images/MM2/Mortarpod.jpg"},
{Name:"Mox Opal", Cost:"0", Color:["C"], Rarity:"M", Type:["A"], Rating:"8", Sort:"1", Set:"MM2", Number:"223", Image:"/Images/MM2/MoxOpal.jpg"},
{Name:"Myr Enforcer", Cost:"7", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"MM2", Number:"224", Image:"/Images/MM2/MyrEnforcer.jpg"},
{Name:"Precursor Golem", Cost:"5", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"7", Sort:"1", Set:"MM2", Number:"225", Image:"/Images/MM2/PrecursorGolem.jpg"},
{Name:"Runed Servitor", Cost:"2", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"2", Sort:"1", Set:"MM2", Number:"226", Image:"/Images/MM2/RunedServitor.jpg"},
{Name:"Rusted Relic", Cost:"4", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"227", Image:"/Images/MM2/RustedRelic.jpg"},
{Name:"Sickleslicer", Cost:"3", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"228", Image:"/Images/MM2/Sickleslicer.jpg"},
{Name:"Skyreach Manta", Cost:"5", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"MM2", Number:"229", Image:"/Images/MM2/SkyreachManta.jpg"},
{Name:"Spellskite", Cost:"2", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"7", Sort:"1", Set:"MM2", Number:"230", Image:"/Images/MM2/Spellskite.jpg"},
{Name:"Sphere of the Suns", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"6", Sort:"1", Set:"MM2", Number:"231", Image:"/Images/MM2/SphereoftheSuns.jpg"},
{Name:"Sunforger", Cost:"3", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"MM2", Number:"232", Image:"/Images/MM2/Sunforger.jpg"},
{Name:"Tumble Magnet", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"MM2", Number:"233", Image:"/Images/MM2/TumbleMagnet.jpg"},
{Name:"Wayfarer's Bauble", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"4", Sort:"1", Set:"MM2", Number:"234", Image:"/Images/MM2/WayfarersBauble.jpg"},
{Name:"Azorius Chancery", Cost:"0", Color:["W","B"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"235", Image:"/Images/MM2/AzoriusChancery.jpg"},
{Name:"Blinkmoth Nexus", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"236", Image:"/Images/MM2/BlinkmothNexus.jpg"},
{Name:"Boros Garrison", Cost:"0", Color:["W","R"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"237", Image:"/Images/MM2/BorosGarrison.jpg"},
{Name:"Darksteel Citadel", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"2", Sort:"1", Set:"MM2", Number:"238", Image:"/Images/MM2/DarksteelCitadel.jpg"},
{Name:"Dimir Aqueduct", Cost:"0", Color:["U","B"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"239", Image:"/Images/MM2/DimirAqueduct.jpg"},
{Name:"Eldrazi Temple", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"MM2", Number:"240", Image:"/Images/MM2/EldraziTemple.jpg"},
{Name:"Evolving Wilds", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"MM2", Number:"241", Image:"/Images/MM2/EvolvingWilds.jpg"},
{Name:"Eye of Ugin", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"242", Image:"/Images/MM2/EyeofUgin.jpg"},
{Name:"Golgari Rot Farm", Cost:"0", Color:["B","G"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"243", Image:"/Images/MM2/GolgariRotFarm.jpg"},
{Name:"Gruul Turf", Cost:"0", Color:["R","G"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"244", Image:"/Images/MM2/GruulTurf.jpg"},
{Name:"Izzet Boilerworks", Cost:"0", Color:["U","R"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"245", Image:"/Images/MM2/IzzetBoilerworks.jpg"},
{Name:"Orzhov Basilica", Cost:"0", Color:["W","B"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"246", Image:"/Images/MM2/OrzhovBasilica.jpg"},
{Name:"Rakdos Carnarium", Cost:"0", Color:["B","R"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"247", Image:"/Images/MM2/RakdosCarnarium.jpg"},
{Name:"Selesnya Sanctuary", Cost:"0", Color:["W","G"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"248", Image:"/Images/MM2/SelesnyaSanctuary.jpg"},
{Name:"Simic Growth Chamber", Cost:"0", Color:["U","B"], Rarity:"U", Type:["L"], Rating:"7", Sort:"1", Set:"MM2", Number:"249", Image:"/Images/MM2/SimicGrowthChamber.jpg"},
];
var ORI = [
{Name:"Akroan Jailer", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"1", Image:"/Images/ORI/AkroanJailer.jpg"},
{Name:"Ampryn Tactician", Cost:"2WW", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"2", Image:"/Images/ORI/AmprynTactician.jpg"},
{Name:"Anointer of Champions", Cost:"0W", Color:["W"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"3", Image:"/Images/ORI/AnointerofChampions.jpg"},
{Name:"Archangel of Tithes", Cost:"1WWW", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"4", Image:"/Images/ORI/ArchangelofTithes.jpg"},
{Name:"Auramancer", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"5", Image:"/Images/ORI/Auramancer.jpg"},
{Name:"Aven Battle Priest", Cost:"5W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"6", Image:"/Images/ORI/AvenBattlePriest.jpg"},
{Name:"Blessed Spirits", Cost:"2W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"7", Image:"/Images/ORI/BlessedSpirits.jpg"},
{Name:"Celestial Flare", Cost:"0WW", Color:["W"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"ORI", Number:"8", Image:"/Images/ORI/CelestialFlare.jpg"},
{Name:"Charging Griffin", Cost:"3W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"9", Image:"/Images/ORI/ChargingGriffin.jpg"},
{Name:"Cleric of the Forward Order", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"10", Image:"/Images/ORI/ClericoftheForwardOrder.jpg"},
{Name:"Consul's Lieutenant", Cost:"0WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"11", Image:"/Images/ORI/ConsulsLieutenant.jpg"},
{Name:"Enlightened Ascetic", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"12", Image:"/Images/ORI/EnlightenedAscetic.jpg"},
{Name:"Enshrouding Mist", Cost:"0W", Color:["W"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"13", Image:"/Images/ORI/EnshroudingMist.jpg"},
{Name:"Gideon's Phalanx", Cost:"5WW", Color:["W"], Rarity:"R", Type:["I"], Rating:"6", Sort:"1", Set:"ORI", Number:"14", Image:"/Images/ORI/GideonsPhalanx.jpg"},
{Name:"Grasp of the Hieromancer", Cost:"1W", Color:["W"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"15", Image:"/Images/ORI/GraspoftheHieromancer.jpg"},
{Name:"Hallowed Moonlight", Cost:"1W", Color:["W"], Rarity:"R", Type:["I"], Rating:"5", Sort:"1", Set:"ORI", Number:"16", Image:"/Images/ORI/HallowedMoonlight.jpg"},
{Name:"Healing Hands", Cost:"2W", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"17", Image:"/Images/ORI/HealingHands.jpg"},
{Name:"Heavy Infantry", Cost:"4W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"18", Image:"/Images/ORI/HeavyInfantry.jpg"},
{Name:"Hixus, Prison Warden", Cost:"3WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"19", Image:"/Images/ORI/Hixus--PrisonWarden.jpg"},
{Name:"Knight of the Pilgrim's Road", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"20", Image:"/Images/ORI/KnightofthePilgrimsRoad.jpg"},
{Name:"Knight of the White Orchid", Cost:"0WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"21", Image:"/Images/ORI/KnightoftheWhiteOrchid.jpg"},
{Name:"Knightly Valor", Cost:"4W", Color:["W"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"22", Image:"/Images/ORI/KnightlyValor.jpg"},
{Name:"Kytheon, Hero of Akros", Cost:"0W", Color:["W"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"23", Image:"/Images/ORI/Kytheon--HeroofAkros.jpg"},
{Name:"Kytheon's Irregulars", Cost:"2WW", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"24", Image:"/Images/ORI/KytheonsIrregulars.jpg"},
{Name:"Kytheon's Tactics", Cost:"1WW", Color:["W"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"25", Image:"/Images/ORI/KytheonsTactics.jpg"},
{Name:"Mighty Leap", Cost:"1W", Color:["W"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"ORI", Number:"26", Image:"/Images/ORI/MightyLeap.jpg"},
{Name:"Murder Investigation", Cost:"1W", Color:["W"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"ORI", Number:"27", Image:"/Images/ORI/MurderInvestigation.jpg"},
{Name:"Patron of the Valiant", Cost:"3WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"28", Image:"/Images/ORI/PatronoftheValiant.jpg"},
{Name:"Relic Seeker", Cost:"1W", Color:["W"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"29", Image:"/Images/ORI/RelicSeeker.jpg"},
{Name:"Sentinel of the Eternal Watch", Cost:"5W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"30", Image:"/Images/ORI/SentineloftheEternalWatch.jpg"},
{Name:"Sigil of the Empty Throne", Cost:"3WW", Color:["W"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"ORI", Number:"31", Image:"/Images/ORI/SigiloftheEmptyThrone.jpg"},
{Name:"Stalwart Aven", Cost:"2W", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"32", Image:"/Images/ORI/StalwartAven.jpg"},
{Name:"Starfield of Nyx", Cost:"4W", Color:["W"], Rarity:"M", Type:["E"], Rating:"9", Sort:"1", Set:"ORI", Number:"33", Image:"/Images/ORI/StarfieldofNyx.jpg"},
{Name:"Suppression Bonds", Cost:"3W", Color:["W"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"ORI", Number:"34", Image:"/Images/ORI/SuppressionBonds.jpg"},
{Name:"Swift Reckoning", Cost:"1W", Color:["W"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"ORI", Number:"35", Image:"/Images/ORI/SwiftReckoning.jpg"},
{Name:"Topan Freeblade", Cost:"1W", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"36", Image:"/Images/ORI/TopanFreeblade.jpg"},
{Name:"Totem-Guide Hartebeest", Cost:"4W", Color:["W"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"37", Image:"/Images/ORI/Totem-GuideHartebeest.jpg"},
{Name:"Tragic Arrogance", Cost:"3WW", Color:["W"], Rarity:"R", Type:["S"], Rating:"9", Sort:"1", Set:"ORI", Number:"38", Image:"/Images/ORI/TragicArrogance.jpg"},
{Name:"Valor in Akros", Cost:"3W", Color:["W"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"ORI", Number:"39", Image:"/Images/ORI/ValorinAkros.jpg"},
{Name:"Vryn Wingmare", Cost:"2W", Color:["W"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"40", Image:"/Images/ORI/VrynWingmare.jpg"},
{Name:"War Oracle", Cost:"2WW", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"41", Image:"/Images/ORI/WarOracle.jpg"},
{Name:"Yoked Ox", Cost:"0W", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"42", Image:"/Images/ORI/YokedOx.jpg"},
{Name:"Alhammarret, High Arbiter", Cost:"5UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"43", Image:"/Images/ORI/Alhammarret--HighArbiter.jpg"},
{Name:"Anchor to the AEther", Cost:"2U", Color:["U"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"44", Image:"/Images/ORI/AnchortotheAEther.jpg"},
{Name:"Artificer's Epiphany", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"ORI", Number:"45", Image:"/Images/ORI/ArtificersEpiphany.jpg"},
{Name:"Aspiring Aeronaut", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"46", Image:"/Images/ORI/AspiringAeronaut.jpg"},
{Name:"Bone to Ash", Cost:"2UU", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"ORI", Number:"47", Image:"/Images/ORI/BonetoAsh.jpg"},
{Name:"Calculated Dismissal", Cost:"2U", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"ORI", Number:"48", Image:"/Images/ORI/CalculatedDismissal.jpg"},
{Name:"Clash of Wills", Cost:"0U", Color:["U"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"ORI", Number:"49", Image:"/Images/ORI/ClashofWills.jpg"},
{Name:"Claustrophobia", Cost:"1UU", Color:["U"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"ORI", Number:"50", Image:"/Images/ORI/Claustrophobia.jpg"},
{Name:"Day's Undoing", Cost:"2U", Color:["U"], Rarity:"M", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"51", Image:"/Images/ORI/DaysUndoing.jpg"},
{Name:"Deep-Sea Terror", Cost:"4UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"52", Image:"/Images/ORI/Deep-SeaTerror.jpg"},
{Name:"Disciple of the Ring", Cost:"3UU", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"53", Image:"/Images/ORI/DiscipleoftheRing.jpg"},
{Name:"Disperse", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"54", Image:"/Images/ORI/Disperse.jpg"},
{Name:"Displacement Wave", Cost:"0UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"ORI", Number:"55", Image:"/Images/ORI/DisplacementWave.jpg"},
{Name:"Dreadwaters", Cost:"3U", Color:["U"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"ORI", Number:"56", Image:"/Images/ORI/Dreadwaters.jpg"},
{Name:"Faerie Miscreant", Cost:"0U", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"57", Image:"/Images/ORI/FaerieMiscreant.jpg"},
{Name:"Harbinger of the Tides", Cost:"0UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"58", Image:"/Images/ORI/HarbingeroftheTides.jpg"},
{Name:"Hydrolash", Cost:"2U", Color:["U"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"ORI", Number:"59", Image:"/Images/ORI/Hydrolash.jpg"},
{Name:"Jace, Vryn's Prodigy", Cost:"1U", Color:["U"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"60", Image:"/Images/ORI/Jace--VrynsProdigy.jpg"},
{Name:"Jace's Sanctum", Cost:"3U", Color:["U"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"ORI", Number:"61", Image:"/Images/ORI/JacesSanctum.jpg"},
{Name:"Jhessian Thief", Cost:"2U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"62", Image:"/Images/ORI/JhessianThief.jpg"},
{Name:"Maritime Guard", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"63", Image:"/Images/ORI/MaritimeGuard.jpg"},
{Name:"Mizzium Meddler", Cost:"2U", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"64", Image:"/Images/ORI/MizziumMeddler.jpg"},
{Name:"Negate", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"65", Image:"/Images/ORI/Negate.jpg"},
{Name:"Nivix Barrier", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"66", Image:"/Images/ORI/NivixBarrier.jpg"},
{Name:"Psychic Rebuttal", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"ORI", Number:"67", Image:"/Images/ORI/PsychicRebuttal.jpg"},
{Name:"Ringwarden Owl", Cost:"3UU", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"68", Image:"/Images/ORI/RingwardenOwl.jpg"},
{Name:"Scrapskin Drake", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"69", Image:"/Images/ORI/ScrapskinDrake.jpg"},
{Name:"Screeching Skaab", Cost:"1U", Color:["U"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"70", Image:"/Images/ORI/ScreechingSkaab.jpg"},
{Name:"Send to Sleep", Cost:"1U", Color:["U"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"71", Image:"/Images/ORI/SendtoSleep.jpg"},
{Name:"Separatist Voidmage", Cost:"3U", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"72", Image:"/Images/ORI/SeparatistVoidmage.jpg"},
{Name:"Sigiled Starfish", Cost:"1U", Color:["U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"73", Image:"/Images/ORI/SigiledStarfish.jpg"},
{Name:"Skaab Goliath", Cost:"5U", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"74", Image:"/Images/ORI/SkaabGoliath.jpg"},
{Name:"Soulblade Djinn", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"75", Image:"/Images/ORI/SoulbladeDjinn.jpg"},
{Name:"Sphinx's Tutelage", Cost:"2U", Color:["U"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"ORI", Number:"76", Image:"/Images/ORI/SphinxsTutelage.jpg"},
{Name:"Stratus Walk", Cost:"1U", Color:["U"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"77", Image:"/Images/ORI/StratusWalk.jpg"},
{Name:"Talent of the Telepath", Cost:"2UU", Color:["U"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"ORI", Number:"78", Image:"/Images/ORI/TalentoftheTelepath.jpg"},
{Name:"Thopter Spy Network", Cost:"2UU", Color:["U"], Rarity:"R", Type:["E"], Rating:"8", Sort:"1", Set:"ORI", Number:"79", Image:"/Images/ORI/ThopterSpyNetwork.jpg"},
{Name:"Tower Geist", Cost:"3U", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"80", Image:"/Images/ORI/TowerGeist.jpg"},
{Name:"Turn to Frog", Cost:"1U", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"ORI", Number:"81", Image:"/Images/ORI/TurntoFrog.jpg"},
{Name:"Watercourser", Cost:"2U", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"82", Image:"/Images/ORI/Watercourser.jpg"},
{Name:"Whirler Rogue", Cost:"2UU", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"83", Image:"/Images/ORI/WhirlerRogue.jpg"},
{Name:"Willbreaker", Cost:"3UU", Color:["U"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"84", Image:"/Images/ORI/Willbreaker.jpg"},
{Name:"Blightcaster", Cost:"3B", Color:["B"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"85", Image:"/Images/ORI/Blightcaster.jpg"},
{Name:"Catacomb Slug", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"86", Image:"/Images/ORI/CatacombSlug.jpg"},
{Name:"Consecrated by Blood", Cost:"2BB", Color:["B"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"87", Image:"/Images/ORI/ConsecratedbyBlood.jpg"},
{Name:"Cruel Revival", Cost:"4B", Color:["B"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"ORI", Number:"88", Image:"/Images/ORI/CruelRevival.jpg"},
{Name:"Dark Dabbling", Cost:"2B", Color:["B"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"ORI", Number:"89", Image:"/Images/ORI/DarkDabbling.jpg"},
{Name:"Dark Petition", Cost:"3BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"ORI", Number:"90", Image:"/Images/ORI/DarkPetition.jpg"},
{Name:"Deadbridge Shaman", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"91", Image:"/Images/ORI/DeadbridgeShaman.jpg"},
{Name:"Demonic Pact", Cost:"2BB", Color:["B"], Rarity:"M", Type:["E"], Rating:"7", Sort:"1", Set:"ORI", Number:"92", Image:"/Images/ORI/DemonicPact.jpg"},
{Name:"Despoiler of Souls", Cost:"0BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"93", Image:"/Images/ORI/DespoilerofSouls.jpg"},
{Name:"Erebos's Titan", Cost:"1BBB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"94", Image:"/Images/ORI/ErebossTitan.jpg"},
{Name:"Eyeblight Assassin", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"95", Image:"/Images/ORI/EyeblightAssassin.jpg"},
{Name:"Eyeblight Massacre", Cost:"2BB", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"96", Image:"/Images/ORI/EyeblightMassacre.jpg"},
{Name:"Fetid Imp", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"97", Image:"/Images/ORI/FetidImp.jpg"},
{Name:"Fleshbag Marauder", Cost:"2B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"98", Image:"/Images/ORI/FleshbagMarauder.jpg"},
{Name:"Gilt-Leaf Winnower", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"99", Image:"/Images/ORI/Gilt-LeafWinnower.jpg"},
{Name:"Gnarlroot Trapper", Cost:"0B", Color:["B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"100", Image:"/Images/ORI/GnarlrootTrapper.jpg"},
{Name:"Graveblade Marauder", Cost:"2B", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"101", Image:"/Images/ORI/GravebladeMarauder.jpg"},
{Name:"Infernal Scarring", Cost:"1B", Color:["B"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"102", Image:"/Images/ORI/InfernalScarring.jpg"},
{Name:"Infinite Obliteration", Cost:"1BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"ORI", Number:"103", Image:"/Images/ORI/InfiniteObliteration.jpg"},
{Name:"Kothophed, Soul Hoarder", Cost:"4BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"104", Image:"/Images/ORI/Kothophed--SoulHoarder.jpg"},
{Name:"Languish", Cost:"2BB", Color:["B"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"ORI", Number:"105", Image:"/Images/ORI/Languish.jpg"},
{Name:"Liliana, Heretical Healer", Cost:"1BB", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"106", Image:"/Images/ORI/Liliana--HereticalHealer.jpg"},
{Name:"Macabre Waltz", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"107", Image:"/Images/ORI/MacabreWaltz.jpg"},
{Name:"Malakir Cullblade", Cost:"1B", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"108", Image:"/Images/ORI/MalakirCullblade.jpg"},
{Name:"Nantuko Husk", Cost:"2B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"109", Image:"/Images/ORI/NantukoHusk.jpg"},
{Name:"Necromantic Summons", Cost:"4B", Color:["B"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"110", Image:"/Images/ORI/NecromanticSummons.jpg"},
{Name:"Nightsnare", Cost:"3B", Color:["B"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"111", Image:"/Images/ORI/Nightsnare.jpg"},
{Name:"Priest of the Blood Rite", Cost:"3BB", Color:["B"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"112", Image:"/Images/ORI/PriestoftheBloodRite.jpg"},
{Name:"Rabid Bloodsucker", Cost:"4B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"113", Image:"/Images/ORI/RabidBloodsucker.jpg"},
{Name:"Read the Bones", Cost:"2B", Color:["B"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"114", Image:"/Images/ORI/ReadtheBones.jpg"},
{Name:"Reave Soul", Cost:"1B", Color:["B"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"115", Image:"/Images/ORI/ReaveSoul.jpg"},
{Name:"Returned Centaur", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"116", Image:"/Images/ORI/ReturnedCentaur.jpg"},
{Name:"Revenant", Cost:"4B", Color:["B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"117", Image:"/Images/ORI/Revenant.jpg"},
{Name:"Shadows of the Past", Cost:"1B", Color:["B"], Rarity:"U", Type:["E"], Rating:"5", Sort:"1", Set:"ORI", Number:"118", Image:"/Images/ORI/ShadowsofthePast.jpg"},
{Name:"Shambling Ghoul", Cost:"1B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"119", Image:"/Images/ORI/ShamblingGhoul.jpg"},
{Name:"Tainted Remedy", Cost:"2B", Color:["B"], Rarity:"R", Type:["E"], Rating:"5", Sort:"1", Set:"ORI", Number:"120", Image:"/Images/ORI/TaintedRemedy.jpg"},
{Name:"Thornbow Archer", Cost:"0B", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"121", Image:"/Images/ORI/ThornbowArcher.jpg"},
{Name:"Tormented Thoughts", Cost:"2B", Color:["B"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"ORI", Number:"122", Image:"/Images/ORI/TormentedThoughts.jpg"},
{Name:"Touch of Moonglove", Cost:"0B", Color:["B"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"123", Image:"/Images/ORI/TouchofMoonglove.jpg"},
{Name:"Undead Servant", Cost:"3B", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"124", Image:"/Images/ORI/UndeadServant.jpg"},
{Name:"Unholy Hunger", Cost:"3BB", Color:["B"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"ORI", Number:"125", Image:"/Images/ORI/UnholyHunger.jpg"},
{Name:"Weight of the Underworld", Cost:"3B", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"ORI", Number:"126", Image:"/Images/ORI/WeightoftheUnderworld.jpg"},
{Name:"Abbot of Keral Keep", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"127", Image:"/Images/ORI/AbbotofKeralKeep.jpg"},
{Name:"Acolyte of the Inferno", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"128", Image:"/Images/ORI/AcolyteoftheInferno.jpg"},
{Name:"Act of Treason", Cost:"2R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"129", Image:"/Images/ORI/ActofTreason.jpg"},
{Name:"Akroan Sergeant", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"130", Image:"/Images/ORI/AkroanSergeant.jpg"},
{Name:"Avaricious Dragon", Cost:"2RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"131", Image:"/Images/ORI/AvariciousDragon.jpg"},
{Name:"Bellows Lizard", Cost:"0R", Color:["R"], Rarity:"C", Type:["C"], Rating:"1", Sort:"1", Set:"ORI", Number:"132", Image:"/Images/ORI/BellowsLizard.jpg"},
{Name:"Boggart Brute", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"133", Image:"/Images/ORI/BoggartBrute.jpg"},
{Name:"Call of the Full Moon", Cost:"1R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"ORI", Number:"134", Image:"/Images/ORI/CalloftheFullMoon.jpg"},
{Name:"Chandra, Fire of Kaladesh", Cost:"1RR", Color:["R"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"135", Image:"/Images/ORI/Chandra--FireofKaladesh.jpg"},
{Name:"Chandra's Fury", Cost:"4R", Color:["R"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"ORI", Number:"136", Image:"/Images/ORI/ChandrasFury.jpg"},
{Name:"Chandra's Ignition", Cost:"3RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"ORI", Number:"137", Image:"/Images/ORI/ChandrasIgnition.jpg"},
{Name:"Cobblebrute", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"138", Image:"/Images/ORI/Cobblebrute.jpg"},
{Name:"Demolish", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"ORI", Number:"139", Image:"/Images/ORI/Demolish.jpg"},
{Name:"Dragon Fodder", Cost:"1R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"ORI", Number:"140", Image:"/Images/ORI/DragonFodder.jpg"},
{Name:"Embermaw Hellion", Cost:"3RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"141", Image:"/Images/ORI/EmbermawHellion.jpg"},
{Name:"Enthralling Victor", Cost:"3R", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"142", Image:"/Images/ORI/EnthrallingVictor.jpg"},
{Name:"Exquisite Firecraft", Cost:"1RR", Color:["R"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"ORI", Number:"143", Image:"/Images/ORI/ExquisiteFirecraft.jpg"},
{Name:"Fiery Conclusion", Cost:"1R", Color:["R"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"ORI", Number:"144", Image:"/Images/ORI/FieryConclusion.jpg"},
{Name:"Fiery Impulse", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"ORI", Number:"145", Image:"/Images/ORI/FieryImpulse.jpg"},
{Name:"Firefiend Elemental", Cost:"3R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"146", Image:"/Images/ORI/FirefiendElemental.jpg"},
{Name:"Flameshadow Conjuring", Cost:"3R", Color:["R"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"ORI", Number:"147", Image:"/Images/ORI/FlameshadowConjuring.jpg"},
{Name:"Ghirapur AEther Grid", Cost:"2R", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"ORI", Number:"148", Image:"/Images/ORI/GhirapurAEtherGrid.jpg"},
{Name:"Ghirapur Gearcrafter", Cost:"2R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"149", Image:"/Images/ORI/GhirapurGearcrafter.jpg"},
{Name:"Goblin Glory Chaser", Cost:"0R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"150", Image:"/Images/ORI/GoblinGloryChaser.jpg"},
{Name:"Goblin Piledriver", Cost:"1R", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"151", Image:"/Images/ORI/GoblinPiledriver.jpg"},
{Name:"Infectious Bloodlust", Cost:"1R", Color:["R"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"ORI", Number:"152", Image:"/Images/ORI/InfectiousBloodlust.jpg"},
{Name:"Lightning Javelin", Cost:"3R", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"ORI", Number:"153", Image:"/Images/ORI/LightningJavelin.jpg"},
{Name:"Mage-Ring Bully", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"154", Image:"/Images/ORI/Mage-RingBully.jpg"},
{Name:"Magmatic Insight", Cost:"0R", Color:["R"], Rarity:"U", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"155", Image:"/Images/ORI/MagmaticInsight.jpg"},
{Name:"Molten Vortex", Cost:"0R", Color:["R"], Rarity:"R", Type:["E"], Rating:"6", Sort:"1", Set:"ORI", Number:"156", Image:"/Images/ORI/MoltenVortex.jpg"},
{Name:"Pia and Kiran Nalaar", Cost:"2RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"157", Image:"/Images/ORI/PiaandKiranNalaar.jpg"},
{Name:"Prickleboar", Cost:"4R", Color:["R"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"158", Image:"/Images/ORI/Prickleboar.jpg"},
{Name:"Ravaging Blaze", Cost:"0RR", Color:["R"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"ORI", Number:"159", Image:"/Images/ORI/RavagingBlaze.jpg"},
{Name:"Scab-Clan Berserker", Cost:"1RR", Color:["R"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"160", Image:"/Images/ORI/Scab-ClanBerserker.jpg"},
{Name:"Seismic Elemental", Cost:"3RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"161", Image:"/Images/ORI/SeismicElemental.jpg"},
{Name:"Skyraker Giant", Cost:"2RR", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"162", Image:"/Images/ORI/SkyrakerGiant.jpg"},
{Name:"Smash to Smithereens", Cost:"1R", Color:["R"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"ORI", Number:"163", Image:"/Images/ORI/SmashtoSmithereens.jpg"},
{Name:"Subterranean Scout", Cost:"1R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"164", Image:"/Images/ORI/SubterraneanScout.jpg"},
{Name:"Thopter Engineer", Cost:"2R", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"165", Image:"/Images/ORI/ThopterEngineer.jpg"},
{Name:"Titan's Strength", Cost:"0R", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"ORI", Number:"166", Image:"/Images/ORI/TitansStrength.jpg"},
{Name:"Volcanic Rambler", Cost:"5R", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"167", Image:"/Images/ORI/VolcanicRambler.jpg"},
{Name:"Aerial Volley", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"168", Image:"/Images/ORI/AerialVolley.jpg"},
{Name:"Animist's Awakening", Cost:"0G", Color:["G"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"ORI", Number:"169", Image:"/Images/ORI/AnimistsAwakening.jpg"},
{Name:"Caustic Caterpillar", Cost:"0G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"170", Image:"/Images/ORI/CausticCaterpillar.jpg"},
{Name:"Conclave Naturalists", Cost:"4G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"171", Image:"/Images/ORI/ConclaveNaturalists.jpg"},
{Name:"Dwynen, Gilt-Leaf Daen", Cost:"2GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"172", Image:"/Images/ORI/Dwynen--Gilt-LeafDaen.jpg"},
{Name:"Dwynen's Elite", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"173", Image:"/Images/ORI/DwynensElite.jpg"},
{Name:"Elemental Bond", Cost:"2G", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"ORI", Number:"174", Image:"/Images/ORI/ElementalBond.jpg"},
{Name:"Elvish Visionary", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"175", Image:"/Images/ORI/ElvishVisionary.jpg"},
{Name:"Evolutionary Leap", Cost:"1G", Color:["G"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"ORI", Number:"176", Image:"/Images/ORI/EvolutionaryLeap.jpg"},
{Name:"Gaea's Revenge", Cost:"5GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"177", Image:"/Images/ORI/GaeasRevenge.jpg"},
{Name:"Gather the Pack", Cost:"1G", Color:["G"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"ORI", Number:"178", Image:"/Images/ORI/GatherthePack.jpg"},
{Name:"The Great Aurora", Cost:"6GGG", Color:["G"], Rarity:"M", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"179", Image:"/Images/ORI/TheGreatAurora.jpg"},
{Name:"Herald of the Pantheon", Cost:"1G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"180", Image:"/Images/ORI/HeraldofthePantheon.jpg"},
{Name:"Hitchclaw Recluse", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"181", Image:"/Images/ORI/HitchclawRecluse.jpg"},
{Name:"Honored Hierarch", Cost:"0G", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"182", Image:"/Images/ORI/HonoredHierarch.jpg"},
{Name:"Joraga Invocation", Cost:"4GG", Color:["G"], Rarity:"U", Type:["S"], Rating:"3", Sort:"1", Set:"ORI", Number:"183", Image:"/Images/ORI/JoragaInvocation.jpg"},
{Name:"Leaf Gilder", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"184", Image:"/Images/ORI/LeafGilder.jpg"},
{Name:"Llanowar Empath", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"185", Image:"/Images/ORI/LlanowarEmpath.jpg"},
{Name:"Managorger Hydra", Cost:"2G", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"186", Image:"/Images/ORI/ManagorgerHydra.jpg"},
{Name:"Mantle of Webs", Cost:"1G", Color:["G"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"ORI", Number:"187", Image:"/Images/ORI/MantleofWebs.jpg"},
{Name:"Might of the Masses", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"188", Image:"/Images/ORI/MightoftheMasses.jpg"},
{Name:"Nissa, Vastwood Seer", Cost:"2G", Color:["G"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"189", Image:"/Images/ORI/Nissa--VastwoodSeer.jpg"},
{Name:"Nissa's Pilgrimage", Cost:"2G", Color:["G"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"ORI", Number:"190", Image:"/Images/ORI/NissasPilgrimage.jpg"},
{Name:"Nissa's Revelation", Cost:"5GG", Color:["G"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"ORI", Number:"191", Image:"/Images/ORI/NissasRevelation.jpg"},
{Name:"Orchard Spirit", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"192", Image:"/Images/ORI/OrchardSpirit.jpg"},
{Name:"Outland Colossus", Cost:"3GG", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"193", Image:"/Images/ORI/OutlandColossus.jpg"},
{Name:"Pharika's Disciple", Cost:"3G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"194", Image:"/Images/ORI/PharikasDisciple.jpg"},
{Name:"Reclaim", Cost:"0G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"195", Image:"/Images/ORI/Reclaim.jpg"},
{Name:"Rhox Maulers", Cost:"4G", Color:["G"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"196", Image:"/Images/ORI/RhoxMaulers.jpg"},
{Name:"Skysnare Spider", Cost:"4GG", Color:["G"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"197", Image:"/Images/ORI/SkysnareSpider.jpg"},
{Name:"Somberwald Alpha", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"198", Image:"/Images/ORI/SomberwaldAlpha.jpg"},
{Name:"Sylvan Messenger", Cost:"3G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"199", Image:"/Images/ORI/SylvanMessenger.jpg"},
{Name:"Timberpack Wolf", Cost:"1G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"200", Image:"/Images/ORI/TimberpackWolf.jpg"},
{Name:"Titanic Growth", Cost:"1G", Color:["G"], Rarity:"C", Type:["I"], Rating:"2", Sort:"1", Set:"ORI", Number:"201", Image:"/Images/ORI/TitanicGrowth.jpg"},
{Name:"Undercity Troll", Cost:"1G", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"202", Image:"/Images/ORI/UndercityTroll.jpg"},
{Name:"Valeron Wardens", Cost:"2G", Color:["G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"203", Image:"/Images/ORI/ValeronWardens.jpg"},
{Name:"Vastwood Gorger", Cost:"5G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"204", Image:"/Images/ORI/VastwoodGorger.jpg"},
{Name:"Vine Snare", Cost:"2G", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"ORI", Number:"205", Image:"/Images/ORI/VineSnare.jpg"},
{Name:"Wild Instincts", Cost:"3G", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"ORI", Number:"206", Image:"/Images/ORI/WildInstincts.jpg"},
{Name:"Woodland Bellower", Cost:"4GG", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"ORI", Number:"207", Image:"/Images/ORI/WoodlandBellower.jpg"},
{Name:"Yeva's Forcemage", Cost:"2G", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"208", Image:"/Images/ORI/YevasForcemage.jpg"},
{Name:"Zendikar's Roil", Cost:"3GG", Color:["G"], Rarity:"U", Type:["E"], Rating:"6", Sort:"1", Set:"ORI", Number:"209", Image:"/Images/ORI/ZendikarsRoil.jpg"},
{Name:"Blazing Hellhound", Cost:"2BR", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"210", Image:"/Images/ORI/BlazingHellhound.jpg"},
{Name:"Blood-Cursed Knight", Cost:"1WB", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"211", Image:"/Images/ORI/Blood-CursedKnight.jpg"},
{Name:"Bounding Krasis", Cost:"1UG", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"212", Image:"/Images/ORI/BoundingKrasis.jpg"},
{Name:"Citadel Castellan", Cost:"1WG", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"213", Image:"/Images/ORI/CitadelCastellan.jpg"},
{Name:"Iroas's Champion", Cost:"1WR", Color:["W","R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"214", Image:"/Images/ORI/IroassChampion.jpg"},
{Name:"Possessed Skaab", Cost:"3UB", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"215", Image:"/Images/ORI/PossessedSkaab.jpg"},
{Name:"Reclusive Artificer", Cost:"2UR", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"216", Image:"/Images/ORI/ReclusiveArtificer.jpg"},
{Name:"Shaman of the Pack", Cost:"1BG", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"ORI", Number:"217", Image:"/Images/ORI/ShamanofthePack.jpg"},
{Name:"Thunderclap Wyvern", Cost:"2WU", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"218", Image:"/Images/ORI/ThunderclapWyvern.jpg"},
{Name:"Zendikar Incarnate", Cost:"2RG", Color:["R","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"219", Image:"/Images/ORI/ZendikarIncarnate.jpg"},
{Name:"Alchemist's Vial", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"ORI", Number:"220", Image:"/Images/ORI/AlchemistsVial.jpg"},
{Name:"Alhammarret's Archive", Cost:"5", Color:["C"], Rarity:"M", Type:["A"], Rating:"6", Sort:"1", Set:"ORI", Number:"221", Image:"/Images/ORI/AlhammarretsArchive.jpg"},
{Name:"Angel's Tomb", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"ORI", Number:"222", Image:"/Images/ORI/AngelsTomb.jpg"},
{Name:"Bonded Construct", Cost:"1", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"223", Image:"/Images/ORI/BondedConstruct.jpg"},
{Name:"Brawler's Plate", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"ORI", Number:"224", Image:"/Images/ORI/BrawlersPlate.jpg"},
{Name:"Chief of the Foundry", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"ORI", Number:"225", Image:"/Images/ORI/ChiefoftheFoundry.jpg"},
{Name:"Gold-Forged Sentinel", Cost:"6", Color:["C"], Rarity:"U", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"226", Image:"/Images/ORI/Gold-ForgedSentinel.jpg"},
{Name:"Guardian Automaton", Cost:"4", Color:["C"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"227", Image:"/Images/ORI/GuardianAutomaton.jpg"},
{Name:"Guardians of Meletis", Cost:"3", Color:["C"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"ORI", Number:"228", Image:"/Images/ORI/GuardiansofMeletis.jpg"},
{Name:"Hangarback Walker", Cost:"0", Color:["C"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"ORI", Number:"229", Image:"/Images/ORI/HangarbackWalker.jpg"},
{Name:"Helm of the Gods", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"ORI", Number:"230", Image:"/Images/ORI/HelmoftheGods.jpg"},
{Name:"Jayemdae Tome", Cost:"4", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"ORI", Number:"231", Image:"/Images/ORI/JayemdaeTome.jpg"},
{Name:"Mage-Ring Responder", Cost:"7", Color:["C"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"ORI", Number:"232", Image:"/Images/ORI/Mage-RingResponder.jpg"},
{Name:"Meteorite", Cost:"5", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"ORI", Number:"233", Image:"/Images/ORI/Meteorite.jpg"},
{Name:"Orbs of Warding", Cost:"5", Color:["C"], Rarity:"R", Type:["A"], Rating:"5", Sort:"1", Set:"ORI", Number:"234", Image:"/Images/ORI/OrbsofWarding.jpg"},
{Name:"Prism Ring", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"1", Sort:"1", Set:"ORI", Number:"235", Image:"/Images/ORI/PrismRing.jpg"},
{Name:"Pyromancer's Goggles", Cost:"5", Color:["R"], Rarity:"M", Type:["A"], Rating:"7", Sort:"1", Set:"ORI", Number:"236", Image:"/Images/ORI/PyromancersGoggles.jpg"},
{Name:"Ramroller", Cost:"3", Color:["C"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"ORI", Number:"237", Image:"/Images/ORI/Ramroller.jpg"},
{Name:"Runed Servitor", Cost:"2", Color:["C"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"ORI", Number:"238", Image:"/Images/ORI/RunedServitor.jpg"},
{Name:"Sigil of Valor", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"ORI", Number:"239", Image:"/Images/ORI/SigilofValor.jpg"},
{Name:"Sword of the Animist", Cost:"2", Color:["C"], Rarity:"R", Type:["A"], Rating:"7", Sort:"1", Set:"ORI", Number:"240", Image:"/Images/ORI/SwordoftheAnimist.jpg"},
{Name:"Throwing Knife", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"4", Sort:"1", Set:"ORI", Number:"241", Image:"/Images/ORI/ThrowingKnife.jpg"},
{Name:"Veteran's Sidearm", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"2", Sort:"1", Set:"ORI", Number:"242", Image:"/Images/ORI/VeteransSidearm.jpg"},
{Name:"War Horn", Cost:"3", Color:["C"], Rarity:"U", Type:["A"], Rating:"5", Sort:"1", Set:"ORI", Number:"243", Image:"/Images/ORI/WarHorn.jpg"},
{Name:"Battlefield Forge", Cost:"0", Color:["W","R"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"ORI", Number:"244", Image:"/Images/ORI/BattlefieldForge.jpg"},
{Name:"Caves of Koilos", Cost:"0", Color:["W","B"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"ORI", Number:"245", Image:"/Images/ORI/CavesofKoilos.jpg"},
{Name:"Evolving Wilds", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"ORI", Number:"246", Image:"/Images/ORI/EvolvingWilds.jpg"},
{Name:"Foundry of the Consuls", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"5", Sort:"1", Set:"ORI", Number:"247", Image:"/Images/ORI/FoundryoftheConsuls.jpg"},
{Name:"Llanowar Wastes", Cost:"0", Color:["B","G"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"ORI", Number:"248", Image:"/Images/ORI/LlanowarWastes.jpg"},
{Name:"Mage-Ring Network", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"6", Sort:"1", Set:"ORI", Number:"249", Image:"/Images/ORI/Mage-RingNetwork.jpg"},
{Name:"Rogue's Passage", Cost:"0", Color:["C"], Rarity:"U", Type:["L"], Rating:"4", Sort:"1", Set:"ORI", Number:"250", Image:"/Images/ORI/RoguesPassage.jpg"},
{Name:"Shivan Reef", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"ORI", Number:"251", Image:"/Images/ORI/ShivanReef.jpg"},
{Name:"Yavimaya Coast", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"7", Sort:"1", Set:"ORI", Number:"252", Image:"/Images/ORI/YavimayaCoast.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"253", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"254", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"255", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"256", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"257", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"258", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"259", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"260", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"261", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"262", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"263", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"264", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"265", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"266", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"267", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"268", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"269", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"270", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"271", Image:"/Images/ORI/.jpg"},
{Name:"", Cost:"", Color:[], Rarity:"", Type:[], Rating:"", Sort:"1", Set:"ORI", Number:"272", Image:"/Images/ORI/.jpg"},
];

var THS = [
{Name:"Battlewise Valor", Cost:"2", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"1", Image:"/Images/THS/1.jpg"},
{Name:"Cavalry Pegasus", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"2", Image:"/Images/THS/2.jpg"},
{Name:"Celestial Archon", Cost:"5", Color:["W"], Rarity:"R", Type:["E","C"], Rating:"9", Sort:"1", Set:"THS", Number:"3", Image:"/Images/THS/3.jpg"},
{Name:"Chained to the Rocks", Cost:"1", Color:["W"], Rarity:"R", Type:["E"], Rating:"7", Sort:"1", Set:"THS", Number:"4", Image:"/Images/THS/4.jpg"},
{Name:"Chosen by Heliod", Cost:"2", Color:["W"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"THS", Number:"5", Image:"/Images/THS/5.jpg"},
{Name:"Dauntless Onslaught", Cost:"3", Color:["W"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"6", Image:"/Images/THS/6.jpg"},
{Name:"Decorated Griffin", Cost:"5", Color:["W"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"7", Image:"/Images/THS/7.jpg"},
{Name:"Divine Verdict", Cost:"4", Color:["W"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"8", Image:"/Images/THS/8.jpg"},
{Name:"Elspeth, Sun's Champion", Cost:"6", Color:["W"], Rarity:"M", Type:["P"], Rating:"9", Sort:"1", Set:"THS", Number:"9", Image:"/Images/THS/9.jpg"},
{Name:"Ephara's Warden", Cost:"4", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"10", Image:"/Images/THS/10.jpg"},
{Name:"Evangel of Heliod", Cost:"6", Color:["W"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"11", Image:"/Images/THS/11.jpg"},
{Name:"Fabled Hero", Cost:"3", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"12", Image:"/Images/THS/12.jpg"},
{Name:"Favored Hoplite", Cost:"1", Color:["W"], Rarity:"U", Type:["C"], Rating:"2", Sort:"1", Set:"THS", Number:"13", Image:"/Images/THS/13.jpg"},
{Name:"Gift of Immortality", Cost:"3", Color:["W"], Rarity:"R", Type:["E"], Rating:"3", Sort:"1", Set:"THS", Number:"14", Image:"/Images/THS/14.jpg"},
{Name:"Glare of Heresy", Cost:"2", Color:["W"], Rarity:"U", Type:["S"], Rating:"1", Sort:"1", Set:"THS", Number:"15", Image:"/Images/THS/15.jpg"},
{Name:"Gods Willing", Cost:"1", Color:["W"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"THS", Number:"16", Image:"/Images/THS/16.jpg"},
{Name:"Heliod, God of the Sun", Cost:"4", Color:["W"], Rarity:"M", Type:["E","C"], Rating:"9", Sort:"1", Set:"THS", Number:"17", Image:"/Images/THS/17.jpg"},
{Name:"Heliod's Emissary", Cost:"4", Color:["W"], Rarity:"U", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"18", Image:"/Images/THS/18.jpg"},
{Name:"Hopeful Eidolon", Cost:"1", Color:["W"], Rarity:"C", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"19", Image:"/Images/THS/19.jpg"},
{Name:"Hundred-Handed One", Cost:"4", Color:["W"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"20", Image:"/Images/THS/20.jpg"},
{Name:"Lagonna-Band Elder", Cost:"3", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"21", Image:"/Images/THS/21.jpg"},
{Name:"Last Breath", Cost:"2", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"22", Image:"/Images/THS/22.jpg"},
{Name:"Leonin Snarecaster", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"23", Image:"/Images/THS/23.jpg"},
{Name:"Observant Alseid", Cost:"3", Color:["W"], Rarity:"C", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"24", Image:"/Images/THS/24.jpg"},
{Name:"Ordeal of Heliod", Cost:"2", Color:["W"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"THS", Number:"25", Image:"/Images/THS/25.jpg"},
{Name:"Phalanx Leader", Cost:"2", Color:["W"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"26", Image:"/Images/THS/26.jpg"},
{Name:"Ray of Dissolution", Cost:"3", Color:["W"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"27", Image:"/Images/THS/27.jpg"},
{Name:"Scholar of Athreos", Cost:"3", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"28", Image:"/Images/THS/28.jpg"},
{Name:"Setessan Battle Priest", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"THS", Number:"29", Image:"/Images/THS/29.jpg"},
{Name:"Setessan Griffin", Cost:"5", Color:["W"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"30", Image:"/Images/THS/30.jpg"},
{Name:"Silent Artisan", Cost:"5", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"31", Image:"/Images/THS/31.jpg"},
{Name:"Soldier of the Pantheon", Cost:"1", Color:["W"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"32", Image:"/Images/THS/32.jpg"},
{Name:"Spear of Heliod", Cost:"3", Color:["W"], Rarity:"R", Type:["E","A"], Rating:"9", Sort:"1", Set:"THS", Number:"33", Image:"/Images/THS/33.jpg"},
{Name:"Traveling Philosopher", Cost:"2", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"34", Image:"/Images/THS/34.jpg"},
{Name:"Vanquish the Foul", Cost:"6", Color:["W"], Rarity:"U", Type:["S"], Rating:"6", Sort:"1", Set:"THS", Number:"35", Image:"/Images/THS/35.jpg"},
{Name:"Wingsteed Rider", Cost:"3", Color:["W"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"36", Image:"/Images/THS/36.jpg"},
{Name:"Yoked Ox", Cost:"1", Color:["W"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"37", Image:"/Images/THS/37.jpg"},
{Name:"Annul", Cost:"1", Color:["U"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"38", Image:"/Images/THS/38.jpg"},
{Name:"Aqueous Form", Cost:"1", Color:["U"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"THS", Number:"39", Image:"/Images/THS/39.jpg"},
{Name:"Artisan of Forms", Cost:"2", Color:["U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"40", Image:"/Images/THS/40.jpg"},
{Name:"Benthic Giant", Cost:"6", Color:["U"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"41", Image:"/Images/THS/41.jpg"},
{Name:"Bident of Thassa", Cost:"4", Color:["U"], Rarity:"R", Type:["E","A"], Rating:"8", Sort:"1", Set:"THS", Number:"42", Image:"/Images/THS/42.jpg"},
{Name:"Breaching Hippocamp", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"43", Image:"/Images/THS/43.jpg"},
{Name:"Coastline Chimera", Cost:"4", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"44", Image:"/Images/THS/44.jpg"},
{Name:"Crackling Triton", Cost:"3", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"45", Image:"/Images/THS/45.jpg"},
{Name:"Curse of the Swine", Cost:"2", Color:["U"], Rarity:"R", Type:["S"], Rating:"7", Sort:"1", Set:"THS", Number:"46", Image:"/Images/THS/46.jpg"},
{Name:"Dissolve", Cost:"3", Color:["U"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"THS", Number:"47", Image:"/Images/THS/47.jpg"},
{Name:"Fate Foretold", Cost:"2", Color:["U"], Rarity:"C", Type:["E"], Rating:"6", Sort:"1", Set:"THS", Number:"48", Image:"/Images/THS/48.jpg"},
{Name:"Gainsay", Cost:"2", Color:["U"], Rarity:"U", Type:["I"], Rating:"1", Sort:"1", Set:"THS", Number:"49", Image:"/Images/THS/49.jpg"},
{Name:"Griptide", Cost:"4", Color:["U"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"50", Image:"/Images/THS/50.jpg"},
{Name:"Horizon Scholar", Cost:"6", Color:["U"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"51", Image:"/Images/THS/51.jpg"},
{Name:"Lost in a Labyrinth", Cost:"1", Color:["U"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"52", Image:"/Images/THS/52.jpg"},
{Name:"Master of Waves", Cost:"4", Color:["U"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"53", Image:"/Images/THS/53.jpg"},
{Name:"Meletis Charlatan", Cost:"3", Color:["U"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"54", Image:"/Images/THS/54.jpg"},
{Name:"Mnemonic Wall", Cost:"5", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"55", Image:"/Images/THS/55.jpg"},
{Name:"Nimbus Naiad", Cost:"3", Color:["U"], Rarity:"C", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"56", Image:"/Images/THS/56.jpg"},
{Name:"Omenspeaker", Cost:"2", Color:["U"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"57", Image:"/Images/THS/57.jpg"},
{Name:"Ordeal of Thassa", Cost:"2", Color:["U"], Rarity:"U", Type:["E"], Rating:"3", Sort:"1", Set:"THS", Number:"58", Image:"/Images/THS/58.jpg"},
{Name:"Prescient Chimera", Cost:"5", Color:["U"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"59", Image:"/Images/THS/59.jpg"},
{Name:"Prognostic Sphinx", Cost:"5", Color:["U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"THS", Number:"60", Image:"/Images/THS/60.jpg"},
{Name:"Sea God's Revenge", Cost:"6", Color:["U"], Rarity:"U", Type:["S"], Rating:"7", Sort:"1", Set:"THS", Number:"61", Image:"/Images/THS/61.jpg"},
{Name:"Sealock Monster", Cost:"5", Color:["U"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"62", Image:"/Images/THS/62.jpg"},
{Name:"Shipbreaker Kraken", Cost:"6", Color:["U"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"THS", Number:"63", Image:"/Images/THS/63.jpg"},
{Name:"Stymied Hopes", Cost:"2", Color:["U"], Rarity:"C", Type:["I"], Rating:"4", Sort:"1", Set:"THS", Number:"64", Image:"/Images/THS/64.jpg"},
{Name:"Swan Song", Cost:"1", Color:["U"], Rarity:"R", Type:["I"], Rating:"1", Sort:"1", Set:"THS", Number:"65", Image:"/Images/THS/65.jpg"},
{Name:"Thassa, God of the Sea", Cost:"3", Color:["U"], Rarity:"M", Type:["E","C"], Rating:"8", Sort:"1", Set:"THS", Number:"66", Image:"/Images/THS/66.jpg"},
{Name:"Thassa's Bounty", Cost:"6", Color:["U"], Rarity:"C", Type:["S"], Rating:"5", Sort:"1", Set:"THS", Number:"67", Image:"/Images/THS/67.jpg"},
{Name:"Thassa's Emissary", Cost:"4", Color:["U"], Rarity:"U", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"68", Image:"/Images/THS/68.jpg"},
{Name:"Triton Fortune Hunter", Cost:"3", Color:["U"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"69", Image:"/Images/THS/69.jpg"},
{Name:"Triton Shorethief", Cost:"1", Color:["U"], Rarity:"C", Type:["C"], Rating:"1", Sort:"1", Set:"THS", Number:"70", Image:"/Images/THS/70.jpg"},
{Name:"Triton Tactics", Cost:"1", Color:["U"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"71", Image:"/Images/THS/71.jpg"},
{Name:"Vaporkin", Cost:"2", Color:["U"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"72", Image:"/Images/THS/72.jpg"},
{Name:"Voyage's End", Cost:"2", Color:["U"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"THS", Number:"73", Image:"/Images/THS/73.jpg"},
{Name:"Wavecrash Triton", Cost:"3", Color:["U"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"74", Image:"/Images/THS/74.jpg"},
{Name:"Abhorrent Overlord", Cost:"7", Color:["B"], Rarity:"R", Type:["C"], Rating:"9", Sort:"1", Set:"THS", Number:"75", Image:"/Images/THS/75.jpg"},
{Name:"Agent of the Fates", Cost:"3", Color:["B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"76", Image:"/Images/THS/76.jpg"},
{Name:"Asphodel Wanderer", Cost:"1", Color:["B"], Rarity:"C", Type:["C"], Rating:"2", Sort:"1", Set:"THS", Number:"77", Image:"/Images/THS/77.jpg"},
{Name:"Baleful Eidolon", Cost:"2", Color:["B"], Rarity:"C", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"78", Image:"/Images/THS/78.jpg"},
{Name:"Blood-Toll Harpy", Cost:"3", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"79", Image:"/Images/THS/79.jpg"},
{Name:"Boon of Erebos", Cost:"1", Color:["B"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"80", Image:"/Images/THS/80.jpg"},
{Name:"Cavern Lampad", Cost:"4", Color:["B"], Rarity:"C", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"81", Image:"/Images/THS/81.jpg"},
{Name:"Cutthroat Maneuver", Cost:"4", Color:["B"], Rarity:"U", Type:["I"], Rating:"4", Sort:"1", Set:"THS", Number:"82", Image:"/Images/THS/82.jpg"},
{Name:"Dark Betrayal", Cost:"1", Color:["B"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"83", Image:"/Images/THS/83.jpg"},
{Name:"Disciple of Phenax", Cost:"4", Color:["B"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"84", Image:"/Images/THS/84.jpg"},
{Name:"Erebos, God of the Dead", Cost:"4", Color:["B"], Rarity:"M", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"85", Image:"/Images/THS/85.jpg"},
{Name:"Erebos's Emissary", Cost:"4", Color:["B"], Rarity:"U", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"86", Image:"/Images/THS/86.jpg"},
{Name:"Felhide Minotaur", Cost:"3", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"87", Image:"/Images/THS/87.jpg"},
{Name:"Fleshmad Steed", Cost:"2", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"88", Image:"/Images/THS/88.jpg"},
{Name:"Gray Merchant of Asphodel", Cost:"5", Color:["B"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"89", Image:"/Images/THS/89.jpg"},
{Name:"Hero's Downfall", Cost:"3", Color:["B"], Rarity:"R", Type:["I"], Rating:"8", Sort:"1", Set:"THS", Number:"90", Image:"/Images/THS/90.jpg"},
{Name:"Hythonia the Cruel", Cost:"6", Color:["B"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"THS", Number:"91", Image:"/Images/THS/91.jpg"},
{Name:"Insatiable Harpy", Cost:"4", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"92", Image:"/Images/THS/92.jpg"},
{Name:"Keepsake Gorgon", Cost:"5", Color:["B"], Rarity:"U", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"93", Image:"/Images/THS/93.jpg"},
{Name:"Lash of the Whip", Cost:"5", Color:["B"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"94", Image:"/Images/THS/94.jpg"},
{Name:"Loathsome Catoblepas", Cost:"6", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"95", Image:"/Images/THS/95.jpg"},
{Name:"March of the Returned", Cost:"4", Color:["B"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"THS", Number:"96", Image:"/Images/THS/96.jpg"},
{Name:"Mogis's Marauder", Cost:"3", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"97", Image:"/Images/THS/97.jpg"},
{Name:"Nighthowler", Cost:"3", Color:["B"], Rarity:"R", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"98", Image:"/Images/THS/98.jpg"},
{Name:"Ordeal of Erebos", Cost:"2", Color:["B"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"THS", Number:"99", Image:"/Images/THS/99.jpg"},
{Name:"Pharika's Cure", Cost:"2", Color:["B"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"100", Image:"/Images/THS/100.jpg"},
{Name:"Read the Bones", Cost:"3", Color:["B"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"THS", Number:"101", Image:"/Images/THS/101.jpg"},
{Name:"Rescue from the Underworld", Cost:"5", Color:["B"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"102", Image:"/Images/THS/102.jpg"},
{Name:"Returned Centaur", Cost:"4", Color:["B"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"103", Image:"/Images/THS/103.jpg"},
{Name:"Returned Phalanx", Cost:"2", Color:["B"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"104", Image:"/Images/THS/104.jpg"},
{Name:"Scourgemark", Cost:"2", Color:["B"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"THS", Number:"105", Image:"/Images/THS/105.jpg"},
{Name:"Sip of Hemlock", Cost:"6", Color:["B"], Rarity:"C", Type:["S"], Rating:"7", Sort:"1", Set:"THS", Number:"106", Image:"/Images/THS/106.jpg"},
{Name:"Thoughtseize", Cost:"1", Color:["B"], Rarity:"R", Type:["S"], Rating:"6", Sort:"1", Set:"THS", Number:"107", Image:"/Images/THS/107.jpg"},
{Name:"Tormented Hero", Cost:"1", Color:["B"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"108", Image:"/Images/THS/108.jpg"},
{Name:"Viper's Kiss", Cost:"1", Color:["B"], Rarity:"C", Type:["E"], Rating:"4", Sort:"1", Set:"THS", Number:"109", Image:"/Images/THS/109.jpg"},
{Name:"Whip of Erebos", Cost:"4", Color:["B"], Rarity:"R", Type:["E","A"], Rating:"8", Sort:"1", Set:"THS", Number:"110", Image:"/Images/THS/110.jpg"},
{Name:"Akroan Crusader", Cost:"1", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"111", Image:"/Images/THS/111.jpg"},
{Name:"Anger of the Gods", Cost:"3", Color:["R"], Rarity:"R", Type:["S"], Rating:"8", Sort:"1", Set:"THS", Number:"112", Image:"/Images/THS/112.jpg"},
{Name:"Arena Athlete", Cost:"2", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"113", Image:"/Images/THS/113.jpg"},
{Name:"Borderland Minotaur", Cost:"4", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"114", Image:"/Images/THS/114.jpg"},
{Name:"Boulderfall", Cost:"8", Color:["R"], Rarity:"C", Type:["I"], Rating:"3", Sort:"1", Set:"THS", Number:"115", Image:"/Images/THS/115.jpg"},
{Name:"Coordinated Assault", Cost:"1", Color:["R"], Rarity:"U", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"116", Image:"/Images/THS/116.jpg"},
{Name:"Deathbellow Raider", Cost:"2", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"117", Image:"/Images/THS/117.jpg"},
{Name:"Demolish", Cost:"4", Color:["R"], Rarity:"C", Type:["S"], Rating:"1", Sort:"1", Set:"THS", Number:"118", Image:"/Images/THS/118.jpg"},
{Name:"Dragon Mantle", Cost:"1", Color:["R"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"THS", Number:"119", Image:"/Images/THS/119.jpg"},
{Name:"Ember Swallower", Cost:"4", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"120", Image:"/Images/THS/120.jpg"},
{Name:"Fanatic of Mogis", Cost:"4", Color:["R"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"121", Image:"/Images/THS/121.jpg"},
{Name:"Firedrinker Satyr", Cost:"1", Color:["R"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"122", Image:"/Images/THS/122.jpg"},
{Name:"Flamespeaker Adept", Cost:"3", Color:["R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"123", Image:"/Images/THS/123.jpg"},
{Name:"Hammer of Purphoros", Cost:"3", Color:["R"], Rarity:"R", Type:["E","A"], Rating:"8", Sort:"1", Set:"THS", Number:"124", Image:"/Images/THS/124.jpg"},
{Name:"Ill-Tempered Cyclops", Cost:"4", Color:["R"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"125", Image:"/Images/THS/125.jpg"},
{Name:"Labyrinth Champion", Cost:"4", Color:["R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"126", Image:"/Images/THS/126.jpg"},
{Name:"Lightning Strike", Cost:"2", Color:["R"], Rarity:"C", Type:["I"], Rating:"7", Sort:"1", Set:"THS", Number:"127", Image:"/Images/THS/127.jpg"},
{Name:"Magma Jet", Cost:"2", Color:["R"], Rarity:"U", Type:["I"], Rating:"7", Sort:"1", Set:"THS", Number:"128", Image:"/Images/THS/128.jpg"},
{Name:"Messenger's Speed", Cost:"1", Color:["R"], Rarity:"C", Type:["E"], Rating:"2", Sort:"1", Set:"THS", Number:"129", Image:"/Images/THS/129.jpg"},
{Name:"Minotaur Skullcleaver", Cost:"3", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"130", Image:"/Images/THS/130.jpg"},
{Name:"Ordeal of Purphoros", Cost:"2", Color:["R"], Rarity:"U", Type:["E"], Rating:"4", Sort:"1", Set:"THS", Number:"131", Image:"/Images/THS/131.jpg"},
{Name:"Peak Eruption", Cost:"3", Color:["R"], Rarity:"U", Type:["S"], Rating:"1", Sort:"1", Set:"THS", Number:"132", Image:"/Images/THS/132.jpg"},
{Name:"Portent of Betrayal", Cost:"4", Color:["R"], Rarity:"C", Type:["S"], Rating:"4", Sort:"1", Set:"THS", Number:"133", Image:"/Images/THS/133.jpg"},
{Name:"Priest of Iroas", Cost:"1", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"134", Image:"/Images/THS/134.jpg"},
{Name:"Purphoros, God of the Forge", Cost:"4", Color:["R"], Rarity:"M", Type:["E","C"], Rating:"8", Sort:"1", Set:"THS", Number:"135", Image:"/Images/THS/135.jpg"},
{Name:"Purphoros's Emissary", Cost:"4", Color:["R"], Rarity:"U", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"136", Image:"/Images/THS/136.jpg"},
{Name:"Rage of Purphoros", Cost:"5", Color:["R"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"THS", Number:"137", Image:"/Images/THS/137.jpg"},
{Name:"Rageblood Shaman", Cost:"3", Color:["R"], Rarity:"R", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"138", Image:"/Images/THS/138.jpg"},
{Name:"Satyr Rambler", Cost:"2", Color:["R"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"139", Image:"/Images/THS/139.jpg"},
{Name:"Spark Jolt", Cost:"1", Color:["R"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"140", Image:"/Images/THS/140.jpg"},
{Name:"Spearpoint Oread", Cost:"3", Color:["R"], Rarity:"C", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"141", Image:"/Images/THS/141.jpg"},
{Name:"Stoneshock Giant", Cost:"5", Color:["R"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"142", Image:"/Images/THS/142.jpg"},
{Name:"Stormbreath Dragon", Cost:"5", Color:["R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"143", Image:"/Images/THS/143.jpg"},
{Name:"Titan of Eternal Fire", Cost:"6", Color:["R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"144", Image:"/Images/THS/144.jpg"},
{Name:"Titan's Strength", Cost:"1", Color:["R"], Rarity:"C", Type:["I"], Rating:"6", Sort:"1", Set:"THS", Number:"145", Image:"/Images/THS/145.jpg"},
{Name:"Two-Headed Cerberus", Cost:"3", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"146", Image:"/Images/THS/146.jpg"},
{Name:"Wild Celebrants", Cost:"5", Color:["R"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"147", Image:"/Images/THS/147.jpg"},
{Name:"Agent of Horizons", Cost:"3", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"148", Image:"/Images/THS/148.jpg"},
{Name:"Anthousa, Setessan Hero", Cost:"5", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"149", Image:"/Images/THS/149.jpg"},
{Name:"Arbor Colossus", Cost:"5", Color:["G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"150", Image:"/Images/THS/150.jpg"},
{Name:"Artisan's Sorrow", Cost:"4", Color:["G"], Rarity:"U", Type:["I"], Rating:"3", Sort:"1", Set:"THS", Number:"151", Image:"/Images/THS/151.jpg"},
{Name:"Boon Satyr", Cost:"3", Color:["G"], Rarity:"R", Type:["E","C"], Rating:"8", Sort:"1", Set:"THS", Number:"152", Image:"/Images/THS/152.jpg"},
{Name:"Bow of Nylea", Cost:"3", Color:["G"], Rarity:"R", Type:["E","A"], Rating:"8", Sort:"1", Set:"THS", Number:"153", Image:"/Images/THS/153.jpg"},
{Name:"Centaur Battlemaster", Cost:"5", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"154", Image:"/Images/THS/154.jpg"},
{Name:"Commune with the Gods", Cost:"2", Color:["G"], Rarity:"C", Type:["S"], Rating:"2", Sort:"1", Set:"THS", Number:"155", Image:"/Images/THS/155.jpg"},
{Name:"Defend the Hearth", Cost:"2", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"THS", Number:"156", Image:"/Images/THS/156.jpg"},
{Name:"Fade into Antiquity", Cost:"3", Color:["G"], Rarity:"C", Type:["S"], Rating:"3", Sort:"1", Set:"THS", Number:"157", Image:"/Images/THS/157.jpg"},
{Name:"Feral Invocation", Cost:"3", Color:["G"], Rarity:"C", Type:["E"], Rating:"5", Sort:"1", Set:"THS", Number:"158", Image:"/Images/THS/158.jpg"},
{Name:"Hunt the Hunter", Cost:"1", Color:["G"], Rarity:"U", Type:["S"], Rating:"1", Sort:"1", Set:"THS", Number:"159", Image:"/Images/THS/159.jpg"},
{Name:"Karametra's Acolyte", Cost:"4", Color:["G"], Rarity:"U", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"160", Image:"/Images/THS/160.jpg"},
{Name:"Leafcrown Dryad", Cost:"2", Color:["G"], Rarity:"C", Type:["E","C"], Rating:"6", Sort:"1", Set:"THS", Number:"161", Image:"/Images/THS/161.jpg"},
{Name:"Mistcutter Hydra", Cost:"1", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"162", Image:"/Images/THS/162.jpg"},
{Name:"Nemesis of Mortals", Cost:"6", Color:["G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"163", Image:"/Images/THS/163.jpg"},
{Name:"Nessian Asp", Cost:"5", Color:["G"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"164", Image:"/Images/THS/164.jpg"},
{Name:"Nessian Courser", Cost:"3", Color:["G"], Rarity:"C", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"165", Image:"/Images/THS/165.jpg"},
{Name:"Nylea, God of the Hunt", Cost:"4", Color:["G"], Rarity:"M", Type:["E","C"], Rating:"8", Sort:"1", Set:"THS", Number:"166", Image:"/Images/THS/166.jpg"},
{Name:"Nylea's Disciple", Cost:"4", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"167", Image:"/Images/THS/167.jpg"},
{Name:"Nylea's Emissary", Cost:"4", Color:["G"], Rarity:"U", Type:["E","C"], Rating:"7", Sort:"1", Set:"THS", Number:"168", Image:"/Images/THS/168.jpg"},
{Name:"Nylea's Presence", Cost:"2", Color:["G"], Rarity:"C", Type:["E"], Rating:"3", Sort:"1", Set:"THS", Number:"169", Image:"/Images/THS/169.jpg"},
{Name:"Ordeal of Nylea", Cost:"2", Color:["G"], Rarity:"U", Type:["E"], Rating:"2", Sort:"1", Set:"THS", Number:"170", Image:"/Images/THS/170.jpg"},
{Name:"Pheres-Band Centaurs", Cost:"5", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"171", Image:"/Images/THS/171.jpg"},
{Name:"Polukranos, World Eater", Cost:"4", Color:["G"], Rarity:"M", Type:["C"], Rating:"9", Sort:"1", Set:"THS", Number:"172", Image:"/Images/THS/172.jpg"},
{Name:"Reverent Hunter", Cost:"3", Color:["G"], Rarity:"R", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"173", Image:"/Images/THS/173.jpg"},
{Name:"Satyr Hedonist", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"174", Image:"/Images/THS/174.jpg"},
{Name:"Satyr Piper", Cost:"3", Color:["G"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"175", Image:"/Images/THS/175.jpg"},
{Name:"Savage Surge", Cost:"2", Color:["G"], Rarity:"C", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"176", Image:"/Images/THS/176.jpg"},
{Name:"Sedge Scorpion", Cost:"1", Color:["G"], Rarity:"C", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"177", Image:"/Images/THS/177.jpg"},
{Name:"Shredding Winds", Cost:"3", Color:["G"], Rarity:"C", Type:["I"], Rating:"1", Sort:"1", Set:"THS", Number:"178", Image:"/Images/THS/178.jpg"},
{Name:"Staunch-Hearted Warrior", Cost:"4", Color:["G"], Rarity:"C", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"179", Image:"/Images/THS/179.jpg"},
{Name:"Sylvan Caryatid", Cost:"2", Color:["G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"180", Image:"/Images/THS/180.jpg"},
{Name:"Time to Feed", Cost:"3", Color:["G"], Rarity:"C", Type:["S"], Rating:"6", Sort:"1", Set:"THS", Number:"181", Image:"/Images/THS/181.jpg"},
{Name:"Voyaging Satyr", Cost:"2", Color:["G"], Rarity:"C", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"182", Image:"/Images/THS/182.jpg"},
{Name:"Vulpine Goliath", Cost:"6", Color:["G"], Rarity:"C", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"183", Image:"/Images/THS/183.jpg"},
{Name:"Warriors' Lesson", Cost:"1", Color:["G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"184", Image:"/Images/THS/184.jpg"},
{Name:"Akroan Hoplite", Cost:"2", Color:["W","R"], Rarity:"U", Type:["C"], Rating:"2", Sort:"1", Set:"THS", Number:"185", Image:"/Images/THS/185.jpg"},
{Name:"Anax and Cymede", Cost:"3", Color:["W","R"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"186", Image:"/Images/THS/186.jpg"},
{Name:"Ashen Rider", Cost:"8", Color:["W","B"], Rarity:"M", Type:["C"], Rating:"4", Sort:"1", Set:"THS", Number:"187", Image:"/Images/THS/187.jpg"},
{Name:"Ashiok, Nightmare Weaver", Cost:"3", Color:["U","B"], Rarity:"M", Type:["P"], Rating:"8", Sort:"1", Set:"THS", Number:"188", Image:"/Images/THS/188.jpg"},
{Name:"Battlewise Hoplite", Cost:"2", Color:["W","U"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"189", Image:"/Images/THS/189.jpg"},
{Name:"Chronicler of Heroes", Cost:"3", Color:["W","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"190", Image:"/Images/THS/190.jpg"},
{Name:"Daxos of Meletis", Cost:"3", Color:["W","U"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"191", Image:"/Images/THS/191.jpg"},
{Name:"Destructive Revelry", Cost:"2", Color:["R","G"], Rarity:"U", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"192", Image:"/Images/THS/192.jpg"},
{Name:"Fleecemane Lion", Cost:"2", Color:["W","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"193", Image:"/Images/THS/193.jpg"},
{Name:"Horizon Chimera", Cost:"4", Color:["U","G"], Rarity:"U", Type:["C"], Rating:"6", Sort:"1", Set:"THS", Number:"194", Image:"/Images/THS/194.jpg"},
{Name:"Kragma Warcaller", Cost:"5", Color:["B","R"], Rarity:"U", Type:["C"], Rating:"5", Sort:"1", Set:"THS", Number:"195", Image:"/Images/THS/195.jpg"},
{Name:"Medomai the Ageless", Cost:"6", Color:["W","U"], Rarity:"M", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"196", Image:"/Images/THS/196.jpg"},
{Name:"Pharika's Mender", Cost:"5", Color:["B","G"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"197", Image:"/Images/THS/197.jpg"},
{Name:"Polis Crusher", Cost:"4", Color:["R","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"198", Image:"/Images/THS/198.jpg"},
{Name:"Prophet of Kruphix", Cost:"5", Color:["U","G"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"199", Image:"/Images/THS/199.jpg"},
{Name:"Psychic Intrusion", Cost:"5", Color:["U","B"], Rarity:"R", Type:["S"], Rating:"3", Sort:"1", Set:"THS", Number:"200", Image:"/Images/THS/200.jpg"},
{Name:"Reaper of the Wilds", Cost:"4", Color:["B","G"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"201", Image:"/Images/THS/201.jpg"},
{Name:"Sentry of the Underworld", Cost:"5", Color:["W","B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"202", Image:"/Images/THS/202.jpg"},
{Name:"Shipwreck Singer", Cost:"2", Color:["U","B"], Rarity:"U", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"203", Image:"/Images/THS/203.jpg"},
{Name:"Spellheart Chimera", Cost:"3", Color:["U","R"], Rarity:"U", Type:["C"], Rating:"3", Sort:"1", Set:"THS", Number:"204", Image:"/Images/THS/204.jpg"},
{Name:"Steam Augury", Cost:"4", Color:["U","R"], Rarity:"R", Type:["I"], Rating:"5", Sort:"1", Set:"THS", Number:"205", Image:"/Images/THS/205.jpg"},
{Name:"Triad of Fates", Cost:"4", Color:["W","B"], Rarity:"R", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"206", Image:"/Images/THS/206.jpg"},
{Name:"Tymaret, the Murder King", Cost:"2", Color:["B","R"], Rarity:"R", Type:["C"], Rating:"7", Sort:"1", Set:"THS", Number:"207", Image:"/Images/THS/207.jpg"},
{Name:"Underworld Cerberus", Cost:"5", Color:["B","R"], Rarity:"M", Type:["C"], Rating:"8", Sort:"1", Set:"THS", Number:"208", Image:"/Images/THS/208.jpg"},
{Name:"Xenagos, the Reveler", Cost:"4", Color:["R","G"], Rarity:"M", Type:["P"], Rating:"8", Sort:"1", Set:"THS", Number:"209", Image:"/Images/THS/209.jpg"},
{Name:"Akroan Horse", Cost:"4", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"5", Sort:"1", Set:"THS", Number:"210", Image:"/Images/THS/210.jpg"},
{Name:"Anvilwrought Raptor", Cost:"4", Color:["C"], Rarity:"U", Type:["A","C"], Rating:"3", Sort:"1", Set:"THS", Number:"211", Image:"/Images/THS/211.jpg"},
{Name:"Bronze Sable", Cost:"2", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"THS", Number:"212", Image:"/Images/THS/212.jpg"},
{Name:"Burnished Hart", Cost:"3", Color:["C"], Rarity:"U", Type:["A","C"], Rating:"6", Sort:"1", Set:"THS", Number:"213", Image:"/Images/THS/213.jpg"},
{Name:"Colossus of Akros", Cost:"8", Color:["C"], Rarity:"R", Type:["A","C"], Rating:"3", Sort:"1", Set:"THS", Number:"214", Image:"/Images/THS/214.jpg"},
{Name:"Flamecast Wheel", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"3", Sort:"1", Set:"THS", Number:"215", Image:"/Images/THS/215.jpg"},
{Name:"Fleetfeather Sandals", Cost:"2", Color:["C"], Rarity:"C", Type:["A"], Rating:"3", Sort:"1", Set:"THS", Number:"216", Image:"/Images/THS/216.jpg"},
{Name:"Guardians of Meletis", Cost:"3", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"3", Sort:"1", Set:"THS", Number:"217", Image:"/Images/THS/217.jpg"},
{Name:"Opaline Unicorn", Cost:"3", Color:["C"], Rarity:"C", Type:["A","C"], Rating:"4", Sort:"1", Set:"THS", Number:"218", Image:"/Images/THS/218.jpg"},
{Name:"Prowler's Helm", Cost:"2", Color:["C"], Rarity:"U", Type:["A"], Rating:"2", Sort:"1", Set:"THS", Number:"219", Image:"/Images/THS/219.jpg"},
{Name:"Pyxis of Pandemonium", Cost:"1", Color:["C"], Rarity:"R", Type:["A"], Rating:"1", Sort:"1", Set:"THS", Number:"220", Image:"/Images/THS/220.jpg"},
{Name:"Traveler's Amulet", Cost:"1", Color:["C"], Rarity:"C", Type:["A"], Rating:"4", Sort:"1", Set:"THS", Number:"221", Image:"/Images/THS/221.jpg"},
{Name:"Witches' Eye", Cost:"1", Color:["C"], Rarity:"U", Type:["A"], Rating:"1", Sort:"1", Set:"THS", Number:"222", Image:"/Images/THS/222.jpg"},
{Name:"Nykthos, Shrine to Nyx", Cost:"0", Color:["C"], Rarity:"R", Type:["L"], Rating:"5", Sort:"1", Set:"THS", Number:"223", Image:"/Images/THS/223.jpg"},
{Name:"Temple of Abandon", Cost:"0", Color:["G","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"THS", Number:"224", Image:"/Images/THS/224.jpg"},
{Name:"Temple of Deceit", Cost:"0", Color:["U","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"THS", Number:"225", Image:"/Images/THS/225.jpg"},
{Name:"Temple of Mystery", Cost:"0", Color:["U","G"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"THS", Number:"226", Image:"/Images/THS/226.jpg"},
{Name:"Temple of Silence", Cost:"0", Color:["W","B"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"THS", Number:"227", Image:"/Images/THS/227.jpg"},
{Name:"Temple of Triumph", Cost:"0", Color:["W","R"], Rarity:"R", Type:["L"], Rating:"6", Sort:"1", Set:"THS", Number:"228", Image:"/Images/THS/228.jpg"},
{Name:"Unknown Shores", Cost:"0", Color:["C"], Rarity:"C", Type:["L"], Rating:"4", Sort:"1", Set:"THS", Number:"229", Image:"/Images/THS/229.jpg"},
];