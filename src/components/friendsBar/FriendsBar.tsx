import React from 'react';

import { Link } from 'react-router-dom';

import Denis from '../../assets/Denis.jpg';
import Mark from '../../assets/Mark.jpeg';
import Matvey from '../../assets/avatarMe.jpg';
import Alexey from '../../assets/Alexey.jpg';

import style from './friendsbar.module.scss';

const FriendsBar: React.FC = () => {
	return (
		<div className={style.root}>
			<Link to={'/friends'} className={style.title}>
				<h2 className={style.title__text}>Friends</h2>
				<span className={style.title__count}>4</span>
			</Link>
			<ul className={style.list_grid}>
				<Link to={'/friends'} className={style.link_friend}>
					<li className={style.item}>
						<div className={style.item__img}>
							<img src={Matvey} alt={'friend'} />
						</div>
						<span className={style.item__name}>Matvey</span>
					</li>
				</Link>
				<Link to={'/friends'} className={style.link_friend}>
					<li className={style.item}>
						<div className={style.item__img}>
							<img src={Mark} alt={'friend'} />
						</div>
						<span className={style.item__name}>Mark</span>
					</li>
				</Link>
				<Link to={'/friends'} className={style.link_friend}>
					<li className={style.item}>
						<div className={style.item__img}>
							<img src={Denis} alt={'friend'} />
						</div>
						<span className={style.item__name}>Denis</span>
					</li>
				</Link>
				<Link to={'/friends'} className={style.link_friend}>
					<li className={style.item}>
						<div className={style.item__img}>
							<img src={Alexey} alt={'friend'} />
						</div>
						<span className={style.item__name}>Alexey</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default FriendsBar;
