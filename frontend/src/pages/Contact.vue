<template>
  <Layout>
    <section class="contact">
      <div class="container">
        <h1>Let's Connect!</h1>
        <form name="contact" method="post" v-on:submit.prevent="handleSubmit" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <div class="sender-info">
            <div class="form-grp">
              <label for="contact__name">Your name:</label>
              <input type="text" id="contact__name" name="name" v-model="formData.name" required />
            </div>
            <div class="form-grp">
              <label for="contact__email">Your email:</label>
              <input type="email" id="contact__email" name="email" v-model="formData.email" required />
            </div>
          </div>
          <div class="form-grp">
            <label for="contact__message">Message</label>
            <textarea name="message" id="contact__message" v-model="formData.message" required></textarea>
          </div>
          <div class="form-grp">
            <div data-netlify-recaptcha="true"></div>
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
  data: () => ({
    formData: {},
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => {
          alert('Message sent successfully');
          this.formData.name = '';
          this.formData.email = '';
          this.formData.message = '';
        })
        .catch(error => alert(error));
    },
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
