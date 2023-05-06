import React from 'react';

const UserProfilePage = (props: { userName: string }) => {
	return <h1>{props.userName}</h1>;
};

export default UserProfilePage;

export const getServerSideProps = async (conext: any) => {
	const { params, req, res } = conext;
	// console.log('request', req);
	// console.log('response', res);

	return {
		props: {
			userName: 'Max',
		},
	};
};
