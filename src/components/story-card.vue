<template>
    <div class="col-span-1 px-5 py-3 flex items-top gap-3 border-b-[1px] border-slate-800">
        <LazySkeleton v-if="loading" class="w-full max-w-[110px] aspect-[1/1.4]"/>
        <figure v-else class="w-full relative max-w-[110px] aspect-[1/1.4]">
            <NuxtLink :to="`/manga/${story.slug}`" :title="story.name">
                <span class="inline-block absolute top-1 right-1 bg-slate-800 text-white text-xs py-[2px] px-[3px] rounded">{{ story.type }}</span>
                <img class="max-w-[110px] aspect-[1/1.4] object-cover" :src="story.capa" :srcset="story.image" :alt="story.name" loading="lazy"/>
            </NuxtLink>
        </figure>
        <div class="py-2 w-full">
            <LazySkeleton v-if="loading" class="h-5 w-full mb-3 rounded"/>
            <h1 v-else class="font-bold text-lg text-slate-800 hover:text-cyan-500 duration-200 mb-2">
                <NuxtLink :to="`/manga/${story.slug}`" :title="story.name">{{ useLimitChars(24,story.name) }}</NuxtLink>
            </h1>
            <template v-if="loading">
                <ul>
                    <li v-for="number in 3" :key="number" class="mb-2">
                        <LazySkeleton class="w-full max-w-24 h-4 rounded"/>
                    </li>
                </ul>
            </template>
            <template v-else-if="story.chapters.length > 0 && !loading">
                <ul>
                    <li v-for="chapter,index in story.chapters" :key="index" class="mb-1">
                        <NuxtLink class="hover:text-cyan-500 duration-200 capitalize" :to="`/manga/${story.slug}/${chapter.chapter_name}`">
                            <LazyIcon name="ph:dot-fill"/>
                            capítulo {{ chapter.chapter_name.split("_")[1] }}
                        </NuxtLink>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IUpdate from '~/core/interfaces/IUpdate';
import Update from "~/core/classes/Update";
defineProps({
    story:{
        type:Object,
        default: new Update()
    },
    loading:{
        type:Boolean,
        default: true,
    }
}) as {story:IUpdate, loading:boolean};
</script>