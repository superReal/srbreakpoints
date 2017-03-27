# sR Breakpoints
> SASS Helpers for Breakpoint Handling

[![Dependency Status](https://david-dm.org/superReal/srbreakpoints.svg)](https://david-dm.org/superReal/srbreakpoints)
[![Code Climate](https://codeclimate.com/github/superReal/srbreakpoints/badges/gpa.svg)](https://codeclimate.com/github/superReal/srbreakpoints)
[![Build Status](https://travis-ci.org/superReal/srbreakpoints.svg?branch=master)](https://travis-ci.org/superReal/srbreakpoints)
[![Known Vulnerabilities](https://snyk.io/test/github/superReal/srbreakpoints/badge.svg)](https://snyk.io/test/github/superReal/srbreakpoints)

The sR Breakpoints module provides SASS functions and mixins, which simplify working with media queries aka breakpoints.

**Note that the README on the `master` branch might not match that of the [latest stable release](https://github.com/superReal/srbreakpoints/releases/latest)!**

## Contents
- [Installation](#installation)
- [Usage](#usage)
- [Defaults](#defaults)
- [Breakpoint declaration](#breakpoint-declaration)
- [Debug mode](#debug-mode)
- [Helper mixins](#content-mixins)
- [Helper functions](#helper-functions)

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
@import 'path_to_node_modules_folder/srbreakpoints/src/styles/srbreakpoints.scss';
@include srbreakpoints-init();
```

*Note that on initialization the module creates a global variable named `srbreakpoints` {Map} with all settings.* 


## Defaults

If the module is initialized without options, default values are applied:

```sass
$srbreakpoints: (
    // Breakpoints declaration
    $breakpoints: (
        xs: 0,    // Extra Small Devices ~ Portrait Phones
        s: 480,   // Small Devices ~ Landscape Phones
        m: 768,   // Medium Devices ~ Portrait Tablets
        l: 1024,  // Large Devices ~ Landscape Tablets
        xl: 1280  // Extra Large Devices ~ Desktops
    ),
    // Debug mode
    $debug: false
) !global;
```

## Breakpoint declaration

It's possible to override the default breakpoint declarations.

**Example implementation**

*This example shows an implementation of [Bootstrap's](http://getbootstrap.com) breakpoints.* 

```sass
@include srbreakpoints-init(
    $breakpoints: (
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    )
);
```

*Note that the first breakpoint has to start with a 0.*



## Debug mode

The sR Breakpoints module has a built-in debug mode which displays the current breakpoint at the bottom right of the page.
It's deactivated by default, but can be activated when initializing the module.

**Example implementation**

```sass
@include srbreakpoints-init(
    $debug: true
);
```

*Note that the debug mode is not intended for a production environment.* 



## Helper mixins

The module provides some helper mixins to simplify the work with it:

### Wrap content from a specific breakpoint
`srbreakpoints-wrap-content-from($from-breakpoint-name)`

**Example implementation**

*The page gets a red background from breakpoint "m" onwards, in other words: in breakpoints "m", "l" and "xl"*

```sass
@include srbreakpoints-wrap-content-from(m) {
    body {
        background: red;
    }
}
```


### Wrap content between two specific breakpoints
`srbreakpoints-wrap-content-between($start-breakpoint-name, $end-breakpoint-name)`

**Example implementation**

*The page gets a red background between breakpoint "s" and breakpoint "l", in other words: in breakpoints "s", "m" and "l"*

```sass
@include srbreakpoints-wrap-content-between(s, l) {
    body {
        background: red;
    }
}
```


#### Wrap content within a specific breakpoint
`srbreakpoints-wrap-content-within($within-breakpoint-name)`

**Example implementation**

*The page gets a red background only in breakpoint "xl"*

```sass
@include srbreakpoints-wrap-content-within(xl) {
    body {
        background: red;
    }
}
```


## Helper functions

The module provides a pair of helper functions to simplify the work with it:

- `srbreakpoints-is-initialized()` — {Boolean} Check whether the module has already been initialized
- `srbreakpoints-get-breakpoints()` — {Map} Get all breakpoints
- `srbreakpoints-has-breakpoint($breakpoint-name)` — {Boolean} Check whether the breakpoint is available
- `srbreakpoints-get-breakpoint-names()` — {List} Get all breakpoint names 
- `srbreakpoints-get-breakpoint-widths()` — {List} Get all breakpoint widths



## License (MIT)
Copyright (c) [superReal GmbH](http://www.superreal.de)
