angular.module('home')
  .controller('DashboardController', function ($scope, LoginService, DashboardService) {

    'use strict';

    $scope.logout = function() {
      LoginService.logout();
    };

    $scope.listApp = function() {
      DashboardService.listApp();
    };

  });
