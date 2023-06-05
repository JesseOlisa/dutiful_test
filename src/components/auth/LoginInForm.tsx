'use client';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import ActionButton from '../buttons/ActionButton';
import { useStateContext } from '@/context/StateContext';
const LoginInForm = () => {
	const router = useRouter();
	const { setUser } = useStateContext();
	const [isLoading, setIsLoading] = useState(false);
	const [responseError, setResponseError] = useState<string | undefined>(
		undefined
	);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const user = {
			email: data.email,
			password: data.password,
		};
		const queryString = new URLSearchParams(user).toString();
		const url = `https://testapi.dutiful.ng/v2/auth/login?${queryString}`;
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
					setResponseError('Incorrect Email or Password');
					setValue('email', '');
					setValue('password', '');
				} else {
					const user = data.data.user;
					const message = `welcome back ${user.name}`;
					// SET ITEM TO LOCAL STORAGE
					localStorage.setItem(
						'user',
						JSON.stringify({
							name: user.name,
							email: user.email,
						})
					);

					toast.success(message);
					router.push('/');

					// UPDATE THE USER CONTEXT STATE
					return setUser(
						JSON.parse(window.localStorage.getItem('user') as string)
					);
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
		<div className='w-full'>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					id='password'
					label='Password'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
					password
				/>
				<Link
					href='/auth/forgot-password'
					className='mt-1 block text-right text-sm text-[#A16AE8] hover:underline'
				>
					Forgot password?
				</Link>

				<ActionButton
					disabled={isLoading}
					label='Login'
				/>
			</form>
			{responseError && (
				<p className='mt-1 text-center font-medium text-rose-500'>
					{responseError}
				</p>
			)}
			<p className='mt-2 text-center text-[#A3B1BF]'>
				Don&apos;t have an account?{' '}
				<Link
					className='font-semibold text-[#603F8B] hover:underline'
					href='/auth/signup'
				>
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default LoginInForm;
