<template>
	<Layout>
		<section class="contact">
			<div class="container">
				<h1>Let's Connect!</h1>
				<form action="#">
					<div class="form-grp">
						<label for="contact__name">Name</label>
						<input type="text" id="contact__name" name="Name" required />
					</div>
					<div class="form-grp">
						<label for="contact__email">Email</label>
						<input type="email" id="contact__email" name="Email" required />
					</div>
					<div class="form-grp">
						<label for="contact__phone">Phone</label>
						<input type="text" id="contact__phone" name="Phone" required />
					</div>
					<div class="form-grp">
						<label for="contact__subject">Subject</label>
						<input type="text" id="contact__subject" name="Subject" required />
					</div>
					<div class="form-grp">
						<label for="contact__message">Message</label>
						<textarea id="contact__message" name="Message" required />
					</div>
					<button type="submit" class="btn">Submit</button>
				</form>
			</div>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Contact Me',
	},
};
</script>

<style lang="scss" scoped>
form {
	max-width: 700px;
	margin: 0 auto;
}

h1 {
	text-align: center;
}
</style>
