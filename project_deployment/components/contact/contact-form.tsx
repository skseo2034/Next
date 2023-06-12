// import React from 'react';
import classes from './contact-form.module.css';
import React, { useEffect, useState } from 'react';
import Notification from '@/components/ui/notification';

const sendContactData = async (contactDetails: { email: string; name: string; message: string }) => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}
};

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState<string | null>(null); // 'pending', 'success', 'error'
	const [requestError, setRequestError] = useState<string | null>(null);

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	const sendMessageHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		// optional add client-side validation

		setRequestStatus('pending');

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setRequestStatus('success');
			setEnteredMessage('');
			setEnteredName('');
			setEnteredEmail('');
		} catch (error: any) {
			setRequestError(error.message);
			setRequestStatus('error');
		}
	};

	let notification;

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way!',
		};
	}

	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Message sent successfully!!!!!',
		};
	}

	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'Error!',
			message: requestError,
		};
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={enteredEmail}
							onChange={event => setEnteredEmail(event.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="name"
							id="name"
							required
							value={enteredName}
							onChange={event => setEnteredName(event.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows={5}
						required
						value={enteredMessage}
						onChange={event => setEnteredMessage(event.target.value)}
					></textarea>
				</div>

				<div className={classes.actions}>
					<button type="submit">Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification title={notification.title} message={notification.message} status={notification.status} />
			)}
		</section>
	);
};

export default ContactForm;
