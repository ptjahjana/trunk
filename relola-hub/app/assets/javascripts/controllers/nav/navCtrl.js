relola_hub
    .controller('NavCtrl', [
        '$scope',
        '$modal',
        'Auth',
        function($scope, $modal, Auth){
            Auth.currentUser().then(function (user){
                $scope.user = user;
            });

            $scope.signedIn = Auth.isAuthenticated;
            $scope.logout = Auth.logout;
            $scope.login = function (size) {

                var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'auth/_login.html',
                    controller: 'AuthCtrl',
                    size: size,
                });
            };

            $scope.register = function (size) {

                var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'auth/_register.html',
                    controller: 'AuthCtrl',
                    size: size,
                });
            };
            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
            $scope.$on('devise:new-registration', function (e, user){
                $scope.user = user;
            });

            $scope.$on('devise:login', function (e, user){
                $scope.user = user;
            });

            $scope.$on('devise:logout', function (e, user){
                $scope.user = {};
            });
        }]);