import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/LandingPage/about'
import edit from '@/components/LandingPage/edit'
import fileManger from '@/components/LandingPage/fileManger'
import introduce from '@/components/LandingPage/introduce'
import thanks from '@/components/LandingPage/thanks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
      {
        path:'/about',
          name:'about',
          component:about
      },
      {
          path:'/thanks',
          name:'thanks',
          component:thanks
      },
      {
          path:'/introduce',
          name:'introduce',
          component:introduce
      },
      {
          path:'/edit',
          name:'edit',
          component:edit
      },
      {
          path:'/fileManger',
          name:'fileManger',
          component:fileManger
      }
  ]
})
