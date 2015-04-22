formApp.factory('dataServices', ['$http', '$q', function($http, $q) {

    var getEmployee = function(name) {
        var deferred = $q.defer(); //create a new promise   
        $http.get('data/data.json').success(function(data) {

            var charObject = data.characters;
            charObject.forEach(function(element, index) {
                if (name === charObject[index].name) {
                    deferred.resolve(charObject[index]); //the value to return after the promise is resolved                    
                }
            });
        }).error(function(data, status) {
            alert("Can't fetch data. Try using firefox or a web-server");
        });

        return deferred.promise; //return the promise
    };

    var insertEmployee = function(newEmployee) {
        return $http.post('data/data.json', newEmployee);
    };

    var updateEmployee = function(employee) {
        return true;
    };


    return {
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee
    };
}]);