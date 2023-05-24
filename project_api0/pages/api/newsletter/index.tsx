import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const userEmail = req.body.email;
		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}
		console.log('newsletter post api userEmail >>>> ', userEmail);
		res.status(201).json({ message: 'Signed up!' });
	} else {
		// res.status(200).json();
	}
};

export default handler;
