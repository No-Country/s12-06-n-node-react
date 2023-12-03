/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM sans"],
			},
			colors: {
				principal: "#F2C81B",
				secundario: "#FEFCF1",
				texts: "#180801",
			},
		},
		screens: {
			'tablet': '375px',
			'desktop': '744px',
			'desktop-lg': '1440px',
		},
	},
	plugins: [],
}; 
