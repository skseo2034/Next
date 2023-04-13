import React, { FC } from 'react';

interface Props {
	closeModalHandler: () => void;
}
const Backdrop: FC<Props> = ({ closeModalHandler }) => {
	return <div className="backdrop" onClick={closeModalHandler} />;
};

export default Backdrop;
