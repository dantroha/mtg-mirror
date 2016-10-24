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
