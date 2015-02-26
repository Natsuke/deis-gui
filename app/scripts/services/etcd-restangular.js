angular.module('deis-gui')
  .factory('EtcdRestangular', function(Restangular, $cookieStore) {
    var EtcdRestangular = Restangular
      .withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl($cookieStore.get('controller') + '/v2');

        RestangularConfigurer.setResponseInterceptor(function(response, operation, route, url) {
          if (operation === "getList") {
            return response.results;
          } else {
            return response;
          }
        });
      });

      EtcdRestangular.nodes = EtcdRestangular.all('')

  });
