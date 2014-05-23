(function () { 'use strict';

var app = angular.module("myapp", ["ngRoute", "templates", "myapp.welcome"]);

app.config(function ($routeProvider)
{
    $routeProvider
        .when("/", 
        {
            templateUrl: "app/welcome/welcome.html",
            controller: "WelcomeCtrl"
        });
});

})();