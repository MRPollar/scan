<template>
    <div>
        <figure class="">
            <NuxtLink :to="`/manga/${story.slug}`" :title="story?.name">
                <img class="w-full aspect-[1/1.4] object-cover object-center" :src="story.capa" :srcset="story.capa" :alt="story.name"/>
            </NuxtLink>
        </figure>
        <div>
            <h2 class="font-bold text-base hover:text-cyan-600 duration-200"><NuxtLink :to="`/manga/${story.slug}`" :title="story?.name">{{ story.name }}</NuxtLink></h2>
            <h3 class="text-sm hover:text-cyan-600 duration-200"><NuxtLink :to="`/manga/${story.slug}/${story.chapters}`">capítulo {{ story.chapters }}</NuxtLink></h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IStory from '~/interfaces/IStory';

defineProps(['story']) as {story: IStory}
</script>