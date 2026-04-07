<script setup>
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <div class="pt-[6.25rem] sm:pt-[6.5rem] lg:pt-[8rem]">
    <RouterView />
  </div>
</template>
