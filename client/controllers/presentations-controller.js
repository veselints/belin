(function() {
    'use strict';

    var params = {
        regional: 'регионалното и местното развитие',
        planning: 'пространственото планиране',
        community: 'работата със заинтересованите страни',
        regeneration: 'градското възстановяване и развитие'
    };

    function PresentationsController($location, $routeParams, presentationsService) {
        var vm = this;
        var currentSection = $routeParams.section;
        vm.section = params[currentSection];

        presentationsService.getPresentationBySection(currentSection)
            .then(function(res) {
                vm.presentations = res.data;
            }, function(err) {
                console.log(err);
            });
    }

    angular.module('belinApp.controllers')
        .controller('PresentationsController', ['$location', '$routeParams', 'presentationsService', PresentationsController]);
}());
