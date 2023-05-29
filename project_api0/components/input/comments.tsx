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
	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState<itemType[]>([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			/*notificationCtx.showNotification({
				title: 'Loading Comments...',
				message: 'Loading Comments in this event',
				status: 'pending',
			});*/
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
					/*notificationCtx.showNotification({
						title: 'Success!',
						message: 'Successfully Loaded comments in this Event',
						status: 'success',
					});*/
					setComments(data.comments);
					setIsFetchingComments(false);
				})
				.catch(error => {
					/*notificationCtx.showNotification({
						title: 'Error!',
						message: error.message || 'Something went wrong!',
						status: 'error',
					});*/
				});
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments(prevStatus => !prevStatus);
	};

	const addCommentHandler = (commentData: { email: string; name: string; text: string }) => {
		notificationCtx.showNotification({
			title: 'Sending Comment...',
			message: 'Your comment is currently being stored into a database.',
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
					message: 'Your comment was saved!',
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
					message: 'Your comment was saved!',
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
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && <p>Loading...</p>}
		</section>
	);
}

export default Comments;
