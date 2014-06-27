describe('url filter - module test', function() {

    beforeEach(angular.mock.module('angular-url-format.filter'));

    it('should have a "url" filter', inject(function($filter) {
        expect($filter('url')).toBeDefined();
    }));

});

describe('url filter - unit tests', function() {

    it('should extract a domain from url', inject(function($filter) {
        var url = $filter('url');
        
        expect(url('http://usabilitytools.com/features-benefits/visitor-recording/', 'd')).toEqual('usabilitytools.com');

    }));

});