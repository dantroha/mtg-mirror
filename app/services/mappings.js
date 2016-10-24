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
