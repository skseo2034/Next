import axios from 'axios';

export const fetcher = async (url: string) => {
	// const res = await axios.get(url, { withCredentials: true }); // withCredentials: true 는 쿠키 공유를 위해 사용 함.
	const res = await axios.get(url);
	return res.data;
};
