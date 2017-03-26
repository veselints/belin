(function() {
  'use strict';

  var params = {
  	ruse: 'Русе',
  	monasteries: 'Манастири',
    plovdiv: 'Пловдив'
  };

  function PaintingsController($location, $routeParams, paintingsService) {
    var vm = this;
    var currentRegion = $routeParams.region.toLowerCase();
    vm.region = currentRegion;
    vm.regionInBg = params[currentRegion];

    paintingsService.getPaintinsByRegion(currentRegion)
      .then(function(res){
        vm.paintings = res.data;
      }, function(err){
        console.log(err);
      });

    vm.loadPainting = function(id) {
      $location.path('/paintings/' + vm.region + '/' + id);
    };
  }

  angular.module('belinApp.controllers')
    .controller('PaintingsController', ['$location', '$routeParams', 'paintingsService', PaintingsController]);
}());