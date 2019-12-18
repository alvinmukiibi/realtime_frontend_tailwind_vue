import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import store from './store/'

Vue.config.productionTip = false

Vue.component('comment', require('./components/Comment.vue'))
Vue.component('comments', require('./components/Comments.vue'))
Vue.component('new-comment', require('./components/NewComment.vue'))

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')