import React from 'react';

import style from './info.module.scss';
import { Education, LearnMore, Location } from './Icons';

const ProfileHeaderInfo: React.FC = () => {
	return (
		<div className={style.root}>
			<div className={style.body}>
				<div className={style.name}>
					<h1 className={style.name__fi}>Matvey Nat</h1>
				</div>

				<div className={style.status}>
					<span className={style.status__text}>
						Lofi hip hop radio 📚 - beats to coding
					</span>
				</div>

				<div className={style.about}>
					<div className={style.location}>
						<span className={style.location__icon}>
							<Location />
						</span>
						<span className={style.location__city}>Barnaul</span>
					</div>

					<div className={style.education}>
						<span className={style.education__icon}>
							<Education />
						</span>
						<span className={style.education__city}>AltSTU named Polzunov</span>
					</div>

					<button className={style.learnMore}>
						<span className={style.learnMore__icon}>
							<LearnMore />
						</span>
						<span className={style.learnMore__city}>Learn more</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeaderInfo;
