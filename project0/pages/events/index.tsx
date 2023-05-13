import React, { Fragment, useEffect, useState } from 'react';
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/helpers/api-utils';
import { EventItemInterface } from '@/interfaces/CommonInterface';

const AllEventsPage = () => {
	const router = useRouter();
	const [events, setEvents] = useState<EventItemInterface[]>([]);
	// const events = await getAllEvents();
	useEffect(() => {
		async function getData() {
			return await getAllEvents();
		}
		getData().then(res => {
			setEvents(res);
		});
	}, []);

	const findEventsHandler = (year: string, month: string) => {
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
