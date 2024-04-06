import React from 'react';
import { LeftSideMenu } from '../../components/sidebar/Sidebar';

import style from './home.module.scss';
import MyProfile from '../../components/profile/Profile';

const Home: React.FC = () => {
	return (
		<main className={style.main}>
			<div className={style.container_home}>
				<LeftSideMenu />
				<MyProfile />
			</div>
		</main>
	);
};

export default Home;
