(function () {
  angular.module('arenaFlowersApp')
    .directive('itemSelect', ItemSelect);

  function ItemSelect(){
    return {
      restrict: 'EA',
      scope:{

      },
      templateUrl:'/scripts/item-select/item-select.html',
      link: function(scope){

      }
    };
  }
})();

