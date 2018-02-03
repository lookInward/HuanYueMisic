import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend';
import Singer from '../components/singer/singer';


Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name:'Recommend',
        component:Recommend
      },
      {
        path: '/recommend',
        name:'Recommend',
        component:Recommend
      },
      {
        path: '/singer',
        name:'Singer',
        component:Singer
      }
  ]
})
