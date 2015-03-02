/* global console */
angular.module('deis-gui')
  .controller('AppPermsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.list = function() {
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

    $scope.add = function(newPerm) {
      var perm = {
        'username': newPerm
      };
      DeisRestangular
        .one('apps', $scope.id)
        .post('perms', perm)
        .then(function() {
          $scope.list();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.remove = function(perm) {
      DeisRestangular
        .one('apps', $scope.id)
        .one('perms', perm)
        .remove()
        .then(function() {
          $scope.list();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
