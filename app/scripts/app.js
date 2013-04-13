'use strict';

var newusersApp = angular.module('newusersApp', []);

newusersApp.config(['$routeProvider', function($routeProvider) {
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

var newusersAppDev = angular.module('newusersAppDev', ['newusersApp', 'ngMockE2E', 'ngCookies']);
newusersAppDev.run(function($httpBackend) {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/\.json$/).passThrough();
    $httpBackend.whenGET('/users').passThrough();

    var user = { id: 1, name: 'Julien', email: 'julien@tigerlilyapps.com' };
    $httpBackend.whenPOST('/users/me').respond(user);
});
