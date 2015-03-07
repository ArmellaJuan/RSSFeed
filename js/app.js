
angular.module('app', ['ionic', 'Controllers', 'Services'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.rss', {
    url: "/rss",
      views: {
        'menuContent' :{
          templateUrl: "templates/rssUrl.html",
     		controller: 'RSSController'
        }
      } })
    .state('eventmenu.instructions', {
    url: "/instructions",
      views: {
        'menuContent' :{
          templateUrl: "templates/instructions.html",
        }
      } })
    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/event/rss');

});
