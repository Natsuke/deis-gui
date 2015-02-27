angular.module('deis-gui')
  .controller('AppsController', function($scope, DeisRestangular, $stateParams) {

    $scope.id = $stateParams.id;

    $scope.listAll = function() {

      $scope.apps = DeisRestangular.apps.getList().$object;

    };

    $scope.appDetail = function(id) {
      $scope.app = DeisRestangular.one('apps',id).get().$object;
    };

    $scope.remove = function(id) {
      DeisRestangular.one('apps', id).remove();
    };

    $scope.fetchLogs = function(id) {
      DeisRestangular
        .one('apps', id)
        .one('logs')
        .get()
        .then(function (logs) {
          $scope.logs = JSON.parse(logs);
        });
    };

    $scope.appContDetail = function(id) {
      $scope.appCont = DeisRestangular.one('apps', id).one('containers').get().$object;
    };

    $scope.add = function(name) {
      DeisRestangular.one('apps').post('', name);
    };

    $scope.scaleApp = function(id, number) {
      var scaling = {
        "web": number
      };
      DeisRestangular.one('apps', id).post("scale/", scaling);
    };

    $scope.listVersion = function(id) {
      $scope.versions = DeisRestangular.one('apps', id).one('releases').get().$object;
    };

    $scope.rollback = function(id, number) {
      var roll = {
        "version": id
      }
      DeisRestangular.one('apps', id).one('releases').post('rollback', roll);
    };


  });
