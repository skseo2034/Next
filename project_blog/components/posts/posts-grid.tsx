import classes from './posts-grid.module.css';
import PostItem from './post-item';
import { postType } from '@/commonTypes/common-types';

const PostsGrid = (props: { posts: postType[] }) => {
	const { posts } = props;
	return (
		<ul className={classes.grid}>
			{posts.map(post => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
};

export default PostsGrid;
