<template>
    <div class="col-span-1 py-4 flex items-top gap-3 border-b-[1px] border-slate-800">
        <figure>
            <img class="max-w-[110px] max-h-[161px]" :src="story.capa" :srcset="story.capa" :alt="story.name"/>
        </figure>
        <div>
            <h1 class="font-bold text-lg text-slate-800 hover:text-cyan-500 duration-200"><NuxtLink :to="`/manga/${story.slug}`">{{ useLimitChars(29,story.name) }}</NuxtLink></h1>
            <ul>
                <li v-for="number in chapters" :key="number">
                    <NuxtLink class="hover:text-cyan-500 duration-200" :to="`/manga/${story.slug}/${number}`">
                        <Icon name="ph:dot-fill"/>
                        capitulo {{ number }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IStory from '~/interfaces/IStory';
defineProps(['story']) as IStory;

const chapters:number[] = [3,2,1]
</script>