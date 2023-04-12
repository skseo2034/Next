import React, { FC } from 'react';
import { stringify } from 'querystring';

interface Props {
	text: string;
}
const Todo: FC<Props> = ({ text }, context) => {
	return (
		<div className="card">
			<h2>{text}</h2>
			<div className="actions">
				<button className="btn">Delete</button>
			</div>
		</div>
	);
};

export default Todo;
