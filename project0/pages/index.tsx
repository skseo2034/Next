import React from 'react';
import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import { EventItemInterface } from '@/interfaces/CommonInterface';

const HomePage = () => {
	const featuredEvents: EventItemInterface[] = getFeaturedEvents();
	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
};

export default HomePage;
