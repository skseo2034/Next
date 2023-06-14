/** @type {import('next').NextConfig} */

const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_EXPORT,
	PHASE_PRODUCTION_BUILD,
	PHASE_PRODUCTION_SERVER,
	// eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('next/constants');

const isLocal = process.env.NODE_ENV === 'local';
console.log('seo >>>>>>>>>>>>> ', isLocal);

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			assetPrefix: isLocal ? './' : '',
			reactStrictMode: true,
			env: {
				mongodb_username: 'skseo',
				mongodb_password: 'OBrGWLrzEnsL8ixL',
				mongodb_clustername: 'cluster1',
				mongodb_database: 'my-site-dev',
			},
			images: {
				unoptimized: true,
			},
		};
	}
	return {
		assetPrefix: isLocal ? './' : '',
		reactStrictMode: true,
		env: {
			mongodb_username: 'skseo',
			mongodb_password: 'OBrGWLrzEnsL8ixL',
			mongodb_clustername: 'cluster1',
			mongodb_database: 'my-site',
		},
		images: {
			unoptimized: true,
		},
	};
};
