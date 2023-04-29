import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import ErrorAlert from '@/components/ui/ErrorAlert';
import Button from '@/components/ui/Button';

const EventDetailpage = () => {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId as string);

	if (!event) {
		return (
			<>
				<ErrorAlert>
					<p>No event found!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}
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

export default EventDetailpage;
