(function() {
    'use strict';

    function publicationsService(developmentPublicationsService, planningPublicationsService, regenerationPublicationsService) {
        var data = {
          development: developmentPublicationsService.publications,
          planning: planningPublicationsService.publications,
          regeneration: regenerationPublicationsService.publications
        };

        var getPublicationBySection = function(topic) {
          var result = data[topic];
          return result;
        };

        return {
            getPublicationBySection: getPublicationBySection
        };
    }

    angular.module('belinApp.services')
        .service('publicationsService', ['developmentPublicationsService', 'planningPublicationsService', 'regenerationPublicationsService', publicationsService]);
}());
