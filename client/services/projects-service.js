(function() {
    'use strict';

    function projectsService(data) {
        var getProjectsBySection = function(section) {
          return data.get('api/belin/projects/' + section);
        };

        var getProjectById = function(id) {
          return data.get('api/belin/project/' + id);
        };

        return {
            getProjectsBySection: getProjectsBySection,
            getProjectById: getProjectById
        };
    }

    angular.module('belinApp.services')
        .service('projectsService', ['dataService', projectsService]);
}());