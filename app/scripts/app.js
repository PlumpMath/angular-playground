'use strict';

// Fixtures
var login = {"name":"Léo Tarik"};

// App
var app = angular.module('newusersApp', [ngMock]);

// Setup fake backend
app.config(function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
});

app.run(function($httpBackend) {
  $httpBackend.whenJSONP('http://localhost:3000/users/me?callback=JSON_CALLBACK').respond(login);
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
