(function() {
    'use strict';

    function presentationsService(data) {
        var getPresentationBySection = function(section) {
          return data.get('api/belin/presentations/' + section);
        };

        return {
            getPresentationBySection
        };
    }

    angular.module('belinApp.services')
        .service('presentationsService', ['dataService', presentationsService]);
}());