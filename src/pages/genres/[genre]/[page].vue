<template>
    <LazyPage>
        <section class="py-6 min-h-96">
            <LazyContainer class="max-w-6xl">
                <div class="bg-slate-200 rounded">
                    <LazyBarSection>
                        <LazySkeleton v-if="pending" class="min-w-[150px] h-6 rounded"/>
                        <template v-else>
                            {{ data?.genre }}
                        </template>
                    </LazyBarSection>
                    <div class="py-4 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 min-h-[416px]">
                        <!-- renderização de cards -->
                        <template v-if="data?.storys.length != 0 && (!pending || pending)">
                            <LazyStoryCardH v-for="story,index in data?.storys" :key="index" :story="story" :loading="pending"/>
                        </template>
                        <template v-else>
                            <div class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex items-center justify-center">
                                <div class="text-center text-slate-800">
                                    <div class="text-8xl mb-3">
                                        <LazyIcon name="zondicons:mood-sad-outline"/>
                                    </div>
                                    <div class="font-bold text-xl md:text-2xl mb-2">Ops! Nenhum estória encontrada!!!!</div>
                                    <button @click="story_reload()" class="bg-slate-800 hover:bg-slate-600 duration-200 text-white px-3 py-2 rounded capitalize">
                                        <template v-if="!pending">
                                            <LazyIcon name="mdi:reload"/>
                                            ecarregar
                                        </template>
                                        <template v-else>
                                            <LazyIcon name="eos-icons:bubble-loading"/>
                                            carregando
                                        </template>
                                    </button>
                                </div>
                            </div>
                        </template>


                        <!-- renderização de pré visualização -->
                        <template v-if="data?.storys == undefined && pending">
                            <LazyStoryCardH v-for="number in 3" :key="number"/>
                        </template>
                    </div>
                    <Pagination :base-url="`/genres/${route.params.genre}`" :page="Number(route.params.page)" :total="data?.pages_qt"/>
                    
                </div>
            </LazyContainer>
        </section>
        <section class="py-6">
            <LazyContainer class="max-w-6xl">
                <div class="bg-slate-800 rounded min-h-[200px]">
                    <LazyBarSection class="text-white border-white">gêneros</LazyBarSection>
                    <div class="p-4">
                        <ul class="bg-slate-600 rounded p-3 grid grid-cols-4 gap-3">
                            <template v-for="genre in genres">
                                <NuxtLink
                                    :to="`/genres/${genre.genre_slug}/1`"
                                    class="h-auto rounded p-1 text-center text-white"
                                    :class="{'bg-slate-800':genre.genre_slug == route.params.genre, 'hover:bg-slate-700 duration-200':genre.genre_slug !== route.params.genre}"
                                >
                                    {{ genre.genre }}
                                </NuxtLink>
                            </template>
                        </ul>
                    </div>
                    
                </div>
            </LazyContainer>
        </section>
    </LazyPage>
</template>

<script setup lang="ts">
import type IStory from "~/core/interfaces/IStory";
import type IGenre from "~/core/interfaces/IGenre";
import { host } from "~/constants";
const route = useRoute();

type GenreStory = {
    genre?:string;
    message:string;
    status:string;
    storys:IStory[];
    count:number;
    pages_qt:number;
}

const { data:genres } = await useFetch(`${host}genres.php`,{
    lazy: true,
    transform(data:string){
        const genres_parse = JSON.parse(data) as IGenre[]
        return genres_parse
    }
});

const { data, error, pending, refresh:refresh_story } = await useLazyAsyncData(
    `genre:${route.params.genre}-${route.params.page}`,
    async ():Promise<string> => await $fetch(`${host}genre-storys.php`,{
        params:{
            slug: route.params.genre,
            page: route.params.page
        },
        headers: { "Content-Type": "application/json" }
    }),
    {
        watch: [route],
        transform: (data:string) => {
            const json = JSON.parse(data) as GenreStory
            return json
        },
    }
);
if(
    (data.value?.status !== "200" && pending.value == false) ||
    (error.value && pending.value == false)
){
    await navigateTo("/404");
}

const pag_ant = (start:number, end:number):Array<number> => {
    return Array.from({length: start - end + 1}, (_, i) => i + 1);
}

const story_reload = () => refresh_story();


</script>

<style scoped>
.pagination{
    @apply flex items-center
}

.nav-link{
    @apply min-w-10 h-10 p-2 inline-flex items-center justify-center text-xs md:text-base
}
</style>