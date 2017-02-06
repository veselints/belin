(function() {
    'use strict';

    function paintingsService(ruseService, monasteriesService, plovdivService) {
        var data = {
          ruse: ruseService.ruse,
          monasteries: monasteriesService.monasteries,
          plovdiv: plovdivService.plovdiv
        };

        var getPaintinsByRegion = function(region) {
          var result = data[region];
          return result;
        };

        var getPaintingById = function(resion, id) {
          var result = data[resion].find(function(painting) {
            return painting.id == id;
          });

          return result;
        };

        return {
            getPaintinsByRegion: getPaintinsByRegion,
            getPaintingById: getPaintingById
        };
    }

    angular.module('belinApp.services')
        .service('paintingsService', ['ruseService', 'monasteriesService', 'plovdivService', paintingsService]);
}());
