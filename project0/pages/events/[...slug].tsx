import React from 'react';
import { useRouter } from 'next/router';

const FilteredEventsPage = () => {
	const router = useRouter();
	// http://localhost:3000/events/max/name
	// {slug: Array(2)}
	// slug: Array(2)
	// 0 : "max"
	// 1 :  "name"
	console.log(router.query);
	return (
		<div>
			<h1>Filtered Events</h1>
		</div>
	);
};

export default FilteredEventsPage;
