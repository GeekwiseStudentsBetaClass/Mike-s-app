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
            // CREATING A CHILD STATE
            .state('home.facebook-login',{
                url:'/facebook-login',
                templateUrl:'tabs/facebook.html',
                controller:'homeCtrl'
            })
            .state('home.twitter-feed',{
                url:'/twitter-feed',
                templateUrl:'tabs/twitter-feed.html',
                controller:'homeCtrl'
            })
            .state('home.weather-api',{
                url:'/weather-api',
                templateUrl:'tabs/weather.html',
                controller:'homeCtrl'
            })
            .state('home.threaded-comments',{
                url:'/threaded-comments',
                templateUrl:'tabs/threaded-comments.html',
                controller:'homeCtrl'
            })
            .state('home.profile-picture',{
                url:'/profile-picture',
                templateUrl:'tabs/profile-picture.html',
                controller:'homeCtrl'
            })
    });
