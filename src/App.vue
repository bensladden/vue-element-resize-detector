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
      console.log("resize event", e.detail.width);
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
