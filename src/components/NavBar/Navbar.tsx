'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useStateContext } from '@/context/StateContext';

const NavBar = () => {
	const { user } = useStateContext();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [loggedInUser, setLoggedInUser] = useState<any>(user);
	useEffect(() => {
		if (
			typeof window !== undefined &&
			window.localStorage.getItem('user') !== null
		) {
			setLoggedInUser(
				JSON.parse(window.localStorage.getItem('user') as string)
			);
		} else {
			setLoggedInUser(null);
		}
	}, [user]);

	return (
		<header className='fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-white px-4 py-5 shadow-sm md:px-8'>
			<Link href='/'>
				<Image
					src='/company_logo.png'
					alt='logo'
					width={100}
					height={80}
				/>
			</Link>

			{/* NAVLINKS CONTAINER */}
			<div className='hidden flex-1 items-center justify-center pt-3 text-base text-gray md:flex lg:text-lg'>
				<Link
					href='#'
					className='px-3 lg:px-5'
				>
					Business Directory
				</Link>
				<Link
					href='#'
					className='px-3 lg:px-5'
				>
					Features
				</Link>
				<Link
					href='/pricing'
					className='px-3 lg:px-5'
				>
					Pricing
				</Link>
				<Link
					href='#'
					className='px-3 lg:px-5'
				>
					Blog
				</Link>
			</div>
			{/* AUTH BUTTONS */}
			{loggedInUser ? (
				<div className='md:flex-center hidden gap-3 pt-3'>
					<p>Hi, {loggedInUser.name}</p>
					<button
						className='btn-secondary'
						onClick={() => {
							setLoggedInUser(null);
							return window.localStorage.clear();
						}}
					>
						Logout
					</button>
				</div>
			) : (
				<div className='hidden items-center gap-x-5 pt-3 md:flex lg:gap-x-10'>
					<Link
						href='/auth/login'
						className='text-xl font-medium text-secondary'
					>
						Login
					</Link>
					<Link
						href='/auth/signup'
						className='btn-secondary text-xl'
					>
						Sign up
					</Link>
				</div>
			)}
			<div
				className='relative z-20 mt-3 flex w-10 flex-col gap-1 md:hidden'
				onClick={() => setIsNavOpen(!isNavOpen)}
			>
				<div
					className={`absolute h-0.5 w-10 ${
						isNavOpen ? 'rotate-45' : '-translate-y-1.5'
					}  transform bg-footer transition duration-500 ease-in-out`}
				></div>
				<div
					className={`absolute h-0.5 w-10 ${
						isNavOpen ? '-rotate-45' : 'translate-y-1.5'
					} transform bg-footer transition duration-500 ease-in-out`}
				></div>
			</div>
			{/* MOBILE NAVBAR */}
			{isNavOpen && (
				<div className='fixed left-0 top-0 z-10 h-screen w-full bg-black/70'>
					<div className='ml-auto flex h-full w-4/5 animate-slide-in-left flex-col gap-2 bg-white py-24 text-gray'>
						{loggedInUser && (
							<p className='mx-5 text-lg font-medium text-black'>
								Hi, {loggedInUser.name}
							</p>
						)}
						<Link
							href='#'
							className='px-5'
							onClick={() => setIsNavOpen(false)}
						>
							Business Directory
						</Link>
						<Link
							href='#'
							className='px-5'
							onClick={() => setIsNavOpen(false)}
						>
							Features
						</Link>
						<Link
							href='/pricing'
							className='px-5'
							onClick={() => setIsNavOpen(false)}
						>
							Pricing
						</Link>
						<Link
							href='#'
							className='px-5'
							onClick={() => setIsNavOpen(false)}
						>
							Blog
						</Link>
						{loggedInUser ? (
							<div className='flex flex-col gap-5 px-3'>
								<button
									onClick={() => {
										setLoggedInUser(null);
										return localStorage.clear();
									}}
									className='btn-secondary'
								>
									Logout
								</button>
							</div>
						) : (
							<div className='mt-9 flex flex-col gap-y-5 px-5'>
								<Link
									href='/auth/login'
									className='text-xl font-medium text-secondary'
									onClick={() => setIsNavOpen(false)}
								>
									Login
								</Link>
								<Link
									href='/auth/signup'
									className='text-xl font-medium text-secondary'
									onClick={() => setIsNavOpen(false)}
								>
									Sign up
								</Link>
							</div>
						)}
					</div>
				</div>
			)}
		</header>
	);
};

export default NavBar;
