import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../templates/menu/Menu.vue'
import Page from '../templates/page/Page.vue'
import MetaManager from './MetaManager.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Page
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    meta: {
      title: 'Menu'
    }
  },
  // Redirect mismatching old website's routes to the updated ones
  {
    path: '/privacyreglement',
    redirect: '/privacy-policy'
  },
  {
    path: '/speciale_onderzoeken',
    redirect: '/speciale-onderzoeken'
  },
  {
    path: '/labonderzoek',
    redirect: '/lab'
  },
  {
    path: '/interessante_links',
    redirect: '/links'
  },

  {
    path: '/route',
    redirect: '/contact'
  },

  {
    path: '/:slug',
    name: 'page',
    component: Page,
  },
  {
    path: '*',
    name: 'not-found',
    meta: {
      title: 'Niet gevonden'
    },
    // route level code-splitting
    // this generates a separate chunk ([name].[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "not-found" */ '../templates/not-found/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    const timeout = 500;
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash
          })
        }, timeout)
      })
    } else if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, timeout)
      })
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            x: 0,
            y: 0
          })
        }, timeout)
      })
    }
  }
});

// Save the last route name in localStorage
router.beforeEach((to, from, next) => {
  Vue.prototype.PREV_ROUTE = from.fullPath;
  next();
});

new MetaManager(router, 'Alberick Medisch Centrum');

export default router
