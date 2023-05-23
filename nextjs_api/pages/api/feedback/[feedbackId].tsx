import { NextApiRequest, NextApiResponse } from 'next';
import { buildFeedbackPath, extractFeedback } from '@/pages/api/feedback/index';
import { feedbackDataType } from '@/interfaceTypes/commonInterfaceTypes';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const feedbackData: feedbackDataType[] = extractFeedback(filePath);

	const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);

	res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
