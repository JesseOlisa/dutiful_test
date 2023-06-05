'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';

import Input from '@/components/inputs/input';
import ActionButton from '@/components/buttons/ActionButton';
import { toast } from 'react-hot-toast';

export type StepProps = {
	steps?: number;
	setSteps?: React.Dispatch<React.SetStateAction<number>>;
	email?: string | undefined;
	setEmail?: React.Dispatch<React.SetStateAction<string | undefined>>;
	otp?: string;
	setOtp?: React.Dispatch<React.SetStateAction<string>>;
};

const EmailStep = ({ steps, setSteps, setEmail }: StepProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [responseError, setResponseError] = useState<string | undefined>(
		undefined
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		if (setEmail) {
			setEmail(data.email as string);
		}
		const user = {
			email: data.email,
		};
		const queryString = new URLSearchParams(user).toString();
		const url = `https://testapi.dutiful.ng/v2/auth/password/email?${queryString}`;
		setIsLoading(true);
		await fetch(url, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setResponseError(
						'This email is not registered with us. Try again or sign up'
					);
				} else {
					if (setSteps) {
						setSteps((currentStep) => currentStep + 1);
					}
				}
			})
			.catch((error) => {
				if (error) {
					toast.error('something went wrong!');
				}
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<>
			<Link
				href='/auth/login'
				className='mb-7 inline-block rounded-full border border-[#603F8B]/30 p-2 text-[#603f8b] transition duration-300 hover:border-[#603F8B]/80'
			>
				<BiArrowBack />
			</Link>
			<h3 className='font-recoleta text-4xl text-secondary'>Forgot password</h3>

			<p className='mt-2 max-w-[90%] text-gray'>
				Enter your email and well send you a mail on how to reset your password.
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id='email'
					label='Email'
					type='email'
					register={register}
					errors={errors}
					forgotPassword
					required
				/>
				{responseError && (
					<p className='mt-1 text-sm font-medium text-rose-500'>
						{responseError}
					</p>
				)}{' '}
				<ActionButton
					disabled={isLoading}
					label='Send email'
				/>
			</form>
			<p className='mt-2 text-center text-[#A3B1BF]'>
				Or{' '}
				<Link
					href='/auth/login'
					className='font-semibold text-[#603F8B] hover:underline'
				>
					Login
				</Link>
			</p>
		</>
	);
};

export default EmailStep;
