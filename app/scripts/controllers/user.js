'use strict';

angular.module('newusersService', ['ngResource']).factory('User', function($resource){
   return $resource('/user', {}, {});
})

angular.module('newusersApp',['newusersService']).controller('UserCtrl', function ($scope, User) {
    $scope.user = User.get();

    $scope.user_to_display = function(user) {
        return user.logged_in ? user.name : "Login"
    }
});
