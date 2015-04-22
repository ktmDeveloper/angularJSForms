

formApp.directive('employeeForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'myScripts/employeeForm/efTemplate.html',
        controller:'efController'
    }
});