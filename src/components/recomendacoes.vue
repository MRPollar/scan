<template>
    <div class="hidden md:block rounded bg-slate-200">
        <LazyBarSection>recomendações</LazyBarSection>
        <div class="py-4 px-6">
            <!-- <ul class="bg-slate-400 grid grid-cols-5 p-1 gap-1 rounded mb-3">
                <li v-for="genre,index in genres" :key="index" class="text-white">
                    <button
                        class="w-full cursor-pointer rounded capitalize"
                        :class="{'bg-slate-800':selectGenre === genre, 'hover:bg-slate-600':selectGenre !== genre}"
                        @click="selectGenre = genre"
                    >{{ genre }}</button>
                </li>
            </ul>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                <template v-for="item,index in storyForGenre" :key="index">
                    <StoryCardH :story="item"/>
                </template>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import type IStory from '~/core/interfaces/IStory';
import type IGenre from '~/core/interfaces/IGenre';
const selectGenre:Ref<string | null> = ref(null);

// const storyForGenre = computed(():IStory[] => {
//     let newItems:IStory[] = [];
//     let count:number = 0;

//     for(const story of items){
//         let genArray:IGenre[] = story.genres as IGenre[];
//         for(const genre of genArray){ 
//             if(genre.genre == selectGenre.value){
//                 newItems.push(story);
//                 count++;
//                 break;
//             }
//         }
//         if(count == 5) break;
//     }

//     return newItems;
// })
</script>~/core/classes/interfaces/IStory~/core/classes/interfaces/IGenre