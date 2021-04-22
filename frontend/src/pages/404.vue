<template>
	<Layout>
		<section class="intro">
			<div class="container">
				<div class="not-found">
					<span class="not-found__status">404</span>
					<span class="not-found__msg">Page Not Found</span>
					<span class="not-found__txt">Oops!<br />Seems like something went wrong...</span>
					<a href="/">Return to homepage</a>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'About Me',
	},
};
</script>

<style lang="scss" scoped>
.not-found {
	text-align: center;

	span {
		display: block;
	}

	&__status {
		font-size: 15vw;
		line-height: 1;
	}

	&__msg {
		margin-bottom: 40px;
	}

	&__txt {
		margin-bottom: 40px;
	}
}
</style>
