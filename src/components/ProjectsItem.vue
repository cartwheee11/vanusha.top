<template>
  <div>
    <div class="wrapper">
      <!-- <a href="#" class="item">
        <span class="title">
          Перспективный игровой проект "Feed Alena"
          <span class="soon">скоро!</span>
        </span>
        <span class="link">В разработке</span>

      </a> -->

      <a href="https://cats.vanusha.top" class="item">
        <span class="title">Котикс</span><span class="link">https://cats.vanusha.top</span>
      </a>

     <!--  <a href="https://fastcode.vanusha.top" class="item">
        <span class="title">JS Fastcode</span><span class="link">https://fastcode.vanusha.top</span>
      </a> -->

      <a href="https://emoji.vanusha.top" class="item">
        <span class="title">Emoji Madness</span><span class="link">https://emoji.vanusha.top</span>
      </a>

      <!-- <a href="https://cq.vanusha.top" class="item">
        <span class="title">Country Quiz</span><span class="link">https://cq.vanusha.top</span>
      </a> -->

      <!-- <a href="https://todo.vanusha.top" class="item">
        <span class="title">Todo Manager</span><span class="link">https://todo.vanusha.top</span>
      </a> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import type { PropType } from 'vue';

export default defineComponent({
  name: 'ProjectsItem',
});
</script>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.wrapper {
  border-radius: 30px;
  overflow: hidden;
  box-sizing: content-box;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    margin-top: 15px;
    border-radius: 20px;
  }
}

a {
  text-decoration: none;
}

.item {
  background-color: $c-block-alpha;
  padding: 30px;
  display: block;
  width: 100%;
  border-bottom: 4px solid rgba(134,134,134,0.10);

  &:hover {
    background-color: rgba(134,134,134,0.20);
  }

  &:last-child {
    border: none;
  }

  span {
    vertical-align: middle;
    line-height: 1.5em;
  }

  @media screen and (max-width: 800px) {
    padding: 20px;
  }
}

.soon {
  background-color: rgba(134,134,134,0.20);
  padding: 1px 7px;
  border-radius: 100px;
  color: #777;
  font-weight: 500;
  line-height: 2em;
}

.link {
  opacity: 0.3;
}

.title {
  width: 50%;
  display: inline-block;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 5px;
  }
}
</style>
