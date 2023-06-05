import React from 'react';

interface AuthContainerProps {
	children: React.ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
	return (
		<section className='flex min-h-[60vh] w-full flex-col pt-28'>
			<div className='mx-auto w-full px-5 pb-8 md:w-2/5 md:pt-8'>
				{children}
			</div>
		</section>
	);
};

export default AuthContainer;
