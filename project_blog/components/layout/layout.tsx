import React from 'react';
import MainNavigation from './main-navigation';

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
