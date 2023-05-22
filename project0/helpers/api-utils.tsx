import axios from 'axios';
import { DateFilterInterface, EventItemInterface } from '@/interfaces/CommonInterface';

export const getAllEvents = async () => {
	const response = await axios.get('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/events.json');
	const data = response.data;

	// firebase는 데이터를 객체로 변환한다.
	// 따라서 우리는 배열로 반환을 해야 한다.
	const events: EventItemInterface[] = [];
	for (const key in data) {
		events.push({
			id: key,
			/*title: data[key].title,
			description: data[key].description,
			location: data[key].location,
			date: data[key].date,
			image: data[key].image,
			isFeatured: data[key].isFeatured,*/
			...data[key],
		});
	}

	return events;
};

export const getFeaturedEvents = async () => {
	const allEvents = await getAllEvents();

	return allEvents.filter(event => event.isFeatured);
};

export const getEventById = async (id: string) => {
	const allEvents = await getAllEvents();
	return allEvents.find(event => event.id === id);
};

export const getFilteredEvents = async (dateFilter: DateFilterInterface) => {
	const { year, month } = dateFilter;
	const allEvents = await getAllEvents();
	const filteredEvents = allEvents.filter(event => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});

	return filteredEvents;
};
