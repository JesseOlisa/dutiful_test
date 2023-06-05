'use client';

import React, { useState } from 'react';
import ActionButton from '@/components/buttons/ActionButton';
import { FiCheck } from 'react-icons/fi';
import { SlArrowDown } from 'react-icons/sl';

interface pricingCardProps {
	title: string;
	price: string;
	benefits: string[];
}

const PricingCard = ({ title, price, benefits }: pricingCardProps) => {
	const [showCard, setShowCard] = useState(false);
	const showCardStyle = showCard ? 'flex' : 'hidden';
	const caretStyle = showCard ? 'rotate-180' : 'rotate-0';
	return (
		<div
			className='w-full rounded-xl border border-gray bg-white px-3 py-8 md:py-10'
			key={title}
		>
			<p className='text-lg font-medium'>{title}</p>
			{/* pricing */}
			<div className='my-2'>
				{price === 'Free' ? (
					<h3 className='title text-5xl md:text-3xl lg:text-5xl'>{price}</h3>
				) : (
					<h3 className='title relative text-5xl md:text-3xl lg:text-5xl'>
						<sup className='-top-5 left-0 text-sm'>NGN</sup>
						{price}
						<span className='text-xl'> /year</span>
					</h3>
				)}
			</div>
			<ActionButton label='Get Started' />
			<button
				onClick={() => setShowCard(!showCard)}
				className='relative mt-8 w-full border-t border-[#ECF1F8] pt-5 text-center font-medium text-[#603F8B] md:hidden'
			>
				<span>{showCard ? 'Hide' : 'See'} Plan details</span>
				<SlArrowDown
					className={`${caretStyle} absolute right-[2.4rem] top-[1.5rem] font-bold `}
				/>
			</button>
			<div
				className={`${showCardStyle} mt-6 w-full flex-col gap-3 md:mt-0 md:flex`}
			>
				{benefits.map((benefit, index) => (
					<div
						key={index}
						className='flex items-center p-1 text-lg'
					>
						<FiCheck className='mr-5' />
						<p className='text-gray-light'>{benefit}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PricingCard;
