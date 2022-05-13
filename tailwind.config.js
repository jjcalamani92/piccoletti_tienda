module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primaryColor: "#F44336",
				darkPrimaryColor: "#D32F2F",
				lightPrimaryColor: "#FFCDD2",
				primaryText: "#212121",
				secondaryText: "#757575",
				accentColor: "#FF5252",
				backgroundColor: "#eee"
			}
		}
	},
	plugins: []
};
