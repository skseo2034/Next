import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios/index';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const eventId = req.query.eventId;

	if (req.method === 'POST') {
		// add server-side validation
		const { email, name, text } = req.body;
		if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		const newComment = {
			id: new Date().toISOString(),
			email,
			name,
			text,
		};

		console.log('api comments eventsId Post >>>> ', newComment);
		res.status(201).json({ message: 'Added comment. ', comment: newComment });
	}

	if (req.method === 'GET') {
		const dummyList = [
			{ id: 'c1', name: '홍길동1', text: '와우1' },
			{ id: 'c2', name: '홍길동2', text: '와우2' },
			{ id: 'c3', name: '홍길동3', text: '와우3' },
		];
		res.status(200).json({ comments: dummyList });
	}
	// const commentList = axios.post('/api/newsletter').then(response => console.log(response.data));
};

export default handler;
