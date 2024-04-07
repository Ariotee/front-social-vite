import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../../components/header/Header';
import { LeftSideMenu } from '../../components/sidebar/Sidebar';

import style from './mainlayout.module.scss';

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className={style.container_home}>
				<LeftSideMenu />
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
