angular
    .module('angular-url-format.filter', [
        'angular-url-format.parseUrl'
    ])
    .filter('url', function(parseUrl) {

        var URL_PARTS = [ 'href', 'protocol', 'host', 'auth', 'hostname', 'port', 'pathname', 'search', 'path', 'query', 'hash' ];


        function _parseFormat(string) {
            return string.split(',').filter(function(part) {
                return (URL_PARTS.indexOf(part) !== -1);
            });
        }


        function _filterKeys(obj, fn, context) {
            var res = { };

            Object.keys(obj).forEach(function(key) {
                if(fn.call(context, key, obj[key], obj)) {
                    res[key] = obj[key];
                }
            });

            return res;
        }


        function _joinValues(obj, separator) {
            var res = [ ];

            Object.keys(obj).forEach(function(key) {
                res.push(obj[key]);
            });

            return res.join(separator);
        }


        return function(value, format) {
            format = _parseFormat(format);

            var res = _filterKeys(parseUrl(value), function(key, value) {
                return (format.indexOf(key) !== -1) && ('undefined' !== typeof value);
            });

            return _joinValues(res, '');
        };
    });