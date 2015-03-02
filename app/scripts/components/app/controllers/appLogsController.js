angular.module('deis-gui')
  .controller('AppLogsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.fetchLogs = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('logs')
        .get()
        .then(function (logs) {
          $scope.logs = JSON.parse(logs);
        });
    };
  });
