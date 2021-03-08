import Vue from 'vue'
import App from './App.vue'

// Styles: SCSS
import './assets/scss/main.scss'

// Globally Registered Components
import './utils/globalComponents'

// VeeValidate
import './veeValidate'

// Vue Router
import router from './router'

// Vuex store
import store from './store'

// i18n Internationalization
import { i18n } from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
