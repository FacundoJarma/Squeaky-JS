/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary": "#ffb800",
				"background": "#23262f",
				"blockBorder": "#353841",
				"text": "#a6a6a6",
			}
		},
	},
	plugins: [],
}
