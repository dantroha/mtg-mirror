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
