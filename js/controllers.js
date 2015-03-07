//RSS CONTROLLER
angular.module('Controllers', [])
.controller('RSSController', ['$scope','RSSFeedService', function($scope,RSSFeedService){

	  $scope.opciones = new Object();
	  $scope.opciones = [
	    { label: 'Example 1', url: "sample-feed.xml" },
	    { label: 'Example 2', url: "sample.xml" }
	  ];

	  $scope.selectedRss = new Object();
	  $scope.selectedRss.value = null;


    $scope.getRSSData = function() {
      RSSFeedService.getRSSData( "resources/" + $scope.selectedRss.value.url, function(items){
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
