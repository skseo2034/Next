import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostType } from '@/commonTypes/common-types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

const getPostsData = (fileName: string) => {
	const filePath = path.join(postsDirectory, fileName); // 해당 디렉토리에 파일을 경로 설정
	const fileContent = fs.readFileSync(filePath, 'utf-8'); // 파일을 읽어온다.
	const { data, content } = matter(fileContent); // 메터데이터가 있는 data, 실제 내용이 있는 content 프로퍼티 2개를 리턴 한다.

	const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

	const postData = {
		slug: postSlug,
		...data,
		content: content,
	};

	return postData;
};

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory); // 해당 디렉토리에 모든 파일목록을 가지고 온다.

	const allPosts: { [p: string]: any; slug: string; content: string }[] = postFiles.map(postFile => {
		return getPostsData(postFile);
	});

	const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

	return sortedPosts;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter(post => post.isFeatured);

	return featuredPosts;
};
