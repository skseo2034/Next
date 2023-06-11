import PostContent from '@/components/posts/post-detail/post-content';
import { GetStaticPropsContext, NextPageContext } from 'next';
import { getPostFiles, getPostsData } from '@/helpers/posts-util';
import { PostFileType } from '@/commonTypes/common-types';
import Head from 'next/head';
import React from 'react';

const PostDetialPage = (props: { post: PostFileType }) => {
	console.log('seo333 >>>>>>>>>>>>>>>>> ', props);
	return (
		<>
			PostDetialPage
			<Head>
				{props.post && <title>{props.post.title}</title>}
				{props.post && <meta name="description" content={props.post.excerpt} />}
				{/*<title>{props.post.title}</title>*/}
				{/*<meta name="description" content={props.post.excerpt} />*/}
			</Head>
			{props.post && <PostContent post={props.post} />}
		</>
	);
};

export const getStaticProps = (context: any) => {
	const { params } = context;
	const { slug } = params;

	const postData = getPostsData(slug);
	console.log('seo77777 >>>>>>>>>>>>>>>>> ', postData);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
};

// 동적 페이지 이므로 getStaticProps 단독으로 작동 할 수 없다.
// getStaticPaths 가 필요하다.
export const getStaticPaths = () => {
	const postFileNames = getPostFiles();

	const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));
	console.log('seo8888 >>>>>>>>>>>>>>>>> ', slugs);
	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: true,
	};
};

export default PostDetialPage;
