import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				plex: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
			},
			colors: {
        'primary-100': '#ab52db',
	      'primary-200': '#ebdaf4',
	      'secondary-100': '#326332',
	      'secondary-200': '#373781',
	      'light-100': '#f3f2f7',
	      'dark-900': '#464255',
			},
		},
	},
	plugins: [],
};
export default config
