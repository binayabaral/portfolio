<template>
  <Layout>
    <section class="intro">
      <div class="container">
        <div class="under-construction__img">
          <g-image src="../assets/under-construction.png"></g-image>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'My Blogs',
  },
};
</script>

<style lang="scss" scoped>
.under-construction__img {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
</style>
