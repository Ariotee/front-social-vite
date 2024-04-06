import React from 'react';

import { Friends, Messenger, Music, MyProfile, News } from './Icons';

import style from './sidebar.module.scss';

export const LeftSideMenu: React.FC = () => {
	return (
		<aside className={style.root}>
			<nav className={style.nav}>
				<ul className={style.nav__list}>
					<li className={style.item}>
						<span className={style.item__icon}>
							<MyProfile />
						</span>
						<a href='#' className={style.item__link}>
							My profile
						</a>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<News />
						</span>
						<a href='#' className={style.item__link}>
							News
						</a>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Messenger />
						</span>
						<a href='#' className={style.item__link}>
							Messenger
						</a>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Friends />
						</span>
						<a href='#' className={style.item__link}>
							Friends
						</a>
					</li>
					<li className={style.item}>
						<span className={style.item__icon}>
							<Music />
						</span>
						<a href='#' className={style.item__link}>
							Music
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};
