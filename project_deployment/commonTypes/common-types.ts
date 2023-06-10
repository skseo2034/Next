export interface PostFileType {
	slug: string;
	[p: string]: any;
	content: string;
}

export interface PostType extends PostFileType {
	title?: string;
	image?: string;
	excerpt?: string;
	date?: string;
}
