(function() {
  'use strict';

  var params = {
  	regional: 'регионалното и местното развитие',
  	planning: 'пространственото планиране',
    community: 'работата със заинтересованите страни',
  	regeneration: 'градското възстановяване и развитие'
  };

  function PublicationDetailsController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
    vm.project = $routeParams.project;
  }

  angular.module('belinApp.controllers')
    .controller('PublicationDetailsController', ['$location', '$routeParams', PublicationDetailsController]);
}());