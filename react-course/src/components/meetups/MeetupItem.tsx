import React, { FC, useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/FavoritesContext';

interface Props {
	id?: string;
	image: string;
	title: string;
	address: string;
	description: string;
}
const MeetupItem: FC<Props> = ({ id, image, title, address, description }) => {
	const favoritesCtx = useContext(FavoritesContext);
	const meetUpId = id ? id : '';
	const itemIsFavorite = favoritesCtx.itemIsFavorite(meetUpId);

	const toggleFavoriteStatusHandler = () => {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(meetUpId);
		} else {
			favoritesCtx.addFavorite({
				id: id,
				title: title,
				image: image,
				address: address,
				description: description,
			});
		}
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
};
export default MeetupItem;
