<template>
    <div class="rounded bg-slate-200">
        <BarSection>recomendações</BarSection>
        <div class="py-4 px-6">
            <ul class="bg-slate-400 grid grid-cols-5 p-1 gap-1 rounded mb-3">
                <li v-for="genre,index in genres" :key="index" class="text-white">
                    <button
                        class="w-full cursor-pointer rounded capitalize"
                        :class="{'bg-slate-800':selectGenre === genre, 'hover:bg-slate-600':selectGenre !== genre}"
                        @click="selectGenre = genre"
                    >{{ genre }}</button>
                </li>
            </ul>
            <div class="grid grid-cols-5 gap-6">
                <template v-for="item,index in storyForGenre" :key="index">
                    <StoryCardH :story="item"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { items } from '~/constants';
import type IStory from '~/interfaces/IStory';
import type ISubRoute from '~/interfaces/ISubRoute';

const genres:Ref<string[]> = ref([
    "romance",
    "sobrenatural",
    "magia",
    "seinen",
    "shounen"
]);
const selectGenre:Ref<string> = ref(genres.value[0]);

const storyForGenre = computed(():IStory[] => {
    let newItems:IStory[] = [];

    for(const story of items){
        let genArray:ISubRoute[] = story.genres as ISubRoute[];
        for(const genre of genArray){ 
            if(genre.route == selectGenre.value){
                newItems.push(story);
                break;
            }
        }
    }

    return newItems;
})
</script>