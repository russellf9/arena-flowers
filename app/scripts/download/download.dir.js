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
          postcode = postcode.replace(/\s/g, "");
          var regex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
          return regex.test(postcode);
        }
        // the functions here
        scope.update = function(user){
          if(postCodeIsValid(user.postcode)) {
            DownloadService.downloadBook(user).then(function(result){
              console.log('download status: ', result);
            });
          } else {
            console.log('invalid postcode!');
          }
        }
      }
    };
  }
})();

