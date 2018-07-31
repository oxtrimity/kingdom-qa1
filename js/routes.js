var kcApp = angular.module('kcApp', ['ngRoute']);

kcApp.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
        templateUrl : 'index.html',
        controller  : 'homeController'
    })

    $routeProvider.when('/the-city', {
        templateUrl : 'thecity.html',
        controller  : 'theCityController'
    })

    $routeProvider.when('/villas', {
        templateUrl: 'villas.html',
        controller: 'villasController'
    });

    $routeProvider.when('/services', {
        templateUrl : 'services.html',
        controller  : 'servicesController'
    });

    $routeProvider.when('/contact-us', {
        templateUrl: 'contacts.html',
        controller: 'contactsController'
    });

    $routeProvider.when('/sitemap', {
        templateUrl: 'sitemap.html',
        controller: 'sitemapController'
    });

    $routeProvider.when('/rent', {
        templateUrl: 'rent.html',
        controller: 'rentController'
    });

    $routeProvider.when('/location', {
        templateUrl: 'location.html',
        controller: 'locationController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enabled: true, requireBase: false
    });

    $locationProvider.hashPrefix('!');
});


kcApp.controller('indexController', function($scope) {
    $scope.seo = {
        pageTitle: '',
        pageDescription: ''
    };
});

kcApp.controller('homeController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Home',
        pageDescription: ''
    };
});

kcApp.controller('theCityController', function($scope) {
    $scope.$parent.seo = {
        pageTitle: 'The City',
        pageDescription: ''
    };
});

kcApp.controller('villasController', function($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Villas',
        pageDescription: ''
    };
});

kcApp.controller('villasController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Villas',
        pageDescription: ''
    };
});

kcApp.controller('contactController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Contact Us',
        pageDescription: ''
    };
});

kcApp.controller('rentController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Rent',
        pageDescription: ''
    };
});

kcApp.controller('locationController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Location',
        pageDescription: ''
    };
});

kcApp.controller('servicesController', function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Services & Facilities',
        pageDescription: ''
    };
});