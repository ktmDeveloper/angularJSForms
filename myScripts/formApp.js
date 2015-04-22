

var formApp = angular.module('formApp', ['ngRoute']); //initialize the angularAPP

//add routing
formApp.config(function ($routeProvider, $locationProvider) {

  // $locationProvider.html5Mode(true); //remove hastag from the URL

    $routeProvider.when("/home", {
        templateUrl: "myScripts/home/home.html",
        controller: "homeController"
    }).when("/newCharacter", {
        templateUrl: "myScripts/employeeForm/efTemplate.html",
        controller: "efController"
    }).when("/updateCharacter/:name", {
        templateUrl: "myScripts/employeeForm/efTemplate.html",
        controller: "efController"
    }).otherwise({
        redirectTo: "/home"
    });    
});