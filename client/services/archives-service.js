(function() {
    'use strict';

    function archiveService(data) {
        var getArchivesBySection = function(section) {
          return data.get('api/belin/archives/' + section);
        };

        var getArchiveById = function(id) {
          return data.get('api/belin/archive/' + id);
        };

        return {
            getArchivesBySection: getArchivesBySection
        };
    }

    angular.module('belinApp.services')
        .service('archiveService', ['dataService', archiveService]);
}());