angular
    .module('angular-url-format.parseUrl', [ ])
    .factory('parseUrl', function() {

        function _createAnchor(href) {
            var a = document.createElement('a');
            a.href = href;

            return a;
        }


        function _parseParams(paramsString) {
            var params = { };

            paramsString.split('&').forEach(function(param) {
                var parsed = param.split('=');

                params[parsed[0]] = parsed[1];
            });

            return params;
        }


        function parse(url, extended) {
            var anchor = _createAnchor(url);

            if(anchor) {
            // auth credentials are not suported by all browsers under AnchorHTMLElement properties,
            // hovewer hostname is still resolved correctly
                var obj = {
                    href: anchor.href,
                    protocol: (anchor.protocol || undefined),
                    host: anchor.host,
                    hostname: anchor.hostname,
                    port: (anchor.port && parseInt(anchor.port, 10) ? anchor.port : undefined),
                    pathname: (anchor.pathname || undefined),
                    search: (anchor.search || undefined),
                    path: (anchor.pathname || '') + (anchor.search || ''),
                    query: (anchor.search ? anchor.search.replace(/^\?/, '') : undefined),
                    hash: (anchor.hash || undefined)
                };

                if(extended) {
                    obj.protocol = obj.protocol.replace(/:$/, '');
                    obj.pathname = obj.pathname.replace(/^\/|\/$/g, '').split('/');
                    obj.query = obj.query && _parseParams(obj.query);
                    obj.hash = obj.hash && obj.hash.replace(/^#/, '');
                }

                return obj;
            } else {
                return anchor;
            }
        }


        return parse;
    });