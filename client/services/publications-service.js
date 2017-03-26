(function() {
    'use strict';

    function publicationsService(data) {
        var getPublicationBySection = function(topic) {
            return data.get('api/belin/publications/' + topic);
        };

        return {
            getPublicationBySection: getPublicationBySection
        };
    }

    angular.module('belinApp.services')
        .service('publicationsService', ['dataService', publicationsService]);
}());
