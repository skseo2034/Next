import React from 'react';
import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
	const router = useRouter();
	console.log('clients > [id] > index : ClientProjectsPage', router.query);

	const loadProjectHandler = () => {
		// load data...
		router
			.push({
				pathname: '/clients/[id]/[clientprojectid]',
				query: { id: 'max', clientprojectid: 'projecta' },
			})
			.then(r => console.log(r))
			.catch(e => console.log('aaaa', e.message));
		/*router.push('/clients/max/projecta').then();*/
	};
	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
};

export default ClientProjectsPage;
