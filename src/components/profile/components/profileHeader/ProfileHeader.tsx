import React from 'react';

import { AddFriend, EditProfile, More } from './Icons';

import style from './profileheader.module.scss';

import MeAvatar from '../../../../assets/avatarMe.jpg';

const ProfileHeader: React.FC = () => {
	return (
		<div className={style.root}>
			<div className={style.avatar}>
				<img src={MeAvatar} alt={'My Avatar'} className={style.avatar__img} />
			</div>

			<div className={style.action}>
				<button className={style.addFriend}>
					<span className={style.addFriend__icon}>
						<AddFriend />
					</span>
					<span className={style.addFriend__text}>Add Friend</span>
				</button>

				<button className={style.editProfile}>
					<span className={style.editProfile__icon}>
						<EditProfile />
					</span>
				</button>

				<button className={style.more}>
					<span className={style.more__icon}>
						<More />
					</span>
				</button>
			</div>
		</div>
	);
};

export default ProfileHeader;
