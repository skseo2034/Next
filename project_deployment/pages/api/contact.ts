import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// 이 함수는 요청(req) 및 응담(res) 객체를 수신 하며,
// 서버 사이드에서만 실행이 됩니다.
// 클라이언트 사이드 코드는 전혀 없습니다.
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if (!email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		let _id: any;
		// Store it in a database
		const newMessage = {
			email,
			name,
			message,
			_id,
		};

		let client;

		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ckq3wm9.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
		try {
			client = await MongoClient.connect(
				connectionString
				//'mongodb+srv://skseo:OBrGWLrzEnsL8ixL@cluster1.ckq3wm9.mongodb.net/my-site?retryWrites=true&w=majority'
			);
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return;
		}

		const collectionName = 'message';
		//const document = newMessage;
		const db = client.db();

		try {
			const result = await db.collection(collectionName).insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing message failed!' });
			return;
		}

		client.close();

		res.status(201).json({ message: 'Successfully stored message!', newMessage: newMessage });
	}
};

export default handler;
