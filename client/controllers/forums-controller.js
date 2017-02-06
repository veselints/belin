(function() {
  'use strict';

  function ForumsController($location, $routeParams) {
    var vm = this;
  }

  angular.module('belinApp.controllers')
    .controller('ForumsController', ['$location', '$routeParams', ForumsController]);
}());