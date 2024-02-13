<template>
  <!-- <snake-item class="snake" /> -->
  <div class="home" v-if="avatarLoaded">
    <div class="container avatar-section section">
      <img class="crown" src="../assets/images/crown.png" alt="">
      <img class="left-wing wing"
        height="154"
        src="../assets/images/wreath.png" alt=""
      >

      <img ref="avatar" class="avatar" height="126" src="../assets/images/avatar.png" alt="">

      <img class="right-wing wing"
        height="154"
        src="../assets/images/wreath.png" alt=""
      >

      <!-- <h1>Ваня Дапстеп</h1> -->
      <!-- <p class="subtitle">Замути с ним, он хороший &lt;3</p> -->
    </div>

    <div class="section container socials-section">
      <h2>добавляйся, чел</h2>

      <div class="socials-grid">

        <social-link-item :adaptHeight="mq.current == 'sm' ? true : false" class="instagram" href="https://www.instagram.com/ivan.fusion/" subtitle="instagram">
          <img srcset="../assets/images/inst.png 3x" alt="" >
        </social-link-item>

        <social-link-item :adaptHeight="mq.current == 'sm' ? true : false"  href="https://pinterest.com/vanuwa69/" class="pinterest"  subtitle="pinterest" bgColor="#CB1D2E">
          <img srcset="../assets/images/pinterest.png 3x" alt="" >
        </social-link-item>

        <social-link-item :adaptHeight="false" class="discord" title="vane4karave#0238"
          subtitle="discord" bgColor="#593BE4">
        </social-link-item>

        <social-link-item class="vk" href="https://vk.com/uwu2k" subtitle="vkontakte" bgColor="#0079FF">
          <img srcset="../assets/images/vk.png 3x" alt="">
        </social-link-item>

        <social-link-item href="https://steamcommunity.com/id/kitttify/" subtitle="steam">
          <img srcset="../assets/images/steam.png 3x" alt="" >
        </social-link-item>

        <social-link-item href="https://www.tiktok.com/@ivan.fusion" subtitle="tiktok" bgColor="#7CFFE2">
          <img srcset="../assets/images/tt.png 3x" alt="" >
        </social-link-item>

        <social-link-item class="riot" :adaptHeight="false"
          title="vane4karave#0000"
          subtitle="riot id" bgColor="#E45D3B">
        </social-link-item>

        <social-link-item
          href="https://www.youtube.com/channel/UCy5njV7OkIGXYzK4qWGTBtQ"
          subtitle="youtube"
          :adaptHeight="mq.current == 'sm' ? true : false"
          bgColor="#FFBEA8"
        >
          <img srcset="../assets/images/yt.png 3x" alt="">
        </social-link-item>
      </div>
    </div>

    <div class="container section projects-section">
      <h2>другие ссылки</h2>
      <projects-item />
    </div>

    <footer class="section">
      <div class="container" style="padding-bottom: 60px">
        <p
          style="
            margin-top: 0;
            color: rgba(134,134,134,0.40);
            font-size: 20px;
            text-align: center;
          "
        >
          © «Ваня студио» 2023 — все прова защищини
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialLinkItem from '../components/SocialLinkItem.vue';
import ProjectsItem from '../components/ProjectsItem.vue';
// import SnakeItem from '../components/SnakeItem.vue';

export default defineComponent({
  inject: ['mq'],
  name: 'HomeView',
  components: {
    SocialLinkItem,
    ProjectsItem,
  },

  data() {
    return {
      avatarLoaded: false,
    };
  },

  mounted() {
    const avatar = new Image();
    console.log(avatar.onload);
    // eslint-disable-next-line global-require
    avatar.src = require('../assets/images/avatar.png');
    avatar.onload = () => {
      this.avatarLoaded = true;
    };
  },
});
</script>

