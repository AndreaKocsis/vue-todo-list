import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const AllTasks = () => import('../components/pages/AllTasks.vue')
const CompletedTasks = () => import('../components/pages/CompletedTasks.vue')
const UncompletedTasks = () => import('../components/pages/UncompletedTasks.vue')

export default new createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'All Tasks', type: 'all', component: AllTasks},
    {path: '/completed-tasks', type:'completed', name: 'Completed Tasks', component: CompletedTasks},
    {path: '/uncompleted-tasks', type: 'completed', name: 'Uncompleted Tasks', component: UncompletedTasks}
  ]
})