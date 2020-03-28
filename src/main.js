import Vue from "vue";
import App from "./App.vue";
import resize from "./directive/elementResizeDetector";

Vue.config.productionTip = false;

Vue.directive("resize", resize);

new Vue({
  render: h => h(App)
}).$mount("#app");
