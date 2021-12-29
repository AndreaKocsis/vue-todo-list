<script setup>

import TaskList from './components/TaskList.vue'
import Navigation from './components/Navigation.vue'

</script>

<template>
  <div>
    <Navigation />
    <TaskList title="Összes feladat" />
    <TaskList title="Megoldásra váró feladatok" />
    <TaskList title="Elkészült feladatok" />
  </div>
</template>

<style>
</style>
