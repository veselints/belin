(function() {
  'use strict';

  function PaintingController($location, $routeParams, paintingsService) {
    var vm = this;
    var id = $routeParams.paintingId;

    vm.region = $routeParams.region.toLowerCase();
    vm.painting = paintingsService.getPaintingById(id);
  }

  angular.module('belinApp.controllers')
    .controller('PaintingController', ['$location', '$routeParams', 'paintingsService', PaintingController]);
}());