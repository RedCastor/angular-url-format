angular
    .module('angular-url-format.filter', [ ])
    .filter('url', function() {

    	var URL_SPLITTER = /^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    	

        return function(value, format) {
            return value + format;
        };
    });
