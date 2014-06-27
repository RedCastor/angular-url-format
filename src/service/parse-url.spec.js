describe('parse url - module test', function() {
    var parseUrl;

    beforeEach(function() {
        angular.mock.module('angular-url-format.parseUrl');

        inject(function($injector) {
            parseUrl = $injector.get('parseUrl');
        });
    });

    afterEach(function() {
        parseUrl = null;
    });


    it('service `parseUrl` should be defined', function() {
        expect(parseUrl).toBeDefined();
        expect(typeof parseUrl).toBe('function');
    });

});

describe('parse url - unit tests', function() {
    var parseUrl;

    beforeEach(function() {
        angular.mock.module('angular-url-format.parseUrl');

        inject(function($injector) {
            parseUrl = $injector.get('parseUrl');
        });
    });

    afterEach(function() {
        parseUrl = null;
    });

    it('should parse url with every possible part', function() {
        // auth credentials are not suported by all browsers under AnchorHTMLElement properties
        var parsed = parseUrl('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
        
        expect(parsed).toBeDefined();
        expect(parsed.protocol).toBe('http:');
        expect(parsed.hostname).toBe('host.com');
        expect(parsed.port).toBe('8080');
        expect(parsed.host).toBe('host.com:8080');
        expect(parsed.pathname).toBe('/p/a/t/h');
        expect(parsed.query).toBe('query=string');
        expect(parsed.search).toBe('?query=string');
        expect(parsed.path).toBe('/p/a/t/h?query=string');
        expect(parsed.hash).toBe('#hash');
    });


    it('should parse the simpliest url', function() {
        // auth credentials are not suported by all browsers under AnchorHTMLElement properties
        var parsed = parseUrl('http://host.com');
        
        expect(parsed).toBeDefined();
        expect(parsed.protocol).toBe('http:');
        expect(parsed.hostname).toBe('host.com');
        expect(parsed.port).toBeUndefined();
        expect(parsed.host).toBe('host.com');
        expect(parsed.pathname).toBe('/');
        expect(parsed.query).toBeUndefined();
        expect(parsed.search).toBeUndefined();
        expect(parsed.path).toBe('/');
        expect(parsed.hash).toBeUndefined();
    });

});