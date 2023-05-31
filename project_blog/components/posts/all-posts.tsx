import classes from './all-posts.module.css';
import PostsGrid from '@/components/posts/posts-grid';
import { PostType } from '@/commonTypes/common-types';

const AllPosts = (props: { posts: PostType[] }) => {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default AllPosts;
