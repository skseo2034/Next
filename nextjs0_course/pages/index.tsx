import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HomePage = () => {
	const router = useRouter();
	const moveTest = () => {
		router.push({ pathname: '/clients/max/project1', query: { pid: 'aaa' } }).then(r => console.log('aaaa'));
	};
	return (
		<div>
			<h1> The Home Page</h1>
			{/*<button onClick={moveTest}>이동</button>*/}
			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">Clients</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
