/* global console */
angular.module('deis-gui')
  .controller('AppScaleController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listTypes = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('builds')
        .get()
        .then(function(res) {
          var builds = res.results;
          $scope.types = [];
          builds.forEach(function(arg) {
            for(var r in arg.procfile) {
              if($scope.types.indexOf(r)) {
                $scope.types.push(r);
              }
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
