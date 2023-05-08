import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

interface SalesData {
	id: string;
	username: string;
	volumn: number;
}

const LastSalesPage = () => {
	const [sales, setSales] = useState<SalesData[]>([]);
	// const [isLoading, setIsLoading] = useState(false);

	// firebase 특성상 바로 사용할 수 없다.
	// 이것도 변환해 한다.
	// 방법 1. fetcher 함수를 정의한다.
	// 방법 2. useEffect 를 사용한다.
	const { data, error } = useSWR('getLastSales', () =>
		fetcher('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/sales.json')
	);

	useEffect(() => {
		if (data) {
			const transformedSales = [];

			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volumn: data[key].volumn,
				});
			}

			setSales(transformedSales);
		}
	}, [data]);

	/*useEffect(() => {
		setIsLoading(true);
		fetch('https://nextjs-course-3cf33-default-rtdb.firebaseio.com/sales.json')
			.then(res => res.json())
			.then(data => {
				console.log('data', data);
				// firebase 에서 가지고 오는 값은 Array 가 아니다. s1, s2 의 상세 객체이다.
				// 따라서 Array 로 변경해야 한다.
				const transformedSales = [];

				for (const key in data) {
					transformedSales.push({
						id: key,
						username: data[key].username,
						volumn: data[key].volumn,
					});
				}

				setSales(transformedSales);
				setIsLoading(false);
			});
	}, []);*/

	if (error) {
		return <p>Failed to load.</p>;
	}

	if (!data || !sales) {
		return <p>Loading...</p>;
	}
	return (
		<ul>
			{sales.map(sale => (
				<li key={sale.id}>
					{sale.username} - ${sale.volumn}
				</li>
			))}
		</ul>
	);
};

export default LastSalesPage;
