# Breakpoint declaration

It's possible to override the default breakpoint declarations.

## Example implementation

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
