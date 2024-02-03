<template>
    <div class="container mx-auto sm:px-3 md:px-5" :class="{'px-2':margin, 'px-0':!margin}">
        <slot/>
    </div>
</template>

<script setup lang="ts">
defineProps({
    margin: {
        type: Boolean,
        default: true
    }
})
</script>