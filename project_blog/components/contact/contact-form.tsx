// import React from 'react';
import classes from './contact-form.module.css';
import React, { useState } from 'react';

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');

	const sendMessageHandler = (event: React.FormEvent) => {
		event.preventDefault();

		// optional add client-side validation

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}

				return response.json().then(data => {
					throw new Error(data.message || 'Something went wrong!');
				});
			})
			.then(data => {
				console.log('Save Ok', data.newMessage);
			})
			.catch(error => {
				console.log('error', error.message);
			});
	};

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
						<label htmlFor="name">Your Email</label>
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
		</section>
	);
};

export default ContactForm;
