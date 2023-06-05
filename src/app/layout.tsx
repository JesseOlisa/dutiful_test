import './globals.css';
import { Nunito } from 'next/font/google';
import NavBar from '@/components/NavBar/Navbar';
import Footer from '@/components/footer/Footer';
import ToasterProvider from '@/providers/ToasterProvider';
import { recoleta } from './fonts/font';
import { circular } from './fonts/font';
import { StateContext } from '@/context/StateContext';
const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Dutiful',
	description: 'Welcome to Dutiful Homepage',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang='en'
			className={recoleta.variable}
		>
			<body className='max-w-[1400px]'>
				<StateContext>
					<ToasterProvider />
					<NavBar />
					<main className='relative min-h-screen w-full'>{children}</main>
					<Footer />
				</StateContext>
			</body>
		</html>
	);
}
