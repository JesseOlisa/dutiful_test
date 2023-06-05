import React from 'react';
import AuthContainer from '@/components/containers/AuthContainer';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata = {
	title: 'Sign up | Dutiful',
	description: 'Welcome to Dutiful webpage',
};
const SignUpPage = () => {
	return (
		<AuthContainer>
			<p className='text-gray'>Sign up for free!</p>
			<h3 className='mt-3 font-recoleta text-4xl font-bold text-secondary'>
				Get Started
			</h3>
			<SignUpForm />
		</AuthContainer>
	);
};

export default SignUpPage;
