import React, { useRef, useState } from 'react';
import axios from 'axios';
import feedback from '@/pages/api/feedback';

const HomePage = () => {
	const [feedbackItems, setFeedbackItems] = useState<{ id: string; text: string; email: string }[]>([]);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const emailInput = emailInputRef.current;
		const feedbackInput = feedbackInputRef.current;
		let enteredEmail = '';
		let enteredFeedback = '';

		if (emailInput) {
			if (!emailInput.value) {
				alert('Please Email Enter');
				emailInput.focus();
				return;
			}

			enteredEmail = emailInput.value;
		}

		if (feedbackInput) {
			if (!feedbackInput.value) {
				alert('Please Index Enter');
				feedbackInput.focus();
				return;
			}
			enteredFeedback = feedbackInput.value;
		}

		const reqBody = { email: enteredEmail, text: enteredFeedback };
		axios
			.post('/api/feedback', reqBody, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => console.log(response.data));
		/*axios({
			method: 'POST',
			url: '/api/feedback',
			data: reqBody,
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(response => console.log(response.data));*/

		/*fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => console.log(data)); // { email: 'test@test.com', text: 'Some feedback text' }*/
	};

	const loadFeedbackHandler = () => {
		axios.get('/api/feedback').then(response => {
			console.log(response.data);
			setFeedbackItems(response.data.feedback);
		});
	};
	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={submitFormHandler}>
				<div>
					<label htmlFor="email">Your Email Address</label>
					<input type="email" id="email" ref={emailInputRef} />
				</div>
				<div>
					<label htmlFor="feedback">Your Feedback</label>
					<textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
				</div>
				<button>Send Feedback</button>
			</form>
			<hr />
			<button onClick={loadFeedbackHandler}>Load Feedback</button>
			<ul>
				{feedbackItems.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
