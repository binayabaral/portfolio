<template>
  <Layout>
    <section class="about">
      <div class="container">
        <div class="img-and-desc">
          <div class="img">
            <g-image src="../assets/img02.jpg" alt="Binaya Baral"></g-image>
          </div>
          <div class="desc">
            <h1>Binaya Baral</h1>
            <h5>Software Engineer</h5>
            <p>
              Hello! I am a Software Engineer specializing in creating everything you need to create and maintain your
              presence in current digital world.
            </p>
            <p>
              Working in this field for over three years now, I have gained meaningful experience in diverse development
              strategies, tools and techniques that would suit each use case while also helping businesses and
              individuals create their strong presence in the web.
            </p>
          </div>
        </div>
        <div class="experience-and-education">
          <div class="experience">
            <h3>Experiences</h3>
            <ul class="experience-list">
              <li v-for="experience in experiences" :key="experience.id">
                <h5 class="name">{{ experience.companyName }}</h5>
                <span class="more-info">{{ experience.position }}</span>
                <span class="time-period">{{ experience.timePeriod }}</span>
              </li>
            </ul>
          </div>
          <div class="education">
            <h3>Education</h3>
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
            <h3>What I do</h3>
            <ul class="skills-list">
              <li>
                <div class="icon"><g-image src="../assets/icons/typescript.svg" alt="TypeScript"></g-image></div>
                <span class="skill-name">TypeScript</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/javascript.svg" alt="JavaScript"></g-image></div>
                <span class="skill-name">JavaScript</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/react.svg" alt="React js"></g-image></div>
                <span class="skill-name">React</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/vue.svg" alt="Vue js"></g-image></div>
                <span class="skill-name">Vue</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/redux.svg" alt="Redux js"></g-image></div>
                <span class="skill-name">Redux</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/nextjs.svg" alt="Next js"></g-image></div>
                <span class="skill-name">Next</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/nodejs.svg" alt="Node js"></g-image></div>
                <span class="skill-name">Node</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/express.svg" alt="Express js"></g-image></div>
                <span class="skill-name">Express</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/html5.svg" alt="HTML5"></g-image></div>
                <span class="skill-name">HTML5</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/css3.svg" alt="CSS3"></g-image></div>
                <span class="skill-name">CSS3</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/jquery.svg" alt="jQuery"></g-image></div>
                <span class="skill-name">jQuery</span>
              </li>

              <li>
                <div class="icon"><g-image src="../assets/icons/docker.svg" alt="Docker"></g-image></div>
                <span class="skill-name">Docker</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/git.svg" alt="Git and GitHub"></g-image></div>
                <span class="skill-name">Git</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/graphql.svg" alt="GraphQL"></g-image></div>
                <span class="skill-name">GraphQL</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/mssql.svg" alt="MsSQL"></g-image></div>
                <span class="skill-name">MsSQL</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/postgresql.svg" alt="PostgreSQL"></g-image></div>
                <span class="skill-name">PostgreSQL</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/python.svg" alt="Python"></g-image></div>
                <span class="skill-name">Python</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/figma.svg" alt="Figma"></g-image></div>
                <span class="skill-name">Figma</span>
              </li>
              <li>
                <div class="icon"><g-image src="../assets/icons/photoshop.svg" alt="Photoshop"></g-image></div>
                <span class="skill-name">Photoshop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="work-together">
      <div class="container">
        <h1>Let's Connect:</h1>
        <p>If you are interested, you can contact me for futher information.</p>
        <g-link to="/contact/" class="btn">Contact</g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  },
  data: () => ({
    experiences: [
      {
        id: 1,
        companyName: 'Leapfrog Technology, Inc.',
        position: 'Software Engineer',
        timePeriod: 'June 2021 - Present'
      },
      {
        id: 2,
        companyName: 'Rapid Web Solutions',
        position: 'Front End Developer',
        timePeriod: 'September 2019 - June 2021'
      }
    ],
    education: [
      {
        id: 3,
        name: 'Kantipur Engineering College, Dhapakhel, Lalitpur',
        year: '2021',
        concentration: 'Bachelor of Engineering: Computer Engineering'
      },
      {
        id: 2,
        name: "St. Xavier's College, Maitighar, Kathmandu",
        year: '2016',
        concentration: '10 + 2. Science Faculty'
      },
      { id: 1, name: 'Bright Future Higher Secondary School, Satdobato, Lalitpur', year: '2014', concentration: 'SLC' }
    ]
  })
};
</script>

<style lang="scss" scoped>
h3,
.h3 {
  display: block;
  text-align: center;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
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

.experience-and-education {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @include media('screen', '>=desktop') {
    flex-direction: row;
    justify-content: space-between;
  }
}

.experience,
.education {
  background: $alabaster;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  border-radius: 10px;
  width: 100%;
  @include animate(background box-shadow);

  @include media('screen', '>=desktop') {
    width: calc(50% - 10px);
  }

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

  @include media('screen', '>=desktop') {
    margin-bottom: 0;
  }
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

  &.skills-list {
    display: flex;
    flex-wrap: wrap;
    align-self: space-between;
    justify-content: space-around;

    li {
      padding: 20px;
      width: 145px;

      img {
        display: block;
        width: 50%;
        margin: 0 auto;
      }

      .icon {
        margin-bottom: 15px;
      }

      .skill-name {
        display: block;
        text-align: center;
      }

      &:before {
        content: none;
      }

      + li {
        margin: 0;
      }
    }
  }
}

.skills-and-abilities {
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
