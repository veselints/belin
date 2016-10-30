(function() {
  'use strict';

  var params = {
  	regional: 'регионалното и местното развитие',
  	planning: 'пространственото планиране',
  	community: 'работата със заинтересованите страни',
  	regeneration: 'градското възстановяване и развитие'
  };

  function PresentationsController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
  }

  angular.module('belinApp.controllers')
    .controller('PresentationsController', ['$location', '$routeParams', PresentationsController]);
}());