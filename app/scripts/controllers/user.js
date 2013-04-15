var UserListCtrl = function($scope, $http) {
    $scope.open = function(user){
        if ($scope.isOpen(user)){
            $scope.opened = undefined;
        } else {
            $http.get(user.id + '.json').success(function(data) {
                $scope.opened = data;
            });
        }
    };

    $scope.isOpen = function(user){
        return $scope.opened === user;
    };

    $scope.anyItemOpen = function() {
        return $scope.opened !== undefined;
    };

    $http.get('users.json').success(function(data) {
        $scope.users = data;
    });
};
