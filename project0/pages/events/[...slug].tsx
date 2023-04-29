import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/dummy-data';
import { DateFilterInterface } from '@/interfaces/CommonInterface';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle';
import Button from '@/components/ui/Button';
import ErrorAlert from '@/components/ui/ErrorAlert';

const FilteredEventsPage = () => {
	const router = useRouter();
	// const { slug } = router.query;
	const filterData = router.query.slug;
	// http://localhost:3000/events/max/name
	// {slug: Array(2)}
	// slug: Array(2)
	// 0 : "max"
	// 1 :  "name"
	if (!filterData) {
		// 페이지 로딩 후 router 를 가지고 온다(useRouter 동작방식)
		// 그래서 처음은 undefined 이다 console.log 로 확인 가능
		return <p className="center">Loading...</p>;
	}

	/*const filteredYear = Number(filterData[0]);
	const filteredMonth = Number(filterData[1]);*/

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
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

	const dateFilter: DateFilterInterface = {
		year: numYear,
		month: numMonth,
	};

	const filteredEvents = getFilteredEvents(dateFilter);

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
