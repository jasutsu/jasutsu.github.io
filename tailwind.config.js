/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"index.html"
	],
	theme: {
		screens: {
			xs: '540px',
			...defaultTheme.screens,
		},
		fontFamily: {
			satoshi: 'Satoshi-Variable, sans-serif',
			inter: 'Inter-Variable, sans-serif',
		},
		extend: {
		},
	},
	plugins: [],
}

