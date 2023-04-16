import React, { FC } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

interface Props {
	children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<p>This is Layout component Start</p>
			<div>
				<MainNavigation />
				<main className={classes.main}>
					<p> Here are Layout Main Start</p>
					{children}
					<p> Here are Layout Main End</p>
				</main>
			</div>
			<p>This is Layout component End</p>
		</>
	);
};

export default Layout;
