(function() {
  'use strict';

  function config($routeProvider) {
    var PARTIALS_PREFIX = 'views/partials/';
    var CONTROLLER_AS_VM = 'vm';

    $routeProvider
      // Major navigation
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
      .when('/admin', {
        templateUrl: PARTIALS_PREFIX + 'admin.html',
        controller: 'AdminController',
        controllerAs: CONTROLLER_AS_VM
      })

      // Professional path navigation
      .when('/community/trainings', {
        templateUrl: PARTIALS_PREFIX + 'trainings.html',
        controller: 'TrainingsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/community/forums', {
        templateUrl: PARTIALS_PREFIX + 'forums.html',
        controller: 'ForumsController',
        controllerAs: CONTROLLER_AS_VM
      })

      .when('/regeneration/regeneration', {
        templateUrl: PARTIALS_PREFIX + 'regeneration.html',
        controller: 'RegenerationController',
        controllerAs: CONTROLLER_AS_VM
      })

      .when('/:section/archive', {
        templateUrl: PARTIALS_PREFIX + 'archive.html',
        controller: 'ArchiveController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/:section/projects/:project', {
        templateUrl: PARTIALS_PREFIX + 'project.html',
        controller: 'ProjectDetailsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/:section/projects', {
        templateUrl: PARTIALS_PREFIX + 'projects.html',
        controller: 'ProjectsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/:section/publications/:publication', {
        templateUrl: PARTIALS_PREFIX + 'publication.html',
        controller: 'PublicationDetailsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/:section/publications', {
        templateUrl: PARTIALS_PREFIX + 'publications.html',
        controller: 'PublictionsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/:section/presentations', {
        templateUrl: PARTIALS_PREFIX + 'presentations.html',
        controller: 'PresentationsController',
        controllerAs: CONTROLLER_AS_VM
      })

      .when('/main/:section', {
        templateUrl: PARTIALS_PREFIX + 'main-section.html',
        controller: 'MainSectionController',
        controllerAs: CONTROLLER_AS_VM
      })


      // Photos navigation
      .when('/photos/:section', {
        templateUrl: PARTIALS_PREFIX + 'photos.html',
        controller: 'PhotosController',
        controllerAs: CONTROLLER_AS_VM
      })


      // Paintings navigation
      .when('/paintings/:region/:paintingId', {
        templateUrl: PARTIALS_PREFIX + 'painting.html',
        controller: 'PaintingController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/paintings/:region', {
        templateUrl: PARTIALS_PREFIX + 'paintings.html',
        controller: 'PaintingsController',
        controllerAs: CONTROLLER_AS_VM
      })


      // Otherwise
      .otherwise({
        redirectTo: '/'
      });
  }

  angular.module('belinApp.services', []);
  angular.module('belinApp.controllers', ['belinApp.services']);

  angular.module('belinApp', ['ngRoute', 'belinApp.controllers', 'ngFileUpload']) //
    .config(['$routeProvider', config])
    .constant('baseServiceUrl', 'https://fast-badlands-79260.herokuapp.com/api/'); // Chage this when you migrate to heroku
}());