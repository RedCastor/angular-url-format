angular
    .module('angular-url-format-example', [
        'angular-url-format.filter',
        'angular-url-format.parseUrl'
    ])
    .controller('exampleCtrl', function($scope, parseUrl) {
        var parsed = parseUrl('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

        console.log(parsed);
    });