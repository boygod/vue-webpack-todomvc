import Vue from "../node_modules/vue";
import App from "./App.vue"
import "../node_modules/todomvc-common/base.css"
import "../node_modules/todomvc-app-css/index.css"
	new Vue({
		el:'#app',
		render:function (create) {
			return create(App)
		}
	});

