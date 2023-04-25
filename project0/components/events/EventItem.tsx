import React, { FC } from 'react';
import Link from 'next/link';
import classes from './EventItem.module.css';

const EventItem = props => {
	const { title, image, date, location, id } = props;

	const humanReadabledDate = new Date(date).toLocaleDateString('ko-KR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			{/*nextjs 가 url을 인식하기 위해서 / 붙인다. /public/image 가 아니다.*/}
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{humanReadabledDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
