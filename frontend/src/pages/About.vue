<template>
  <Layout>
    <section class="about">
      <div class="container">
        <div class="img-and-desc">
          <div class="img">
            <g-image src="../assets/img02.jpg"></g-image>
          </div>
          <div class="desc">
            <h1>Binaya Baral</h1>
            <h5>Web Developer</h5>
            <p>Hello! I am a web developer specializing in creating everything you need to create and maintain your presence in current digital world.</p>
            <p>Working in this field for over two years now, I have gained meaningful experience in diverse development strategies, tools and techniques that would suit each use case while also helping businesses and individuals create their strong presence in the web.</p>
          </div>
        </div>
        <div class="experience-education-skills">
          <div class="experience-and-education">
            <div class="experience">
              <h3>Experiences:</h3>
              <ul class="experience-list">
                <li v-for="experience in experiences" :key="experience.id">
                  <h5 class="name">{{ experience.companyName }}</h5>
                  <span class="more-info">{{ experience.position }}</span>
                  <span class="time-period">{{ experience.timePeriod }}</span>
                </li>
              </ul>
            </div>
            <div class="education">
              <h3>Education:</h3>
              <ul class="education-list">
                <li v-for="item in education" :key="item.id">
                  <h5 class="name">{{ item.name }}</h5>
                  <span class="more-info">{{ item.concentration }}</span>
                  <span class="time-period">{{ item.year }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="skills-and-abilities">
            <div class="skills-and-abilities__content">
              <h3>Skills and Abilities</h3>
              <ul class="skills-list">
                <li>Familiar to front-end development using Reactjs, Redux and Vuejs.</li>
                <li>Familiar to Nodejs and Express.</li>
                <li>Pixel-perfect design-to-development using HTML5, CSS3, jQuery and/or ES6 vanilla js.</li>
                <li>Game Development using HTML5 Canvas and Javascript.</li>
                <li>Familiar with C# and .NET framework.</li>
                <li>Acquainted with python programming Language.</li>
                <li>Proficient in C and C++ programming languages.</li>
                <li>Well-known to stack overflow and GitHub platforms.</li>
                <li>Own basic Database Management skills.</li>
                <li>Certified in entry-level CEH (Certified Ethical Hacking).</li>
                <li>Fluent in English and Nepali Language.</li>
                <li>Good with Ms. Word, PowerPoint, Access and Excel.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="work-together">
      <div class="container">
        <h1>Let's Connect:</h1>
        <p>If you are interested, you can contact me for futher information.</p>
        <g-link to="/contact" class="btn">Contact</g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me',
  },
  data: () => ({
    experiences: [{ id: 1, companyName: 'Leapfrog Technology, Inc.', position: 'Associate Software Engineer', timePeriod: 'June 2021 - Present' }, { id: 2, companyName: 'Rapid Web Solutions', position: 'Front End Developer', timePeriod: 'September 2019 - June 2021' }],
    education: [{ id: 3, name: 'Kantipur Engineering College, Dhapakhel, Lalitpur', year: '2021', concentration: 'Bachelor of Engineering: Computer Engineering' }, { id: 2, name: "St. Xavier's College, Maitighar, Kathmandu", year: '2016', concentration: '10 + 2. Science Faculty' }, { id: 1, name: 'Bright Future Higher Secondary School, Satdobato, Lalitpur', year: '2014', concentration: 'SLC' }],
  }),
};
</script>

<style lang="scss" scoped>
h3,
.h3 {
  text-decoration: underline;
}

.img-and-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @include media('screen', '>=tablet') {
    align-items: stretch;
    flex-direction: row;
  }
}

.img {
  width: 200px;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: 20px;
  @include animate(box-shadow);

  @include media('screen', '>=tablet') {
    margin-right: 20px;
    margin-bottom: 0;
  }

  @include media('screen', '>=desktop') {
    width: 300px;
  }

  img {
    border-radius: 10px;
  }
}

.desc {
  background: $alabaster;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  padding: 15px 25px;
  border-radius: 10px;
  text-align: justify;
  @include animate(background box-shadow);

  @include media('screen', '>=desktop') {
    padding: 15px 50px;
  }

  .dark-mode & {
    background: $elephant;
    box-shadow: 0 0 5px rgba(0, 144, 0, 1);
  }

  h1,
  .h1 {
    margin-bottom: 5px;
  }
}

.experience-education-skills {
  display: flex;
  flex-direction: column;

  @include media('screen', '>=desktop') {
    flex-direction: row;
    justify-content: space-between;
  }
}

.experience-and-education {
  display: flex;
  flex-direction: column;
  @include media('screen', '>=desktop') {
    width: calc(50% - 10px);
  }
}

.experience,
.education {
  background: $alabaster;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  border-radius: 10px;
  @include animate(background box-shadow);

  .dark-mode & {
    background: $elephant;
    box-shadow: 0 0 5px rgba(0, 144, 0, 1);
  }

  .name,
  .time-period,
  .more-info {
    display: block;
  }

  .name {
    font-weight: 600;
    margin-bottom: 0;
  }

  .time-period {
    font-size: 14px;
  }
}

.experience {
  margin-bottom: 20px;
}

ul {
  @extend %listreset;

  li {
    padding-left: 20px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 9px;
      left: 2px;
      width: 8px;
      height: 8px;
      background: $japanese-laurel-light;
      border-radius: 100%;
    }
    + li {
      margin-top: 15px;
    }
  }
}

.skills-and-abilities {
  padding-top: 20px;
  @include media('screen', '>=desktop') {
    padding: 0;
    width: calc(50% - 10px);
  }

  &__content {
    background: $alabaster;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
    border-radius: 10px;
    @include animate(background box-shadow);

    @include media('screen', '>=desktop') {
      min-height: 100%;
    }

    .dark-mode & {
      background: $elephant;
      box-shadow: 0 0 5px rgba(0, 144, 0, 1);
    }
  }
}

.work-together {
  padding: 80px 0;
  text-align: center;

  h1 {
    text-align: center;
  }
}
</style>
