<template>
  <div>
    <div class="wrapper">
      <a href="https://cats.vanusha.top" class="item">
        <span class="title">Коллекция котиков</span><span class="link">https://cats.vanusha.top</span>
      </a>

      <!-- <a href="https://cats.vanusha.top" class="item">
        <span class="title">AAA проект "Feed Alena"</span><span class="link">https://cats.vanusha.top</span>
      </a> -->

      <a href="https://fastcode.vanusha.top" class="item">
        <span class="title">JS Fastcode</span><span class="link">https://fastcode.vanusha.top</span>
      </a>

      <a href="https://cq.vanusha.top" class="item">
        <span class="title">Country Quiz</span><span class="link">https://cq.vanusha.top</span>
      </a>

      <a href="https://todo.vanusha.top" class="item">
        <span class="title">Todo Manager</span><span class="link">https://todo.vanusha.top</span>
      </a>
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
}

.link {
  opacity: 0.3;
}

.title {
  width: 50%;
  display: inline-block;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 10px;
  }
}
</style>
