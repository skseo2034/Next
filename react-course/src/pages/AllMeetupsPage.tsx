import React, { useContext, useState } from 'react';
import { DUMMY_DATA } from '../database/data';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
	return (
		<>
			<section>
				<h1>All Meetups</h1>
				<MeetupList meetups={DUMMY_DATA} />
			</section>
		</>
	);
};

export default AllMeetupsPage;
