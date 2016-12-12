var CRUDapp = angular.module('CRUDapp', ['ngRoute']);

CRUDapp.controller('TestController', TestController);
CRUDapp.controller('InsertController', InsertController);

var configFunction = function ($routeProvider) {
    $routeProvider.
    when('/Insert', {
        templateUrl: 'Operation/Insert'
    }).
    when('/Update', {
        templateUrl: 'Operation/Update'
    }).
    when('/Delete', {
        templateUrl: 'Operation/Delete'
    }).
    when('/Details', {
        templateUrl: 'Operation/Details'
    });
};

configFunction.$inject = ['$routeProvider'];

CRUDapp.config(configFunction);