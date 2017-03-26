(function() {
    'use strict';

    var photos = [{
        id: 1,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 2,
        name: 'Mira with flowers',
        year: '2016',
        url: 'Photos/Colages/MiraFlowers.png'
    }, {
        id: 3,
        name: 'Mira on a flower window',
        year: '2016',
        url: 'Photos/Colages/MiraWindow.png'
    }, {
        id: 4,
        name: 'Svetlin with hourses',
        year: '2016',
        url: 'Photos/Colages/SvetlinHourses.jpg'
    }, {
        id: 5,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 6,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 7,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 8,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 9,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 10,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 11,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 12,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }, {
        id: 13,
        name: 'Svetlin and car',
        year: '2016',
        url: 'Photos/Colages/SvetlinCars.png'
    }];

    var params = {
        danube: 'Край Дунав',
        blacksea: 'Черно море',
        tracia: 'Тракия',
        balkan: 'Балканът',
        mountains: 'Рила, Пирин, Родопи',
        swbg: 'Югозападна България',
        europe: 'Европа',
        asia: 'Азия',
        america: 'Америка',
        africa: 'Африка',
        collages: 'Колажи'
    };

    function PhotosController($routeParams, $location, photosService) {
        var vm = this;
        var currentSection = $routeParams.section;
        vm.section = params[currentSection];

        photosService.getPhotoBySection(currentSection)
            .then(function(res) {
                vm.photos = res.data;
                vm.hasPhotos = res.data.length > 0;
            }, function(err) {
                console.log(err);
            });

        vm.loadPhoto = function(id) {
            $location.path('/photo/' + vm.region + '/' + id);
        };
    }

    angular.module('belinApp.controllers')
        .controller('PhotosController', ['$routeParams', '$location', 'photosService', PhotosController]);
}());
