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
