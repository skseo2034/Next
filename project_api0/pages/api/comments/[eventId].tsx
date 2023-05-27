import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios/index';
import { MongoClient } from 'mongodb';
import { connectDatabase, getAllDocuments, insertDocument } from '@/helpers/db-utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const eventId = req.query.eventId;

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' });
		return;
	}

	if (req.method === 'POST') {
		// add server-side validation
		const { email, name, text } = req.body;
		if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		let _id: any;
		const newComment = {
			email,
			name,
			text,
			eventId,
			_id,
		};

		let result;
		try {
			result = await insertDocument(client, 'comments', newComment);
			newComment._id = result.insertedId;
			res.status(201).json({ message: 'Added comment. ', comment: newComment });
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
		}
	}

	if (req.method === 'GET') {
		try {
			const documents = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId: eventId });
			res.status(200).json({ comments: documents });
		} catch (error) {
			res.status(500).json({ message: 'Getting comments failed!' });
		}
	}

	await client.close();
};

export default handler;
