import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/main/MainLayout';
import Home from './pages/home/Home';
import Messenger from './pages/messenger/Messenger';
import Music from './pages/music/Music';
import NotFound from './pages/notFound/NotFound';

import './scss/libs/normalize.scss';
import './scss/App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/myprofile' element={<Home />} />
					<Route path='/messenger' element={<Messenger />} />
					<Route path='/music' element={<Music />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
