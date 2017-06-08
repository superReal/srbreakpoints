# Debug mode

The sR Breakpoints module has a built-in debug mode which displays the current breakpoint in the bottom right corner.
It's deactivated by default, but can be activated when initializing the module.

## Example implementation

![](/docs/assets/srbreakpoints-debug-mode.png)

```sass
@include srbreakpoints-init(
    $debug: true
);
```

*Note that the debug mode is not intended for a productive environment.* 
