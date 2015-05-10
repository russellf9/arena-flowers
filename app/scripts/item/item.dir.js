(function () {
  angular.module('arenaFlowersApp')
    .directive('item', Download);

  function Download(){
    return {
      restrict: 'EA',
      scope:{

      },
      templateUrl:'/scripts/item/item.html',
      link: function(scope){
        scope.image = 'images/49060-purity.jpg';
        scope.title = 'Red Tulips and Iris';
        scope.price = '£24.99';


        scope.selectItem  = function () {
          console.log('Item selected');
        }
      }
    };
  }
})();

