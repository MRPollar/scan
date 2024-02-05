<template>
    <div class="flex items-top gap-2" :class="{ 'mb-2':index != 10 }">
        <div class="flex items-center gap-2">
            <LazySkeleton v-if="loading && index == 0" class="w-8 h-8 rounded"/>
            <div v-else class="w-8 h-8 border-2 border-slate-800 text-slate-800 rounded flex items-center justify-center">
                {{ index  }}
            </div>
            <LazySkeleton v-if="loading && story.image == ''" class="min-w-[60px] aspect-[1/1.4]"/>
            <figure v-else class="max-w-[60px] min-w-[60px] aspect-[1/1.4]">
                <img class="max-w-[60px] min-w-[60px] aspect-[1/1.4] object-cover" :src="story.image" :srcset="story.image" :alt="story.name" loading="lazy"/>
            </figure>
        </div>
        <div class="h-full w-full">
            <LazySkeleton v-if="loading && story.name == ''" class="w-full h-4 mb-1"/>
            <h2 v-else class="font-extrabold mb-1" :title="story.name"><NuxtLink class="hover:text-cyan-500" :to="`/manga/${story.slug}/`">{{ useLimitChars(29, story.name) }}</NuxtLink></h2>
            <LazySkeleton v-if="loading && story.genres.length == 0" class="w-full h-3"/>
            <div v-else class="text-sm font-bold">
                <span>Gêneros: </span>
                <template v-for="genre,index in story.genres" :key="index">
                    <NuxtLink class="text-xs hover:text-cyan-500 inline-block" :to="`/genres/${genre.genre_slug}/1`">
                        {{ genre.genre }}<template v-if="index !== story?.genres.length - 1">, </template>
                    </NuxtLink>
                    
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Story from '~/core/classes/Story';
import type IStory from '~/core/interfaces/IStory';
defineProps({
    index:{
        type:Number,
        default: 0
    },
    story: {
        type:Object,
        default: new Story()
    },
    loading:{
        type:Boolean,
        default: true
    }
}) as { index:number, story:IStory, loading:boolean }
</script>