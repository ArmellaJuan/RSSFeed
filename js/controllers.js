//RSS CONTROLLER
angular.module('Controllers', [])
.controller('RSSController', ['$scope','RSSFeedService', function($scope,RSSFeedService){

	$scope.site = new Object();
	$scope.site.url = '';


    $scope.getRSSData = function() {
      RSSFeedService.getRSSData($scope.site.url, function(items){
        console.log(items)
        $scope.items = items;
        $scope.$apply();
      });
    };
  }])
.controller('MainController', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
