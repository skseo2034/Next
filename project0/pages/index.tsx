import React from 'react';
import EventList from '@/components/events/EventList';
import { EventItemInterface } from '@/interfaces/CommonInterface';
import axios from 'axios';
import { getFeaturedEvents } from '@/helpers/api-utils';

const HomePage = (props: { featuredEvents: EventItemInterface[] }) => {
	return (
		<div>
			<EventList items={props.featuredEvents} />
		</div>
	);
};

export const getStaticProps = async () => {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			featuredEvents: featuredEvents,
		},
		revalidate: 18000,
	};
};

/*export const getServerSideProps = async (conext: any) => {
	const response = await axios.get('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/events.json');
	const data = response.data;
	const featuredEvents: EventItemInterface[] = [];

	for (const key in data) {
		if (data[key].isFeatured) {
			featuredEvents.push({
				id: key,
				title: data[key].title,
				description: data[key].description,
				location: data[key].location,
				date: data[key].date,
				image: data[key].image,
				isFeatured: data[key].isFeatured,
			});
		}
	}

	// return { props: { sales: transformedSales }, revalidate: 10 };
	return { props: { featuredEvents: featuredEvents } };
};*/

export default HomePage;
