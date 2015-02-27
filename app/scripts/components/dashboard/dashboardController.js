angular.module('deis-gui')
  .controller('DashboardController', function ($scope, LoginService, DeisRestangular) {

    'use strict';

    $scope.logout = function() {
      LoginService.logout();
    };

    $scope.listApps = function() {
      $scope.apps = DeisRestangular.apps.getList().$object;
    };

    $scope.appContDetail = function(id) {
      $scope.id = id;
      $scope.appCont = DeisRestangular.one('apps', id).one('containers').get().$object;
    };

    $scope.scaleApp = function(id, number) {
      var scaling = {
        "web": number
      };
      DeisRestangular.one('apps', id).post("scale/", scaling);
      $scope.id = 0;
    };

  });
