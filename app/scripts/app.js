'use strict';

/**
 * @ngdoc overview
 * @name arenaFlowersApp
 * @description
 * # arenaFlowersApp
 *
 * Main module of the application.
 */
angular
  .module('arenaFlowersApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
