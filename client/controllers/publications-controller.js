(function() {
    'use strict';

    var params = {
        development: 'регионалното и местното развитие',
        planning: 'пространственото планиране',
        community: 'работата със заинтересованите страни',
        regeneration: 'градското възстановяване и развитие'
    };

    function PublictionsController($location, $routeParams, publicationsService) {
        var vm = this;
        var currentSection = $routeParams.section;
        vm.section = currentSection;
        vm.sectionInBg = params[currentSection];

        publicationsService.getPublicationBySection(currentSection)
            .then(function(res) {
                vm.publications = res.data;
                console.log(vm.publications);
            }, function(err) {
                console.log(err);
            });
    }

    angular.module('belinApp.controllers')
        .controller('PublictionsController', ['$location', '$routeParams', 'publicationsService', PublictionsController]);
}());
