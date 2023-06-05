'use client';

import React from 'react';
import Image from 'next/image';

interface RoleInputProps {
	value: string;
	label: string;
	image: string;
	role: string;
	onClick: (value: string) => void;
}

const RoleInput = ({ value, label, onClick, image, role }: RoleInputProps) => {
	return (
		<div className='relative'>
			<Image
				src='/purple_tick.svg'
				alt='selected'
				width={28}
				height={28}
				className={`${
					value === role ? 'opacity-100' : 'opacity-0'
				} absolute -right-2 -top-2 transition duration-200`}
			/>
			<button
				onClick={() => onClick(value)}
				className={`role ${
					value !== role ? 'opacity-50 grayscale' : 'opacity-100'
				}`}
				type='button'
			>
				<Image
					src={image}
					alt='user icon'
					width={24}
					height={24}
				/>
				<span className='font-semibold text-[#230B34]'>{label}</span>
			</button>
		</div>
	);
};

export default RoleInput;
