import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
	return (
		<div>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<AllMeetupsPage />} />
				<Route path="/new-meetup" element={<NewMeetupPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</div>
	);
}

export default App;
