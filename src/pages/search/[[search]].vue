<template>
    <LazyPage>
        <section class="py-6">
            <LazyContainer>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <LazyBarSection>lista de mangás</LazyBarSection>
                            <div class="py-4 px-6">
                                
                                <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    <template v-for="number of 30" :key="number">
                                        <StoryCardH/>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside class="col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <div class="bg-slate-200 rounded mb-3">
                            <LazyBarSection>Os 10 mais lidos</LazyBarSection>
                            <div class="py-4 px-6">
                                <AsideCard v-for="story,index in data?.mostRead" :key="index" :index="index + 1" :story="story" :loading="loading"/>
                            </div>
                        </div>
                        <div class="bg-slate-200 rounded">
                            <LazyBarSection>Gêneros</LazyBarSection>
                            <div class="grid grid-cols-2 xl:grid-cols-3 py-4 px-6">
                                <div v-for="genre,index in data?.genres" :key="index" class="capitalize hover:text-cyan-500 duration-200">
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
import { host } from "~/constants";
import type IStory from "~/core/interfaces/IStory";
import type IGenre from "~/core/interfaces/IGenre";
const route = useRoute();


if(route.params.search){

}

type RespGenre = {
    mostRead:string,
    genres:string,
}
type RespGenreParse = {
    mostRead:IStory[]
    genres:IGenre[]
}

const { data, pending:loading } = await useLazyAsyncData(
    'most-readers-genres',
    async ():Promise<RespGenre> => {
        const [mostRead, genres] = await Promise.all([
            $fetch(`${host}most-read.php`),
            $fetch(`${host}genres.php`)
        ]);

        return { mostRead, genres } as RespGenre;
    },
    {
        transform(response:RespGenre):RespGenreParse {
            const mostread_parse = JSON.parse(response.mostRead) as IStory[]
            const genres_parse = JSON.parse(response.genres) as IGenre[];

            return { mostRead:mostread_parse, genres:genres_parse } as RespGenreParse
        }
    }
);

</script>