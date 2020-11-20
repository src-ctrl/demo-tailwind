import Vue from 'vue'
import App from './App.vue'
import css from './index.css';

new Vue({
  render: (createEl) => createEl(App)
}).$mount('#app');