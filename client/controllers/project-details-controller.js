(function() {
    'use strict';

    var params = {
        regional: 'регионалното и местното развитие',
        planning: 'пространственото планиране',
        regeneration: 'градското възстановяване и развитие'
    };

    function ProjectDetailsController($location, $routeParams, projectsService) {
        var vm = this;
        var currentSection = $routeParams.section;
        vm.section = params[currentSection];
        var id = $routeParams.project;

        projectsService.getProjectById(id)
            .then(function(res) {
                vm.project = res.data;
            })
    }

    angular.module('belinApp.controllers')
        .controller('ProjectDetailsController', ['$location', '$routeParams', 'projectsService', ProjectDetailsController]);
}());
