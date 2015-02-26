angular.module('deis-gui')
  .service('DashboardService', function($http, $cookieStore) {

    'use strict';

    function listApp() {
      var request = $http({
        method: 'get',
        url: $cookieStore.get('controller') + '/v1/apps',
        headers: {'Authorization':'token ' + $cookieStore.get('token') }
      });

      return request
        .then(function(response) {
          return response.data.count;
        })
        .catch(function(response) {
          return 'error: can\'t list app';
        });
    }

    return({
      listApp: listApp
    });
  });
