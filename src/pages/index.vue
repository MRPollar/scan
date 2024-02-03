<template>
    <Page>
        <!-- <section class="pt-0 pb-6 lg:pt-6">
            <Container :margin="false">
                <MyCarousel :items="items"/>
            </Container>
        </section> -->
        <section class="py-6">
            <Container>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <LazyBarSection label="ver todos" page-link="/ultimas-atualizacoes">Últimas atualizações</LazyBarSection>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 pb-4">
                                <LazyStoryCard v-for="story,index in data?.storys.storys" :key="index" :story="story" :loading="pending"/>
                                <template v-if="pending">
                                    <LazyStoryCard v-for="number in 2" :key="2"/>
                                </template>
                            </div>
                            <button v-if="Number(data?.storys.storys.length) < Number(data?.storys.total)" :disabled="pending" @click="count++" class="block w-full bg-slate-800 text-white text-center hover:bg-slate-600 duration-200 py-3 capitalize">
                                <template v-if="!pending">
                                    Ver mais
                                </template>
                                <template v-else>
                                    <Icon name="eos-icons:bubble-loading"/> carregando
                                </template>
                            </button>
                            <NuxtLink v-else class="block w-full bg-slate-800 text-white text-center hover:bg-slate-600 duration-200 py-3 capitalize" to="/ultimas-atualizacoes">Ver últimas atualizações</NuxtLink>
                        </div>
                        <LazyRecomendacoes/>
                    </div>
                    <aside class="col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <div class="bg-slate-200 rounded mb-3">
                            <LazyBarSection>Os 10 mais lidos</LazyBarSection>
                            <div class="py-4 px-6">
                                <AsideCard v-for="story,index in data?.mostRead" :key="index" :story="story" :loading="pending" :index="index + 1"/>
                            </div>
                        </div>
                        <div class="bg-slate-200 rounded">
                            <LazyBarSection>Gêneros</LazyBarSection>
                            <div class="grid grid-cols-2 xl:grid-cols-3 py-4 px-6">
                                <div v-for="genre,index in genres" :key="index" class="capitalize hover:text-cyan-500 duration-200">
                                    <NuxtLink :to="`/genres/${genre.genre_slug}/1`">{{ genre.genre }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    </Page>
</template>

<script setup lang="ts">
import type IStory from '~/core/interfaces/IStory';
import type IGenre from '~/core/interfaces/IGenre';
import type { DataRes, DataResReturn } from "~/types";

import { host } from "~/constants";
const count = ref(1);


const { data, pending, error, refresh } = await useLazyAsyncData(
    'storys',
    async ():Promise<DataRes> => {
        const [storys,mostRead] = await Promise.all([
            $fetch(`${host}storys.php`,{
                params:{
                    count: count.value
                },
            }),
            $fetch(`${host}most-read.php`),
        ]);
        return { storys, mostRead } as DataRes;
    },
    {
        watch: [count],
        transform(data:DataRes):DataResReturn {
            const story_json = JSON.parse(data.storys) as {storys:IStory[],total:number}; 
            const most_read_json = JSON.parse(data.mostRead) as IStory[];

            return { storys: story_json, mostRead: most_read_json };
        },
    }
)

const { data:genres } = await useFetch(`${host}genres.php`,{
    transform(data:string){
        const genres_parse = JSON.parse(data) as IGenre[]
        return genres_parse
    }
});


</script>