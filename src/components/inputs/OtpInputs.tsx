'use client';

import React, { useMemo } from 'react';

interface OtpInputsProps {
	value: string;
	valueLength: number;
	onchange: (value: string) => void;
}
const RE_DIGIT = new RegExp(/^\d+$/); //only digits allowed

const OtpInputs = ({ value, valueLength, onchange }: OtpInputsProps) => {
	const valueItems = useMemo(() => {
		const valueArr = value.split('');
		const items: Array<string> = [];
		// update items in the value state if it is a number
		for (let i = 0; i < valueLength; i++) {
			const char = valueArr[i];

			if (RE_DIGIT.test(char)) {
				items.push(char);
			} else {
				items.push('');
			}
		}

		return items;
	}, [value, valueLength]);

	// This function updates on change
	const inputOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const target = e.target;
		let targetValue = target.value;
		const isTargetValueDigit = RE_DIGIT.test(targetValue);

		if (!isTargetValueDigit && targetValue !== '') {
			return;
		}

		targetValue = isTargetValueDigit ? targetValue : ' ';

		const targetValueLength = targetValue.length;

		if (targetValueLength === 1) {
			const newValue =
				value.substring(0, index) + targetValue + value.substring(index + 1);

			onchange(newValue);

			if (!isTargetValueDigit) {
				return;
			}
			const nextElementSibling =
				target.nextElementSibling as HTMLInputElement | null;
			if (nextElementSibling) {
				nextElementSibling.focus();
			}

			const nextInputEl = target.nextElementSibling as HTMLInputElement | null;
			if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
				return;
			}
		} else if (targetValueLength === valueLength) {
			onchange(targetValue);

			target.blur();
		}
	};
	// this functions allows to erase inputs with backspace
	const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const targetValue = target.value;

		if (e.key !== 'Backspace' || target.value !== '') {
			return;
		}
		const previousElementSibling =
			target.previousElementSibling as HTMLInputElement | null;
		if (previousElementSibling) {
			previousElementSibling.focus();
		}

		target.setSelectionRange(0, targetValue.length);
	};
	// functions allows to update the input on focus
	const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		const target = e.target;

		const prevInputEl =
			target.previousElementSibling as HTMLInputElement | null;

		if (prevInputEl && prevInputEl.value === '') {
			return prevInputEl.focus;
		}

		target.setSelectionRange(0, target.value.length);
	};
	return (
		<div className='flex-center mx-auto w-full max-w-[350px] gap-x-4'>
			{valueItems.map((digit, index) => (
				<input
					key={index}
					type='text'
					inputMode='numeric'
					onKeyDown={inputOnKeyDown}
					onChange={(e) => inputOnChange(e, index)}
					autoComplete='one-time-code'
					pattern='\d{1}'
					maxLength={1}
					onFocus={inputOnFocus}
					className='h-16 w-16 rounded-[10px] border-2 border-[#B6B6E5] bg-[#F3F3F3] text-center focus:outline-none'
					value={digit}
					autoFocus={index == 0}
				/>
			))}
		</div>
	);
};

export default OtpInputs;
