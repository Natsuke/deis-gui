angular.module('deis-gui', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular'
])
  .config(function($stateProvider, $urlRouterProvider){

    'use strict';

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'scripts/components/login/loginView.html',
        controller: 'LoginController'
      })
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'scripts/components/layout.html',
        controller: function ($scope, LoginService) {
          $scope.logout = function () {
            LoginService.logout();
          };
        }
      })
        .state('app.dashboard', {
          url: '/dashboard',
          views: {
            content: {
              templateUrl: 'scripts/components/dashboard/dashboardView.html',
              controller: 'DashboardController'
            }
          }
        })
        .state('app.cluster', {
          url: '/cluster',
          views: {
            content: {
              templateUrl: 'scripts/components/cluster/clusterView.html',
              controller: 'ClusterController'
            }
          }
        })
        .state('app.apps', {
          url: '/apps',
          views: {
            content: {
              templateUrl: 'scripts/components/apps/appsView.html',
              controller: 'AppsController'
            }
          }
        })
        .state('app.users', {
          url: '/users',
          views: {
            content: {
              templateUrl: 'scripts/components/users/usersView.html',
              controller: 'UsersController'
            }
          }
        });
  });
