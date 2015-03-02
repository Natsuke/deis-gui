/* global console */
angular.module('deis-gui')
  .controller('AppsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listAll = function() {
      DeisRestangular
        .apps.getList()
        .then(function(apps) {
          $scope.apps = apps;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
