(function() {
  'use strict';

  var params = {
  	regional: 'регионалното и местното развитие',
  	planning: 'пространственото планиране',
  	regeneration: 'градското възстановяване и развитие'
  };

  function ProjectsController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
  }

  angular.module('belinApp.controllers')
    .controller('ProjectsController', ['$location', '$routeParams', ProjectsController]);
}());