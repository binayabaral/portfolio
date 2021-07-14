<template>
  <Layout>
    <section class="intro">
      <div class="container">
        <div class="intro__img">
          <g-image src="../assets/img01.jpg" alt="Binaya Baral"></g-image>
        </div>
        <div class="intro__txt">
          <h1>Hello!</h1>
          <h2>I'm Binaya Baral</h2>
          <span class="h3">A developer specializing in creating everything you need to create and maintain your presence in the digital world.</span>
          <p>Over the last 2 years, I gained meaningful experience in diverse development strategies through mixed approaches based on Design, Thinking and Development using various technologies that would suit each use case while also helping businesses and individuals create their strong presence in the modern day web.</p>
          <p>Currently, I am working as an Associate Software Engineer at Leapfrog Technology, Inc.</p>
          <g-link to="/about/" class="btn">Explore Me</g-link>
        </div>
      </div>
    </section>
    <section class="recent-projects">
      <div class="container">
        <span class="recent-projects__title">Recent Works</span>
        <ProjectListing :projects="projects" />
        <div class="text-center">
          <g-link to="/projects/" class="btn view-all-btn">View all projects</g-link>
        </div>
      </div>
    </section>
    <section class="recent-blogs">
      <div class="container">
        <span class="recent-blogs__title">Recent Works</span>
        <BlogsListing :blogs="blogs" />
        <div class="text-center">
          <g-link to="/blogs/" class="btn view-all-btn">View all Blogs</g-link>
        </div>
      </div>
    </section>
    <section class="work-together">
      <div class="container">
        <h1>Contact Me:</h1>
        <p>If you are interested, you can contact me for futher information.</p>
        <g-link to="/contact/" class="btn">Contact</g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>

	query {
		projects: allProjects(
			filter: {featured : {eq: true}}
			limit: 5
		) {
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
    blogs: allBlogs(
      limit: 5
    ) {
      edges {
        node {
          id
					title,
          description,
          content,
          path,
          published_at,
          thumbnail,
          bannerImage,
          tags
        }
      }
    }
	}

</page-query>

<script>
import ProjectListing from '../components/ProjectsListing';
import BlogsListing from '../components/BlogsListing.vue';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    ProjectListing,
    BlogsListing,
  },
  data: () => ({
    projects: [],
    blogs: [],
  }),
  mounted() {
    this.projects = this.$page.projects.edges;
    this.blogs = this.$page.blogs.edges;
  },
};
</script>

<style lang="scss" scoped>
section {
  &:nth-child(2n) {
    background: $mystic;
    @include animate(background);
    .dark-mode & {
      background: $base-background-color-dark;
    }
  }
}
.intro {
  padding-bottom: 50px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include media('screen', '>=tablet') {
      flex-direction: row;
    }
  }

  &__txt {
    text-align: justify;
    @include media('screen', '>=tablet') {
      order: -1;
    }
  }

  &__img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto 30px;
    flex-shrink: 0;

    @include media('screen', '>=tablet') {
      width: calc(50% - 50px);
      max-width: none;
      margin-left: 50px;
      margin-bottom: 0;
    }

    img {
      width: 100%;
    }
  }
}

a {
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
}

.recent-projects,
.recent-blogs {
  padding: 40px 0;
  border-top: 2px solid $mystic;
  border-bottom: 2px solid $mystic;
}

.work-together {
  padding: 80px 0;
  text-align: center;

  h1 {
    text-align: center;
  }
}
</style>
