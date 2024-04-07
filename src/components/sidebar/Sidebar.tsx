import React from 'react';

import { Friends, Messenger, Music, MyProfile, News } from './Icons';

import style from './sidebar.module.scss';
import { Link } from 'react-router-dom';

export const LeftSideMenu: React.FC = () => {
	return (
		<aside className={style.root}>
			<nav className={style.nav}>
				<ul className={style.nav__list}>
					<li className={style.item}>
						<span className={style.item__icon}>
							<MyProfile />
						</span>
						<Link to={'/myprofile'} className={style.item__link}>
							My profile
						</Link>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<News />
						</span>
						<Link to={'/news'} className={style.item__link}>
							News
						</Link>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Messenger />
						</span>
						<Link to={'/messenger'} className={style.item__link}>
							Messenger
						</Link>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Friends />
						</span>
						<Link to={'/friends'} className={style.item__link}>
							Friends
						</Link>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Music />
						</span>
						<Link to={'/music'} className={style.item__link}>
							Music
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};
