<template>
  <Layout>
    <section class="blog">
      <div class="blog__banner">
        <img :src="$page.blogs.bannerImage" :alt="$page.blogs.title" />
      </div>
      <div class="container">
        <h1 class="blog__title">{{ $page.blogs.title }}</h1>
        <span class="published_at">Published on: {{ new Date($page.blogs.published_at).toDateString() }}</span>
        <div class="blog__tags-wrap" v-if="$page.blogs.tags.length">
          <span class="blog__tags-title">Tags:</span>
          <ul class="blog__tags">
            <li v-for="tag in $page.blogs.tags" :key="tag">
              <a :href="'/blogs?tag=' + tag">{{ tag }}</a>
            </li>
          </ul>
        </div>
        <div class="blog__share">
          <span class="blog__share-title">Share to:</span>
          <div class="blog__share-options">
            <ShareNetwork network="facebook" :url="`https://binayabaral.com.np${$page.blogs.path}`" :title="$page.blogs.title" :description="$page.blogs.description" aria-labelledby="share to facebook">
              <font-awesome :icon="['fab', 'facebook']" />
            </ShareNetwork>
            <ShareNetwork network="twitter" :url="`https://binayabaral.com.np${$page.blogs.path}`" :title="$page.blogs.title" :description="$page.blogs.description" aria-labelledby="share to twitter">
              <font-awesome :icon="['fab', 'twitter']" />
            </ShareNetwork>
          </div>
        </div>
        <div class="blog__content">
          <vue-markdown>{{ $page.blogs.content }}</vue-markdown>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>

query($path: String) {
  blogs(path: $path) {
    id,
    title,
    content,
    published_at,
    bannerImage,
    tags,
    path,
    description
	}
}
</page-query>

<script>
import VueMarkdown from 'vue-markdown';
import { ShareNetwork } from 'vue-social-sharing';
export default {
  metaInfo() {
    return {
      title: this.$page.blogs.title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article' },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.blogs.title,
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.blogs.description,
        },
        { key: 'og:url', property: 'og:url', content: `https://www.binayabaral.com${this.$page.blogs.path}` },
        { property: 'og:image', content: this.$page.blogs.bannerImage },
        { property: 'og:image:secure_url', content: this.$page.blogs.bannerImage },
        { key: 'keywords', name: 'keywords', content: this.$page.blogs.tags },
        {
          key: 'article:published_time',
          property: 'article:published_time',
          content: this.$page.blogs.published_at,
        },
        { name: 'twitter:title', content: this.$page.blogs.title },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:description',
          content: this.$page.blogs.description,
        },

        {
          name: 'twitter:site',
          content: 'https://twitter.com/binayabaral',
        },
        {
          name: 'twitter:creator',
          content: 'https://twitter.com/binayabaral',
        },
        { name: 'twitter:image', content: this.$page.blogs.bannerImage },
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
    };
  },
  components: {
    VueMarkdown,
    ShareNetwork,
  },
};
</script>

<style lang="scss" scoped>
h1,
.h1 {
  margin-bottom: 0;
}

.blog {
  &__banner {
    height: 50vh;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 40px;
    text-transform: capitalize;
    @include media('screen', '>=desktop') {
      font-size: 70px;
    }
  }

  &__tags-wrap {
    padding-bottom: 15px;
    display: flex;
  }

  &__tags-title {
    margin-right: 10px;
  }

  &__tags {
    @extend %listreset;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    li {
      margin: 0 10px;
    }
  }

  &__content {
    @include media('screen', '>=tablet') {
      padding: 50px 100px;
    }
  }
}
</style>

<style lang="scss">
.blog {
  &__content {
    img {
      margin: 5px 0;
    }
  }

  &__share {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__share-title {
    margin-right: 5px;
  }

  &__share-options {
    font-size: 40px;

    a {
      margin: 15px;
      color: $base-text-color;

      .dark-mode & {
        color: $base-text-color-dark;
      }

      &:hover {
        color: $base-link-color !important;
      }
    }
  }
}
</style>
