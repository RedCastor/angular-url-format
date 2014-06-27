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
    Full URL: {{ url }}
    Domain: {{ url | url:'d' }}<br/>
    Preformatted: {{ urlPre }}
  </p>
```

In controllers (or directives, services, anywhere)
```
  angular.module('myModule').controller('exampleCtrl', function($scope, $filter) {
    var timeFilter = $filter('url');
    
    $scope.url = 'http://usabilitytools.com/features-benefits/visitor-recording/;
    $scope.urlPre = timeFilter($scope.url, 'd');
  });
```

The result should be the same in both cases:
```
  Time passed: usabilitytools.com
  Preformatted: usabilitytools.com
```

## Format options ##
Available formatting options:
 * (d)omain (origin)
 * (p)rotocol
 * po(r)t
 * pa(t)hname
 * (h)ash
 * (p)arams

## Additional notes ##
