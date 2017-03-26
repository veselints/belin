(function() {
    'use strict';

    function paintingsService(data) {
        var getPaintinsByRegion = function(region) {
          return data.get('api/belin/paintings/' + region);
        };

        var getPaintingById = function(id) {
          return data.get('api/belin/painting/' + id);
        };

        return {
            getPaintinsByRegion: getPaintinsByRegion,
            getPaintingById: getPaintingById
        };
    }

    angular.module('belinApp.services')
        .service('paintingsService', ['dataService', paintingsService]);
}());