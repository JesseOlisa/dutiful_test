'use client';

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input';
import Link from 'next/link';
import RoleInput from '../inputs/RoleInput';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
const SignUpForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [agree, setAgree] = useState(false);
	const [responseError, setResponseError] = useState<string | undefined>(
		undefined
	);

	const disabledbutton = !agree || isLoading ? 'opacity-80' : 'opacity-100';

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			fullName: '',
			email: '',
			phoneNumber: '',
			password: '',
			role: 'regular-user',
		},
	});
	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldValidate: true,
			shouldTouch: true,
		});
	};
	const role = watch('role');
	const password = watch('password');

	const handleCheckBox = () => {
		setAgree(!agree);
	};
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const user = {
			name: data.fullName,
			email: data.email,
			phone: data.phoneNumber,
			password: data.password,
		};
		setIsLoading(true);
		const queryString = new URLSearchParams(user).toString();
		const url = `https://testapi.dutiful.ng/v2/auth/register?${queryString}`;

		await fetch(url, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error === 'Invalid payload!') {
					setResponseError(
						'Seems you have already account with us. Please login'
					);
				} else {
					const message = 'Registartion Successful';
					toast.success(message, { duration: 5000 });
					setResponseError(undefined);
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
			});
	};
	/*
	/auth/register
	*/
	return (
		<div className='w-full'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='my-4 flex w-full gap-2 md:gap-4'>
					<RoleInput
						value='regular-user'
						onClick={(value) => setCustomValue('role', value)}
						label='Regular user'
						role={role}
						image='/Profile.svg'
					/>
					<RoleInput
						value='service-provider'
						onClick={(value) => setCustomValue('role', value)}
						label='Service provider'
						role={role}
						image='/clarity_store-solid.svg'
					/>
				</div>
				<Input
					id='fullName'
					label='Full name'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
				/>
				<Input
					id='email'
					label='Email'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
					type='email'
					patternRegEx={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
				/>
				<Input
					id='phoneNumber'
					label='Phone number'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
					type='tel'
					maxLength={11}
					patternRegEx={/[0-9]{11}/}
				/>
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
				<div className='mt-2 flex items-center'>
					<input
						id='agree'
						type='checkbox'
						onChange={handleCheckBox}
						value=''
						className='bg-gray-100 h-4 w-4'
					/>
					<label
						htmlFor='agree'
						className='ml-2 text-sm font-medium text-[#353F54]'
					>
						I agree with the{' '}
						<Link
							href='#'
							className='text-[#A16AE8] hover:underline'
						>
							terms and conditions
						</Link>
						.
					</label>
				</div>
				<button
					disabled={!agree}
					className={`${disabledbutton} btn-primary mt-4 w-full shadow-primary transition duration-300`}
				>
					Sign up
				</button>
			</form>
			{responseError && (
				<p className='mt-4 text-center text-rose-500'>{responseError}</p>
			)}
			<p className='mt-2 text-center text-[#A3B1BF]'>
				Already have an account?{' '}
				<Link
					className='text-[#A16AE8] hover:underline'
					href='/auth/login'
				>
					Login
				</Link>
			</p>
		</div>
	);
};

export default SignUpForm;
