<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
</style>
