<template>
    <Page>
        <section class="py-6 min-h-screen">
            <Container class="max-w-6xl">
                <div class="bg-slate-200 rounded">
                    <LazyBarSection>{{ data?.genre }}</LazyBarSection>
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
                    <ClientOnly>
                        <div class="px-6 py-4 flex items-center justify-center" v-if="Number(data?.pages_qt) > 1">
                            <nav class="bg-slate-800 rounded-xl border-[1px] border-slate-600 text-white">
                                <ul class="pagination">
                                    <li class="border-r-[1px] border-slate-600">
                                        <NuxtLink :to="`/genres/${route.params.genre[0]}/1`" class="nav-link">Primeira</NuxtLink>
                                    </li>
                                    

                                    <template v-for="pag_number in pag_ant(Number(route.params.genre[1]), 2)" :key="pag_number">
                                        <li class="border-r-[1px] border-slate-600">
                                            <NuxtLink class="nav-link" :to="`/genres/${route.params.genre[0]}/${pag_number}`">{{ pag_number }}</NuxtLink>
                                        </li>
                                    </template>

                                    <li class="border-r-[1px] border-slate-600">
                                        <NuxtLink class="nav-link bg-slate-600" :to="`/genres/${route.params.genre[0]}/${route.params.genre[1]}`">{{ route.params.genre[1] }}</NuxtLink>
                                    </li>


                                    <template v-if="Number(data?.pages_qt) > 1">
                                        <template v-for="number,index in 2" :key="index">
                                            <li v-if="number + Number(route.params.genre[1]) <= Number(data?.pages_qt)" class="border-r-[1px] border-slate-600">
                                                <NuxtLink  class="nav-link" :to="create_link(number + Number(route.params.genre[1]))">
                                                    {{ number + Number(route.params.genre[1]) }}
                                                </NuxtLink>
                                            </li>
                                        </template>
                                    </template>
                                    <li>
                                        <NuxtLink :to="`/genres/${route.params.genre[0]}/${data?.pages_qt}`" class="nav-link">Última</NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </ClientOnly>
                    
                </div>
            </Container>
        </section>
    </Page>
</template>

<script setup lang="ts">
import type IStory from "~/core/interfaces/IStory";
import { host } from "~/constants";
const route = useRoute();
const loading:Ref<boolean> = ref(false);

if(route.params.genre.length != 2){
    await navigateTo(`/genres/${route.params.genre[0]}/1`);
}

type GenreStory = {
    genre?:string;
    message:string;
    status:string;
    storys:IStory[];
    count:number;
    pages_qt:number;
}

const { data, error, pending, refresh:refresh_story } = await useLazyAsyncData(
    `genre:${route.params.genre[0]}-${route.params.genre[1]}`,
    async ():Promise<string> => await $fetch(`${host}genre-storys.php`,{
        params:{
            slug: route.params.genre[0],
            page: route.params.genre[1]
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
)
if(
    (data.value?.status !== "200" && pending.value == false) ||
    (error.value && pending.value == false)
){
    await navigateTo("/404");
}

const pag_ant = (start:number, end:number):Array<number> => {
    return Array.from({length: start - end + 1}, (_, i) => i + 1);
}
const create_link = (p:number):string => `/genres/${route.params.genre[0]}/${p}`

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