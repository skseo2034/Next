import Image from 'next/image';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import { FC } from 'react';

interface Prpos {
	date: string;
	address: string;
	image: string;
	imageAlt: string;
}

const EventLogistics = (props: Prpos) => {
	const { date, address, image, imageAlt } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const addressText = ''; //address.replace(', ', '\n');

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
				{/*css 에 rem 을 px 로 환산, 폰트 사이즈따라 다름 http://pxtoem.com/ 참조*/}
			</div>
			<ul className={classes.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};

export default EventLogistics;
