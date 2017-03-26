(function(){
	'use strict'

	function RegisterController($window, $location, usersService) {
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
				usersService.register(vm.model).then(function(username) {
					$window.alert(username + ', успешно се регистрирахте!');

					$location.path('/admin');
				}, function(error) {
					$window.alert('Неуспешно регистриране!');
				});
			} 
		}
	};

	angular.module('belinApp.controllers')
		.controller('RegisterController', ['$window', '$location', 'usersService', RegisterController])
}());