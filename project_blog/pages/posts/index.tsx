import React from 'react';
import AllPosts from '@/components/posts/all-posts';
import { PostType } from '@/commonTypes/common-types';

const DUMMY_POSTS: PostType[] = [
	{
		slug: 'getting-stared-with-nextjs',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a then React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-stared-with-nextjs2',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a then React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-stared-with-nextjs3',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a then React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
	{
		slug: 'getting-stared-with-nextjs4',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is a then React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
		date: '2022-02-10',
	},
];

const AllPostsPage = () => {
	return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
