/* global console */
angular.module('deis-gui')
  .controller('AppCommandController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.run = function(command) {
      var runCommand = {
        'command': command
      };
      DeisRestangular
        .one('apps', $scope.id)
        .post('run', runCommand)
        .then(function(res) {
          $scope.res = res[1];
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
