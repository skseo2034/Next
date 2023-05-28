import classes from './newsletter-registration.module.css';
import { useContext, useRef } from 'react';
import axios from 'axios';
import NotificationContext from '@/store/notification_context';

function NewsletterRegistration() {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const notificationCtx = useContext(NotificationContext);

	function registrationHandler(event: any) {
		let enteredEmail = '';
		event.preventDefault();

		const emailInput = emailInputRef.current;

		notificationCtx.showNotification({
			title: 'Signing up...',
			message: 'Registering for newsletter',
			status: 'pending',
		});

		if (emailInput) {
			if (emailInput.value === '') {
				alert('email 을 입력하세요');
				emailInput.focus();
				return;
			}
			enteredEmail = emailInput.value;
		}

		const reqBody = { email: enteredEmail };

		/*fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify(reqBody),
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
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully registered for newsletter!',
					status: 'success',
				});
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong!',
					status: 'error',
				});
			});
*/
		axios({ method: 'post', url: '/api/newsletter', data: reqBody })
			//.post('/api/newsletter', reqBody)
			.then(response => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Successfully registered for newsletter!',
					status: 'success',
				});
				return response.data;
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong!',
					status: 'error',
				});
			});
		// fetch user input (state or refs)
		// optional: validate input
		// send valid data to API
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						placeholder="Your email"
						aria-label="Your email"
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
