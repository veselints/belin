(function() {
    'use strict';

    function photosService(data) {
        var getPhotoBySection = function(section) {
          return data.get('api/belin/photos/' + section);
        };

        var getPhotoById = function(id) {
          return data.get('api/belin/photo/' + id);
        };

        return {
            getPhotoBySection: getPhotoBySection,
            getPhotoById: getPhotoById
        };
    }

    angular.module('belinApp.services')
        .service('photosService', ['dataService', photosService]);
}());