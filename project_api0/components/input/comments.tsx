import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import axios from 'axios';
import NotificationContext from '@/store/notification_context';
interface itemType {
	_id: string;
	name: string;
	text: string;
}
function Comments(props: { eventId: string }) {
	const { eventId } = props;

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState<itemType[]>([]);
	const notificationCtx = useContext(NotificationContext);

	useEffect(() => {
		if (showComments) {
			notificationCtx.showNotification({
				title: 'Getting Comments...',
				message: 'Getting Comment for event',
				status: 'pending',
			});
			fetch(`/api/comments/${eventId}`)
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
						message: 'Successfully Getting comments that this Event',
						status: 'success',
					});
					setComments(data.comments);
				})
				.catch(error => {
					notificationCtx.showNotification({
						title: 'Error!',
						message: error.message || 'Something went wrong!',
						status: 'error',
					});
				});
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments(prevStatus => !prevStatus);
	};

	const addCommentHandler = (commentData: { email: string; name: string; text: string }) => {
		notificationCtx.showNotification({
			title: 'Adding Comment...',
			message: 'Adding Comment for event',
			status: 'pending',
		});

		/*fetch(`/api/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
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
			});*/
		axios
			.post(`/api/comments/${eventId}`, commentData)
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
	};

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList items={comments} />}
		</section>
	);
}

export default Comments;
