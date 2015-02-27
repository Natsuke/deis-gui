angular.module('deis-gui')
  .controller('AppsController', function($scope, DeisRestangular) {

    $scope.listAll = function() {

      $scope.apps = DeisRestangular.apps.getList().$object;

    }

    $scope.appDetail = function(id) {
      $scope.app = DeisRestangular.one('apps',id).get().$object;
    }

    $scope.removeApp = function(id) {
      DeisRestangular.one('apps', id).remove();
    }

  });
