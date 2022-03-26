<template>
  <Layout>
    <section class="blogs">
      <div class="container">
        <BlogsListing :blogs="blogs" />
      </div>
    </section>
  </Layout>
</template>

<page-query>

	query {
    blogs: allBlogs{
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
import BlogsListing from '../components/BlogsListing';

export default {
  metaInfo: {
    title: 'My Blogs'
  },
  components: {
    BlogsListing
  },
  data: () => ({
    blogs: []
  }),
  mounted() {
    this.blogs = this.$page.blogs.edges;
  }
};
</script>

<style lang="scss" scoped>
.blogs {
  padding-bottom: 40px;
}
</style>
