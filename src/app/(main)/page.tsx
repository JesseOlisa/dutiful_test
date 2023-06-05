import Image from 'next/image';
import PageContainer from '@/components/containers/PageContainer';

export default function Home() {
	return (
		<PageContainer>
			<div className='flex min-h-screen flex-col items-center justify-between text-gray-light md:px-8'>
				{/* HERO SECTION */}
				<section className='flex min-h-[70vh] w-full flex-wrap gap-8 px-4 md:flex-nowrap md:px-0'>
					<div className='flex h-fit w-full flex-col gap-y-4 md:h-auto md:w-1/2 md:justify-center'>
						<h1 className='title max-w-[90%]'>
							List and grow your business with just few clicks
						</h1>
						<p className='subtitle'>
							Eliminate manual work and save time by listing your business or
							service on the best business directory in Nigeria.
						</p>
					</div>
					<div className='h-[16rem] w-full md:h-auto md:w-1/2'>
						<div className='flex-center relative h-full w-full before:absolute before:bottom-3 before:left-0 before:h-3/4 before:w-full before:rounded-3xl before:bg-[#532F82] before:content-[""]'>
							<Image
								src='/Dashboard.png'
								alt='hero'
								fill
								className='mx-auto rounded-3xl object-contain'
							/>
						</div>
					</div>
				</section>
				{/* ANOTHER SECTION */}
				<section className='flex min-h-[70vh] w-full flex-wrap-reverse px-4 lg:my-9 lg:flex-nowrap lg:gap-8 lg:px-0'>
					<div className='h-[18rem] w-full md:h-[31rem] lg:h-auto lg:w-1/2'>
						<div className='flex-center circle-gradient relative mx-auto h-full max-w-[20rem] md:max-w-[40rem] lg:w-full lg:max-w-none'>
							<div className='relative left-0 top-0 h-full w-full bg-white/80 backdrop-blur-lg'></div>
							<Image
								src='/testimonies.svg'
								alt='testimonal'
								width={230}
								height={230}
								className='absolute left-0 top-0 w-[150px] rotate-[-15deg] md:left-16 md:top-5 md:w-[230px]'
							/>
							<Image
								src='/testimonies.svg'
								alt='testimonal'
								width={230}
								height={230}
								className='absolute right-0 w-[150px] rotate-[15deg] md:right-14 md:w-[230px]'
							/>
							<Image
								src='/testimonies.svg'
								alt='testimonal'
								width={230}
								height={230}
								className='absolute bottom-0 left-0 w-[150px] rotate-[-2.46deg] md:bottom-5 md:left-14 md:w-[230px]'
							/>
						</div>
					</div>

					<div className='flex w-full flex-col justify-center gap-y-4 md:w-3/4 lg:w-1/2'>
						<h2 className='title'>
							Collect reviews and ratings from customers
						</h2>
						<p className='subtite'>
							Accelerate your business reputation by 90% and gain social proof
							through reviews and ratings requested from customers.
						</p>
					</div>
				</section>
				{/* ANOTHER SECTION */}
				<section className='circle relative my-9 flex min-h-[90vh] w-full flex-wrap gap-4 rounded-lg bg-[#FCFAFF] py-10 md:flex-nowrap md:p-10'>
					<div className='z-10 h-[18rem] w-full md:h-auto md:w-1/2'>
						<div className='relative h-full w-full scale-[1.35]  md:scale-100'>
							<Image
								src='/phone3.png'
								alt='hero'
								fill
								className='mx-auto object-contain'
							/>
						</div>
					</div>
					<div className='z-10 flex w-full max-w-md flex-col gap-4 px-8 md:mt-0 md:w-1/2 md:px-0'>
						<div className='features-box'>
							<Image
								src='/discover.svg'
								alt='discover'
								width={50}
								height={50}
								className='w-[20px] md:w-[50px]'
							/>
							<h5 className='text-xs font-bold text-secondary md:text-lg'>
								Get Discovered
							</h5>
							<p className='text-[10px] md:text-sm 2xl:text-base'>
								Dutiful is more than just a business directory; it also enhances
								your web profile. The platform makes use of SEO techniques to
								boost each listing’s performance in the SERPs, providing any
								business the chance to rank, regardless of how strong their
								current online presence is.
							</p>
						</div>
						<div className='features-box -translate-x-4 md:-translate-x-14'>
							<Image
								src='/messages.svg'
								alt='chat'
								width={50}
								height={50}
								className='w-[20px] md:w-[50px]'
							/>
							<h5 className='text-xs font-bold text-secondary md:text-lg'>
								Instant Chat
							</h5>
							<p className='text-[10px] md:text-sm 2xl:text-base'>
								You’ll be able to chat and send voice recordings with potential
								and existing customers, including managing your captured leads
								anytime, anywhere via the platform
							</p>
						</div>
						<div className='features-box'>
							<Image
								src='/note-2.svg'
								alt='note'
								width={50}
								height={50}
								className='w-[20px] md:w-[50px]'
							/>
							<h5 className='text-xs font-bold text-secondary md:text-lg'>
								Quotations
							</h5>
							<p className='text-[10px] md:text-sm 2xl:text-base'>
								In addition to providing customers with access to information,
								offering customer quotations is very advantageous to the way you
								conduct your business. On Dutiful, you’ll be able to send and
								receive quotation from customers - an important step in lead
								management.
							</p>
						</div>
					</div>
				</section>
				<section className='-mt-5 flex min-h-[70vh] w-full flex-wrap-reverse gap-8 px-4 md:my-9 md:px-0 lg:flex-nowrap'>
					<div className='h-[16rem] w-full md:h-[30rem] lg:h-auto lg:w-1/2'>
						<div className='flex-center relative h-full w-full scale-125 lg:scale-100'>
							<Image
								src='/booking.png'
								alt='booking'
								fill
								className='mx-auto rounded-3xl object-contain'
							/>
						</div>
					</div>
					<div className='flex h-fit w-full flex-col gap-y-4 md:h-auto md:w-4/5 md:justify-center lg:w-1/2'>
						<h1 className='title max-w-[90%]'>Accept and sell appointments </h1>
						<p className='subtitle'>
							Let customers book their own appointment or consultation. Start
							accepting payments for appointments through your booking page.
						</p>
					</div>
				</section>
			</div>
		</PageContainer>
	);
}
