import React from 'react';
import AllPosts from '@/components/posts/all-posts';
import { PostFileType, PostType } from '@/commonTypes/common-types';
import { getAllPosts, getFeaturedPosts } from '@/helpers/posts-util';

const AllPostsPage = (props: { posts: PostFileType[] }) => {
	return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
		// 1시간 후 조회시 다시 가져온다. 지금은 생략 함 거의 변경이 없으므로, project 에 포함된 md 이므로 변경시 재배포가 필요하다. 따라서 여기서는 필요없다.
		// revalidate: 6000,
	};
};
export default AllPostsPage;
