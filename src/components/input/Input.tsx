import style from './input.module.scss';

const Input = () => {
	return <input type='text' placeholder='Search' autoComplete='off' className={style.root} />;
};

export default Input;
