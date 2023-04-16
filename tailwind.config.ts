import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
	theme: {
		fontFamily: {
			oldtt: ["'Old Standard TT'", "sans"],
			bebas: ["'Bebas Neue'", "sans"],
		},
	},
	plugins: [],
} satisfies Config;
