# Helper mixins

The module provides some helper mixins to simplify the work with it:

## Wrap content from a specific breakpoint
`srbreakpoints-wrap-content-from($from-breakpoint-name)`

### Example implementation

![](/docs/assets/srbreakpoints-wrap-content-from.gif)

*The page gets a red background from breakpoint "m" and above, in other words: in breakpoints "m", "l" and "xl"*

```sass
@include srbreakpoints-wrap-content-from(m) {
    body {
        background: red;
    }
}
```


## Wrap content between two specific breakpoints
`srbreakpoints-wrap-content-between($start-breakpoint-name, $end-breakpoint-name)`

### Example implementation

![](/docs/assets/srbreakpoints-wrap-content-between.gif)

*The page gets a red background between breakpoint "s" and breakpoint "l", in other words: in breakpoints "s", "m" and "l"*

```sass
@include srbreakpoints-wrap-content-between(s, l) {
    body {
        background: red;
    }
}
```


## Wrap content within a specific breakpoint
`srbreakpoints-wrap-content-within($within-breakpoint-name)`

### Example implementation

![](/docs/assets/srbreakpoints-wrap-content-within.gif)

*The page gets a red background only in breakpoint "xl"*

```sass
@include srbreakpoints-wrap-content-within(xl) {
    body {
        background: red;
    }
}
```
