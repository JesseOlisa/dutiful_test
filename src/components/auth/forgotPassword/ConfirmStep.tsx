'use client';

import React from 'react';
import Image from 'next/image';
import { StepProps } from './EmailStep';
import ActionButton from '@/components/buttons/ActionButton';

const ConfirmStep = ({ setSteps, email }: StepProps) => {
	return (
		<div className='flex-center w-full flex-col gap-5'>
			<div className='relative rounded-full bg-[#F8F3FF] p-5'>
				<Image
					src='/envelope_confirm.svg'
					alt='email sent'
					width={70}
					height={70}
				/>
				<Image
					src='/green_checkmark.svg'
					alt='success'
					width={25}
					height={25}
					className='absolute right-5 top-4'
				/>
			</div>
			<p className='max- w-3/4 text-center text-gray'>
				An OTP code has been sent to{' '}
				<span className='font-medium'>{email}</span>. Check your email to get
				the code
			</p>

			<ActionButton
				label='Next'
				onclick={() => setSteps && setSteps((currentStep) => currentStep + 1)}
			/>
		</div>
	);
};

export default ConfirmStep;
