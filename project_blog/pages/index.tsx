import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import React from 'react';
import { PostFileType, PostType } from '@/commonTypes/common-types';
import { getFeaturedPosts } from '@/helpers/posts-util';

const Homepage = (props: { posts: PostFileType[] }) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

// getServerSideProps 도 사용할 수 있다. 그러나. 그것을 사용하면 요청마다 즉 매 요청마다
// 모들파일과 게시물을 가지고 와야 한다. 페이지 자체가 아주 느려진다.
// 이 블로그의 게시물은 매초 바뀔 일이 딱히 없다. 업데이트를 위해 마크다운 파일을 바꿔줘야 하니까.
// 따라서 블로그 게시물이 자주 바뀌지 않을 것이다. 대부분의 게시물에 대한 변경이 없을 테니
// getStaticProps 가 좋은 방법이다.
export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
		// revalidate: 6000, // 1시간 후 조회시 다시 가져온다. 지금은 생략 함 거의 변경이 없으므로
	};
};

export default Homepage;

// 1) Hero => Present ourselves : 자기소개
// 2) Featured Posts
