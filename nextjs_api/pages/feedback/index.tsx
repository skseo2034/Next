import React, { useState } from 'react';
import axios from 'axios';
import { buildFeedbackPath, extractFeedback } from '@/pages/api/feedback';
import { feedbackDataType } from '@/interfaceTypes/commonInterfaceTypes';

const FeedbackPage = (props: { feedbackItem: { id: string; text: string }[] }) => {
	const [feedbackData, setFeedbackData] = useState<feedbackDataType>();
	const loadFeedbackHandler = (id: string) => {
		/*fetch(`/api/${id}`)
			.then(response => response.json())
			.then(data => {
				setFeedbackData(data.feedback);
			}); // /api/some-feedback-id */
		axios.get(`/api/feedback/${id}`).then(response => setFeedbackData(response.data.feedback));
	};
	return (
		<>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{props.feedbackItem.map(item => (
					<li key={item.id}>
						{item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
					</li>
				))}
			</ul>
		</>
	);
};

export const getStaticProps = async () => {
	// const response = await axios.get('http://localhost:3000/api/feedback');
	// const data = response.data.feedback;
	/*const data = await axios.get('/api/feedback').then(response => {
		console.log('seo >>>>>>>>> ', response);
		return response.data.feedback;
	});*/

	// 위와 같이 처리하면 같은 서버 안에 있는데, 불필요한 http 요청을 하는 것이다.
	// 그래서 node.js 를 활용해서 export 를 이용해서 처리한다.
	const filePath = buildFeedbackPath();
	const data = extractFeedback(filePath);

	return {
		props: {
			feedbackItem: data,
		},
	};
};

export default FeedbackPage;
