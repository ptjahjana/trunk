relola_hub
    .controller('AuthCtrl', [
        '$scope',
        '$state',
        '$modalInstance',
        'Auth',
        function($scope, $state, $modalInstance, Auth){
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.login = function() {
                Auth.login($scope.user).then(function(){
                    $state.go('home');
                });
                $modalInstance.close();
            };

            $scope.register = function() {
                Auth.register($scope.user).then(function(){
                    $state.go('home');
                });
                $modalInstance.close();
            };
        }]);