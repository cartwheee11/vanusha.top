import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'dark' as 'light' | 'dark',
  },
  mutations: {
    switchTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
