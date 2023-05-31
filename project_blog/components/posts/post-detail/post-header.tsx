import classes from './post-header.module.css';
import Image from 'next/image';
import { PostType } from '@/commonTypes/common-types';

const PostHeader = (props: { title: string; image: string }) => {
	const { title, image } = props;
	//	const imagePath = `/image/posts/${slug}/${image}`;
	return (
		<header className={classes.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={150} />
		</header>
	);
};

export default PostHeader;
