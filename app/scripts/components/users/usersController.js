angular.module('deis-gui')
  .controller('UsersController', function($scope, DeisRestangular) {

    $scope.list = function() {
      $scope.users = DeisRestangular.users.getList();
    }

    $scope.add  = function() {
      var user = {
        "username": $scope.newUser.username,
        "password": $scope.newUser.password,
        "email": $scope.newUser.email,
        "first_name": $scope.newUser.firstName,
        "last_name": $scope.newUser.lastName
      }
      DeisRestangular.one('auth').post('register/', user);
    }

  });
