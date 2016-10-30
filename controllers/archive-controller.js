(function() {
  'use strict';

  var params = {
  	regional: 'Министрерство на регионалното развитие и благоустройството 1991 - 2010 г.',
  	planning: 'Софпроект - Генерален план на София 1970 - 1990 г.'
  };

  function ArchiveController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
  }

  angular.module('belinApp.controllers')
    .controller('ArchiveController', ['$location', '$routeParams', ArchiveController]);
}());