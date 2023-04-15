import React, { FC } from 'react';
import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

interface meetup {
	id: string;
	image: string;
	title: string;
	address: string;
	description: string;
}
interface Props {
	meetups: meetup[];
}
const MeetupList: FC<Props> = ({ meetups }) => {
	console.log(meetups);
	return (
		<ul className={classes.list}>
			{meetups.map(meetup => (
				<MeetupItem
					key={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
};

export default MeetupList;
