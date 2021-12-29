<script setup>
import { ref } from 'vue'
</script>

<template>
    <div>
        <router-link to="/">All Tasks</router-link>
        <router-link to="/completed-tasks">Completed Tasks</router-link>
        <router-link to="/uncompleted-tasks">Uncompleted Tasks</router-link>
        <router-view></router-view>
    </div>
</template>