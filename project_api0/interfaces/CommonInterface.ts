export interface EventItemInterface {
	id: string;
	title: string;
	location: string;
	date: string;
	image: string;
	description?: string;
	isFeatured?: boolean;
}

export interface DateFilterInterface {
	year: number;
	month: number;
}
