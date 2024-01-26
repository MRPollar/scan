<template>
    <div class="flex items-center justify-between p-2 border-b-2 border-slate-800">
        <h2 class="font-bold capitalize text-lg"><slot/></h2>
        <template v-if="label !== undefined && pageLink !== undefined">
            <NuxtLink class="capitalize text-xs bg-slate-800 text-white px-3 py-1 rounded" :to="pageLink">{{ label }}</NuxtLink>
        </template>
    </div>
</template>

<script setup lang="ts">
defineProps({
    label:String,
    pageLink:String,
})
</script>