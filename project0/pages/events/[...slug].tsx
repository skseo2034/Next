import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DateFilterInterface, EventItemInterface } from '@/interfaces/CommonInterface';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle';
import Button from '@/components/ui/Button';
import ErrorAlert from '@/components/ui/ErrorAlert';
import { notFound } from 'next/navigation';
import { getFilteredEvents } from '@/helpers/api-utils';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import axios, { AxiosResponse } from 'axios';

const FilteredEventsPage = (props: {
	hasError: boolean;
	events: EventItemInterface[];
	dateFilter: DateFilterInterface;
}) => {
	const [loadedEvents, setLoadedEvents] = useState<EventItemInterface[]>();
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const router = useRouter();
	// const { slug } = router.query;
	const filterData = router.query.slug;

	/*const { data, error } = useSWR('getLastSales', () =>
		fetcher('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/events.json')
	);*/

	const getData = async () => {
		const response = await axios.get('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/events.json');
		return response;
	};
	useEffect(() => {
		getData()
			.then(res => {
				const events = [];
				for (const key in res.data) {
					// 바로 set 해도 되나~ firebase 특성상 한번더 배열을 만들어 줘야 한다.
					events.push({
						id: key,
						...res.data[key],
					});
				}
				setLoadedEvents(events);
				setIsLoaded(true);
			})
			.catch(error => {
				setIsLoaded(true);
				setError(error);
			});

		/*if (data) {
			const events = [];
			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}

			setLoadedEvents(events);
		}*/
	}, []);
	// }, [data]);

	console.log('seo >>>>> ', loadedEvents);

	// http://localhost:3000/events/max/name
	// {slug: Array(2)}
	// slug: Array(2)
	// 0 : "max"
	// 1 :  "name"
	if (!loadedEvents) {
		/*if (typeof window !== 'undefined') {
			alert('Loading.....');
		}*/

		// 페이지 로딩 후 router 를 가지고 온다(useRouter 동작방식)
		// 그래서 처음은 undefined 이다 console.log 로 확인 가능
		return <p className="center">Loading...</p>;
	}

	let filteredYear = '';
	let filteredMonth = '';

	if (filterData) {
		filteredYear = filterData[0];
		filteredMonth = filterData[1];
	}

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12 ||
		error
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}
	const filteredEvents = loadedEvents.filter(event => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
	});

	// console.log('events slug page filteredEvents', filteredEvents);
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(numYear, numMonth - 1);
	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
};

export default FilteredEventsPage;
