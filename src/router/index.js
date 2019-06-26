import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Cookie from 'js-cookie'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: Home,
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: About,
          meta: { title: '系统首页' }
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Cookie.getJSON('accountData') && Cookie.getJSON('accountData').isLogin) { // 判断是否有token
    next()// 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
  } else if (to.path === '/login') {
    next()
  } else {
    next('/login') // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
  }
})

export default router
