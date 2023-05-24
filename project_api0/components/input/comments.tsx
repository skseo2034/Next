import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import axios from 'axios';

function Comments(props: any) {
	const { eventId } = props;

	const [showComments, setShowComments] = useState(false);

	function toggleCommentsHandler() {
		setShowComments(prevStatus => !prevStatus);
	}

	function addCommentHandler(commentData: { email: string; name: string; text: string }) {
		const reqBody = { email: commentData.email, name: commentData.name, text: commentData.text };
		/*fetch(`/api/newsletter/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => console.log(data));*/
		axios.post('/api/newsletter').then(response => {
			console.log(response.data);
			setShowComments(response.data.commentList);
		});
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList />}
		</section>
	);
}

export default Comments;
