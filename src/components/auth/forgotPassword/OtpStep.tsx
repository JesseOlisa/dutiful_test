'use client';

import React, { useState } from 'react';
import OtpInputs from '@/components/inputs/OtpInputs';
import { StepProps } from './EmailStep';
import ActionButton from '@/components/buttons/ActionButton';
import { toast } from 'react-hot-toast';
const OtpStep = ({ email, setSteps, otp, setOtp }: StepProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (value: string) => setOtp && setOtp(value);

	const confirmOTP = async () => {
		const data = {
			email: email as string,
			otp: otp as string,
		};
		const queryString = new URLSearchParams(data).toString();
		const url = `https://testapi.dutiful.ng/v2/auth/password/verify?${queryString}`;
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
					toast.error('Invalid OTP');
					if (setOtp) {
						setOtp('');
					}
				} else {
					if (setSteps) {
						setSteps((currentStep) => currentStep + 1);
					}
					return data;
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
		setIsLoading(true);
	};

	const resendOTP = async () => {
		const user = {
			email: email as string,
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
					if (setSteps) {
						setSteps(0);
					}
				} else {
					toast.success('We resent an OTP to your email');
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
		<div className='flex-center w-full flex-col gap-5'>
			<OtpInputs
				value={otp as string}
				valueLength={6}
				onchange={onChange}
			/>
			<p className='max- w-3/4 text-center text-gray'>
				Enter OTP code that was sent to your email,{' '}
				<span className='font-medium'>{email}</span>.
			</p>

			<ActionButton
				label='Confirm OTP'
				onclick={confirmOTP}
				disabled={otp?.length !== 6 || isLoading}
			/>
			<p className='mt-2 text-center text-[#A3B1BF]'>
				Didn&apos;t get a code ?{' '}
				<span
					onClick={resendOTP}
					className='cursor-pointer font-semibold text-[#603F8B] hover:underline'
				>
					Resend
				</span>
			</p>
		</div>
	);
};

export default OtpStep;
