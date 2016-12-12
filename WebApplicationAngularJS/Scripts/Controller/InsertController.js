var InsertController = function ($scope, $http) {
    $scope.models = {
        name: '',
        contact: ''
    };

    $scope.InsertDetails = function () {
        console.log('Hi');
        $http.get('/Home/Insert');
    };
}

InsertController.$inject = ['$scope', '$http'];