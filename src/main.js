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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
