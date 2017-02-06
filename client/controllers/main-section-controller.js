(function() {
  'use strict';

  var params = {
  	regional: 'Регионално и местно развитие',
  	planning: 'Пространствено планиране',
    community: 'Работа със заинтересованите страни',
  	regeneration: 'Градско възстановяване и развитие'
  };

  function MainSectionController($location, $routeParams) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];
    vm.project = $routeParams.project;
  }

  angular.module('belinApp.controllers')
    .controller('MainSectionController', ['$location', '$routeParams', MainSectionController]);
}());