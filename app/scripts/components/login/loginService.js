angular.module('home')
  .service('LoginService', function($http, $q, $cookieStore, $location){

    'use strict';

    function login(name, password) {
      var request = $http({
        method: 'post',
        url: 'http://127.0.0.1/v1/auth/login/',
        data: {
          username: name,
          password: password
        }
      });

      $cookieStore.put('username', name);

      return request
        .then(function loginSuccess (response) {
          $cookieStore.put('token', response.data.token);
        })
        .catch(loginError);
    }


    function loginError(response) {
      if(response.status === 0 || response.status === 404) {
        return($q.reject('Controller not found'));
      } else if (response.status === 400) {
        return ($q.reject('Invalid login or password'));
      } else if (!angular.isObject (response.data) || ! response.data.message) {
        return ($q.reject('Unknown error'));
      }

      return ($q.reject(response.data.message));

    }

    function getToken() {
      return $cookieStore.get('token');
    }

    function getUsername() {
      return $cookieStore.get('username');
    }

    function isAuthentificated() {
      if(getToken() === undefined) {
        $location.path('/login');
      } else {

      }
    }

    function logout() {
      $cookieStore.remove('token');
      $cookieStore.remove('username');
      $location.path('/login');
    }

    return({
      login: login,
      isAuthentificated: isAuthentificated,
      logout: logout,
      getUsername: getUsername
    });
  });
