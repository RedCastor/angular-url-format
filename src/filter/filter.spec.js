describe('url filter - module test', function() {

    beforeEach(angular.mock.module('angular-url-format.filter'));

    it('should have a "url" filter', inject(function($filter) {
        expect($filter('url')).toBeDefined();
    }));

});

describe('url filter - unit tests', function() {

    beforeEach(angular.mock.module('angular-url-format.filter'));


    it('should extract a domain from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/features-benefits/visitor-recording/', 'hostname')).toEqual('usabilitytools.com');

    }));

    it('should extract a protocol from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/features-benefits/visitor-recording/', 'protocol')).toEqual('http:');

    }));

    it('should extract a port from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/features-benefits/visitor-recording/', 'port')).toEqual('');

    }));

    it('should extract a path from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/features-benefits/visitor-recording/', 'pathname')).toEqual('/features-benefits/visitor-recording/');

    }));

    it('should extract a hash from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/#/features-benefits/visitor-recording/', 'hash')).toEqual('#/features-benefits/visitor-recording/');

    }));

    it('should extract params from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/?p=features-benefits&t=visitor-recording', 'query')).toEqual('p=features-benefits&t=visitor-recording');

    }));

});