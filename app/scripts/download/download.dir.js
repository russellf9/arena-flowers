(function () {
  angular.module('arenaFlowersApp')
    .directive('download', Download);


  function Download(DownloadService){
    return {
      restrict: 'EA',
      scope:{
        onAdded: '&'
      },
      templateUrl:'/scripts/download/download.html',
      link: function(scope){

        function postCodeIsValid(postcode) {
          return true;
        }
        // the functions here
        scope.update = function(user){
          console.log('update: ', user);

          if(postCodeIsValid(user.postcode)) {
            console.log('ok');

            DownloadService.downloadBook(user).then(function(result){
              console.log('download status: ', result);
            });
          }

        }
      }
    };
  }


})();
