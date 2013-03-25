'use strict';

var newusersApp = angular.module('newusersApp', []);

newusersApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

var newusersAppDev = angular.module('newusersAppDev', ['newusersApp', 'ngMockE2E']);
newusersAppDev.run(function($httpBackend) {
  $httpBackend.whenGET(/\.html$/).passThrough();

  var user = {id: 1, name: 'Léo Tarik'};
  $httpBackend.whenPOST('/users/me').respond(user);
});
