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
	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
};

export const getStaticProps = async (context: any) => {
	console.log('pid produectdetail page context', context);
	const { params } = context;
	const productId = params.pid;

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());

	const product = data.products.find((product: Product) => product.id === productId);

	return {
		props: {
			loadedProduct: product,
		},
	};
};

// 동적페이지에 어떤 인스턴스를 사전에 생성할지 알린다.
export const getStaticPaths = () => {
	return {
		paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p2' } }, { params: { pid: 'p3' } }],
		fallback: false,
	};
};

export default ProductDetailPage;
