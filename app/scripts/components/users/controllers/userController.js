/* global console */
angular.module('deis-gui')
  .controller('UserController', function($scope, DeisRestangular, LoginService, $state) {

    'use strict';

    $scope.remove = function() {
      if(confirm('Supprimer le compte courant ?')) {
        DeisRestangular
          .one('auth', 'cancel/')
          .remove()
          .then(function() {
            $state.go('login');
          })
          .catch(function(message) {
            console.log(message);
          });
      }
    };


    $scope.logout = function() {
      LoginService.logout();
    };

  });
