// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function(api) {
  api.loadSource(async actions => {
    const { data: projectsData } = await axios.get('http://localhost:1337/projects');
    const { data: blogsData } = await axios.get('http://localhost:1337/blogs');

    const projectsCollection = actions.addCollection({
      typeName: 'Projects',
    });

    const blogsCollection = actions.addCollection({
      typeName: 'Blogs',
      path: '/blogs/:slug/',
    });

    for (const project of projectsData) {
      let projectScreens = [];
      let projectTags = [];

      for (const screen of project.screen) {
        projectScreens.push(screen.formats.medium.url);
      }

      for (const tag of project.project_tags) {
        projectTags.push(tag.tag);
      }

      projectsCollection.addNode({
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

    for (const blog of blogsData) {
      let blogTags = [];

      for (const tag of blog.blog_tags) {
        blogTags.push(tag.tag);
      }

      blogsCollection.addNode({
        id: blog.id,
        title: blog.title,
        description: blog.description,
        content: blog.content,
        path: `/blogs/${blog.slug}/`,
        published_at: blog.published_at,
        thumbnail: blog.bannerImage.formats.small.url,
        bannerImage: blog.bannerImage.formats.large.url,
        tags: blogTags,
      });
    }
  });
};
