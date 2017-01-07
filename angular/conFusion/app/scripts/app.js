
'use strict';
angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  // route for the contactus page
  .when('/contactus', {
    templateUrl : 'contactus.html',
    controller  : 'ContactController'
  })
  // route for the menu page
  .when('/menu', {
    templateUrl : 'menu.html',
    controller  : 'menuController'
  })
  // route for the dish details page
  .when('/menu/:id', {
    templateUrl : 'dishdetail.html',
    controller  : 'dishDetailController'
  })
  .otherwise('/contactus');

  // use the HTML5 History API
  // $locationProvider.html5Mode(true);

});

 $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });