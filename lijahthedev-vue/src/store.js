import Vue from 'vue';
import Vuex from 'vuex';
import black_design from './assets/black-design.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		value: 0,
		projects: [
			{
				title: 'Songs & Hymns',
				description: 'A music web app for songs & church hymns',
				year: 2019,
				lang: { name: 'Nuxt', color: '#42b983' },
				color: 'red',
				isDark: true,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/hymn_cds2.jpg?alt=media&token=c8c87ab5-a3dc-4fb3-b861-7d0d167594df',
				links: [
					'http://music.kjvuniversity.com',
					'https://github.com/LijahTheDev/KJV-U-Songs-Nuxt-Client',
				],
			},
			{
				title: 'The Venue',
				description:
					'The Venue is a modern event landing page for future car events',
				year: 2019,
				lang: { name: 'React', color: '#61dafb' },
				color: 'white',
				isDark: false,
				image:
					'https://the-venue-car-events.netlify.com/static/media/slide-one.345579ba.jpg',
				links: [
					'https://the-venue-car-events.netlify.com/',
					'https://github.com/LijahTheDev/The-Venue',
				],
			},
			{
				title: 'Domnoo',
				description:
					'A pizza store app for browsing meals & dishes on a menu to create orders',
				year: 2019,
				lang: { name: 'Vue', color: '#42b983' },
				color: 'red lighten-1',
				isDark: true,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg?alt=media&token=8d4aeb2f-cc26-4ac9-96a2-de197aae45e8',
				links: [
					'https://domnoo-firebase.firebaseapp.com/',
					'https://github.com/LijahTheDev/Domnoo-Pizza-App',
				],
			},
			{
				title: 'LijahTheDev 2018',
				description:
					'Old version of this portfolio site made with CSS3 & jQuery',
				year: 2018,
				lang: { name: 'jQuery', color: 'blue' },
				color: 'black',
				isDark: true,
				image: black_design,
				links: [
					'https://lijahthedev2018.netlify.com/',
					'https://github.com/LijahTheDev/lijahthedev.com',
				],
			},
			{
				title: 'Aurora Grove',
				description: 'A Bootstrap homepage made during a Bootstrap 4 course',
				year: 2018,
				lang: { name: 'Bootstrap', color: '#563D7C' },
				color: 'blue',
				isDark: true,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/main.jpg?alt=media&token=32b9ccfc-b494-493c-87d9-98b71ff52238',
				links: [
					'https://aurora-grove-lijahthedev.netlify.com/',
					'https://github.com/LijahTheDev/Aurora-Grove',
				],
			},
			{
				title: 'Pro Web Solutions',
				description:
					'A business practice homepage with CSS Grid, Flexbox. and jQuery',
				year: 2018,
				lang: { name: 'CSS', color: 'blue' },
				color: 'grey darken-1',
				isDark: true,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/homepage-product-office-space.jpg?alt=media&token=5edf02b6-939b-469a-9810-00e9f7dc9309',
				links: [
					'https://lijahthedev.github.io/Pro-Web-Solutions/',
					'https://github.com/LijahTheDev/Pro-Web-Solutions',
				],
			},
			{
				title: 'Wonderful Quotes',
				description: 'Add and collect your favorite quotes in one app',
				year: 2019,
				lang: { name: 'Vue', color: '#42b983' },
				color: 'blue lighten-4',
				isDark: false,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/quotation-marks-43778-2560x1600.jpg?alt=media&token=9d94e536-f594-4130-8741-b50458d35c6f',
				links: [
					'https://wonderful-quotes-lijahthedev.netlify.com/',
					'https://github.com/LijahTheDev/Wonderful-Quotes',
				],
			},
			{
				title: 'React Movie Table',
				description:
					'A React movie table that I worked on while learning React',
				year: 2019,
				lang: { name: 'React', color: '#61dafb' },
				color: 'yellow lighten-1',
				isDark: false,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/twitterlists-TA.jpg?alt=media&token=ef4b64e3-75ae-4a21-90ab-9773daae27c6',
				links: [
					'https://react-movie-table-lijahthedev.netlify.com/',
					'https://github.com/LijahTheDev/React-Movie-Table',
				],
			},
			{
				title: 'AirBound',
				description: 'A sneaker landing page',
				year: 2018,
				lang: { name: 'CSS', color: 'blue' },
				color: 'purple lighten-1',
				isDark: true,
				image:
					'https://firebasestorage.googleapis.com/v0/b/lijahthedev-80367.appspot.com/o/286567653029211.png?alt=media&token=f092056e-a16e-4f05-ab96-543b490b4331',
				links: [
					'https://lijahthedev.github.io/AirBound/',
					'https://github.com/LijahTheDev/AirBound',
				],
			},
		],
	},
	mutations: {
		handleScroll(state) {
			const scrollPos = window.scrollY;
			const winHeight = window.innerHeight;
			const docHeight = document.documentElement.scrollHeight;
			const perc = (100 * scrollPos) / (docHeight - winHeight);
			state.value = Math.floor(Math.round(perc));
		},
	},
});
