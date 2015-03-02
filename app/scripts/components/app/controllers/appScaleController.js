/* global console */
angular.module('deis-gui')
  .controller('AppScaleController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.scaleApp = function(number) {
      if(number >= 0) {
        var scaling = {
          'web': number
        };
        DeisRestangular
          .one('apps', $scope.id)
          .post('scale/', scaling)
          .catch(function(message) {
            console.log(message);
          });
      }
    };

  });
