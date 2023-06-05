'use client';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface TextareaProps {
	id: string;
	label: string;
	required: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
}
const Textarea = ({
	id,
	label,
	required,
	disabled,
	register,
	errors,
}: TextareaProps) => {
	return (
		<div className='mt-4'>
			<label className='text-lg font-medium text-[#603F8B]'>{label}</label>
			<textarea
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				className='mb-1 block min-h-[10rem] w-full resize-none rounded-lg border border-[#E7EAF1] bg-[#F8FAFD] p-3 focus:border-2 focus:outline-transparent'
			/>
			{errors[id] && errors[id]?.type === 'required' && (
				<p className='font-medium text-rose-500'>This is required</p>
			)}
		</div>
	);
};

export default Textarea;
