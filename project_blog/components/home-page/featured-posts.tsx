import classes from './featured-posts.module.css';
import PostsGrid from '@/components/posts/posts-grid';
import { PostType } from '@/commonTypes/common-types';

const FeaturedPosts = (props: { posts: PostType[] }) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default FeaturedPosts;
