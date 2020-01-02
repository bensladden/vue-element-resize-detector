import resize from "./directive/elementResizeDetector";

export default {
	install(Vue) {
		Vue.directive('resize', resize)
	}
}