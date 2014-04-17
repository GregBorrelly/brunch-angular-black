var app = angular.module("myapp", ["ngRoute", "templates"])

app.config(function ($routeProvider)
{
    $routeProvider
        .when("/", 
        {
            templateUrl: "app/welcome/templates/welcome.html",
            controller: "WelcomeCtrl"
        })
})