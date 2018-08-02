import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import mainLayout from './mainLayout.vue'
import loginLayout from './loginLayout.vue'

const routes = [
  { path: '/', component: () => import('./mainLayout.vue') },
  { path: '/login', component: loginLayout }
]

// prep Vue
const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(VueRouter)
// init Vue
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
