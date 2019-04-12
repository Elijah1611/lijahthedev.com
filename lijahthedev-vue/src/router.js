import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		};
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/work",
			name: "work",
			component: () => import("./views/Work.vue")
		},
		{
			path: "/about",
			name: "about",
			component: () => import("./views/About.vue")
		},
		{
			path: "/skills",
			name: "skills",
			component: () => import("./views/Skills.vue")
		},
		{
			path: "/connect",
			name: "connect",
			component: () => import("./views/Connect.vue")
		},
		{
			path: "*",
			name: "404",
			component: Home
		}
	]
});
