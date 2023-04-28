import React, { FC } from 'react';
import EventItem from '@/components/events/EventItem';
import classes from './EventList.module.css';
import { EventItemInterface } from '@/interfaces/CommonInterface';

interface Props {
	items: EventItemInterface[];
}
const EventList: FC<Props> = props => {
	console.log('EventList props', props);
	const { items } = props;
	return (
		<ul className={classes.list}>
			{items.map(event => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
};

export default EventList;
