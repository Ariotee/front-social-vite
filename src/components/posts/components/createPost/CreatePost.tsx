import React from 'react';

import axios from 'axios';

import { UploadMusic, UploadPhoto, UploadVideo } from '../Icons';
//import { IPost } from '../../../../redux/posts/types';

import style from './style.module.scss';

const CreatePost: React.FC = () => {
	const [contentPost, setContentPost] = React.useState('');
	//const [newPost, setNewPost] = React.useState<IPost>();
	//const [createdPost, setCreatedPost] = React.useState([]);

	const onChangeCreateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContentPost(event.target.value);
	};

	const onClickCreatePost = () => {
		const newPostObject = {
			text: contentPost,
		};

		axios.post('https://5a50e665751f198f.mokky.dev/posts', newPostObject).catch(error => {
			console.error(error);
		});

		setContentPost('');
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
						<button
							onClick={onClickCreatePost}
							type='submit'
							className={style.btn_submit}
						>
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
