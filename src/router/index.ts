import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/layout/index.vue')
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/Login.vue')
    // },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  const token = localStorage.getItem('token')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/main') {
    return "/analysis" //firstMenu?.url
  }
})

export default router
