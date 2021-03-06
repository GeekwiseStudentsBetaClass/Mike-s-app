angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        // ROUTER PROVIDER ASSIGNS THE DEFAULT URL PAGE
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // ASSIGNING STATES
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller:'homeCtrl'
            })
            .state('user-info',{
              url:'/user-profile',
              templateUrl:'about/user.html',
              controller:'userCtrl'
            })
            // CREATING A CHILD STATE
            .state('home.facebook-login',{
                url:'/facebook-login',
                templateUrl: 'tabs/facebook.html',
                controller:'homeCtrl',
            })
            .state('home.twitter-feed',{
                url:'/twitter-feed',
                templateUrl:'tabs/twitter-feed.html',
                controller:'twitterCtrl'
            })
            .state('home.weather-api',{
                url:'/weather-api',
                templateUrl:'tabs/weather.html',
                controller:'weatherCtrl'
            })
            .state('home.threaded-comments',{
                url:'/threaded-comments',
                templateUrl:'tabs/threaded-comments.html',
                controller:'threadedCtrl'
            })
            .state('home.profile-picture',{
                url:'/profile-picture',
                templateUrl:'tabs/profile-picture.html',
                controller:'profileCtrl'
            })
    });
