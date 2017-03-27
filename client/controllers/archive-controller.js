(function() {
  'use strict';

  var params = {
  	development: 'Министрерство на регионалното развитие и благоустройството 1991 - 2010 г.',
  	planning: 'Софпроект - Генерален план на София 1970 - 1990 г.'
  };

  function ArchiveController($location, $routeParams, archiveService) {
    var vm = this;
    var currentSection = $routeParams.section;
    vm.section = params[currentSection];

    archiveService.getArchivesBySection(currentSection)
      .then(function(res){
        vm.archives = res.data;
      }, function(err){
        console.log(err);
      });
  }

  angular.module('belinApp.controllers')
    .controller('ArchiveController', ['$location', '$routeParams', 'archiveService', ArchiveController]);
}());