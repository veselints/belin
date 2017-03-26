(function() {
    'use strict';

    var params = {
        development: 'регионалното и местното развитие',
        planning: 'пространственото планиране',
        regeneration: 'градското възстановяване и развитие'
    };

    function ProjectsController($location, $routeParams, projectsService) {
        var vm = this;
        var currentSection = $routeParams.section;
        vm.section = params[currentSection];

        projectsService.getProjectsBySection(currentSection)
            .then(function(res) {
                vm.projects = res.data;
            }, function(err) {
                console.log(err);
            });
    }

    angular.module('belinApp.controllers')
        .controller('ProjectsController', ['$location', '$routeParams', 'projectsService', ProjectsController]);
}());
