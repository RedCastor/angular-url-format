angular
    .module('angular-url-format.filter', [ ])
    .filter('url', function() {

        return function(value, format) {
            return value + format;
        };
    });
