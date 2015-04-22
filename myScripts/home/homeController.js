
formApp.controller('homeController', ['$scope', '$location', '$http', homeController]);

function homeController($scope, $location, $http) {

    $http.get('data/data.json').success(function (data) {
        $scope.characters = data.characters;
    }).error(function (data) {
        alert("Can't fetch data. Try using firefox or first run the server.js from command line");
    });


    $scope.newCharacter = function () {
        $location.path('/newCharacter');

    }

    $scope.updateCharacter = function (name) {
        $location.path('/updateCharacter/' + name);
    }
}

