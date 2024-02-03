<template>
    <div class="flex items-center justify-between bg-slate-800 p-2 mb-3 rounded" :class="colorText">
        <LazySkeleton v-if="loading" class="min-w-28 h-4 rounded"/>             
        <ul v-else class="flex items-center relative text-xl lg:text-lg text-amber-500">
            <li v-for="number in 5" :key="number">
                <LazyIcon name="tabler:star"/>
            </li>
            <li class="absolute top-0 left-0 overflow-hidden" :style="{ width: `${ useAvaliable(Number(avaliable)) }%` }">
                <ul class="flex items-center">
                    <li v-for="number in 5" :key="number">
                        <LazyIcon name="tabler:star-filled"/>
                    </li>
                </ul>
            </li>
        </ul>
        <LazySkeleton v-if="loading" class="h-4 w-4 rounded"/>
        <span v-else>{{ avaliable }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    avaliable:{
        type: Number,
        default: 0
    },
    colorText:{
        type: String,
        default: "text-white"
    },
    loading:{
        type: Boolean,
        default: true
    }
})
</script>