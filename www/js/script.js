// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the health_history page
            .when('/transformation_challenge', {
                templateUrl : 'pages/transformation_challenge.html',
                controller  : 'transformationChallengeController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    scotchApp.controller('transformationChallengeController', function($scope) {
        var handler = StripeCheckout.configure({
          key: 'pk_test_6TUSP9iuyl3APosYY3X7KWbU',
          image: 'img/IMG_5545.jpeg',
          locale: 'auto',
          token: function(token) {
            // Use the token to create the charge with a server-side script.
            // You can access the token ID with `token.id`
          }
        });
        $scope.myFunc = function() {
            handler.open({
              name: 'HDFitDynasty',
              description: 'Transformation Challenge',
              amount: 6000
            });
        };

    });
