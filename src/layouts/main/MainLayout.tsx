import React from 'react';

import Header from '../../components/header/Header';
import Home from '../../pages/home/Home';

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Home />
		</div>
	);
};

export default MainLayout;
