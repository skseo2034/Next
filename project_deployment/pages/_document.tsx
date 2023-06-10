// 일반적인 페이지 구조를 정의 할 수 있게 도와 준다.
// Html 요소 그 자체에 속성을 설정하거나, React Portal과 함께 사용할 진입 지검 등의 요소를 추가 한다.

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id="notifications"></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
