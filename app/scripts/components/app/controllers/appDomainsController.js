/* global console */
angular.module('deis-gui')
  .controller('AppDomainsController', function($scope, DeisRestangular, $stateParams) {

    'use strict';

    $scope.id = $stateParams.id;

    $scope.list = function() {
      DeisRestangular
        .one('apps', $scope.id)
        .one('domains')
        .get()
        .then(function(domains) {
          $scope.domains = domains;
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.add = function(domain) {
      var newDomain = {
        'domain': domain
      };
      DeisRestangular
        .one('apps', $scope.id)
        .post('domains', newDomain)
        .then(function() {
          $scope.list();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

    $scope.remove = function(domain) {
      DeisRestangular
        .one('apps', $scope.id)
        .one('domains', domain)
        .remove()
        .then(function() {
          $scope.list();
        })
        .catch(function(message) {
          console.log(message);
        });
    };

  });
