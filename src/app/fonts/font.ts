import localFont from 'next/font/local';

export const recoleta = localFont({
	src: './RecoletaAlt-SemiBold.woff2',
	weight: '600',
	display: 'swap',
	variable: '--font-recoleta',
});

export const circular = localFont({
	src: '/circular-std-medium-500.ttf',
	weight: '500',
	display: 'swap',
	variable: '--font-circular',
});
