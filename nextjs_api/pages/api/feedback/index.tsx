import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export const buildFeedbackPath = () => {
	return path.join(process.cwd(), 'data', 'feedback.json'); // data 폴더에 feedback.json 파일
};

export const extractFeedback = (filePath: fs.PathOrFileDescriptor) => {
	const fileData = fs.readFileSync(filePath);
	const data = JSON.parse(fileData.toString());

	return data;
};

const handler = (req: any, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const email = req.body.email;
		const feedbackText = req.body.text;

		const newFeedback = {
			id: new Date().toISOString(),
			email: email,
			text: feedbackText,
		};

		// store that in a database or in a file
		const filePath = buildFeedbackPath();
		const data = extractFeedback(filePath);
		data.push(newFeedback);
		fs.writeFileSync(filePath, JSON.stringify(data));

		res.status(201).json({ message: 'Success!', feedback: newFeedback });
	} else {
		const filePath = buildFeedbackPath();
		const data = extractFeedback(filePath);
		res.status(200).json({ feedback: data });
	}
};

export default handler;
