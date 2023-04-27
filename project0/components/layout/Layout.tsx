import React from 'react';
import MainHeader from '@/components/layout/MainHeader';

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
