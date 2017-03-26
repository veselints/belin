(function() {
    'use strict'

    var areaCategories = [
        'archives',
        'paintings',
        'photos',
        'presentations',
        'projects',
        'publications'
    ];

    var noYearCategories = [
        'blogposts',
        'publications'
    ];

    var professionalAreaOptions = [{
        value: 'community',
        text: 'Работа със заинтересованите страни'
    }, {
        value: 'development',
        text: 'Регионално и местно развитие'
    }, {
        value: 'planning',
        text: 'Пространствено планиране'
    }, {
        value: 'regeneration',
        text: 'Градско възстановяване и развитие'
    }];

    var projectsAreaOptions = [{
        value: 'development',
        text: 'Регионално и местно развитие'
    }, {
        value: 'planning',
        text: 'Пространствено планиране'
    }, {
        value: 'regeneration',
        text: 'Градско възстановяване и развитие'
    }];

    var archiveAreaOptions = [{
        value: 'development',
        text: 'Регионално и местно развитие'
    }, {
        value: 'planning',
        text: 'Пространствено планиране'
    }];

    var photosAreaOptions = [{
        value: 'dunav',
        text: 'Край Дунав'
    }, {
        value: 'blackSea',
        text: 'Черно море'
    }, {
        value: 'tracia',
        text: 'Тракия'
    }, {
        value: 'balkan',
        text: 'Балканът'
    }, {
        value: 'rilaRodophePirin',
        text: 'Рила, Родопи, Пирин'
    }, {
        value: 'southWestBg',
        text: 'Югозападна България'
    }, {
        value: 'europe',
        text: 'Европа'
    }, {
        value: 'asia',
        text: 'Азия'
    }, {
        value: 'africa',
        text: 'Африка'
    }, {
        value: 'america',
        text: 'Америка'
    }, {
        value: 'collages',
        text: 'Колажи'
    }];

    var paintingsAreaOptions = [{
        value: 'plovdiv',
        text: 'Пловдив'
    }, {
        value: 'monasteries',
        text: 'Манастири'
    }, {
        value: 'ruse',
        text: 'Русе'
    }];

    function AdminController($window, $location, usersService, contentService) {
        var vm = this;
        vm.showAreas = true;
        vm.areaOptions = paintingsAreaOptions;
        vm.showDescription = true;
        vm.showYear = true;
        vm.showForPublications = false;
        vm.majorCategory = 'paintings';
        vm.pass;
        vm.showFile = true;

        if (!usersService.hasUser()) {
            $window.alert('No user is logged in!');
            $location.path('/login');
        }

        vm.model = {
            area: 'ruse',
            title: undefined,
            year: undefined,
            url: undefined,
            date: undefined,
            colaborators: undefined,
            interviewer: undefined
        };

        vm.updateMajorSelection = function() {
            var selectedCategory = vm.majorCategory;
            vm.showDescription = true;
            vm.showYear = true;
            vm.showForPublications = false;

            if (areaCategories.indexOf(selectedCategory) > -1) {
                vm.showAreas = true;
                vm.showFile = true;

                if (selectedCategory === 'photos') {
                    vm.areaOptions = photosAreaOptions;
                    vm.showDescription = false;
                } else if (selectedCategory === 'paintings') {
                    vm.areaOptions = paintingsAreaOptions;
                } else if (selectedCategory === 'archives') {
                    vm.areaOptions = archiveAreaOptions;
                } else if (selectedCategory === 'projects') {
                    vm.areaOptions = projectsAreaOptions;
                } else {
                    vm.areaOptions = professionalAreaOptions;

                    if (selectedCategory === 'publications') {
                        vm.showForPublications = true;
                        vm.showFile = false;
                    }
                }
            } else {
                if (noYearCategories.indexOf(selectedCategory) > -1) {
                    vm.showYear = false;
                }

                vm.showAreas = false;
                vm.showFile = false;
            }
        }

        vm.submit = function() {
            if (vm.showFile) {
                if (vm.form.file.$valid && vm.file) {
                    upload(vm.file);
                }
            }

            if (vm.form.$valid) {
                createContent();
            }
        }

        var upload = function(file) {
            vm.model.fileName = vm.majorCategory + '/' + file.name;

            contentService.uploadFile(vm.majorCategory, file)
                .then(function(res) {
                    $window.alert('Success ' + res.config.data.file.name + ' uploaded.');
                }, function(err) {
                    $window.alert(err.data.message);
                });
        };

        var createContent = function() {
            contentService.create(vm.majorCategory, vm.model)
                .then(function(res) {
                    $window.alert('Entry created');
                }, function(err) {
                    $window.alert(err.data.message);
                });
        };
    }

    angular.module('belinApp.controllers')
        .controller('AdminController', ['$window', '$location', 'usersService', 'contentService', AdminController]);
}());
