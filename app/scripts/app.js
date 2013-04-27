'use strict';

var usersApp = angular.module('usersApp', []);

usersApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/main.html',
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

var usersAppDev = angular.module('usersAppDev', ['usersApp', 'ngMockE2E', 'ngCookies']);
usersAppDev.run(function($httpBackend, $rootScope, $location) {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/\.json$/).passThrough();
    $httpBackend.whenGET('/users').passThrough();

    var user = { id: 1, name: 'Julien', email: 'julien@tigerlilyapps.com' };
    $httpBackend.whenPOST('/users/me').respond(user);

    $rootScope.location = $location;
});
