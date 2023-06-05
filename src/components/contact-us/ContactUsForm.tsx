'use client';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input';
import { toast } from 'react-hot-toast';
import Textarea from '../inputs/Textarea';
import ActionButton from '../buttons/ActionButton';

const ContactUsForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			fullName: '',
			email: '',
			businessType: '',
			subject: '',
			message: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
		const data = {
			name: formData.fullName,
			email: formData.email,
			subject: formData.subject,
			business_type: formData.businessType,
			message: formData.message,
		};
		setIsLoading(true);
		const queryString = new URLSearchParams(data).toString();
		const url = `https://testapi.dutiful.ng/v2/contact?${queryString}`;

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
					toast.error('something went wrong');
				} else {
					const message = 'Message sent!';
					toast.success(message, { duration: 5000 });
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
				reset({
					fullName: '',
					email: '',
					businessType: '',
					subject: '',
					message: '',
				});
			});
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					id='businessType'
					label='Business type (optional)'
					register={register}
					errors={errors}
					disabled={isLoading}
				/>
				<Input
					id='subject'
					label='Subject'
					register={register}
					errors={errors}
					disabled={isLoading}
					required
				/>
				<Textarea
					id='message'
					label='Write your message'
					required
					register={register}
					errors={errors}
					disabled={isLoading}
				/>
				<ActionButton
					label='Send message'
					disabled={isLoading}
				/>
			</form>
		</>
	);
};

export default ContactUsForm;
