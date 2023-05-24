import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
import axios from 'axios';

function NewsletterRegistration() {
	const emailInputRef = useRef<HTMLInputElement>(null);

	function registrationHandler(event: any) {
		let enteredEmail = '';
		event.preventDefault();
		const emailInput = emailInputRef.current;
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
			.then(response => response.json())
			.then(data => console.log(data));*/
		axios.post('/api/newsletter', reqBody).then(response => console.log(response.data));
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
