import Button from '../ui/Button';
import classes from './ResultsTitle.module.css';

function ResultsTitle(props: { date: Date }) {
	const { date } = props;

	// const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
	const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className={classes.title}>
			<h1>Events in {humanReadableDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
}

export default ResultsTitle;
