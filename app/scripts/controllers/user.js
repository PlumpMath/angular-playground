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
        return $scope.opened && $scope.opened.id === user.id;
    };

    $scope.anyItemOpen = function() {
        return $scope.opened !== undefined;
    };

    $http.get('users.json').success(function(data) {
        $scope.users = data;
    });
};
