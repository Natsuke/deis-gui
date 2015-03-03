/* global console */
angular.module('deis-gui')
  .controller('AppScaleController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listTypes = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('containers')
        .get()
        .then(function(res) {
          var container = res.results;
          $scope.types = [];
          container.forEach(function(arg) {
            if($scope.types.indexOf(arg.type)) {
              $scope.types.push(arg.type);
            }
          });
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.scale = function(type, number) {
      if(number >= 0) {
        var scaling = {};
        scaling[type] = number;
        DeisRestangular
          .one('apps', $scope.id)
          .post('scale/', scaling)
          .then(function() {

          })
          .catch(function(message) {
            console.log(message);
          });
      }
    };

  });
