import React, { createContext, FC, useState } from 'react';
import { MeetupData } from '../interface/CommonInterface';

interface Contexts {
	favorites: MeetupData[];
	totalFavorites: number;
	addFavorite: (favoriteMeetup: MeetupData) => void;
	removeFavorite: (meetupId: string) => void;
	itemIsFavorite: (meetupId: string) => boolean;
}

const FavoritesContext = createContext<Contexts>({
	favorites: [],
	totalFavorites: 0,
	addFavorite: favoriteMeetup => {
		// 지금은 비워 둔다
	},
	removeFavorite: meetupId => {
		// 지금은 비워 둔다
	},
	itemIsFavorite: meetupId => {
		return false;
	},
});

interface Props {
	children: React.ReactNode;
}
export const FavoritesContextProvider: FC<Props> = ({ children }) => {
	const [userFavorites, setUserFavorites] = useState<MeetupData[]>([]);

	const addFavoriteHandler = (favoriteMeetup: MeetupData) => {
		setUserFavorites(prev => {
			return prev.concat(favoriteMeetup);
		});
	};

	const removeFavoriteHandler = (meetupId: string) => {
		setUserFavorites(prev => {
			return prev.filter(meetup => meetup.id !== meetupId);
		});
	};

	const itemIsFavoriteHandler = (meetupId: string) => {
		return userFavorites.some(meetup => meetup.id === meetupId);
	};

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContext;
