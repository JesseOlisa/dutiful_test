'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/inputs/input';
import ActionButton from '@/components/buttons/ActionButton';

import { StepProps } from './EmailStep';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const ResetStep = ({ email, otp, setSteps }: StepProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			password: '',
		},
	});

	const password = watch('password');
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		let user = {
			otp: otp as string,
			email: email as string,
			password: data.password,
		};
		const queryString = new URLSearchParams(user).toString();
		const url = `https://testapi.dutiful.ng/v2/auth/password/reset?${queryString}`;
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
					toast.error('something went wrong');
				} else {
					toast.success('Password Changed');
					router.push('/auth/login');
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
				if (setSteps) {
					setSteps(0);
				}
			});
	};
	return (
		<>
			<h3 className='mt-3 font-recoleta text-4xl font-bold text-secondary'>
				Reset password
			</h3>
			<p className='mt-2 max-w-[90%] text-gray'>Set your new password </p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id='password'
					label='Password'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
					password
				/>
				<Input
					id='reEnterPassword'
					label='Re-enter Password'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
					password
					checkPassword={password}
				/>

				<ActionButton
					label='Reset password'
					disabled={isLoading}
				/>
			</form>
			<p className='mt-2 text-center text-[#A3B1BF]'>
				Or{' '}
				<Link
					href='/auth/signup'
					className='font-semibold text-[#603F8B] hover:underline'
				>
					Create new account
				</Link>
			</p>
		</>
	);
};

export default ResetStep;
