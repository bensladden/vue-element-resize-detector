const webpack = require('webpack')
const { version } = require('../../package.json')
module.exports = {
	title: 'Vue-element-resize-detector Docs',
	description: 'Welcome to Vue Element Resize Detector Docs',
	markdown: {
		lineNumbers: true,
	},
	chainWebpack: (config) => {
		config.plugin('version-env').use(webpack.EnvironmentPlugin, [
			{
				VERSION: version,
			},
		])
	},
	themeConfig: {
		repo: 'bensladden/vue-element-resize-detector',
		repoLabel: 'GitHub',
		docsDir: 'docs',
		docsBranch: 'master',
		lastUpdated: 'Last Updated',
		sidebarDepth: 2,
		nav: [
			{
				text: 'Guide',
				items: [
					{ text: 'Getting Started', link: '/guide/#getting-started' },
					{ text: 'Setup', link: '/guide/#setup' },
					{ text: 'How to Use with Vue', link: '/guide/#how-to-use-in-vue' },
					{ text: 'Support', link: '/guide/#show-your-support' },
					{ text: 'Contributing', link: '/guide/#contributing' },
					{ text: 'Bug Report', link: '/guide/#bug-report' }
				]
			}, {
				text: 'API',
				items: [
					{ text: 'v-resize', link: '/api/#v-resize' }
				]
			}, {
				text: 'Examples',
				items: [
					{ text: '1', link: '/examples/#1' }
				]
			}
		]
	},
	plugins: ['@vuepress/last-updated']
}