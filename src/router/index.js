import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import Akuryoubuster from '@/views/akuryoubuster.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/akuryoubuster',
        name: 'akuryoubuster',
        component: Akuryoubuster
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: /~proj2021-16/,
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router