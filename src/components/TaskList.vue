<script setup>
import { ref } from 'vue'

defineProps({
  type: String
})

</script>

<template>
  <h1>{{ type }}</h1>
</template>

<style scoped>
</style>
