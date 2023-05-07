import React from 'react';

const UserIdPage = (props: { id: string }) => {
	return <div>{props.id}</div>;
};

export default UserIdPage;

export const getServerSideProps = (context: any) => {
	const { params } = context;
	const userId = params.uid;

	return {
		props: {
			id: 'userid-' + userId,
		},
	};
};
