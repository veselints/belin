(function() {
    'use strict'

    function adminOptionsService() {
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

        return {
            areaCategories,
            noYearCategories,
            professionalAreaOptions,
            projectsAreaOptions,
            archiveAreaOptions,
            photosAreaOptions,
            paintingsAreaOptions
        };
    }

    angular.module('belinApp.services')
        .service('adminOptionsService', [adminOptionsService]);
}())