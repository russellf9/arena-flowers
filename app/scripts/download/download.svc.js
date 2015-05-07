(function() {

  'use strict';

  /**
   * A factory which makes the call to download the book
   */
  angular.module('arenaFlowersApp').service('DownloadService', ['$q', function($q) {

    var _downLoadService = {

      // will make the server side call to download the book
      downloadBook: function(user) {
        var _status = '200';
        console.log('service - download!');
        // fake up a call back promise for now...

        // There will always be a promise so always declare it.
        var deferred = $q.defer();

        if (_status) {
          // Resolve the deferred $q object before returning the promise
          deferred.resolve(_status);
          return deferred.promise;
        }
        // TODO
        $http.post('/api/download', user).success(function(data){
          _status = data;
          deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          deferred.reject("Error: request returned status " + status);
        });
        return deferred.promise;
      }
    };


    return (_downLoadService);

  }]);

}());
