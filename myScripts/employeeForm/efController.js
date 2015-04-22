formApp.controller('efController', ['$scope', '$window', '$routeParams', 'dataServices', '$timeout', efController]);

function efController($scope, $window, $routeParams, dataServices, $timeout) {
    if ($routeParams.name) {
        jQuery(".modal-header > h1").html('Update ' + $routeParams.name.toUpperCase()); // change the form heading
        var promise = dataServices.getEmployee($routeParams.name);
        promise.then(function(data) {
            $scope.editableEmployee = data; //to update the character's details

        });
    } else {
        $scope.employee = {
            name: 0
        };
    }

    $scope.editableEmployee = angular.copy($scope.employee); //while canceling the form, the data will get erased

    $scope.submitForm = function(data) {

        if ($scope.editableEmployee.name === 0) {

            // set the first name of the character to be its ID
            var id = jQuery('#fullName').val().trim().split(" ").shift();
            $scope.editableEmployee.name = id;

            //Insert New Character
            dataServices.insertEmployee($scope.editableEmployee).then(
                function(data, status, headers, config) { //success
                    data.data.characters.push($scope.editableEmployee); //add the new character

                    $scope.employee = angular.copy($scope.editableEmployee);
                    alert("Character added: " + $scope.editableEmployee.fullName.toUpperCase());
                    $window.history.back();
                },
                function(data, status, headers, config) { //error handle
                    alert(status);
                });
        } else {
            dataServices.updateEmployee($scope.editableEmployee);
        }

    };
    $scope.cancelForm = function(data) {
        $window.history.back();
    };

    $scope.resetForm = function(data) {

        var helpBlock = jQuery('.help-block');
        helpBlock.hide();
        //Clear the forms and errors
        $timeout(function() {
            jQuery('.form-group').removeClass('has-error');
            helpBlock.css("display", "block");
        }, 1, false);

    };
};