import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext<any>({
	notification: null, // { title, message, status }
	showNotification: function (notificationData: NotificationDataType) {
		// Add your code
	},
	hideNotification: function () {
		// Add your code
	},
});

interface NotificationDataType {
	title: string;
	message: string;
	status: string;
}
export const NotificationContextProvider = (props: { children: React.ReactNode }) => {
	const [activeNotification, setActiveNotification] = useState<NotificationDataType | null>(null);

	useEffect(() => {
		if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

	const showNotificationHandler = (notificationData: NotificationDataType) => {
		setActiveNotification(notificationData);
	};
	const hideNotificationHandler = () => {
		setActiveNotification(null);
	};

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};
	return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
};

export default NotificationContext;
