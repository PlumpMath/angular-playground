var LoginController = function($scope, $http, $cookieStore) {
    $scope.login = {};
    $scope.login.user = $cookieStore.get('users_session');

    $scope.login.connect = function() {
        $http.post('/users/me').success(function(data, status) {
            // despite its name, this callback is triggered even in case of an error, so we have to take care
            if (status < 200 || status >= 300)
                return;
            $scope.login.user = data;
            $cookieStore.put('users_session', data);
        });
    };

    $scope.login.disconnect = function() {
        $scope.login.user = null;
        $cookieStore.remove('users_session');
    };

    // For the future
    // $scope.$watch('login.login + login.password', function() {
    //     $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.login.login + ':' + $scope.login.password);
    // });
};
