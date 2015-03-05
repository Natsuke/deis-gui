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

    $scope.add = function(option, key, value) {
      var newConf = {};
      newConf[option] = {};
      newConf[option][key] = value;
      DeisRestangular
        .one('apps', $scope.id)
        .post('config', newConf)
        .then(function() {

        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.unset = function(option, key) {
      console.log(option + ":" + key)
      var unSetConf = {};
      unSetConf[option] = {};
      unSetConf[option][key] = null;
      DeisRestangular
        .one('apps', $scope.id)
        .post('config', unSetConf)
        .then(function() {
          $scope.listConfig();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
