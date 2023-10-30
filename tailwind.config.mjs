/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'dark-radial': 'url("src/images/noise-texture.svg"), radial-gradient(82.81% 82.81% at 50% 6.64%, #323232 0%, #0C0C0C 100%)',
				'graffiti-bg': 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url("src/images/graffiti.jpeg")',
				'card-window-actions-decoration': 'url("src/images/card-window-actions-decoration.svg")',
				'nitrogen-elipse': 'radial-gradient(52.46% 62.35% at 46.76% 44.91%, #1A93EB 0%, #0632D4 100%)'
			},
			colors: {
				'graphite': '#686868',
				'oxygen': '#1A93EB',
				'lapis': '#0632D4'
			}
		},
		fontFamily: {
			'sans': 'Inter, sans-serif',
			'serif': 'DM Serif Display, Times New Roman'
		}
	},
	plugins: [],
}
