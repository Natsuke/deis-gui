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
        controller: 'UserController'
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
                controller: 'AppDashboardController'
              }
            }
          })
            .state('app.apps.app.dashboard', {
              url: '/dashboard',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appDashboardView.html',
                  controller: 'AppDashboardController'
                }
              }
            })
            .state('app.apps.app.scale', {
              url: '/scale',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appScaleView.html',
                  controller: 'AppScaleController'
                }
              }
            })
            .state('app.apps.app.rollback', {
              url: '/rollback',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appRollbackView.html',
                  controller: 'AppRollbackController'
                }
              }
            })
            .state('app.apps.app.logs', {
              url: '/logs',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appLogsView.html',
                  controller: 'AppLogsController'
                }
              }
            })
            .state('app.apps.app.config', {
              url: '/config',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appConfigView.html',
                  controller: 'AppConfigController'
                }
              }
            })
              .state('app.apps.app.config.add', {
                url: '/add',
                views: {
                  content: {
                    templateUrl: 'scripts/components/app/appConfigAddView.html',
                    controller: 'AppConfigController'
                  }
                }
              })
            .state('app.apps.app.perms', {
              url: '/perms',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appPermsView.html',
                  controller: 'AppPermsController'
                }
              }
            })
            .state('app.apps.app.domains', {
              url: '/domains',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appDomainsView.html',
                  controller: 'AppDomainsController'
                }
              }
            })
            .state('app.apps.app.command', {
              url: '/comand',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appCommandView.html',
                  controller: 'AppCommandController'
                }
              }
            })
            .state('app.apps.app.builds', {
              url: '/builds',
              views: {
                subsubcontent: {
                  templateUrl: 'scripts/components/app/appBuildsView.html',
                  controller: 'AppBuildsController'
                }
              }
            })
          .state('app.users', {
            url: '/users',
            abstract: true,
            views: {
              content: {
                template: '<div ui-view="content"></div>'
              }
            }
          })
            .state('app.users.list', {
              url: '/list',
              views: {
                content: {
                  templateUrl: 'scripts/components/users/usersView.html',
                  controller: 'UsersController'
                }
              }
            })
            .state('app.users.add', {
              url: '/add',
              views: {
                content: {
                  templateUrl: 'scripts/components/users/usersAddView.html',
                  controller: 'UsersController'
                }
              }
            })
            .state('app.users.user', {
              url: '/:id',
              abstract: true,
              views: {
                content: {
                  templateUrl: 'scripts/components/users/usersView.html',
                  controller: 'UsersController'
                }
              }
            })
              .state('app.users.user.dashboard', {
                url: '/dashboard',
                views: {
                  content: {
                    templateUrl: 'scripts/components/users/userView.html',
                    controller: 'UserController'
                  }
                }
              })
            .state('app.keys', {
              url: '/keys',
              abstract: true,
              views: {
                content: {
                  template: '<div ui-view="content"></div>'
                }
              }
            })
              .state('app.keys.list', {
                url: '/list',
                views: {
                  content: {
                    templateUrl: 'scripts/components/keys/keysListView.html',
                    controller: 'KeysController'
                  }
                }
              })
              .state('app.keys.add', {
                url: '/add',
                views: {
                  content: {
                    templateUrl: 'scripts/components/keys/keyAddView.html',
                    controller: 'KeysController'
                  }
                }
              });
  });
