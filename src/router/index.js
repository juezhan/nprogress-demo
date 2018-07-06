import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'
import PageC from '@/components/PageC'
import PageD from '@/components/PageD'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PageA',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/PageB',
      name: 'PageB',
      component: PageB
    },
    {
      path: '/PageC',
      name: 'PageC',
      component: PageC
    },
    {
      path: '/PageD',
      name: 'PageD',
      component: PageD
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
