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
      .when('/about', {
        templateUrl: PARTIALS_PREFIX + 'about.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional/archive', {
        templateUrl: PARTIALS_PREFIX + 'regional-archive.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional/projects/velingrad', {
        templateUrl: PARTIALS_PREFIX + 'project.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional/projects', {
        templateUrl: PARTIALS_PREFIX + 'regional-projects.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional/publications', {
        templateUrl: PARTIALS_PREFIX + 'regional-publications.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional/presentations', {
        templateUrl: PARTIALS_PREFIX + 'regional-presentations.html',
        controller: 'AboutController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/regional', {
        templateUrl: PARTIALS_PREFIX + 'regional.html',
        controller: 'AboutController',
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