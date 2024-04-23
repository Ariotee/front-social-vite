import React from 'react';

import style from './input.module.scss';
import { IPropsInput } from './types';

const Input: React.FC<IPropsInput> = ({ value, setValue }) => {
	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setValue(inputValue);
		//const inputTrim = event.target.value.replace(/\s+/g, ''); //удаление всех пробелов
		//console.log(inputTrim);
	};

	return (
		<input
			type='text'
			placeholder='Search'
			autoComplete='off'
			className={style.root}
			value={value}
			onChange={onChangeInput}
		/>
	);
};

export default Input;
