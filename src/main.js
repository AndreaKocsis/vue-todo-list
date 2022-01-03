import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const AllTasks = () => import('./components/pages/AllTasks.vue')
const CompletedTasks = () => import('./components/pages/CompletedTasks.vue')
const UncompletedTasks = () => import('./components/pages/UncompletedTasks.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'All Tasks', component: AllTasks},
        {path: '/completed-tasks', name: 'Completed Tasks', component: CompletedTasks},
        {path: '/uncompleted-tasks', name: 'Uncompleted Tasks', component: UncompletedTasks}
    ]
})

createApp(App).use(router).mount('#app');
export default router;