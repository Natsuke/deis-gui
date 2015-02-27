angular.module('deis-gui')
  .controller('AppDashboardController', function($scope, DeisRestangular) {

    $scope.listAll = function(id) {
      $scope.app = DeisRestangular.one('apps', id).one('containers').get().$object;
    }

  });
