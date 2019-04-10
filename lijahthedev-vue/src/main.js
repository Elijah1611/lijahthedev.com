import Vue from "vue";
import router from "./router";
import store from "./store";

import "./plugins/vuetify";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import VueMouseFollower from "vue-mousefollower";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faHotel,
	faHome,
	faLaptopCode,
	faInfoCircle,
	faWindowMaximize,
	faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
	faVuejs,
	faNodeJs,
	faReact,
	faCss3Alt,
	faPython,
	faGithub,
	faLinkedin,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";

library.add(
	faHotel,
	faHome,
	faVuejs,
	faLaptopCode,
	faNodeJs,
	faReact,
	faCss3Alt,
	faPython,
	faGithub,
	faWindowMaximize,
	faInfoCircle,
	faLinkedin,
	faFileAlt,
	faYoutube
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueMouseFollower);

Vue.use(Vuetify, { theme: false });

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
