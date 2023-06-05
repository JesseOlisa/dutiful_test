import React from 'react';
import Image from 'next/image';
import PageContainer from '@/components/containers/PageContainer';
import ContactUsForm from '@/components/contact-us/ContactUsForm';
export const metadata = {
	title: 'Contact | Dutiful',
	description: 'Welcome to Dutiful webpage',
};
const ContactUs = () => {
	return (
		<PageContainer>
			<div className='-mt-1 w-full'>
				<div className='flex h-72 w-full flex-col items-center bg-contact-us bg-contain pt-16'>
					<h1 className='title text-white'>Get in Touch</h1>
					<p className='subtitle px-10 text-center text-[#EDDFFF] md:px-0'>
						We are here to support you throughout the process of getting your
						business listed.
					</p>
				</div>
				<div className='-mt-20 flex h-full flex-col items-stretch justify-between gap-3 px-5 md:flex-row md:px-10'>
					<div className='w-full rounded-xl border border-gray bg-white px-3 py-10 text-center'>
						<div className='flex items-center justify-center gap-2 md:flex-col lg:flex-row'>
							<Image
								src='/sms-tracking.svg'
								alt='sms tracking'
								width={30}
								height={30}
							/>
							<h3 className='text-xl font-medium text-secondary lg:text-2xl'>
								Customer support
							</h3>
						</div>
						<p className='subtitle mt-2 text-gray-light md:text-base lg:text-lg'>
							Please fill out the form below
						</p>
					</div>
					<div className='w-full max-w-[28rem] rounded-xl border border-gray bg-white px-1 py-10 text-center md:p-10 lg:px-5'>
						<div className='flex items-center justify-center gap-2 md:flex-col lg:flex-row'>
							<Image
								src='/map.svg'
								alt='map icon'
								width={30}
								height={30}
							/>
							<h3 className='text-xl font-medium text-secondary lg:text-2xl'>
								Business address
							</h3>
						</div>
						<p className='subtitle mt-2 text-gray-light md:text-base lg:text-lg'>
							Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001,
							Lagos, Nigeria
						</p>
					</div>
					<div className='w-full max-w-[28rem] rounded-xl border border-gray bg-white p-10 text-center'>
						<div className='flex items-center justify-center gap-2 md:flex-col lg:flex-row'>
							<Image
								src='/map.svg'
								alt='map icon'
								width={30}
								height={30}
							/>
							<h3 className='text-xl font-medium text-secondary lg:text-2xl'>
								Phone number
							</h3>
						</div>
						<p className='subtitle mt-2 text-gray-light md:text-base lg:text-lg'>
							+234 903 921 6724
						</p>
					</div>
				</div>

				{/* FORM */}
				<div className='mx-auto w-full px-5 py-14 md:w-2/4'>
					<ContactUsForm />
				</div>
			</div>
		</PageContainer>
	);
};

export default ContactUs;
