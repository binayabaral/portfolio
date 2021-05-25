<template>
	<div class="layout">
		<Header />
		<main>
			<slot />
		</main>
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
	padding: 140px 0 40px;
	@include media('screen', '>=tablet') {
		padding: 160px 0 40px;
	}
}
</style>
