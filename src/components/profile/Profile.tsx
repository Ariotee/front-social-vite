import React from 'react';

import ProfileHeader from './components/profileHeader/ProfileHeader';
import ProfileHeaderInfo from './components/profileHeaderInfo/ProfileHeaderInfo';

import style from './profile.module.scss';

const MyProfile: React.FC = () => {
	return (
		<div className={style.flex}>
			<ProfileHeader />
			<ProfileHeaderInfo />
		</div>
	);
};

export default MyProfile;
