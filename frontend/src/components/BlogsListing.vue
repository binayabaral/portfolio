<template>
  <div class="blog-listing">
    <span class="h1">Blogs</span>
    <span class="h5" v-if="$route.query.tag">Showing blogs with tag: "{{ $route.query.tag }}"</span>
    <a href="/blogs" v-if="$route.query.tag">Clear tag</a>
    <ul class="blogs-list">
      <template v-for="blog in blogs">
        <li :key="blog.node.id" v-if="!$route.query.tag || blog.node.tags.includes($route.query.tag)">
          <g-link :to="blog.node.path" class="blog__img">
            <g-image :src="blog.node.thumbnail"></g-image>
          </g-link>
          <div class="blog__desc">
            <g-link :to="blog.node.path" class="blog__name h3">{{ blog.node.title }}</g-link>
            <div class="blog__tags-wrap" v-if="blog.node.tags.length">
              <span class="blog__tags-title">Tags:</span>
              <ul class="blog__tags">
                <li v-for="tag in blog.node.tags" :key="tag">
                  <a :href="'/blogs?tag=' + tag">{{ tag }}</a>
                </li>
              </ul>
            </div>
            <p>{{ blog.node.description }}</p>
            <div class="blog__btn-grp">
              <g-link :to="blog.node.path" class="btn">
                <span>Read More</span>
              </g-link>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blogs'],
};
</script>

<style lang="scss" scoped>
.blogs-list {
  @extend %listreset;

  > li {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    border-top: 2px solid $black;
    @include animate(border-color);

    .dark-mode & {
      border-color: $white;
    }

    @include media('screen', '>=desktop') {
      flex-direction: row;
      padding: 20px 0;
    }

    &:first-child {
      border-top: none;
    }

    &.hidden-blog {
      display: none;
    }
  }
}

.blog {
  &__img {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    flex-shrink: 0;
    @include media('screen', '>=desktop') {
      width: 25%;
      margin-right: 30px;
      margin-bottom: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__desc {
    flex-grow: 1;
    text-align: justify;
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

  &__btn-grp {
    margin: 0 -10px;
    .btn {
      margin: 5px 10px;
    }
  }

  &__name {
    text-decoration: none;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 5px;
    text-transform: capitalize;
  }
}

h1,
.h1,
h5,
.h5 {
  margin-bottom: 0;
}
</style>
