import React from 'react';

import style from './home.module.scss';
import MyProfile from '../../components/profile/Profile';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import Posts from '../../components/posts/Posts';

const Home: React.FC = () => {
	return (
		<main className={style.main}>
			<MyProfile />
			<div className={style.content_flex}>
				<Posts />
				<FriendsBar />
			</div>
		</main>
	);
};

export default Home;
