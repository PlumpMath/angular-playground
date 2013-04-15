var UserDetailCtrl = function($scope, $http, $routeParams) {
    $scope.user = $routeParams.userId;

    $scope.select = function(user) {
        scope.user = user;
    };
};
