<template>
  <Layout>
    <section class="projects">
      <div class="container">
        <ProjectsListing :projects="projects" />
      </div>
    </section>
  </Layout>
</template>

<page-query>

	query {
		projects: allProjects{
			edges {
				node {
					id
					name
					description
					demo_link
					github_link
					featured
					screens
					tags
				}
			}
		}
	}

</page-query>

<script>
import ProjectsListing from '../components/ProjectsListing';

export default {
  metaInfo: {
    title: 'My Projects'
  },
  components: {
    ProjectsListing
  },
  data: () => ({
    projects: []
  }),
  mounted() {
    this.projects = this.$page.projects.edges;
  }
};
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 40px;
}
</style>
