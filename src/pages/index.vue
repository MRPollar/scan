<template>
    <Page>
        <section class="py-6">
            <Container>
                <MyCarousel :items="items"/>
            </Container>
        </section>
        <section class="py-6">
            <Container>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <BarSection label="ver todos" page-link="/noticia">Notícias</BarSection>
                            <div class="px-3 pb-3">
                                <div class="news">
                                    <div class="whitespace-nowrap flex gap-2">
                                        <div v-for="color in colors" :key="color" class="min-w-80 16 max-w-80 py-4">
                                            <figure class="mb-2">
                                                <img class="rounded" src="https://animangeek.com/wp-content/uploads/2023/09/elves-anime-1600x900.png" srcset="https://animangeek.com/wp-content/uploads/2023/09/elves-anime-1600x900.png" alt="16 melhores animes de elfos para todos os fãs de orelhas pontudas"/>
                                            </figure>
                                            <div class="whitespace-normal px-2">
                                                <h2 class="font-bold text-base text-slate-800 hover:text-cyan-500 duration-200"><NuxtLink to="/noticias/16-melhores-animes-de-elfos-para-todos-os-fas-de-orelhas-pontudas">16 melhores animes de elfos para todos os fãs de orelhas pontudas</NuxtLink></h2>
                                                <h3 class="text-xs">07/01/2024</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded bg-slate-200 mb-3">
                            <BarSection label="ver todos" page-link="/ultimas-atualizacoes">Últimas atualizações</BarSection>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 pb-4">
                                <StoryCard v-for="story,index in items" :key="index" :story="story"/>
                            </div>
                            <NuxtLink class="block bg-slate-800 text-white text-center hover:bg-slate-600 duration-200 py-3" to="/ultimas-atualizacoes">Ver todos de Últimas Atualizações</NuxtLink>
                        </div>
                        <Recomendacoes/>
                    </div>
                    <aside class="col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <div class="bg-slate-200 rounded mb-3">
                            <BarSection>Os 10 mais lidos</BarSection>
                            <div class="py-4 px-6">
                                <div v-for="number,index in 10" :key="index" class="flex items-top gap-2" :class="{'mb-3':number != 10}">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 border-2 border-slate-800 text-slate-800 rounded flex items-center justify-center">
                                            {{ index + 1 }}
                                        </div>
                                        <figure>
                                            <img class="max-w-[60px] h-auto rounded" src="https://i1.wp.com/lightnovelbrasil.com/wp-content/uploads/2021/07/download.jpg" srcset="https://i1.wp.com/lightnovelbrasil.com/wp-content/uploads/2021/07/download.jpg" alt=""/>
                                        </figure>
                                    </div>
                                    <div class="h-full">
                                        <h2>Solo Leveling</h2>
                                        <p class="text-sm">
                                            <span>Gêneros:</span>
                                            <NuxtLink to="/genres/acao">Ação</NuxtLink>, 
                                            <NuxtLink to="/genres/aventura">Aventura</NuxtLink>, 
                                            <NuxtLink to="/genres/fantasia">Fantasia</NuxtLink>, 
                                            <NuxtLink to="/genres/shounen">Shounen</NuxtLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slate-200 rounded">
                            <BarSection>Gêneros</BarSection>
                            <div class="grid grid-cols-3 py-4 px-6">
                                <div v-for="genre,index in genres" :key="index" class="capitalize hover:text-cyan-500 duration-200">
                                    <NuxtLink :to="`/genres/${genre.slug}`">{{ genre.genre }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    </Page>
</template>

<script lang="ts" setup>
import { items, genres } from '~/constants';

const colors:string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]
</script>

<style scoped>
.news{
    @apply overflow-x-auto space-x-2
}

.news::-webkit-scrollbar{
    @apply h-3
}
.news::-webkit-scrollbar-track{
    @apply bg-slate-800 rounded
}
.news::-webkit-scrollbar-thumb{
    @apply bg-slate-400 rounded
}
</style>