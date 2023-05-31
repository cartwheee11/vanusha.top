<template class="app-wrapper">
  <div class="container">
    <nav>
      <img class="burger" width="25" height="23" :src="
        theme === 'dark' ? require('./assets/images/white-burger.png') :
        require('./assets/images/black-burger.png')
      " alt="">

      <button class="switch-theme-button"
        :style="
          `background: ${$store.state.theme === 'dark' ? 'white;' : 'black;'}`
        "
        @click="$store.commit('switchTheme')"
      >
        <img
          style="margin-top: 3px;"
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

console.log();
export default defineComponent({
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

  mounted() {
    this.$store.state.theme = 'dark';
  },
});
</script>

<style lang="scss">

.burger {
  cursor: pointer;
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

@font-face {
  font-family: 'beb';
  src: url(./assets/fonts/beb.ttf);
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
}

h2 {
  font-family: beb;
  font-weight: 100;
  font-size: 35px;
}

p {
  margin-top: 20px;
}

.clear {
  clear: both
}

nav {
  animation: fade-up 1.2s;
  padding-top: 15px;
  vertical-align: middle;
  display: flex;
  align-items: center;

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
