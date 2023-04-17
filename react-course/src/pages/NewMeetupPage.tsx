import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { MeetupData } from '../interface/CommonInterface';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewMeetupPage = () => {
	const navigate = useNavigate();
	const addMeetupHandler = (meetupData: MeetupData) => {
		console.log(meetupData);
		/*fetch('https://react-getting-started-373c1-default-rtdb.firebaseio.com/meetups.json', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => {
				console.log('성공:', data);
			})
			.catch(error => {
				console.error('실패:', error);
			});*/
		axios
			.post('https://react-getting-started-373c1-default-rtdb.firebaseio.com/meetups.json', meetupData)
			.then(res => {
				console.log(res.data);
				// navigate('/');
				navigate('/', { replace: true });
				// return res.data;
			})
			.catch(error => {
				console.log('error 발생', error.response);
			});
	};
	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
};

export default NewMeetupPage;
