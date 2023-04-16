import React, { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {
	// 입력값을 처리하는 방법은 2가지가 있다. onChange 를 이용하여
	// useState 에 값을 세팅하는 방법과. useRef 를 사용하는 방법
	// 여기에서는 입력시 한 번만 필요하므로 useRef 를 사용한다.
	const titleInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const addressInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

	const submitHandler = (e: any) => {
		e.preventDefault();

		let enteredTitle = '';
		if (titleInputRef.current) {
			enteredTitle = titleInputRef.current.value;
		}
		let enteredImage = '';
		if (imageInputRef.current) {
			enteredImage = imageInputRef.current.value;
		}
		let enteredAddress = '';
		if (addressInputRef.current) {
			enteredAddress = addressInputRef.current.value;
		}
		let enteredDescription = '';
		if (descriptionInputRef.current) {
			enteredDescription = descriptionInputRef.current.value;
		}
		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};
		console.log('meetupData', meetupData);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input ref={titleInputRef} type="text" required id="title" />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input ref={imageInputRef} type="url" required id="image" />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input ref={addressInputRef} type="text" required id="address" />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea ref={descriptionInputRef} required id="description" rows={5}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
