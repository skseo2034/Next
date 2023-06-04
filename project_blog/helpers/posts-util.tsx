import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFileType } from '@/commonTypes/common-types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export const getPostFiles = () => {
	return fs.readdirSync(postsDirectory);
};

export const getPostsData = (postIdentifier: string) => {
	const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
	const filePath = path.join(postsDirectory, `${postSlug}.md`); // 해당 디렉토리에 파일을 경로 설정
	const fileContent = fs.readFileSync(filePath, 'utf-8'); // 파일을 읽어온다.
	const { data, content } = matter(fileContent); // 메터데이터가 있는 data, 실제 내용이 있는 content 프로퍼티 2개를 리턴 한다.

	const postData = {
		slug: postSlug,
		...data,
		content: content,
	};

	return postData;
};

export const getAllPosts = () => {
	const postFiles = getPostFiles(); // 해당 디렉토리에 모든 파일목록을 가지고 온다.

	// const allPosts: { [p: string]: any; slug: string; content: string }[] = postFiles.map(postFile => {
	const allPosts: PostFileType[] = postFiles.map(postFile => {
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
