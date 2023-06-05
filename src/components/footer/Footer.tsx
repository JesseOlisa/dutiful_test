import React from 'react';
import Link from 'next/link';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
	FaApple,
	FaGooglePlay,
} from 'react-icons/fa';
import { footerLinks } from '@/libs/data';
const Footer = () => {
	return (
		<footer className='flex flex-col gap-3 bg-footer px-6 py-10 md:px-16'>
			<div className='flex flex-col items-start justify-between gap-y-4 md:flex-row'>
				{footerLinks.map((link) => (
					<div key={link.title}>
						<h3 className='mb-3 text-xl font-medium text-white'>
							{link.title}
						</h3>
						<div className='flex flex-col gap-2 font-[450] text-white/70'>
							{link.links.map((item) => (
								<Link
									key={item.name}
									href={item.link}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-6 py-4 text-white/70 md:hidden'>
				<Link href='#'>Terms of Service</Link>
				<Link href='#'>Privacy policy</Link>
				<Link href='#'>Disclaimer</Link>
			</div>
			{/* SOCIAL LINKS CONTAINER */}
			<div className='flex gap-6 border-t border-white/20 pb-2 pt-4 text-white md:hidden'>
				<h5 className='text-lg font-medium'>Download the App</h5>
				<div className='flex-center gap-6 text-xl'>
					<Link href='#'>
						<FaApple />
					</Link>
					<Link href='#'>
						<FaGooglePlay />
					</Link>
				</div>
			</div>
			<div className='flex items-center justify-between border-y border-white/20 py-5 text-white'>
				<div className='flex-center gap-6'>
					<h5 className='text-lg font-medium'>Follow us</h5>
					<div className='flex gap-5 text-xl'>
						<Link href='#'>
							<FaFacebookF />
						</Link>
						<Link href='#'>
							<FaInstagram />
						</Link>
						<Link href='#'>
							<FaTwitter />
						</Link>
						<Link href='#'>
							<FaYoutube />
						</Link>
						<Link href='#'>
							<FaLinkedin />
						</Link>
					</div>
				</div>
				<div className='md:flex-center hidden gap-6'>
					<h5 className='text-lg font-medium'>Download the App</h5>
					<div className='flex-center gap-6 text-xl'>
						<Link href='#'>
							<FaApple />
						</Link>
						<Link href='#'>
							<FaGooglePlay />
						</Link>
					</div>
				</div>
			</div>
			{/* DISCLAIMER */}
			<div className='flex items-center justify-center gap-x-10 text-white md:justify-start'>
				<h4 className='text-center text-lg md:text-left'>
					&copy; 2023 Dutiful&reg;
				</h4>
				<div className='hidden gap-6 text-white/70 md:flex'>
					<Link href='#'>Terms of Service</Link>
					<Link href='#'>Privacy policy </Link>
					<Link href='#'>Disclaimer</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
