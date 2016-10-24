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
