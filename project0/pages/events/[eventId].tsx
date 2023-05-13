import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import ErrorAlert from '@/components/ui/ErrorAlert';
import Button from '@/components/ui/Button';

import { EventItemInterface } from '@/interfaces/CommonInterface';
import { getAllEvents, getEventById, getFeaturedEvents } from '@/helpers/api-utils';

const EventDetailpage = (props: { selectedEvent: EventItemInterface }) => {
	const event = props.selectedEvent;

	// fallback: true 일때 필요, blocking 일때는 필요없음
	/*if (!event) {
		return (
			<div className="center">
				<p>Loading...</p>
			</div>
		);
	}*/
	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
};

export const getStaticProps = async (context: any) => {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);
	return {
		props: { selectedEvent: event },
		revalidate: 30,
	};
};

export const getStaticPaths = async () => {
	const events = await getFeaturedEvents();

	const paths = events.map(event => ({ params: { eventId: event.id } }));
	return {
		paths: paths,
		fallback: 'blocking',
	};
};
export default EventDetailpage;
