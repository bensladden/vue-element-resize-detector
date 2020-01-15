<template>
  <div id="app">
    <h1>Vue Element Resize Detector</h1>
    <div v-resize @resize="onResize">This divs width is: {{ width }}</div>

    <div class="parent">
      <div v-resize @resize="onResize2" class="column">
        This divs width is: {{ width2 }}
      </div>
      <div v-resize="{ callOnAdd: false }" @resize="onResize3" class="column">
        This divs width is: {{ width3 }} (callOnAdd=false)
      </div>
      <div v-resize @resize="onResize4" class="column">
        This divs width is: {{ width4 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      width: 0,
      width2: 0,
      width3: 0,
      width4: 0
    };
  },
  methods: {
    onResize(e) {
      console.log("resize event", e.detail.width);
      this.width = e.detail.width;
    },
    onResize2(e) {
      console.log("resize event", e.detail.width);
      this.width2 = e.detail.width;
    },
    onResize3(e) {
      console.log("resize event", e.detail.width);
      this.width3 = e.detail.width;
    },
    onResize4(e) {
      console.log("resize event", e.detail.width);
      this.width4 = e.detail.width;
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
.parent {
  display: flex;
  flex-direction: row;
}

.column {
  flex: 1 1 0px;
  border: 1px solid black;
}
</style>
