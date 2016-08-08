(function() {
  'use strict';

  function config($routeProvider) {
    var PARTIALS_PREFIX = 'views/partials/';
    var CONTROLLER_AS_VM = 'vm';

    $routeProvider
      .when('/', {
        templateUrl: PARTIALS_PREFIX + 'home.html',
        controller: 'HomeController',
        controllerAs: CONTROLLER_AS_VM
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular.module('belinApp.services', []);
  angular.module('belinApp.controllers', ['belinApp.services']);

  angular.module('belinApp', ['ngRoute', 'belinApp.controllers']) //
    .config(['$routeProvider', config])
    .constant('baseServiceUrl', 'https://fast-badlands-79260.herokuapp.com/api/'); // Chage this when you migrate to heroku
}());