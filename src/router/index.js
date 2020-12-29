import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import guest from './middleware/guest'
import auth from './middleware/auth'
import store from '../store'
import middlewarePipeline from './middlewarePipeline'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            middleware: [
                auth
            ]
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/Login"),
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        name: "RestorePassword",
        path: "/restorePass",
        component: () => import("@/views/RestorePassword")
    },
    {
        name: 'myIp',
        path: '/my-ip',
        component: ()=> import("@/views/MyIp")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})


export default router
