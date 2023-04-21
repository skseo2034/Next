import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
	const router = useRouter();
	// http://localhost:3000/clients/max/project1
	// {id: 'max', clientprojectid: 'project1'}
	console.log(router.query);

	return (
		<div>
			<h1>The Project Page for a Specific Project for a Selected Client</h1>
		</div>
	);
};

export default SelectedClientProjectPage;
