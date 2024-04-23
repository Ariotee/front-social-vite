import React from 'react';

import { Comment, Like, Share } from '../Icons';

import Avatar from '../../../avatar/Avatar';
import style from './style.module.scss';
import { IPost } from '../../../../redux/posts/types';

const PostItem: React.FC<IPost> = ({ text }) => {
	return (
		<div className={style.root}>
			<div className={style.block}>
				<div className={style.user}>
					<div className={style.user__avatar}>
						<Avatar />
					</div>
					<div className={style.info}>
						<div className={style.info__name}>
							<span className={style.f_name}>Matvey</span>
							&nbsp;
							<span className={style.l_name}>Nat</span>
						</div>
						<div className={style.info_date}>29 Mar at 2:45 pm</div>
					</div>
				</div>

				<div className={style.content_post}>
					<p className={style.post_text}>{text}</p>
				</div>

				<div className={style.ability}>
					<div className={style.ability_like}>
						<button className={style.like_btn}>
							<span className={style.like_btn_icon}>
								<Like />
							</span>
							<span className={style.like_btn_count}>2</span>
						</button>
					</div>

					<div className={style.ability_comment}>
						<button className={style.comment_btn}>
							<span className={style.comment_btn_icon}>
								<Comment />
							</span>
							<span className={style.comment_btn_count}>2</span>
						</button>
					</div>

					<div className={style.ability_share}>
						<button className={style.share_btn}>
							<span className={style.share_btn_icon}>
								<Share />
							</span>
							<span className={style.share_btn_count}>2</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
