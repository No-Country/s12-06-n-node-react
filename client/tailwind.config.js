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
				disabled: "#878787",
			},
			boxShadow: {
				"3xl": "0 1px 2px 0 rgba(0, 0, 0, 0.25)",
				"4xl": "0 1px 2px 1px rgba(254, 252, 241, 0.25)",
			},
		},
		screens: {
			tablet: "375px",
			desktop: "744px",
			"desktop-lg": "1440px",
		},
	},
	plugins: [],
};
