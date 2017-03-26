(function() {
    'use strict'

    function usersService(data) {
        const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
            LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

        function register(user) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.username + user.password).toString()
            };

            var options = {
                data: reqUser
            };

            return data.post('api/users', options)
                .then(function(user) {
                    storeAuthentication(resp.data);

                    return resp.data.username;
                });
        }


        function login(user) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.username + user.password).toString()
            };

            var options = {
                data: reqUser
            };

            return data.put('api/auth', options)
                .then(function(resp) {
                    storeAuthentication(resp.data);

                    return resp.data.username;
                });
        }

        function logout() {
            var promise = new Promise(function(resolve, reject) {
                localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
                localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
                resolve();
            });
            return promise;
        }

        // I need this for the admin screen
        function hasUser() {
            return !!localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) &&
                !!localStorage.getItem(LOCAL_STORAGE_AUTHKEY_KEY);
        }

        function storeAuthentication(user) {
        	localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
            localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
        }

        return {
        	register: register,
        	login: login,
        	logout: logout,
        	hasUser: hasUser
        };
    }

    angular.module('belinApp.services')
        .service('usersService', ['dataService', usersService]);
}())
