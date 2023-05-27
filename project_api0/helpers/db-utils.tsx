import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://skseo:OBrGWLrzEnsL8ixL@cluster1.ckq3wm9.mongodb.net/events?retryWrites=true&w=majority'
	);

	return client;
};

export const insertDocument = async (client: MongoClient, collection: string, document: any) => {
	const db = client.db();
	const result = await db.collection(collection).insertOne(document);
	return result;
};

// filter 을 적용하여 특정 eventId 의 댓글만 가져온다.
export const getAllDocuments = async (client: MongoClient, collection: string, sort: any, filter = {}) => {
	const db = await client.db();
	const documents = await db.collection(collection).find(filter).sort(sort).toArray();

	return documents;
};
