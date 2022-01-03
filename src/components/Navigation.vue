<template>
    <div>
        <div  class="flex justify-center text-white uppercase bg-gray font-serif">
            <router-link class="m-8 hover:font-bold tracking-widest" @click="changePage('all')" to="/">All Tasks</router-link>
            <router-link class="m-8 hover:font-bold tracking-widest" @click="changePage('completed')" to="/completed-tasks">Completed Tasks</router-link>
            <router-link class="m-8 hover:font-bold tracking-widest" @click="changePage('uncompleted')" to="/uncompleted-tasks">Uncompleted Tasks</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import {computed} from 'vue';
import {useStore} from "vuex";

export default {
    name: 'Navigation',
    components: {},
    setup(){
        const store = useStore();

        let page = computed(function () {
            return store.state.activePage
        });

        function changePage(){
            store.commit("changeActivePage", page)
        }

        return {
            page,
            changePage
        }
    }

}
</script>