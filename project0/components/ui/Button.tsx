import React, { FC } from 'react';
import Link from 'next/link';
import classes from './Button.module.css';

interface Props {
	link: string;
	children: React.ReactNode;
}
const Button: FC<Props> = props => {
	return (
		<Link href={props.link} className={classes.btn}>
			{props.children}
		</Link>
	);
};

export default Button;
