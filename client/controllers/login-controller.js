(function(){
	'use strict'

	function LoginController($window, $location, usersService) {
		var vm = this;

		vm.model = {
			username: '',
			password: ''
		};

		vm.repeatedPassword = '';

		vm.register = function() {
			if (!vm.model.password || !vm.model.password) {
				$window.alert('Всички полета трябва да бъдат попълнени!');
			} else if (vm.model.password !== vm.repeatedPassword) {
				$window.alert('Двете полета за парола трябва да са с еднакъв текст!');
			} else {
				usersService.login(vm.model).then(function(username) {
					$window.alert(username + ' успешно влязохте в профила си!');

					$location.path('/admin');
				}, function(error) {
					$window.alert('Неуспешно влизане в профила!');
				});
			} 
		}
	};

	angular.module('belinApp.controllers')
		.controller('LoginController', ['$window', '$location', 'usersService', LoginController])
}());