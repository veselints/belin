(function() {
  'use strict';

  function PaintingController($location, $routeParams, paintingsService) {
    var vm = this;
    var region = $routeParams.region.toLowerCase();
    var id = $routeParams.paintingId;

    vm.region = region;
    paintingsService.getPaintingById(id)
      .then(function(res) {
        vm.painting = res.data;
      })
  }

  angular.module('belinApp.controllers')
    .controller('PaintingController', ['$location', '$routeParams', 'paintingsService', PaintingController]);
}());