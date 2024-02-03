<template>
    <div>
        <figure class="mb-2">
            <LazySkeleton v-if="loading" class="w-full aspect-[1/1.4]"/>
            <NuxtLink v-else :to="`/manga/${story.slug}`" :title="story?.name">
                <img class="w-full aspect-[1/1.4] object-cover object-center" :src="story.image" :srcset="story.image" :alt="story.name"/>
            </NuxtLink>
        </figure>
        <div :class="{'px-[2px]':!loading}">
            <LazySkeleton v-if="loading" class="full h-4 rounded mb-1"/>
            <h2 v-else class="font-bold text-base hover:text-cyan-600 duration-200 mb-1">
                <NuxtLink :to="`/manga/${story.slug}`" :title="story?.name">{{ useLimitChars(28,story.name) }}</NuxtLink>
            </h2>
            <LazySkeleton v-if="loading" class="full max-w-28 h-3 rounded mb-1"/>
            <template v-if="story.last_chapters.length > 0 && !loading">
                <h3 class="text-sm hover:text-cyan-600 duration-200 mb-1">
                    <NuxtLink :to="`/manga/${story.slug}/${story.last_chapters[0].chapter_name}`">
                        capítulo {{ story.last_chapters[0].chapter_name.split("_")[1] }}
                    </NuxtLink>
                </h3>
            </template>
            <LazyStars class="bg-transparent py-0 px-0" :avaliable="Number(story.avaliable)" :loading="loading" colorText="text-slate-800"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IStory from '~/core/interfaces/IStory';
import Story from "~/core/classes/Story";

defineProps({
    story:{
        type:Object,
        default: new Story()
    },
    loading:{
        type:Boolean,
        default: true
    }
}) as {story: IStory, loading:false}
</script>~/core/classes/interfaces/IStory