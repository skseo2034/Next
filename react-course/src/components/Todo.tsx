import React, { FC, useState } from 'react';
import { stringify } from 'querystring';
import Modal from './Modal';
import Backdrop from './Backdrop';

interface Props {
	text: string;
}
const Todo: FC<Props> = ({ text }, context) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const deleteHandler = () => {
		setModalIsOpen(true);
	};
	const closeModalHandler = () => {
		setModalIsOpen(false);
	};

	return (
		<>
			<div className="card">
				<h2>{text}</h2>
				<div className="actions">
					<button className="btn" onClick={deleteHandler}>
						Delete
					</button>
				</div>
			</div>
			{modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
			{modalIsOpen && <Backdrop closeModalHandler={closeModalHandler} />}
		</>
	);
};

export default Todo;
