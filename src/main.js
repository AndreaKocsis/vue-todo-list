import { createApp } from 'vue'
import { createRouter, createrWebHistory } from 'vue-router'
import App from './App.vue'

import AllTasks from './components/pages/AllTasks.vue'
import CompletedTasks from './components/pages/CompletedTasks.vue'
import UncompletedTasks from './components/pages/UncompletedTasks.vue'

const router = createRouter({
    history: createrWebHistory(),
    routes:[
        {path: '/', name: 'All Tasks', component: 'AllTasks'},
        {path: '/completed-tasks', name: 'Completed Tasks', component: 'CompletedTasks'},
        {path: '/uncompleted-tasks', name: 'Uncompleted Tasks', component: 'UncompletedTasks'},
    ]
})


createApp(App).use(router).mount('#app');
