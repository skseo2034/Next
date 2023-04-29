import React, { Fragment } from 'react';
import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const findEventsHandler = (year: string, month: string) => {
		console.log('aaa', year, month);
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath).then(r => console.log('seo', r));
	};
	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;
