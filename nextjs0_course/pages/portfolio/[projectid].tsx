import React from 'react';
import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
	const router = useRouter();

	console.log('pathname', router.pathname);
	//  http://localhost:3000/portfolio/12345?studyStartFromDate=2022.01.01&studyStartToDate=2022.12.31 이렇게 호출하면 아래와 같이보임
	//  {studyStartFromDate: '2022.01.01', studyStartToDate: '2022.12.31', projectid: '12345'}
	console.log('query', router.query);

	// send a request to some backend server
	// to fetch the piece of data with an id of router.query.projectid

	return (
		<div>
			<h1>The Portfolio Project Page</h1>
		</div>
	);
};

export default PortfolioProjectPage;
