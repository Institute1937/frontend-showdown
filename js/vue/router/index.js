import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '../components/Hello'
import Goodbye from '../components/Goodbye'

Vue.use(Router)
Vue.use(VueResource)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/goodbye',
      name: 'Goodbye',
      component: Goodbye
    },
  ]
})
