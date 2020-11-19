import Vue from 'vue';
import Main from './components/main.vue';
import css from './index.css';

new Vue({
  render: (createEl) => createEl(Main)
}).$mount('#app');