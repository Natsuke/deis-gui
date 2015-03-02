/* global console, confirm */
angular.module('deis-gui')
  .controller('AppDashboardController', function($scope, DeisRestangular, $stateParams, $state) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.listAll = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('containers')
        .get()
        .then(function(app) {
          $scope.app = app;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.remove = function() {
      if(confirm('Supprimer ' + $scope.id)) {
        DeisRestangular.one('apps', $scope.id).remove()
        .then(function() {
          $state.go('app.apps.list');
        })
        .catch(function(message) {
          console.log(message);
        });
      }
    };

  });
