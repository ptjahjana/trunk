relola_hub = angular.module('relolaHub', ['ui.router', 'templates', 'Devise', 'ui.bootstrap'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'MainCtrl',
                    resolve: {
                        postPromise: ['posts', function(posts){
                            return posts.getAll();
                        }]
                    }
                })
                .state('posts', {
                    url: '/posts/{keyword}',
                    templateUrl: 'posts/_posts.html',
                    controller: 'PostsCtrl',
                    resolve: {
                        post: ['$stateParams', 'posts', function($stateParams, posts) {
                            return posts.search($stateParams.keyword);
                        }]
                    }
                })
                .state('post', {
                    url: '/post/{id}',
                    templateUrl: 'posts/_post.html',
                    controller: 'PostsCtrl',
                    resolve: {
                        post: ['$stateParams', 'posts', function($stateParams, posts) {
                            return posts.get($stateParams.id);
                        }]
                    }
                });


            $urlRouterProvider.otherwise('home');
        }]);
