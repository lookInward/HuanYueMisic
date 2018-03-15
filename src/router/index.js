import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend';
import Singer from '../components/singer/singer';
import SingerDetail from '../components/singer/singerdetail';
import Game from '../components/game/game';
import Smile from '../components/smile/smile';
import Desc from '../components/desc/desc';
import Rank from '../components/rank/rank';
import Search from '../components/search/search';
import Favor from '../components/favor/favor';
import Weather from '../components/weather/weather';
import ListDesc from '../components/listdesc/listdesc';
import RankDesc from '../components/rankdesc/rankdesc';

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
      },{
        path: '/recommend/:id',
        name:'ListDesc',
        component:ListDesc
      },
      {
        path: '/singer',
        name:'Singer',
        component:Singer
      },{
        path:'/singerdetail/:id',
        name:'SingerDetail',
        component:SingerDetail
      },
      {
        path:'/game',
        name:'Game',
        component:Game
      },{
        path:'/smile',
        name:'Smile',
        component:Smile
      },{
        path:'/rank',
        name:'Rank',
        component:Rank
      },
      {
        path:'/rank/:id',
        name:'RankDesc',
        component:RankDesc
      },
      {
        path:'/search',
        name:'Search',
        component:Search
      },
      {
        path:'/favor',
        name:'Favor',
        component:Favor
      },
      {
        path:'/weather',
        name:'Weather',
        component:Weather
      }
  ]
})
