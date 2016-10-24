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
