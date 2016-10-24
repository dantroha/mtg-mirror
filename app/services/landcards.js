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
