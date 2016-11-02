describe("bosterism", function () {
    'use strict';

    var $rootScope,
        scope,
        controller;

    function SetUpScope(_$rootScope_, _$controller_, _$q_) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        controller = _$controller_;
    }

    beforeEach(module("mtgApp"));
    beforeEach(inject(SetUpScope));

    // beforeEach(function() {
    //
    // });

    describe("displayExtraOptions", function(){
        it('should make the controller variable showExtraOptions false if it is true', function(){
            controller.showExtraOptions = true;

            controller.showExtraOptions();

            expect(controller.showExtraOptions).toBeFalsy();
        });
    });
});