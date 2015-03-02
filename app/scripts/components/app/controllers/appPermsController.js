/* global console */
angular.module('deis-gui')
  .controller('AppPermsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listPerms = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('perms')
        .get()
        .then(function(perms) {
          $scope.perms = perms;
        })
        .catch(function(message) {
          console.log(message);
        });
    };
  });
