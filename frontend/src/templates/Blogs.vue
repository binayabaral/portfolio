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
import shajs from 'sha.js';
export default {
  metaInfo() {
    let meta = [
      {
        property: 'charset',
        name: 'charset',
        content: 'utf-8',
      },
      {
        property: 'og:type',
        name: 'og:type',
        content: 'article',
      },
      {
        name: 'twitter:site',
        key: 'twitter:site',
        content: '@binayabaral',
      },
      {
        name: 'twitter:title',
        key: 'twitter:title',
        content: this.$page.blogs.title,
      },
    ];

    meta.push(
      ...[{ name: 'description', tag: 'name' }, { name: 'og:description', tag: 'property' }, { name: 'twitter:description', tag: 'name' }].map(prop => ({
        [prop.tag]: prop.name,
        key: prop.name,
        content: this.$page.blogs.description,
      }))
    );

    const pageURL = encodeURI(
      `https://binayabaral.com.np${this.$page.blogs.path}?v=${shajs('sha256')
        .update(this.$page.blogs.content)
        .digest('hex')}`
    );

    const socialImage = this.$page.blogs.bannerImage || `https://motif.imgix.com/i?url=${pageURL})}&color=e63946&logo_url=https%3A%2F%2Flogo.clearbit.com%2Fbinayabaral.com.np%3Fformat%3Dpng%26size%3D300&logo_alignment=bottom%2Cright&text_alignment=top%2Cleft&logo_padding=0&font_family=Avenir%20Next%20Demi%2CBold&text_color=fff`;

    meta.push(
      ...[{ name: 'image', tag: 'name' }, { name: 'twitter:image', tag: 'name' }, { name: 'og:image', tag: 'property' }].map(prop => ({
        [prop.tag]: prop.name,
        key: prop.name,
        content: socialImage,
      }))
    );

    meta.push({
      name: 'twitter:card',
      key: 'twitter:card',
      content: 'summary_large_image',
    });

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
