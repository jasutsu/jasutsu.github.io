/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'selector',
	content: [
		"index.html",
		"script.js",
	],
	theme: {
		fontFamily: {
			satoshi: 'Satoshi-Variable, sans-serif',
			inter: 'Inter-Variable, sans-serif',
			sfpro: 'SF-Pro-Rounded, sans-serif',
		},
		extend: {
			keyframes: {
				'open-menu': {
					'0%': { tranform: 'scaleY(0)' },
					'80%': { tranform: 'scaleY(1.2)' },
					'100%': { tranform: 'scaleY(1)' },
				}
			},
			animation: {
				'open-menu': 'open-menu 0.5s ease-in-out forwards',
			}
		},
	},
	plugins: [
		
	],
}

