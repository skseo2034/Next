import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Notification from '@/components/ui/notification';
import NotificationContext from '@/store/notification_context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NotificationContext.Provider>
			<Layout>
				<Head>
					<title>Next Events</title>
					<meta name="description" content="NextJS Events" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Component {...pageProps} />
				<Notification title="Text" message="This is a test." status="error" />
			</Layout>
		</NotificationContext.Provider>
	);
}
