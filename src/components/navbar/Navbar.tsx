import React from 'react';

import style from './navbar.module.scss';
import Input from '../input/Input';
import { Clear, Logotype, Search } from './Icons';
import Avatar from '../avatar/Avatar';

const Navbar: React.FC = () => {
	const [value, setValue] = React.useState('');

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
								<Input value={value} setValue={setValue} />
								{value && <Clear value={value} setValue={setValue} />}
							</div>
						</div>
					</form>

					<div className={style.avatar}>
						<Avatar />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
