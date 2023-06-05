'use client';

import React, { useState } from 'react';
import AuthContainer from '@/components/containers/AuthContainer';

import EmailStep from '@/components/auth/forgotPassword/EmailStep';
import ConfirmStep from '@/components/auth/forgotPassword/ConfirmStep';
import OtpStep from '@/components/auth/forgotPassword/OtpStep';
import ResetStep from '@/components/auth/forgotPassword/ResetStep';

// export const metadata = {
// 	title: 'Reset Password | Dutiful',
// 	description: 'Welcome to Dutiful webpage',
// };

const ForgotPassword = () => {
	const [steps, setSteps] = useState<number>(0);
	const [email, setEmail] = useState<string | undefined>(undefined);
	const [otp, setOtp] = useState('');

	if (steps === 0) {
		return (
			<AuthContainer>
				<EmailStep
					steps={steps}
					setSteps={setSteps}
					setEmail={setEmail}
				/>
			</AuthContainer>
		);
	}

	if (steps === 1) {
		return (
			<AuthContainer>
				<ConfirmStep
					steps={steps}
					setSteps={setSteps}
					email={email}
				/>
			</AuthContainer>
		);
	}

	if (steps === 2) {
		return (
			<AuthContainer>
				<OtpStep
					steps={steps}
					setSteps={setSteps}
					email={email}
					otp={otp}
					setOtp={setOtp}
				/>
			</AuthContainer>
		);
	}
	return (
		<AuthContainer>
			<ResetStep
				steps={steps}
				setSteps={setSteps}
				email={email}
				otp={otp}
			/>
		</AuthContainer>
	);
};

export default ForgotPassword;
