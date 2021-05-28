// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');

function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/scss/_global-styles.scss')],
		});
}

module.exports = {
	siteName: 'Binaya Baral | Personal Portfolio',
	siteUrl: 'https://www.binayabaral.com.np',
	siteDescription: 'Personal Portfolio of Binaya Baral',
	icon: './src/favicon.png',
	plugins: [
		'@gridsome/plugin-sitemap',
		'gridsome-plugin-robots-txt',
		{
			use: 'gridsome-plugin-manifest',
			options: {
				background_color: '#EAF3F8',
				icon_path: './src/favicon.png',
				name: 'Binaya Baral | Personal Portfolio',
				short_name: 'Binaya Baral',
				theme_color: '#FFFFFF',
				lang: 'en',
			},
		},
		{
			use: 'gridsome-plugin-pwa',
			options: {
				disableServiceWorker: false,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
				disableTemplatedUrls: false, // Optional

				manifestPath: 'manifest.json',
				title: 'Binaya Baral | Personal Portfolio',
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'default',
				themeColor: '#666600',
				backgroundColor: '#EAF3F8',
				icon: './src/favicon.png',
				maskableIcon: true,
			},
		},
	],
	chainWebpack(config) {
		// Load variables for all vue-files
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		// or if you use scss
		types.forEach(type => {
			addStyleResource(config.module.rule('scss').oneOf(type));
		});
	},
};
