<template>
  <div class="layout">
    <Header />
    <transition name="slide-fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    let defaultTheme = localStorage.getItem('userTheme');
    if (!defaultTheme) {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      defaultTheme = userPrefersDark ? 'dark-mode' : 'light-mode';
      localStorage.setItem('userTheme', defaultTheme);
    }
    document.body.classList.add(defaultTheme);
  },
};
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  padding: 80px 0 0;
  @include media('screen', '>=tablet') {
    padding: 95px 0 0;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  @include animate(opacity transform, 0.5s);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
