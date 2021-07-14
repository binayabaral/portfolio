<template>
  <header id="header">
    <div class="container">
      <g-link to="/" class="logo">3!ηα¥</g-link>
      <a href="#" class="nav-opener" @click="toggleNav" :class="{ 'nav-active': navExpanded }" aria-label="navigation menu opener"><span></span></a>
      <nav id="nav" :class="{ 'show-nav': navExpanded }">
        <ul class="navigation-menu">
          <li v-for="navLink in navLinks" :key="navLink.linkName">
            <g-link :to="navLink.to">{{ navLink.linkName }}</g-link>
          </li>
          <li>
            <a href="#" v-on:click="darkLightModeToggle" aria-label="Toggle Theme">
              <font-awesome :icon="['fas', 'adjust']" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    navLinks: [{ to: '/about', linkName: 'About' }, { to: '/projects', linkName: 'Projects' }, { to: '/blogs', linkName: 'Blogs' }, { to: '/contact', linkName: 'Contact' }],
    navExpanded: false,
  }),
  mounted() {
    window.addEventListener('resize', this.resize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    darkLightModeToggle: e => {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
      const userTheme = localStorage.getItem('userTheme');
      if (userTheme === 'light-mode') {
        localStorage.setItem('userTheme', 'dark-mode');
      } else {
        localStorage.setItem('userTheme', 'light-mode');
      }
    },
    toggleNav(e) {
      e.preventDefault();
      this.navExpanded = !this.navExpanded;
    },
    resize() {
      document.body.classList.add('resize-active');
      if (window.innerWidth > 767) this.navExpanded = false;
      clearTimeout(this.resizeTimer);
      this.resizeTimer();
    },
    resizeTimer() {
      setTimeout(() => {
        document.body.classList.remove('resize-active');
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $base-background-color;
  padding: 5px 0;
  z-index: 888;
  border-top: 10px solid $japanese-laurel-light;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  @include animate(border-color background box-shadow);

  .dark-mode & {
    // border-color: $elephant;
    background: $base-background-color-dark;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: block;
  flex-shrink: 0;
  font-family: $secondary-font-sans-serif;
  font-size: 30px;
  color: $japanese-laurel-light !important;
  font-weight: 400;
  margin-right: 30px;

  @include media('screen', '>=tablet') {
    font-size: 40px;
  }

  &:hover,
  &.active--exact.active {
    color: $japanese-laurel-light !important;
  }
}

a {
  color: $black;
  text-decoration: none;
  &:hover {
    color: $link-hover-color !important;
  }

  &.active--exact.active {
    color: $base-link-color;

    .dark-mode & {
      color: $base-link-color-dark;
    }
  }

  .dark-mode & {
    color: $geyser;
  }
}

#nav {
  flex-grow: 1;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background: $base-background-color;
  transform: translateX(-100%);
  opacity: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  @include animate(background transform opacity);

  &.show-nav {
    transform: none;
    opacity: 1;
  }

  @include media('screen', '>=tablet') {
    position: static;
    padding: 0;
    background: transparent;
    transform: none;
    opacity: 1;
    box-shadow: none;
  }

  .dark-mode & {
    background: $base-background-color-dark;
    box-shadow: 0 3px 3px rgba(255, 255, 255, 0.3);
    @include media('screen', '>=tablet') {
      background: transparent;
      box-shadow: none;
    }
  }
}

.navigation-menu {
  @extend %listreset;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-grow: 1;
  text-transform: capitalize;
  margin: 0 -15px;
  text-align: center;

  @include media('screen', '>=tablet') {
    flex-direction: row;
  }

  li {
    margin: 0 15px;

    + li {
      margin-top: 5px;
      @include media('screen', '>=tablet') {
        margin-top: 0;
      }
    }
  }

  a {
    display: block;
  }
}

.nav-opener {
  display: block;
  border: none;
  outline: none !important;
  padding: 0;

  width: 25px;
  height: 20px;
  position: relative;
  z-index: 0;

  @include media('screen', '>=tablet') {
    display: none;
  }

  &:before,
  &:after,
  span {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    height: 2px;
    background: $base-text-color;
    @include animate(transform opacity top bottom);

    .dark-mode & {
      background: $base-text-color-dark;
    }
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &.nav-active {
    span {
      opacity: 0;
    }

    &:before {
      top: 50%;
      transform: rotate(45deg) translateY(-50%);
    }

    &:after {
      bottom: 50%;
      transform: rotate(135deg) translateY(-50%);
    }
  }
}
</style>
