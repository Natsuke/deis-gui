angular.module('deis-gui')
  .controller('DashboardController', function ($scope, LoginService, DeisRestangular) {

    'use strict';

    $scope.logout = function() {
      LoginService.logout();
    };

  });
