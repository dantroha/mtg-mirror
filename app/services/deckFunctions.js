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
