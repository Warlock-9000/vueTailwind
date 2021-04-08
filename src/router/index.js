import {createRouter, createWebHashHistory} from 'vue-router'
import guest from '@/router/middleware/guest'
import auth from '@/router/middleware/auth'
import store from '@/store'
import middlewarePipeline from '@/router/middlewarePipeline'

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
const RestorePassword = () => import(/* webpackChunkName: "RestorePassword" */ '@/views/RestorePassword.vue')
const MyIp = () => import(/* webpackChunkName: "MyIp" */ '@/views/MyIp.vue')
const InfinityScroll = () => import(/* webpackChunkName: "infinityScroll" */ '@/views/InfinityScroll.vue')

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
        component: About
    },
    {
        name: "Login",
        path: "/login",
        component: Login,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        name: "RestorePassword",
        path: "/restorePass",
        component: RestorePassword
    },
    {
        name: 'myIp',
        path: '/my-ip',
        component: MyIp
    },
    {
        name: 'infinityScroll',
        path: '/infinityScroll',
        component: InfinityScroll
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
