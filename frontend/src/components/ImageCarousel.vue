<template>
  <ClientOnly>
    <Carousel :perPage="1" paginationColor="#000" paginationActiveColor="#009000" :adjustableHeight="false" ref="carousel">
      <Slide v-for="image in images" :key="image">
        <img :src="image" :alt="name" />
      </Slide>
    </Carousel>
  </ClientOnly>
</template>

<script>
export default {
  components: {
    Carousel: () =>
      import('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then(m => m.Slide)
        .catch(),
  },
  props: {
    images: {
      type: Array,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.VueCarousel-dot-container {
  margin-top: 10px !important;
}

.VueCarousel-dot {
  margin: 0 !important;
}

.VueCarousel-wrapper {
  border: 1px solid $japanese-laurel;
}
</style>
