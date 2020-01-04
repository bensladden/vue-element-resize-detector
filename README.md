# vue-element-resize-detector

<p align="center">
	<img src="https://flat.badgen.net/github/branches/bensladden/vue-element-resize-detector" alt="branches">
	<img src="https://flat.badgen.net/github/releases/bensladden/vue-element-resize-detector" alt="releases">
	<img src="https://flat.badgen.net/github/open-issues/bensladden/vue-element-resize-detector" alt="openIssues">
	<img src="https://flat.badgen.net/github/last-commit/bensladden/vue-element-resize-detector" alt="lastCommit">
	<img src="https://flat.badgen.net/github/license/bensladden/vue-element-resize-detector" alt="license">
</p>

Vue Directive to detect resize events on elements or components. Uses [element Resize Detector](https://github.com/wnr/element-resize-detector) under the hood

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fed56b9-e079-41c6-8fe8-bb36fe77825c/deploy-status)](https://app.netlify.com/sites/vue-element-resize-detector/deploys)

## ⚙️ Installation
```sh
$ npm install vue-element-resize-detector
```
## 📄 Documents
[Docs Link](https://vue-element-resize-detector.netlify.com/)

[element Resize Detector](https://github.com/wnr/element-resize-detector)

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


## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!


## 👏 Contributing

If you have any questions or requests or want to contribute to `vue-element-resize-detector` or other packages, please write the [issue](https://github.com/bensladden/vue-element-resize-detector/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-element-resize-detector/issues) on GitHub.

## ⚙️ Development
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.