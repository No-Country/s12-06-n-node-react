/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			'tablet': '375px',
			'desktop': '744px',
			'desktop-lg': '1440px',
		}
	},
	plugins: [],
}; 
