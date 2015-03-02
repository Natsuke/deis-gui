/* global console */
angular.module('deis-gui')
  .controller('UsersController', function($scope, DeisRestangular, $state) {

    'use strict';

    $scope.list = function() {
      DeisRestangular
        .users
        .getList()
        .then(function(user) {
          $scope.users = user;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.add  = function() {
      var user = {
        'username': $scope.newUser.username,
        'password': $scope.newUser.password,
        'email': $scope.newUser.email,
        'first_name': $scope.newUser.firstName,
        'last_name': $scope.newUser.lastName
      };
      DeisRestangular
        .one('auth')
        .post('register/', user)
        .then(function() {
          $state.go('app.users.list');
        })
        .catch(function(message) {
          console.log(message);
        });
    };
  });
