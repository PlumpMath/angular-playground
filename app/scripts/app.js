'use strict';

angular.module('newusersApp', [])
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

angular.module('newusersAppDev', ['newusersApp', 'ngMockE2E']).run(function($httpBackend) {
  $httpBackend.whenGET('/user').respond({'id':'1', 'name':'Léo Tarik'});
});
