relola_hub
    .controller('PostsCtrl', [
        '$scope',
        'posts',
        'post',
        function($scope, posts, post){
            $scope.post = post;
            $scope.posts = posts.posts;
            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') { return; }
                posts.create({
                    title: $scope.title,
                    link: $scope.link,
                });
                $scope.title = '';
                $scope.link = '';
            };
            $scope.incrementUpvotes = function(post) {
                posts.upvote(post);
            };
            $scope.addComment = function(){
                if($scope.body === '') { return; }
                posts.addComment(post.id, {
                    body: $scope.body,
                    author: 'user',
                }).success(function(comment) {
                    $scope.post.comments.push(comment);
                });
                $scope.body = '';
            };
            $scope.incrementCommentUpvotes = function(comment){
                posts.upvoteComment(post, comment);
            };
        }]);