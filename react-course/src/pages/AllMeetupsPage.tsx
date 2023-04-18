import React, { useContext, useEffect, useState } from 'react';
// import { DUMMY_DATA } from '../database/data';
import MeetupList from '../components/meetups/MeetupList';
import axios from 'axios';
import { MeetupData } from '../interface/CommonInterface';

const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState<MeetupData[]>([]);

	useEffect(() => {
		/*fetch('https://react-getting-started-373c1-default-rtdb.firebaseio.com/meetups.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setIsLoading(false);
				setLoadedMeetups(data);
			});*/
		axios.get('https://react-getting-started-373c1-default-rtdb.firebaseio.com/meetups.json').then(res => {
			const meetups = [];

			for (const key in res.data) {
				const meetup = {
					id: key,
					...res.data[key],
				};

				meetups.push(meetup);
			}
			setIsLoading(false);
			setLoadedMeetups(meetups);
		});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<>
			<section>
				<h1>All Meetups</h1>
				{/*<MeetupList meetups={DUMMY_DATA} />*/}
				<MeetupList meetups={loadedMeetups} />
			</section>
		</>
	);
};

export default AllMeetupsPage;
