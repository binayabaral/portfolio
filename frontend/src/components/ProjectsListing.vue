<template>
  <div class="project-listing">
    <span class="h1">Projects</span>
    <span class="h5" v-if="$route.query.tag">Showing projects with tag: "{{ $route.query.tag }}"</span>
    <g-link to="/projects/" v-if="$route.query.tag">Clear tag</g-link>
    <ul class="projects-list">
      <template v-for="project in projects">
        <li :key="project.node.id" v-if="!$route.query.tag || project.node.tags.includes($route.query.tag)">
          <div class="project__img">
            <ImageCarousel :images="project.node.screens" :project="project.node.name" />
          </div>
          <div class="project__desc">
            <span class="project__name h3">{{ project.node.name }}</span>
            <div class="project__tags-wrap" v-if="project.node.tags.length">
              <span class="project__tags-title">Tags:</span>
              <ul class="project__tags">
                <li v-for="tag in project.node.tags" :key="tag">
                  <g-link :to="'/projects/?tag=' + tag">{{ tag }}</g-link>
                </li>
              </ul>
            </div>
            <p>{{ project.node.description }}</p>
            <div class="project__btn-grp">
              <a :href="project.node.demo_link" target="_blank" rel="noreferrer" class="btn">
                <font-awesome :icon="['fa', 'sign-out-alt']" />
                <span>Demo</span>
              </a>
              <a :href="project.node.github_link" target="_blank" rel="noreferrer" class="btn">
                <font-awesome :icon="['fab', 'github']" />
                <span>Code</span>
              </a>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import ImageCarousel from './ImageCarousel';

export default {
  components: {
    ImageCarousel
  },
  props: ['projects']
};
</script>

<style lang="scss" scoped>
.projects-list {
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
      align-items: center;
      padding: 20px 0;
    }

    &:first-child {
      border-top: none;
    }

    &:nth-child(2n) {
      .project__img {
        @include media('screen', '>=desktop') {
          order: 2;
          margin-right: 0;
          margin-left: 30px;
        }
      }
    }

    &.hidden-project {
      display: none;
    }
  }
}

.project {
  &__img {
    width: 100%;
    margin-bottom: 20px;
    flex-shrink: 0;
    @include media('screen', '>=desktop') {
      width: 50%;
      margin-right: 30px;
      margin-bottom: 0;
    }

    img {
      width: 100%;
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

  &__name {
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  &__btn-grp {
    margin: 0 -10px;
    .btn {
      margin: 5px 10px;
    }
    svg {
      margin-right: 10px;
    }
  }
}

h1,
.h1,
h5,
.h5 {
  margin-bottom: 0;
}
</style>
