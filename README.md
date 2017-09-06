# sR Breakpoints
> SASS Helpers for Breakpoint Handling

[![Dependency Status](https://david-dm.org/superReal/srbreakpoints.svg)](https://david-dm.org/superReal/srbreakpoints)
[![devDependencies Status](https://david-dm.org/superreal/srbreakpoints/dev-status.svg)](https://david-dm.org/superreal/srbreakpoints?type=dev)
[![Code Climate](https://codeclimate.com/github/superReal/srbreakpoints/badges/gpa.svg)](https://codeclimate.com/github/superReal/srbreakpoints)
[![Build Status](https://travis-ci.org/superReal/srbreakpoints.svg?branch=master)](https://travis-ci.org/superReal/srbreakpoints)
[![Known Vulnerabilities](https://snyk.io/test/github/superReal/srbreakpoints/badge.svg)](https://snyk.io/test/github/superReal/srbreakpoints)

The sR Breakpoints module provides SASS functions and mixins, which simplify working with media queries aka breakpoints.


## Installation
    
```bash
$ yarn add @superreal/srbreakpoints
```

If you prefer using npm:

```bash
$ npm install --save @superreal/srbreakpoints
```


## Usage

Import the sR Breakpoints module in your project and initialize it:

```sass
@import 'path_to_node_modules_folder/@superreal/srbreakpoints/src/styles/srbreakpoints.scss';
@include srbreakpoints-init();
```

*Note that on initialization the module creates a global variable named `srbreakpoints` {Map} with all settings.* 


## Documentation

* [Defaults](/docs/defaults.md)
* [Breakpoint declaration](/docs/breakpoint-declaration.md)
* [Debug mode](/docs/debug-mode.md)
* [Helper mixins](/docs/helper-mixins.md)
* [Helper functions](/docs/helper-functions.md)


## License (MIT)
Copyright (c) [superReal GmbH](http://www.superreal.de)
