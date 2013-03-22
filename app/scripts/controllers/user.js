'use strict';

angular.module('newusersService', ['ngResource']).factory('User', function($resource){
   return $resource('/user', {}, {});
})
angular.module('newusersApp',['newusersService']).controller('UserCtrl', function ($scope, User) {
    $scope.user = User.get();
});
