<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs:{
    lang: "pt-BR"
  }
})
useSeoMeta({
  titleTemplate: (title) => title ? `scan - ${title}` : `scan`
})
</script>

<style>
body{
  @apply bg-slate-50
}
body{
  font-family: 'Poppins', sans-serif;
}
</style>
