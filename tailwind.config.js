/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				recoleta: ['var(--font-recoleta)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-circle':
					'linear-gradient(180deg, #7948BA 0%, rgba(187, 59, 159, 0.83) 100%)',
				'contact-us': 'url(/contact_us.png)',
			},
			backgroundColor: {
				primary: '#F5F5F5',
				footer: '#532F82',
			},
			colors: {
				gray: '#686868',
				'gray-light': '#656565',
				secondary: '#1E1E4B',
				'purple-bold': '#230B34',
				'gray-light': '#383838',
			},
			boxShadow: {
				primary: '2px 8px 8px rgba(86, 86, 86, 0.25)',
				box: '8px 11px 20px rgba(234, 229, 240, 0.25)',
			},
			borderColor: {
				gray: '#EEEEFF',
			},
			keyframes: {
				'slide-left': {
					'0%': {
						'-webkit-transform': 'translateX(100px)',
						transform: 'translateX(100px)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0px)',
						transform: 'translateX(0px)',
					},
				},
			},
			animation: {
				'slide-in-left': ' slide-left 0.5s ease',
			},
		},
	},
	plugins: [],
};
