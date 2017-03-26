(function() {
    'use strict'

    function dataService($http, Upload) {
        function send(method, url, options) {
            options = options || {};

            var headers = options.headers || {},
                data = options.data || undefined;

            headers['Content-Type'] = 'application/json';

            return $http({
                url: url,
                method: method,
                headers: headers,
                data: JSON.stringify(data)
            });
        }

        function get(url, options) {
            return send('GET', url, options);
        }

        function post(url, options) {
            return send('POST', url, options);
        }

        function put(url, options) {
            return send('PUT', url, options);
        }

        function uploadFile(url, file, headers) {
            return Upload.upload({
                url: url,
                headers: headers,
                data: {
                    file: file
                }
            });
        }

        return {
            get: get,
            post: post,
            put: put,
            uploadFile: uploadFile
        };
    }

    angular.module('belinApp.services')
        .service('dataService', ['$http', 'Upload', dataService]);
}())
