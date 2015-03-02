angular.module('deis-gui')
  .factory('DeisRestangular', function(Restangular, $cookieStore) {

    'use strict';

    var DeisRestangular = Restangular
      .withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl($cookieStore.get('controller') + '/v1');
        RestangularConfigurer.setDefaultHeaders({
          'Authorization':'token ' + $cookieStore.get('token')
        });
        RestangularConfigurer.setResponseInterceptor(function(response, operation) {
          if (operation === 'getList') {
            return response.results;
          } else {
            return response;
          }
        });
      });

    DeisRestangular.apps = DeisRestangular.all('apps');
    DeisRestangular.users = DeisRestangular.all('users');

    return DeisRestangular;
  });
