import React from 'react';

import style from './navbar.module.scss';
import Input from '../input/Input';
import { Logotype, Search } from './Icons';

import AvatarMe from '../../assets/avatarMe.jpg';

const Navbar: React.FC = () => {
	return (
		<div className={style.root}>
			<div className={style.container}>
				<div className={style.flex}>
					<div className={style.logo}>
						<div className={style.logo__SVG}>
							<Logotype />
						</div>
						<span className={style.logo__Text}>Connectify</span>
					</div>

					<form className={style.form}>
						<div className={style.bg}>
							<label className={style.label}>Search</label>
							<div className={style.input_body}>
								<Search />
								<Input />
							</div>
						</div>
					</form>

					<div className={style.avatar}>
						<button className={style.avatarBtn}>
							<img src={AvatarMe} alt='My avatar' className={style.avatarImg} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
