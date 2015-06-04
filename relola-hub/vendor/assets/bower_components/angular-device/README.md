[![Bower version](https://badge.fury.io/bo/angular-device.svg)](http://badge.fury.io/bo/angular-device) [![Build Status](https://travis-ci.org/sullinger/angular-device.svg?branch=master)](https://travis-ci.org/sullinger/angular-device) [![Coverage Status](https://coveralls.io/repos/sullinger/angular-device/badge.svg?branch=master)](https://coveralls.io/r/sullinger/angular-device?branch=master)  
[![Hire SliceMeNice](https://img.shields.io/badge/Need%20Support%3F-Hire%20SliceMeNice-red.svg)](http://www.slicemenice.de)
# angular-device

A service that can be used to detect a specific device.

## How to install

```
bower install angular-device --save
```


## How to use

Reference the module in your app.

```javascript
(function() {

  angular
    .module( 'someApp', [
      'angular.device'
    ] );

})();
```

Inject the `Device` service where you need it and access one of the following properties:

- Device.isAndroid
- Device.isIphone
- Device.isIpad
- Device.isIpod
- Device.isIos


## Release History

__1.0.0__

  * First stable release of angular-device.
