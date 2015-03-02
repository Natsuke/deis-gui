/* global console */
angular.module('deis-gui')
  .controller('AppConfigController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listConfig = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('config')
        .get()
        .then(function(config) {
          $scope.config = config;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
