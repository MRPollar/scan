<template>
    <Page>
        <section class="py-6">
            <Container>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <BarSection>lista de mangás</BarSection>
                            <div class="py-4 px-6">
                                
                                <div class="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                    <template v-for="story,index of items" :key="index">
                                        <StoryCardH :story="story"/>
                                    </template>
                                </div>
                            </div>
                        </div>
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

<script setup lang="ts">
import { genres, items } from '~/constants';
</script>