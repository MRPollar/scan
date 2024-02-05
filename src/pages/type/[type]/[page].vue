<template>
    <LazyPage>
        <section class="py-6">
            <LazyContainer>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2 min-h-96">
                        <div class="rounded bg-slate-200 mb-3">
                            <LazyBarSection label="ver todos" page-link="/ultimas-atualizacoes/1">Últimas atualizações</LazyBarSection>
                            <div class="grid grid-cols-1 md:grid-cols-2 px-1">
                                <LazyStoryCard v-for="story,index in data?.updates.storys" :key="index" :story="story" :loading="pending"/>
                                <template v-if="Number(data?.updates.storys.length) == 0 && pending">
                                    <LazyStoryCard v-for="number in 2" :key="number"/>
                                </template>
                            </div>
                        </div>
                        <LazyRecomendacoes/>
                    </div>
                    <aside class="col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <div class="bg-slate-200 rounded mb-3">
                            <LazyBarSection>Os 10 mais lidos</LazyBarSection>
                            <div class="py-4 px-6 min-h-[500px]">
                                <LazyAsideCard v-for="story,index in data?.mostRead" :key="index" :story="story" :loading="pending" :index="index + 1"/>
                            </div>
                        </div>
                        <div class="bg-slate-200 rounded">
                            <LazyBarSection>Gêneros</LazyBarSection>
                            <div class="grid grid-cols-2 xl:grid-cols-3 py-4 px-6 min-h-80">
                                <div v-for="genre,index in genres" :key="index" class="capitalize hover:text-cyan-500 duration-200">
                                    <NuxtLink :to="`/genres/${genre.genre_slug}/1`">{{ genre.genre }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </LazyContainer>
        </section>
    </LazyPage>
</template>

<script setup lang="ts">
import type IStory from '~/core/interfaces/IStory';
import type IUpdate from '~/core/interfaces/IUpdate';
import type IGenre from '~/core/interfaces/IGenre';
import type { DataRes, DataResReturn } from "~/types";

import { host } from "~/constants";
const route = useRoute();


const { data, pending, error, refresh } = await useLazyAsyncData(
    'storys',
    async ():Promise<DataRes> => {
        const [updates,mostRead] = await Promise.all([
            $fetch(`${host}updates.php`,{
                params:{
                    page: route.params.page
                },
            }),
            $fetch(`${host}most-read.php`),
        ]);
        return { updates, mostRead } as DataRes;
    },
    {
        watch: [route],
        transform(data:DataRes):DataResReturn {
            const story_json = JSON.parse(data.updates) as {storys:IUpdate[],total_pages:number}; 
            const most_read_json = JSON.parse(data.mostRead) as IStory[];

            return { updates: story_json, mostRead: most_read_json };
        },
    }
)
console.log(data.value);

const { data:genres } = await useFetch(`${host}genres.php`,{
    lazy: true,
    transform(data:string){
        const genres_parse = JSON.parse(data) as IGenre[]
        return genres_parse
    }
});


</script>