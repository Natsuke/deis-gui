angular.module('deis-gui')
  .controller('UsersController', function($scope, DeisRestangular) {

    $scope.list = function() {
      $scope.users = DeisRestangular.users.getList();
    }

    $scope.add  = function() {
      DeisRestangular.put();
    }

  });
