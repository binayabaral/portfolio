// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function(api) {
	api.loadSource(async actions => {
		const { data } = await axios.get('http://localhost:1337/projects');

		const collection = actions.addCollection({
			typeName: 'Projects',
		});

		for (const project of data) {
			let projectScreens = [];
			let projectTags = [];

			for (const screen of project.screen) {
				projectScreens.push(screen.formats.medium.url);
			}

			for (const tag of project.project_tags) {
				projectTags.push(tag.tag);
			}

			collection.addNode({
				id: project.id,
				name: project.name,
				description: project.description,
				demo_link: project.demo_link,
				github_link: project.github_link,
				featured: project.featured,
				screens: projectScreens,
				tags: projectTags,
			});
		}
	});
};
