# JavaScript `KeyboardEventInit.which`

According to MDN, the `KeyboardEventInit` dictionary which is used to pass values to a new
instance of `KeyboardEvent` through its constructor `new KeyboardEvent(init)` includes the
`which` field as one of the allowed initialization values.

[`KeyboardEvent` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent#Values)

However, in testing with the following piece of JavaScript code, it becomes clear that this
does not actually set the `which` keyboard event property value:

`new KeyboardEvent({ which: 190 }).which`

This expression always evaluates to `0` which is the default for `which` if not provided,
so the code behaves as if `which` is not provided in the initialization dictionary.

Is it perhaps because `which` must be provided in conjunction with some other field of the
same dictionary?
