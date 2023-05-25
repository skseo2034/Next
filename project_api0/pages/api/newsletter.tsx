import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const userEmail = req.body.email;
		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

		const client = await MongoClient.connect(
			'mongodb+srv://skseo:pp486958@cluster1.ckq3wm9.mongodb.net/newsletter?retryWrites=true&w=majority'
		);
		const db = client.db();
		await db.collection('emails').insertOne({ email: userEmail });

		await client.close();
		res.status(201).json({ message: 'Signed up!' });
	} else {
		// res.status(200).json();
	}
};

export default handler;
