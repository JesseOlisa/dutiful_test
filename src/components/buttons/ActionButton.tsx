'use client';

import React, { useState } from 'react';

interface ActionButtonProps {
	disabled?: boolean;
	label: string;
	onclick?: () => void;
}

const ActionButton = ({ disabled, label, onclick }: ActionButtonProps) => {
	const disabledbutton = disabled ? 'opacity-80' : 'opacity-100';
	return (
		<button
			onClick={onclick}
			disabled={disabled}
			className={`${disabledbutton} btn-primary my-4 w-full shadow-primary transition duration-300`}
		>
			{label}
		</button>
	);
};

export default ActionButton;
