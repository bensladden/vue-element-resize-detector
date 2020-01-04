---
sidebar: auto
---

# Guide

## Getting Started

## Setup

```sh
$ npm install vue-element-resize-detector
```

## 🚀 How to use in Vue

In main.js

```vue
import resize from "vue-element-resize-detector";

Vue.use(resize)
```

```vue
<template>
  <div id="app">
    <h1>Vue Element Resize Detector</h1>
    <div v-resize @resize="onResize">This divs with is: {{ width }}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      width: 0
    };
  },
  methods: {
    onResize(e) {
      console.log("resize event", e.detail.width, e.detail.height);
      this.width = e.detail.width;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

## Support
Please give a ⭐️ if this project helped you!

## Contributing

If you have any questions or requests or want to contribute to `vue-element-resize-detector` or other packages, please write the [issue](https://github.com/bensladden/vue-element-resize-detector/issues) or give me a Pull Request freely.

## Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-element-resize-detector/issues) on GitHub.
