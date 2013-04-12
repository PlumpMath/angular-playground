'use strict';

var newusersApp = angular.module('newusersApp', []);

newusersApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'lol.html',
      controller: 'MainCtrl'
    }).
    when('/users', {
        templateUrl: 'views/list.html',
        controller: 'UserListCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

var newusersAppDev = angular.module('newusersAppDev', ['newusersApp', 'ngMockE2E']);
newusersAppDev.run(function($httpBackend) {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/\.json$/).passThrough();
    $httpBackend.whenGET('/users').passThrough();

    var user = {id: 1, name: 'Léo Tarik'};
    $httpBackend.whenPOST('/users/me').respond(user);
});
