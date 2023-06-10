import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import Head from 'next/head';

// 전체 메타 데이터는 여기에 표기하면 된다.
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="with=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
