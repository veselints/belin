(function() {
  'use strict';

  var params = {
  	regional: 'регионалното и местното развитие',
  	planning: 'пространственото планиране',
  	regeneration: 'градското възстановяване и развитие'
  };

  function ProjectDetailsController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
    vm.project = $routeParams.project;
  }

  angular.module('belinApp.controllers')
    .controller('ProjectDetailsController', ['$location', '$routeParams', ProjectDetailsController]);
}());