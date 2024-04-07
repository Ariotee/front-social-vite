import React from 'react';

import style from './style.module.scss';
import { UploadMusic, UploadPhoto, UploadVideo } from '../Icons';

const CreatePost: React.FC = () => {
	const [contentPost, setContentPost] = React.useState('');

	const onChangeCreateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContentPost(event.target.value);
	};

	return (
		<div className={style.root}>
			<div className={style.form}>
				<input
					contentEditable
					type='text'
					placeholder='Write something'
					value={contentPost}
					onChange={onChangeCreateInput}
					className={style.form__input}
				/>
				<div className={style.upload_btns}>
					{contentPost && (
						<button type='submit' className={style.btn_submit}>
							Create
						</button>
					)}
					<button disabled={true} className={style.btn}>
						<UploadMusic />
					</button>
					<button disabled={true} className={style.btn}>
						<UploadPhoto />
					</button>
					<button disabled={true} className={style.btn}>
						<UploadVideo />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
