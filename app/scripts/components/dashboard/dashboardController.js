angular.module('deis-gui')
  .controller('DashboardController', function ($scope, LoginService, DeisRestangular) {

    'use strict';

    $scope.apps = DeisRestangular.apps.getList().$object;

    $scope.logout = function() {
      LoginService.logout();
    };

  });
