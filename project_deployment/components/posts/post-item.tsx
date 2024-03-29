import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';
import React from 'react';
import { PostFileType } from '@/commonTypes/common-types';

const PostItem = (props: { post: PostFileType }) => {
	const { title, image, excerpt, date, slug } = props.post;

	const formattedDate = new Date(date as string).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	const linkPath = `/posts/${slug}`;
	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<div className={classes.image}>
					<Image src={imagePath} alt={title as string} width={300} height={200} layout="responsive" />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};

export default PostItem;
