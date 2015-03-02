/* global console*/
angular.module('deis-gui')
  .controller('AppRollbackController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listVersion = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('releases')
        .get()
        .then(function(version) {
          $scope.versions = version;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.rollback = function(number) {
      if(number >= 0) {
        var roll = {
          'version': number
        };
        DeisRestangular
          .one('apps', $scope.id)
          .one('releases')
          .post('rollback', roll)
          .catch(function(message) {
            console.log(message);
          });
      }
    };

  });
