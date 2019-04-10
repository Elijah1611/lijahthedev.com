import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: [
			{
				title: "The Venue",
				description:
					"The Venue is a modern event landing page for future car events",
				year: 2019,
				lang: { name: "React", color: "#61dafb" },
				color: "white",
				isDark: false,
				image:
					"https://the-venue-car-events.netlify.com/static/media/slide-one.345579ba.jpg",
				links: [
					"https://the-venue-car-events.netlify.com/",
					"https://github.com/LijahTheDev/The-Venue"
				]
			},
			{
				title: "Domnoo",
				description:
					"The Venue is a modern event landing page for future car events",
				year: 2019,
				lang: { name: "Vue", color: "#42b983" },
				color: "red lighten-1",
				isDark: true,
				image:
					"https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg?alt=media&token=8d4aeb2f-cc26-4ac9-96a2-de197aae45e8",
				links: [
					"https://the-venue-car-events.netlify.com/",
					"https://github.com/LijahTheDev/The-Venue"
				]
			},

			{
				title: "Aurora Grove",
				description:
					"A Bootstrap website made during a Bootstrap 4 course",
				year: 2019,
				lang: { name: "Bootstrap", color: "#563D7C" },
				color: "blue",
				isDark: true,
				image:
					"https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/main.jpg?alt=media&token=32b9ccfc-b494-493c-87d9-98b71ff52238",
				links: [
					"https://aurora-grove-lijahthedev.netlify.com/",
					"https://github.com/LijahTheDev/Aurora-Grove"
				]
			},
			{
				title: "Pro Web Solutions",
				description:
					"A business practice landing page with CSS Grid, Flexbox. and jQuery",
				year: 2019,
				lang: { name: "CSS", color: "blue" },
				color: "grey darken-1",
				isDark: true,
				image:
					"https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/homepage-product-office-space.jpg?alt=media&token=5edf02b6-939b-469a-9810-00e9f7dc9309",
				links: [
					"https://the-venue-car-events.netlify.com/",
					"https://github.com/LijahTheDev/The-Venue"
				]
			},
			{
				title: "Wonderful Quotes",
				description: "Add and collect your favorite quotes in one app",
				year: 2019,
				lang: { name: "Vue", color: "#42b983" },
				color: "blue lighten-4",
				isDark: false,
				image:
					"https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/quotation-marks-43778-2560x1600.jpg?alt=media&token=9d94e536-f594-4130-8741-b50458d35c6f",
				links: [
					"https://wonderful-quotes-lijahthedev.netlify.com/",
					"https://github.com/LijahTheDev/Wonderful-Quotes"
				]
			},
			{
				title: "React Movie Table",
				description:
					"A react movie table that I'm working on while learning react",
				year: 2019,
				lang: { name: "React", color: "#61dafb" },
				color: "yellow lighten-1",
				isDark: false,
				image:
					"https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/twitterlists-TA.jpg?alt=media&token=ef4b64e3-75ae-4a21-90ab-9773daae27c6",
				links: [
					"https://the-venue-car-events.netlify.com/",
					"https://github.com/LijahTheDev/The-Venue"
				]
			}
		]
	},
	mutations: {},
	actions: {}
});

// color: {
//   type: String,
//   default: "white"
// },
// image: {
//   type: String,
//   required: true
// },
// isDark: {
//   type: Boolean,
//   default: false
// },
// title: {
//   type: String,
//   default: "Project Title"
// },
// description: {
//   type: String,
//   default: "Project Description"
// }
// // links
