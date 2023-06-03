import { createApp } from 'vue';
import { Vue3Mq } from 'vue3-mq';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router)
  .use(Vue3Mq, {
    breakpoints: {
      sm: 0,
      lg: 800,
    },
  })
  .mount('#app');
