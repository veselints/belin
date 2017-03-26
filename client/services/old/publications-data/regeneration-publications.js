(function() {
    'use strict';

    var regenerationPublications = [{
        id: 1,
        title: 'Днешният ден на емблематични тютюневи складове по света',
        edition: 'сп. Градът, 10.01.2017',
        abstract: 'В Европа и по света съществуват различни подходи за провеждане на урбанистичните политики на национално и местно ниво. Такъв подход е регенерацията (Urban Regeneration; Urban Renewal; градско обновяване) – една комплексна визия за градско възстановяване и развитие, подкрепена с конкретни дейности, насочени към промяна на условията в жизнената среда за постигане на определени икономически и социални цели.',
        url: 'http://gradat.bg/news/2017/01/10/2894758_dneshniiat_den_na_emblematichni_tjutjunevi_skladove_po/'
    },{
        id: 2,
        title: 'Ню Йорк: Oculus излита',
        edition: 'сп. Градът, 09.11.2015',
        abstract: 'На 3 март 2016 г. в 15 ч. местно време на "Кота нула" в сърцето на Световния търговски център, където преди 11 септември 2001 г. се издигаха кулите близнаци, след 10 години строителство отвори врати Новият транспортен възел (хъб), дело на арх. Сантяго Калатрава.',
        url: 'http://infrastructure.bg/show.php?storyid=2823707'
    }];

    function regenerationPublicationsService() {
        return {
            publications: regenerationPublications
        };
    }

    angular.module('belinApp.services')
        .service('regenerationPublicationsService', [regenerationPublicationsService]);
}());
