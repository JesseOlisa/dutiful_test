'use client';

import React, { useState } from 'react';
import {
	FieldErrors,
	FieldValues,
	UseFormRegister,
	ValidationRule,
} from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	password?: boolean;
	maxLength?: number;
	checkPassword?: string;
	patternRegEx?: ValidationRule<RegExp>;
	forgotPassword?: boolean;
}

const Input = ({
	id,
	label,
	type = 'text',
	disabled,
	register,
	required,
	errors,
	password,
	maxLength,
	checkPassword,
	patternRegEx,
	forgotPassword,
}: InputProps) => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const passwordType = isPasswordShown ? 'text' : 'password';
	return (
		<div className='relative mt-4 w-full'>
			<label className='text-lg font-medium text-[#603F8B]'>{label}</label>
			{/* 	REGULAR INPUR */}
			{!checkPassword && (
				<input
					id={id}
					disabled={disabled}
					{...register(id, {
						required,
						pattern: patternRegEx,
						minLength: password ? 8 : undefined,
					})}
					type={password ? passwordType : type}
					className='mb-1 w-full rounded-lg border border-[#E7EAF1] bg-[#F8FAFD] p-3 focus:border-2 focus:outline-transparent'
					maxLength={maxLength && maxLength}
				/>
			)}
			{/* THIS INPUT IS CREATED TO VALIDATE PASSWORD MATCH */}
			{checkPassword && (
				<input
					id={id}
					disabled={disabled}
					{...register(id, {
						validate: (value) =>
							value === checkPassword || 'password does not match',
					})}
					type={password ? passwordType : type}
					className='mb-1 w-full rounded-lg border border-[#E7EAF1] bg-[#F8FAFD] p-3 focus:border-2 focus:outline-transparent'
					maxLength={maxLength && maxLength}
				/>
			)}

			{/* THIS DISPLAYS ERROR MESSAGE FOR EACH INPUT */}
			{errors[id] && errors[id]?.type === 'required' && (
				<p className='font-medium text-rose-500'>This is required</p>
			)}
			{errors[id] && errors[id]?.type === 'validate' && (
				<p className='font-medium text-rose-500'>
					{errors[id]?.message as string}
				</p>
			)}
			{errors[id] && errors[id]?.type === 'pattern' && (
				<p className='font-medium text-rose-500'>
					Please enter a valid {label.toLowerCase()}
				</p>
			)}
			{errors[id] && errors[id]?.type === 'minLength' && (
				<p className='font-medium text-rose-500'>
					Password must be more than 8 characters
				</p>
			)}

			{/* THIS IS FOR THE USER TO VIEW PASSWORD */}
			{password && (
				<div className='absolute right-4 top-11 text-lg text-[#A16AE8]'>
					{!isPasswordShown ? (
						<BsEye onClick={() => setIsPasswordShown(true)} />
					) : (
						<BsEyeSlash onClick={() => setIsPasswordShown(false)} />
					)}
				</div>
			)}

			{forgotPassword && (
				<div className='absolute right-4 top-11 text-lg text-[#A16AE8]'>
					<IoMailOutline />
				</div>
			)}
		</div>
	);
};

export default Input;
