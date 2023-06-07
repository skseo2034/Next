import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PostFileType } from '@/commonTypes/common-types';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { CodeComponent, SpecialComponents } from 'react-markdown/lib/ast-to-react';

const PostContent = (props: { post: PostFileType }) => {
	const { post } = props;
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customComponents: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
		img(image: any) {
			return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />;
		},

		code(code: any) {
			const { className, children } = code;

			// eslint-disable-next-line react/no-children-prop
			return <SyntaxHighlighter style={atomDark} language={className} children={children} />;
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