<style scoped lang="scss">
  // .snake {
  //   position: absolute;
  //   top: 0;
  //   z-index: -10;
  //   left: 0;
  // }

  .d-none {
    display: none;
  }

  @keyframes fade-up{
    from {
      transform: translateY(20px);
      opacity: 0;
    }

    50% {
      transform: translateY(20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes right-wing{
    from {
      transform: rotate(20deg) scaleX(-1) scale(1) translateY(20px);
      opacity: 0;
    }

    50% {
      transform: rotate(20deg) scaleX(-1) scale(1) translateY(20px);
      opacity: 0;
    }

    to {
      transform: rotate(10deg) scaleX(-1) scale(1) translateY(-20px);
      opacity: 1;
    }
  }

  @keyframes left-wing{
    from {
      transform: rotate(-20deg) scale(1) translateY(20px);
      opacity: 0;
    }

    50% {
      transform: rotate(-20deg) scale(1) translateY(20px);
      opacity: 0;
    }

    to {
      transform: rotate(-10deg) scale(1) translateY(-20px);
      opacity: 1;
    }
  }

  .section {
    margin-top: 100px;
  }

  .wing {
    filter: invert(100%);
    mix-blend-mode: exclusion;
    transform-origin: bottom;

    @media screen and (max-width: 800px) {
      height: 105px;
    }
  }

  .left-wing {
    animation: left-wing 2s;
    animation-fill-mode: forwards;
    margin-right: -10px;
  }

  .right-wing {
    animation: right-wing 2s;
    animation-fill-mode: forwards;
    margin-left: -10px;
  }

  .avatar-section {
    animation: fade-up 2s;
    text-align: center;
    margin-top: 70px;
    // transform: scale(0.8);
    // @media screen and (max-width: 800px) {
    //   transform: scale(0.5);
    // }
  }

  .avatar {
    border: solid 3px;
    border-spacing: 2px;
    background-color: black;
    border-radius: 100%;
    vertical-align: top;
    margin-top: -20px;

    @media screen and (max-width: 800px) {
      height: 90px;

    }
  }

  .crown {
    // position: absolute;

    filter: invert(100%);
    mix-blend-mode: exclusion;
    transform-origin: bottom;
    display: block;
    margin: 0 auto;
    // margin-top: -30px;
    margin-bottom: 30px;
    height: 40px;
    animation: fade-up 3s;
    // margin-bottom: 10px;

    @media screen and (max-width: 800px) {
      height: 30px;
    }
  }

  .projects-section {
    @media screen and (max-width: 800px) {
      margin-top: 70px;
    }
  }

  h1 {
    margin-top: 36px;
  }

  .subtitle {
    font-family: beb;
    color: grey;
  }

  .socials-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;

    @media screen and (max-width: 800px) {
      font-size: 30px;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
      margin-top: 15px;
    }

    @media screen and (max-width: 600px) {
      gap: 10px;
    }
  }

  .socials-grid img{
    display: inline-block;
    margin-top: -10px;

    @media screen and (max-width: 800px) {
      width: 40%;
    }
  }

  .socials-section {
    animation: fade-up 3s;
  }

  .socials-grid > * {
    transition: transform 0.2s;
    cursor: pointer;
  }

  .socials-grid > *:hover {
    transform: translateY(-10px);
  }

  .instagram {
    @media screen and (max-width: 800px) {
      // grid-column: span 2;
    }
  }

  .riot {
    grid-column: span 2;

    @media screen and (max-width: 800px) {
      grid-column: span 2;
    }
  }

  .vk {
    @media screen and (max-width: 800px) {
      grid-column: span 2;
    }
  }

  .pinterest {
    grid-column: span 2;
    @media screen and (max-width: 800px) {
      grid-column: span 1;

      img {
        width: 70%;
      }
    }

  }

  .discord {
    grid-column: span 3;

    @media screen and (max-width: 800px) {
      grid-column: span 2;
    }
  }

  footer {
    margin-top: 60px !important;

    p {
      @media screen and (max-width: 800px) {
        font-size: 16px !important;
      }
    }
  }

</style>
