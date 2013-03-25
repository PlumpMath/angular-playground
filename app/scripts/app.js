'use strict';

// Fixtures
var login = {"id":1,"name":"Léo Tarik"};

// App
var app = angular.module('newusersApp', []);

// Setup fake backend
angular.module('newusersAppDev', ['newusersApp', 'ngMockE2E']).run(function($httpBackend) {
  $httpBackend.whenJSONP('/users/me?callback=JSON_CALLBACK').respond(login);
});

// Routes
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
