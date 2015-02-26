angular.module('deis-gui')
.controller('LoginController', function($scope, $q, $state, $cookieStore, LoginService){

  'use strict';

  $scope.submited = false;

  $scope.alerts = [];

  $scope.user = {
    controller: $cookieStore.get('controller'),
    name: $cookieStore.get('username')
  };

  $scope.login = function() {
    var deferred = $q.defer();
    $scope.alerts = [];
    LoginService.login($scope.user.controller, $scope.user.name, $scope.user.password)
      .then(
        function() {
          deferred.resolve();
          $state.go('dashboard');
        },
        function(data) {
          deferred.reject();
          $scope.alerts.push({'type':'danger', 'msg':data});
        }
      );

      return deferred.promise;
  };
})
.directive('shakeForm', ['$animate', function($animate) {

  'use strict';

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function (scope, elements, attrs, form) {
      element.on('submit', function() {
        scope.$apply(function() {
          scope.$parent.loginForm.submitted = true;
          if(form.$valid) {
            scope.$parent.login().then(
              function() {
                return;
              },
              function() {

              }
            );
          }

          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });

        });
      });
    }
  };
}]);
