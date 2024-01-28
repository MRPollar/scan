<template>
    <div class="col-span-1 py-4 flex items-top gap-3 border-b-[1px] border-slate-800">
        <figure>
            <NuxtLink :to="`/manga/${story?.slug}`" :title="story?.name">
                <img class="max-w-[110px] aspect-[1/1.4]" :src="story?.capa" :srcset="story?.capa" :alt="story?.name"/>
            </NuxtLink>
        </figure>
        <div class="py-2">
            <h1 class="font-bold text-lg text-slate-800 hover:text-cyan-500 duration-200">
                <NuxtLink :to="`/manga/${story?.slug}`" :title="story?.name">{{ useLimitChars(24,story?.name) }}</NuxtLink>
            </h1>
            <ul>
                <li v-for="number in chapters()" :key="number">
                    <NuxtLink class="hover:text-cyan-500 duration-200" :to="`/manga/${story?.slug}/${number}`">
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
const props = defineProps({story:Object}) as {story:IStory};

const chapters = ():number[] => {
    const chapters:number[] = [];

    for(let i:number = Number(props.story?.chapters); i > (Number(props.story?.chapters) - 3); i--){
        chapters.push(i);
    }

    return chapters;
}
</script>