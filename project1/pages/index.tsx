import path from 'path';
import fs from 'fs/promises';
import { FC } from 'react';

interface product {
	id: string;
	title: string;
	description: string;
}
interface Props {
	products: product[];
}
// const HomePage = (props: { products: [{ id: string; title: string; description: string }] }) => {
const HomePage: FC<Props> = (props: Props) => {
	const { products } = props;
	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

// 이 컴포넌트를 생성하기 전에, Next.js 가 이 페이지를 사전 랜더링한기 전에 데이터를 프리페치 해야 한다.
// getStaticProps 함수가 있으면, 이것을 먼저 실행하고 컴포넌트의 함수를 실행 한다.
// export const getStaticProps = async () => {
export async function getStaticProps() {
	console.log('(Re-)Generataing...', new Date().toLocaleTimeString('ko-KR'));
	// process.cwd() 현재 작업중인 디렉토리 page 가 아닌다. Next.js 는 이 파일이 실행 될때 모든 파일을 루트 디렉토리에 있는것 처럼 취급한다.
	// 따라서 page 폴더가 아니라 전체 프로젝트 폴더가 된다.
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());

	// 항삭 객체를 반환 해야 한다.
	// revalidate: 10, 이 페이지에 들어오는 요청이 마지막에 재생성된후 10초가 지나면 재생성 되어야 함을 Next.js 에게 알려 준다.
	// 빌드시 사전에 생성된 후 새로운 데이터가 있을 수 있으므오 이 값을 세팅한다 (ISR : 증분 정적 생성 활용)
	// 개발시에는 revalidate 값과 상관없이 모든 요청에 대해 페이지가 재생성 됩니다.
	// 개발 서버에서는 항상 최신 데이터가 포함된 최신 페이지가 표시되고, 페이지가 다시 실행 된다.
	// 하지만 프로덕션에서는 이 값으로 재생성된다.

	return {
		props: {
			products: data.products,
		},
		/*revalidate: 5,*/
	};
}

export default HomePage;
