(function() {
  'use strict';

  function PaintingController($location, $routeParams, paintingsService) {
    var vm = this;
    var region = $routeParams.region.toLowerCase();
    var id = $routeParams.paintingId;

    vm.region = region;
    vm.painting = paintingsService.getPaintingById(region, id);
  }

  angular.module('belinApp.controllers')
    .controller('PaintingController', ['$location', '$routeParams', 'paintingsService', PaintingController]);
}());