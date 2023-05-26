import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '@/helpers/db-utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const userEmail = req.body.email;
		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return; // 아래 코드가 실행되면 안되므로 return 함.
		}

		try {
			await insertDocument(client, 'newsletter', { email: userEmail });
			await (client as MongoClient).close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
			return;
		}

		res.status(201).json({ message: 'Signed up!' });
	} else {
		// res.status(200).json();
	}
};

export default handler;
