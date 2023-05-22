import React, { Fragment, useEffect, useState } from 'react';
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/helpers/api-utils';
import { EventItemInterface } from '@/interfaces/CommonInterface';
import Head from 'next/head';

const AllEventsPage = (props: { events: EventItemInterface[] }) => {
	const router = useRouter();
	//const [events, setEvents] = useState<EventItemInterface[]>([]);
	const events = props.events;
	/*useEffect(() => {
		async function getData() {
			return await getAllEvents();
		}
		getData().then(res => {
			setEvents(res);
		});
	}, []);*/

	const findEventsHandler = (year: string, month: string) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath).then(r => console.log('seo', r));
	};
	return (
		<>
			<Head>
				<title>All Events</title>
				<meta name="description" content="Find a lot of great events that allow you to evolve..." />
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export const getStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
};
export default AllEventsPage;
