<template>
  <Layout>
    <section class="blog">
      <div class="blog__banner" :style="{ backgroundImage: `url(${$page.blogs.bannerImage})` }"></div>
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
            <ShareNetwork network="facebook" :url="`https://binayabaral.com.np${$page.blogs.path}`" :title="$page.blogs.title" :description="$page.blogs.description">
              <font-awesome :icon="['fab', 'facebook']" />
            </ShareNetwork>
            <ShareNetwork network="twitter" :url="`https://binayabaral.com.np${$page.blogs.path}`" :title="$page.blogs.title" :description="$page.blogs.description">
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
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 10px;
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
