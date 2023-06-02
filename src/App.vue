<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template class="app-wrapper">
  <div class="container">
    <nav>
      <img class="burger" width="25" height="23" :src="
        theme === 'dark' ? require('./assets/images/white-burger.png') :
        require('./assets/images/black-burger.png')
      " alt="">

      <div ref="menuContainer" class="menu-container" @blur="menuShowed = false"
       @click="menuShowed = menuShowed ? false : true">
        <div class="menu" :class="{'menu-showed': menuShowed}">
          <a href="https://cats.vanusha.top">Коллекция котиков</a>
          <a href="https://fastcode.vanusha.top">JS Fastcode</a>
          <a href="https://cq.vanusha.top">Country Quiz</a>
          <a href="https://todo.vanusha.top">Todo Manager</a>
        </div>
      </div>

      <button class="switch-theme-button"
        :style="
          `
            padding: 0;
            background: ${$store.state.theme === 'dark' ? 'white;' : 'black;'}
          `
        "
        @click="$store.commit('switchTheme')"
      >
        <img
          style="margin-top: 3px"
          width="22"
          height="25"
          :src="
            theme === 'dark' ? require('./assets/images/black-moon.png') :
            require('./assets/images/white-moon.png')
          " alt=""
        >
      </button>
    </nav>
  </div>

  <router-view/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',

  data() {
    return {
      menuShowed: false,
    };
  },

  computed: {
    theme(): string {
      return this.$store.state.theme;
    },
  },

  watch: {
    theme(value: string) {
      document.body.className = value;
    },
  },

  methods: {
    onDocumentClick(e: MouseEvent) {
      if (this.menuShowed && e.target !== this.$refs.menuContainer) {
        this.menuShowed = false;
      }
    },
  },

  mounted() {
    this.$store.state.theme = 'dark';
    document.addEventListener('click', this.onDocumentClick);
  },

  unmounted() {
    document.removeEventListener('click', this.onDocumentClick);
  },
});
</script>

<style lang="scss">

@import './assets/scss/variables.scss';

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

@font-face {
  font-family: 'beb';
  src: url(./assets/fonts/beb.ttf);
}

body {
  padding: 0 30px;
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
}

@font-face {
  font-family: 'mont-sb';
  src: url(./assets/fonts/mont-sb.ttf);
}

* {
  transition: background-color 0.2s, color 0.2s;
  box-sizing: border-box;
  font-family: mont-sb;
  font-size: 18px;
  margin-bottom: 0;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
}

@mixin themeing($c-back, $c-text, $c-block){
  * {
    color: $c-text;
  }

  background-color: $c-back;
}

body {
  @include themeing(black, white, rgba(134,134,134,0.16))
}

html {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

body.light {
 @include themeing(white, black, rgba(134,134,134,0.16))
}

h1 {
  margin-bottom: inherit;
  font-family: beb;
  font-weight: 100;
  font-size: 50px;

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
}

h2 {
  font-family: beb;
  font-weight: 100;
  font-size: 35px;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
}

p {
  margin-top: 20px;
}

.clear {
  clear: both
}

nav {
  position: relative;
  animation: fade-up 1.2s;
  padding-top: 15px;
  vertical-align: middle;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding-top: 5px;
  }
}

@keyframes menu-show{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.menu-container {
  position: absolute;
  align-self: flex-start;
  padding-top: 50px;
  cursor: pointer;
  display: block;
  min-width: 50px;
  height: 50px;
  z-index: 100;
}

// .menu-container:hover > .menu {
//   display: block;
// }

.menu {
  max-width: 300px;
  transition: opacity 0.2s;
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
  z-index: 100;

  animation: menu-show 0.3s;

  display: none;

  a {
    text-decoration: none;
    display: block;
    color: black;
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
  }
}

.menu-showed {
  display: block;
}

.burger {
  cursor: pointer;
}

.burger:hover + .menu-container {
  display: block;
  opacity: 1;
}

body.light {
  .menu {
    background-color: $c-block-alpha;
  }
}

.switch-theme-button {
  border: none;
  border-radius: 1000px;
  height: 40px;
  width: 40px;

  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
}
</style>
