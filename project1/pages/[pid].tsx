import React from 'react';
import path from 'path';
import fs from 'fs/promises';
interface Product {
	id: string;
	title: string;
	description: string;
}
const ProductDetailPage = (props: { loadedProduct: Product }) => {
	console.log('seo >> ', props);
	const { loadedProduct } = props;

	// fallback 를 'blocking' 로 설정할 경우
	// 컴포넌트에서 fallback 를 확일 할 필요가 없다. nextjs 가 사전 생성을 하도로 기다린다.
	// 따라서 페이지 방문자에게는 느리게 느낄 수 있다.
	// 따라서 아래는 주석 처리 하면 된다. fallback : true 일때는 아래 확인 필요
	if (!loadedProduct) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
};

const getData = async () => {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());

	return data;
};

export const getStaticProps = async (context: any) => {
	console.log('pid produectdetail page context', context);
	const { params } = context;
	const productId = params.pid;

	const data = await getData();

	const product = data.products.find((product: Product) => product.id === productId);

	if (!product) {
		return { notFound: true };
	}

	return {
		props: {
			loadedProduct: product,
		},
	};
};

// 동적페이지에 어떤 인스턴스를 사전에 생성할지 알린다.
export const getStaticPaths = async () => {
	const data = await getData();

	// const ids = data.products.map((product: Product) => product.id);
	// const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));
	const pathsWithParams = data.products
		.map((product: Product) => product.id)
		.map((id: string) => ({ params: { pid: id } }));
	// const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));

	return {
		// paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p2' } }, { params: { pid: 'p3' } }],
		// fallback: false, // 이 값을 true 로 하고 일부만 사전에 생성할 수 있다.
		// paths: [{ params: { pid: 'p1' } }],
		paths: pathsWithParams,
		fallback: true, // 이 값을 true 로 하고 일부만 사전에 생성할 수 있다. 컴포넌트에서 fallback 체크 해야 한다.
		// fallback: 'blocking', // 이 값을 true 로 하고 일부만 사전에 생성할 수 있다.
	};
};

export default ProductDetailPage;
