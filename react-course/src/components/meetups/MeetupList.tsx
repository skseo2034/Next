import React, { FC } from 'react';
import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
import { MeetupData } from '../../interface/CommonInterface';

interface Props {
	meetups: MeetupData[];
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
