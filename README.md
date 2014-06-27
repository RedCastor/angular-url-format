angular-url-format
===================

AngularJS filter for formatting URLs.

## Usage ##
Add `angular-url-format` as your app dependency.

```
  angular.module('myModule', [
    angular-url-format'
  ]);
```

In templates you can use
```
  <p>
    Domain: {{ url | url:'hostname' }}<br/>
    Preformatted: {{ urlPre }}
  </p>
```

In controllers (or directives, services, anywhere)
```
  angular.module('myModule').controller('exampleCtrl', function($scope, $filter) {
    var timeFilter = $filter('url');
    
    $scope.url = 'http://usabilitytools.com/features-benefits/visitor-recording/;
    $scope.urlPre = timeFilter($scope.url, 'hostname');
  });
```

The result should be the same in both cases:
```
  Domain: usabilitytools.com
  Preformatted: usabilitytools.com
```

## Format options ##
Available formatting options are the same like properties of [window.location object](https://developer.mozilla.org/en-US/docs/Web/API/Location "Location API Reference on Mozilla Developer Network"), plus some additional exposed by [Node.js URL object](http://nodejs.org/api/url.html "URL module documentation on nodejs.com"):
 * href
 * protocol
 * host
 * hostname
 * port
 * pathname
 * search
 * hash 
 * path // node
 * query // node

Lack of username and password attributes is caused by method of parsing. Parser use AnchorHTMLElement API and that two properties are not exposed by every browser. Fortunatelly, other parts of URL are resolved correctly even if user and password was set. Ex. for URL `https://user:password@host.com/`, the `hostname` part will be `host.com` and protocol `https:` in every browser.

## Additional notes ##
