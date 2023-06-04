<template>
  <div>
    <a class="wrapper" :href="href">
      <div ref="imageWrapper"
        class="image-wrapper" :style="bgColor ? 'background-color: ' + bgColor : ''">
        <p class="title" :style="'color:' + titleColor">{{ title }}</p>

        <div class="slot-container" @vnodeUpdated="onVnodeUpdated">
          <slot />
        </div>
      </div>

      <p class="subtitle">{{ subtitle }}</p>
    </a>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'SocialLinkItem',
  props: {
    title: {
      type: String as PropType<string>,
      required: false,
    },

    adaptHeight: {
      type: Boolean as PropType<boolean>,
      requried: false,
      default: true,
    },

    href: {
      type: String as PropType<string | undefined>,
      required: false,
    },

    subtitle: {
      type: String as PropType<string>,
      required: false,
      default: 'default subtitle',
    },

    bgColor: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },

    titleColor: {
      type: String as PropType<string>,
      required: false,
      default: 'white',
    },
  },

  methods: {
    vnodeUpdated() {
      this.onResize();
    },

    onResize() {
      // console.log('сработало');
      if (this.adaptHeight) {
        const { width } = window.getComputedStyle((this.$refs as any).imageWrapper);
        console.log(width);
        (this.$refs as any).imageWrapper.style.height = width;
      } else {
        (this.$refs as any).imageWrapper.style.height = '238px';
      }
    },
  },

  mounted() {
    this.onResize();
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener('resize', this.onResize.bind(this));
    });

    console.log(this.subtitle);
  },

  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
});
</script>

<style scoped lang="scss">
  @import '../assets/scss/variables.scss';

  .wrapper {
    text-align: center;
  }

  .image-wrapper {
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    border-radius: 60px;
    height: 238px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media screen and (max-width: 600px) {
      // height: 140px;
      border-radius: 40px;
    }
  }

  body .image-wrapper {
    background-color: $c-block-light;
  }

  body.light .image-wrapper {
    background-color: $c-block-alpha;
  }

  .title {
    font-family: beb;
    font-size: 60px;
    vertical-align: middle;
    display: inline-block;

    @media screen and (max-width: 600px) {
      font-size: 25px;
      word-wrap: wrap;
      word-break: break-all;
    }
  }

  // .wrapper * {
  //   font-family: beb;
  // }

  .subtitle {
    margin-top: 4px;
  }

  a {
    text-decoration: none;
  }
</style>
