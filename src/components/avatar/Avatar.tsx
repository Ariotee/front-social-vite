import React from 'react';

import AvatarMe from '../../assets/avatarMe.jpg';

import style from './style.module.scss';

const Avatar: React.FC = () => {
	return (
		<button className={style.avatarBtn}>
			<img src={AvatarMe} alt='My avatar' className={style.avatarImg} />
		</button>
	);
};

export default Avatar;
