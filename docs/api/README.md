---
sidebar: auto
---

# API

## v-resize

Supports the following options:

### callOnAdd: Boolean (Default `True`)

Determines if listeners should be called when they are getting added.
If `True`, the listener is guaranteed to be called when it has been added.
If `False`, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).

### strategy: `scroll` | `object` (Default `scroll`)

see: [here for more info](https://github.com/wnr/element-resize-detector/tree/master/src/detection-strategy)


## @resize

provides a custom event object with the width and height saved in the `detail` key
See examples for more information