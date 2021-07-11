<template>
  <footer class="footer">
    <div class="container">
      <span class="copyright">© {{ new Date().getFullYear() }} Binaya Baral - All rights reserved</span>
      <ul class="social-icons">
        <li>
          <a href="https://www.facebook.com/binaya.baral.98" target="_blank" rel="noreferrer" aria-label="Facebook">
            <font-awesome :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/binayabaral" target="_blank" rel="noreferrer" aria-label="Twitter">
            <font-awesome :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/binayabaral_" target="_blank" rel="noreferrer" aria-label="Instagram">
            <font-awesome :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/binayabaral" target="_blank" rel="noreferrer" aria-label="Github">
            <font-awesome :icon="['fab', 'github']" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 25px 0 15px;
  background: $japanese-laurel-light;
  border-top: 2px solid $japanese-laurel-light;
  color: $white;
  @include animate(background color border-color);
  @include media('screen', '>=desktop') {
    padding: 25px 0;
  }

  .dark-mode & {
    border-color: $geyser;
    background: $elephant;
    color: $geyser;
  }
}

a {
  color: $white;

  &:hover {
    color: darken($white, 15%);
    text-decoration: none;
  }

  .dark-mode & {
    color: $geyser;
    &:hover {
      color: $white;
    }
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @include media('screen', '>=desktop') {
    flex-direction: row;
  }
}

.social-icons {
  @extend %listreset;
  display: flex;
  align-items: center;
  margin: 0 -15px;
  font-size: 25px;
  line-height: 1;

  li {
    margin: 15px;
  }
}
</style>
