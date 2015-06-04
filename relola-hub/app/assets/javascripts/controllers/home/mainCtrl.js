relola_hub.controller('MainCtrl', [
        '$scope',
        '$state',
        function($scope, $state){
            $scope.searchPosts= function() {
                if (!$scope.keyword || $scope.keyword === '') {
                    return;
                }
                $state.go('posts', {keyword:$scope.keyword});
            }
        }]);

