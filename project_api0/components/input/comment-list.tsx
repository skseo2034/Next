import classes from './comment-list.module.css';

interface itemType {
	_id: string;
	name: string;
	text: string;
}
const CommentList = (props: { items: itemType[] }) => {
	const { items } = props;
	return (
		<ul className={classes.comments}>
			{items.map(item => (
				<li key={item._id}>
					<p>{item.text}</p>
					<div>
						By <address>{item.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CommentList;
