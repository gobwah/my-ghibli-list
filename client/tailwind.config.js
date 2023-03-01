const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#079DEC",
				secondary: "#282C34",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1024px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
