/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"index.html"
	],
	theme: {
		fontFamily: {
			satoshi: 'Satoshi-Variable, sans-serif',
			inter: 'Inter-Variable, sans-serif',
			sfpro: 'SF-Pro-Rounded, sans-serif',
		},
		extend: {
		},
	},
	plugins: [
		
	],
}

