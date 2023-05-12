import axios from 'axios';
import { EventItemInterface } from '@/interfaces/CommonInterface';

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
