angular
    .module('angular-url-format-example', [
        'angular-url-format.filter'
    ])
    .controller('exampleCtrl', function($scope) {
        $scope.currentTime = 121313983298;
    });