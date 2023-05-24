import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios/index';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const eventId = req.query.eventId;

	// const commentList = axios.post('/api/newsletter').then(response => console.log(response.data));
	const commentList = [
		{ name: '홍길동', text: '와우' },
		{ name: '홍길동2', text: '와우2' },
		{ name: '홍길동3', text: '와우3' },
	];
	res.status(200).json({ commentList: commentList });
};

export default handler;
