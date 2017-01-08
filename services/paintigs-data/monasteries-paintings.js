(function() {
    'use strict';

    var monasteries = [{
        id: 21,
        region: 'Monasteries',
        fileName: 'Monastery_Bachkovo_1.jpg',
        title: 'Бачковски манастир „Успение Богородично“',
        description: 'Ставропигиален манастир.'
    }, {
        id: 22,
        region: 'Monasteries',
        fileName: 'Monastery_Bachkovo_2.jpg',
        title: 'Бачковски манастир „Успение Богородично“',
        description: 'Ставропигиален манастир.'
    }, {
        id: 23,
        region: 'Monasteries',
        fileName: 'Monastery_Besarbovski_1.jpg',
        title: 'Басарбовски манастир „Свети Димитър Басарбовски“',
        description: 'Русенска епархия'
    }, {
        id: 24,
        region: 'Monasteries',
        fileName: 'Monastery_Dragalevski_1.jpg',
        title: 'Драгалевски манастир',
        description: 'Софийска епархия, Църквата „Св. Богородица Витошка, построена през 1932 г. от арх. Тодор Златев (1885 – 1977).'
    }, {
        id: 25,
        region: 'Monasteries',
        fileName: 'Monastery_Dryanovo_2.jpg',
        title: 'Дряновски манастир „Свети Архангел Михаил“',
        description: 'Великотърновска епархия'
    }, {
        id: 26,
        region: 'Monasteries',
        fileName: 'Monastery_Dryanovo_3.jpg',
        title: 'Дряновски манастир „Свети Архангел Михаил“',
        description: 'Великотърновска епархия'
    }, {
        id: 27,
        region: 'Monasteries',
        fileName: 'Monastery_Dryanovo_4.jpg',
        title: 'Дряновски манастир „Свети Архангел Михаил“',
        description: 'Великотърновска епархия'
    }, {
        id: 28,
        region: 'Monasteries',
        fileName: 'Monastery_EtroPole_1.jpg',
        title: 'Етрополски манастир „Света Тройца”',
        description: 'Ловчанска епархия'
    }, {
        id: 29,
        region: 'Monasteries',
        fileName: 'Monastery_Glojene_1.jpg',
        title: 'Гложенски манастир „Свети Георги Победоносец“',
        description: 'Ловчанска епархия'
    }, {
        id: 30,
        region: 'Monasteries',
        fileName: 'Monastery_Glojene_2.jpg',
        title: 'Гложенски манастир „Свети Георги Победоносец“',
        description: 'Ловчанска епархия'
    }, {
        id: 31,
        region: 'Monasteries',
        fileName: 'Monastery_Glojene_3.jpg',
        title: 'Гложенски манастир „Свети Георги Победоносец“',
        description: 'Ловчанска епархия'
    }, {
        id: 32,
        region: 'Monasteries',
        fileName: 'Monastery_Kuklen_1.jpg',
        title: ' Кукленски манастир „Свети Безсребреници Козма и Дамян“',
        description: 'Пловдивска епархия'
    }, {
        id: 33,
        region: 'Monasteries',
        fileName: 'Monastery_Lopushanski_1.jpg',
        title: 'Лопушански манастир "Свети Йоан Предтеча"',
        description: 'Видинска епархия'
    }, {
        id: 34,
        region: 'Monasteries',
        fileName: 'Monastery_Osogovski_1.jpg',
        title: 'Осоговски манастир „Свети Йоаким Осоговски“',
        description: 'Православен манастир в Македония'
    }, {
        id: 35,
        region: 'Monasteries',
        fileName: 'Monastery_Patriarch_1.jpg',
        title: 'Патриаршески манастир „Света Троица“',
        description: 'Великотърновска епархия'
    }, {
        id: 36,
        region: 'Monasteries',
        fileName: 'Monastery_Patriarch_2.jpg',
        title: 'Патриаршески манастир „Света Троица“',
        description: 'Великотърновска епархия'
    }, {
        id: 37,
        region: 'Monasteries',
        fileName: 'Monastery_Plakovski_1.jpg',
        title: 'Плаковски манастир „Свети Илия“',
        description: 'Великотърновска епархия'
    }, {
        id: 38,
        region: 'Monasteries',
        fileName: 'Monastery_Plakovski_2.jpg',
        title: 'Плаковски манастир „Свети Илия“',
        description: 'Великотърновска епархия'
    }, {
        id: 39,
        region: 'Monasteries',
        fileName: 'Monastery_Probrajenie_1.jpg',
        title: 'Преображенски манастир „Св. Преображение Господне“',
        description: 'Великотърновска епархия'
    }, {
        id: 40,
        region: 'Monasteries',
        fileName: 'Monastery_Probrajenie_2.jpg',
        title: 'Преображенски манастир „Св. Преображение Господне“',
        description: 'Великотърновска епархия'
    }, {
        id: 41,
        region: 'Monasteries',
        fileName: 'Monastery_Rila_1.jpg',
        title: 'Рилски манастир „Свети Иван Рилски”',
        description: 'Ставропигиален манастир.'
    }, {
        id: 42,
        region: 'Monasteries',
        fileName: 'Monastery_Rila_2.jpg',
        title: 'Рилски манастир „Свети Иван Рилски”',
        description: 'Ставропигиален манастир.'
    }, {
        id: 43,
        region: 'Monasteries',
        fileName: 'Monastery_Samokov_1.jpg',
        title: 'Самоковски девически манастир „Покров Богородичен“',
        description: 'Софийска епархия'
    }, {
        id: 44,
        region: 'Monasteries',
        fileName: 'Monastery_Samokov_2.jpg',
        title: 'Самоковският девически манастир „Покров Богородичен“',
        description: 'Софийска епархия'
    }, {
        id: 45,
        region: 'Monasteries',
        fileName: 'Monastery_Sokolski_2.jpg',
        title: 'Габровски Соколски манастир „Успение Богородично“',
        description: 'Великотърновска епархия'
    }, {
        id: 46,
        region: 'Monasteries',
        fileName: 'Monastery_Sokolski_3.jpg',
        title: 'Габровски Соколски манастир „Успение Богородично“',
        description: 'Великотърновска епархия'
    }];

    function monasteriesService() {
        return {
            monasteries: monasteries
        };
    }

    angular.module('belinApp.services')
        .service('monasteriesService', [monasteriesService]);
}());
