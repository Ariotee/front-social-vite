import React from 'react';

import CreatePost from './components/createPost/CreatePost';
import PostItem from './components/postItem/PostItem';

import style from './style.module.scss';

const Posts: React.FC = () => {
	return (
		<>
			<div className={style.root}>
				<CreatePost />
				<PostItem />
				<PostItem />
				<PostItem />
				<PostItem />
			</div>
		</>
	);
};

export default Posts;
