/* global console */
angular.module('deis-gui')
  .controller('KeysController', function($scope, DeisRestangular, $state) {

    'use strict';

    $scope.list = function() {
      DeisRestangular
        .keys.getList()
        .then(function(keys) {
          $scope.keys = keys;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.add = function(id, key) {
      var rsa = {
        'id': id,
        'public': key
      };
      DeisRestangular
        .one('keys')
        .post('', rsa)
        .then(function() {
          $state.go('app.keys.list');
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.remove = function(id) {
      DeisRestangular
        .one('keys', id)
        .remove()
        .then(function() {
          $scope.list();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
