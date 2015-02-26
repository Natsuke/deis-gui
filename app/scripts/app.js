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
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'scripts/components/dashboard/dashboardView.html',
        controller: 'DashboardController'
      })
      .state('cluster', {
        url: '/cluster',
        templateUrl: 'scripts/components/cluster/clusterView.html',
        controller: 'ClusterController'
      })
      .state('apps', {
        url: '/apps',
        templateUrl: 'scripts/components/apps/appsView.html',
        controller: 'AppsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'scripts/components/login/loginView.html',
        controller: 'LoginController'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'scripts/components/users/usersView.html',
        controller: 'UsersController'
      });
  });
