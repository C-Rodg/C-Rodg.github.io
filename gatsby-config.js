module.exports = {
	siteMetadata: {
		title: '[Curtis Rodgers] Software Engineer',
		name: 'Curtis Rodgers',
		siteUrl: 'https://curtisrodgers.com/',
		description:
			'Curtis Rodgers is a software engineer.  Some of his favorite languages & technologies include - Javascript, React, Redux, HTML, CSS, SQL, Swift, and many more..',
		hero: {
			heading: 'Curtis Rodgers',
			maxWidth: 652
		},
		social: [
			{
				name: 'mail',
				url:
					'mailto:&#114;&#111;&#100;&#103;&#101;&#114;&#115;&#098;&#099;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'
			},
			{
				name: 'github',
				url: 'https://github.com/C-Rodg'
			},
			{
				name: 'codepen',
				url: 'https://codepen.io/crodg/'
			},
			{
				name: 'linkedin',
				url: 'https://www.linkedin.com/in/crodg/'
			},
			{
				name: 'dribbble',
				url: 'https://dribbble.com/Kobaine'
			}
		]
	},
	//plugins: ['@narative/gatsby-theme-novela']
	plugins: [
		{
			resolve: '@narative/gatsby-theme-novela',
			options: {
				contentPosts: 'content/posts',
				contentAuthors: 'content/authors',
				basePath: '/'
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Curtis Rodgers`,
				short_name: `CurtisRodgers`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/assets/favicon.png`
			}
		}
	]
};
