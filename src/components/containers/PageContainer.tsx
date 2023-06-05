import React from 'react';

interface PageContainerProps {
	children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
	return <main className='overflow-hidden py-32 md:py-24'>{children}</main>;
};

export default PageContainer;
