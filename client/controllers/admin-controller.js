(function() {
    'use strict'

    function AdminController($firebaseAuth, $firebaseStorage, $firebaseObject, adminOptionsService) {
        var vm = this;
        vm.showAreas = true;
        vm.areaOptions = adminOptionsService.paintingsAreaOptions;
        vm.showDescription = true;
        vm.showYear = true;
        vm.showForPublications = false;
        vm.majorCategory = 'paintings';
        vm.showFile = true;
        vm.authenticated = false;

        var auth = $firebaseAuth();

        vm.onAuthenticate = function() {
            if (vm.authEmail && vm.authEmail.length > 5 && vm.authPass && vm.authPass.length > 6) {
                auth.$signInWithEmailAndPassword(vm.authEmail, vm.authPass).then(function(user) {
                    if (user) {
                        alert(user.email + ' signed in!');
                        vm.authenticated = true;
                    } else {
                        user = {};
                        vm.authenticated = false;
                    }
                }).catch(function(error) {
                    console.log("Authentication failed:", error);
                });
            } else {
                alert('Use valid Email and Password!');
            }
        }

        vm.onSignOut = function() {
            auth.$signOut().then(function() {
                alert('User signed out!');
                vm.authenticated = false;
            }).catch(function(error) {
                alert(error.message);
            });
        }

        vm.model = {
            area: 'ruse',
            title: null,
            year: null,
            url: null,
            date: null,
            colaborators: null,
            interviewer: null
        };

        vm.updateMajorSelection = function() {
            var selectedCategory = vm.majorCategory;
            vm.showDescription = true;
            vm.showYear = true;
            vm.showForPublications = false;

            if (adminOptionsService.areaCategories.indexOf(selectedCategory) > -1) {
                vm.showAreas = true;
                vm.showFile = true;

                if (selectedCategory === 'photos') {
                    vm.areaOptions = adminOptionsService.photosAreaOptions;
                    vm.showDescription = false;
                } else if (selectedCategory === 'paintings') {
                    vm.areaOptions = adminOptionsService.paintingsAreaOptions;
                } else if (selectedCategory === 'archives') {
                    vm.areaOptions = adminOptionsService.archiveAreaOptions;
                } else if (selectedCategory === 'projects') {
                    vm.areaOptions = adminOptionsService.projectsAreaOptions;
                } else {
                    vm.areaOptions = adminOptionsService.professionalAreaOptions;

                    if (selectedCategory === 'publications') {
                        vm.showForPublications = true;
                        vm.showFile = false;
                    }
                }
            } else {
                if (adminOptionsService.noYearCategories.indexOf(selectedCategory) > -1) {
                    vm.showYear = false;
                }

                vm.showAreas = false;
                vm.showFile = false;
            }
        }

        vm.submit = function() {
            if (vm.showFile) {
                if (vm.form.file.$valid && vm.file) {
                    var path = vm.majorCategory + '/';
                    if (vm.showAreas) {
                        path = path + vm.model.area + '/';
                    }

                    var storageRef = firebase.storage().ref(path + vm.file.name);
                    var storage = $firebaseStorage(storageRef);
                    var uploadTask = storage.$put(vm.file, { contentType: 'image/jpeg' });

                    uploadTask.$complete(function(snapshot) {
                        //alert(snapshot.downloadURL);

                        var pathToDbRef = vm.majorCategory + '/';
                        if (vm.showAreas) {
                            pathToDbRef = pathToDbRef + vm.model.area + '/';
                        }

                        pathToDbRef += vm.model.title;

                        var dbRef = firebase.database().ref(pathToDbRef);
                        var newObject = $firebaseObject(dbRef);
                        angular.extend(newObject, vm.model);
                        newObject.url = snapshot.downloadURL;

                        newObject.$save().then(function(ref) {
                            alert(ref.key);
                        }, function(error) {
                            console.log("Error:", error);
                        });
                    });
                }
            }
        }
    }

    angular.module('belinApp.controllers')
        .controller('AdminController', ['$firebaseAuth', '$firebaseStorage', '$firebaseObject', 'adminOptionsService', AdminController]);
}());