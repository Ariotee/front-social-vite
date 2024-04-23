import React from 'react';

import axios from 'axios';

import CreatePost from './components/createPost/CreatePost';
import PostItem from './components/postItem/PostItem';

import style from './style.module.scss';
import { IPost } from '../../redux/posts/types';

const Posts: React.FC = () => {
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		const fetchPost = async () => {
			const { data } = await axios.get('https://5a50e665751f198f.mokky.dev/posts');
			setPosts(data);
		};

		fetchPost();
	}, []);

	return (
		<>
			<div className={style.root}>
				<CreatePost />

				{posts?.map((obj: IPost) => (
					<PostItem key={obj.id} {...obj} />
				))}
			</div>
		</>
	);
};

export default Posts;
