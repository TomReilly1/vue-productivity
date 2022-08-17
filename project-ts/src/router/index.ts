import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/project/kanban',
            name: 'Kanban',
            component: () => import('../views/KanbanView.vue')
        },
        {
            path: '/project/notes',
            name: 'Notes',
            component: () => import('../views/NotesView.vue')
        },
        {
            path: '/project/calculator',
            name: 'Calculator',
            component: () => import('../views/CalculatorView.vue')
        }
    ]
})


export default router
