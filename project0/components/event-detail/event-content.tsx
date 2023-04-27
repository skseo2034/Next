import classes from './event-content.module.css';
import React from 'react';

const EventContent = (props: { children: React.ReactNode }) => {
	return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
