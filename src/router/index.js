import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        meta: {layout: 'clear'},
        component: () => import('@/views/Root.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {layout: 'empty'},
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/новости',
        name: 'новости',
        meta: {layout: 'clear'},
        component: () => import('@/views/News.vue')
    },
    {
        path: '/контакты',
        name: 'контакты',
        meta: {layout: 'clear'},
        component: () => import('@/views/Contacts.vue')
    },
    {
        path: '/суки',
        name: 'суки',
        meta: {layout: 'clear'},
        component: () => import('@/views/Dams.vue')
    },
    {
        path: '/ухаживаем-дома',
        name: 'ухаживаем-дома',
        meta: {layout: 'clear'},
        component: () => import('@/views/Grooming.vue')
    },
    {
        path: '/кобели',
        name: 'кобели',
        meta: {layout: 'clear'},
        component: () => import('@/views/Males.vue')
    },
    {
        path: '/media',
        name: 'media',
        meta: {layout: 'clear'},
        component: () => import('@/views/Media.vue')
    },
    {
        path: '/щенки',
        name: 'щенки',
        meta: {layout: 'clear'},
        component: () => import('@/views/Puppies.vue')
    },
    {
        path: '/питание',
        name: 'питание',
        meta: {layout: 'clear'},
        component: () => import('@/views/Food.vue')
    },
    {
        path: '/готовим-сами',
        name: 'готовим-сами',
        meta: {layout: 'clear'},
        component: () => import('@/views/CookingOurselves.vue')
    },
    {
        path: '/услуги',
        name: 'услуги',
        meta: {layout: 'clear'},
        component: () => import('@/views/Services.vue')
    }, {
        path: '/архив',
        name: 'архив',
        meta: {layout: 'clear'},
        component: () => import('@/views/Array.vue')
    },
    {
        path: '/здоровье',
        name: 'здоровье',
        meta: {layout: 'clear'},
        component: () => import('@/views/Health.vue')
    },
    {
        path: '/чипы',
        name: 'чипы',
        meta: {layout: 'clear'},
        component: () => import('@/views/Chips.vue')
    }, {
        path: '/будущим-владельцам',
        name: 'будущим-владельцам',
        meta: {layout: 'clear'},
        component: () => import('@/views/FutureOwners.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/History.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Planning.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/record',
        name: 'record',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Record.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: {layout: 'main', auth: true},
        component: () => import('../views/Detail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login?message=login')
    } else {
        next()
    }
})


export default router
