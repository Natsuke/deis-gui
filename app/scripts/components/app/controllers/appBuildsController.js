/* global console */
angular.module('deis-gui')
  .controller('AppBuildsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.list = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('builds')
        .get()
        .then(function(builds) {
          $scope.builds = builds;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
