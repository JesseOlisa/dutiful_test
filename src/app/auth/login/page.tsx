import React from 'react';
import AuthContainer from '@/components/containers/AuthContainer';
import LoginInForm from '@/components/auth/LoginInForm';
export const metadata = {
	title: 'Login | Dutiful',
	description: 'Welcome to Dutiful webpage',
};
const LoginPage = () => {
	return (
		<AuthContainer>
			<p className='text-gray'>Jump back right in</p>
			<h3 className='mt-3 font-recoleta text-4xl font-bold text-secondary'>
				Login
			</h3>
			<LoginInForm />
		</AuthContainer>
	);
};

export default LoginPage;
