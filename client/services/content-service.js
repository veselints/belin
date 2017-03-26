(function() {
    'use strict'

    function contentService(data) {
        const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
            LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

        function create(majorCategory, model) {
            var options = {
                data: model,
                headers: {
                    'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
                }
            };

            return data.post('api/belin/' + majorCategory, options)
                .then(function(resp) {
                    return resp.data;
                });
        }

        function uploadFile(majorCategory, file) {
            var headers = {
                'x-auth-key': localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY)
            };

            return data.uploadFile('api/belin/files/' + majorCategory, file, headers)
                .then(function(resp) {
                    return resp.data;
                });
        }

        return {
            create: create,
            uploadFile: uploadFile
        };
    }

    angular.module('belinApp.services')
        .service('contentService', ['dataService', contentService]);
}())
