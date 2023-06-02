<template>
  <snake-item class="snake" />
  <div class="home">
    <div class="container avatar-section section">
      <img class="left-wing wing"
        height="180"
        src="../assets/images/wreath.png" alt=""
      >

      <img class="avatar" height="180" src="../assets/images/avatar.png" alt="">

      <img class="right-wing wing"
        height="180"
        src="../assets/images/wreath.png" alt=""
      >

      <h1>Ваня Дапстеп</h1>
      <!-- <p class="subtitle">Замути с ним, он хороший &lt;3</p> -->
    </div>

    <div class="section container socials-section">
      <h2>добавляйся, чел</h2>

      <div class="socials-grid">

        <social-link-item class="instagram" href="https://www.instagram.com/ivan.fusion/" subtitle="instagram">
          <img srcset="../assets/images/inst.png 3x" alt="" >
        </social-link-item>

        <social-link-item :adaptHeight="isLessThan600 ? true : false"  href="https://pinterest.com/vanuwa69/" class="pinterest"  subtitle="pinterest" bgColor="#CB1D2E">
          <img srcset="../assets/images/pinterest.png 3x" alt="" >
        </social-link-item>

        <social-link-item :adaptHeight="false" class="discord" title="vane4karave#0238"
          subtitle="discord" bgColor="#593BE4">
        </social-link-item>

        <social-link-item class="vk" href="https://vk.com/vane4karave" subtitle="vkontakte" bgColor="#0079FF">
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

        <social-link-item href="https://www.youtube.com/channel/UCy5njV7OkIGXYzK4qWGTBtQ" subtitle="youtube" bgColor="#FFBEA8">
          <img srcset="../assets/images/yt.png 3x" alt="">
        </social-link-item>
      </div>
    </div>

    <div class="container section projects-section">
      <h2>пэт-проекты</h2>
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
  name: 'HomeView',
  components: {
    SocialLinkItem,
    ProjectsItem,
  },

  computed: {
    isLessThan600() {
      return window.innerWidth <= 800;
    },
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
      transform: rotate(20deg) scaleX(-1) scale(0.7) translateY(20px);
      opacity: 0;
    }

    50% {
      transform: rotate(20deg) scaleX(-1) scale(0.7) translateY(20px);
      opacity: 0;
    }

    to {
      transform: rotate(10deg) scaleX(-1) scale(0.7) translateY(-20px);
      opacity: 1;
    }
  }

  @keyframes left-wing{
    from {
      transform: rotate(-20deg) scale(0.7) translateY(20px);
      opacity: 0;
    }

    50% {
      transform: rotate(-20deg) scale(0.7) translateY(20px);
      opacity: 0;
    }

    to {
      transform: rotate(-10deg) scale(0.7) translateY(-20px);
      opacity: 1;
    }
  }

  .wing {
    filter: invert(100%);
    mix-blend-mode: exclusion;
    transform-origin: bottom;

    @media screen and (max-width: 800px) {
      height: 80px;
    }
  }

  .left-wing {
    animation: left-wing 2s;
    animation-fill-mode: forwards;
  }

  .right-wing {
    animation: right-wing 2s;
    animation-fill-mode: forwards;
  }

  .avatar-section {
    animation: fade-up 2s;
    text-align: center;
  }

  .avatar {
    border: solid 3px;
    border-spacing: 2px;
    background-color: black;
    border-radius: 100%;

    @media screen and (max-width: 800px) {
      height: 100px;
    }
  }

  .section {
    margin-top: 100px;
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
</style>
