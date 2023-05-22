import React, { FC } from 'react';
import Image from 'next/image';
import classes from './EventItem.module.css';
import Button from '@/components/ui/Button';
import { EventItemInterface } from '@/interfaces/CommonInterface';
import DateIcon from '@/components/icons/date-icon';
import AddressIcon from '@/components/icons/address-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';

const EventItem: FC<EventItemInterface> = props => {
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
			<Image src={'/' + image} alt={title} width={250} height={160} />
			<div className={classes.content}>
				<div>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadabledDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
