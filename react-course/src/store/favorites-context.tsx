import React, { createContext, FC, useState } from 'react';
import { MeetupData } from '../interface/CommonInterface';

interface aa {
	favorites: MeetupData[];
	totalFavorites: number;
}

const FavoritesContext = createContext<aa>({
	favorites: [],
	totalFavorites: 0,
});

interface Props {
	children: React.ReactNode;
}
const FavoritesContextProvider: FC<Props> = ({ children }) => {
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
	};
	return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
};
