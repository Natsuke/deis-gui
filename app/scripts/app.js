angular.module('deis-gui', [
  'ui.router',
  'ngCookies',
  'ngAnimate',
  'restangular'
])
  .config(function($stateProvider, $urlRouterProvider) {

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
        .state('app.apps', {
          url: '/apps',
          abstract: true,
          views: {
            content: {
              template: '<div ui-view="subcontent"></div>'
            }
          }
        })
          .state('app.apps.list', {
            url: '/list',
            views: {
              subcontent: {
                templateUrl: 'scripts/components/apps/appsView.html',
                controller: 'AppsController'
              }
            }
          })
          .state('app.apps.app', {
            url: '/:id',
            abstract: true,
            views: {
              subcontent: {
                templateUrl: 'scripts/components/app/appView.html',
                controller: 'AppsController'
              }
            }
          })
            .state('app.apps.app.dashboard', {
              url: '/dashboard',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appDashboardView.html',
                  controller: 'AppsController'
                }
              }
            })
            .state('app.apps.app.scale', {
              url: '/scale',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appScaleView.html',
                  controller: 'AppsController'
                }
              }
            })
            .state('app.apps.app.rollback', {
              url: '/rollback',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appRollbackView.html',
                  controller: 'AppsController'
                }
              }
            })
            .state('app.apps.app.logs', {
              url: '/logs',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appLogsView.html',
                  controller: 'AppsController'
                }
              }
            });
  });
