<script setup lang="ts">
import type IStory from '~/interfaces/IStory';
defineProps(['items']) as IStory;
</script>

<template>
    <Carousel :autoplay="4000" :wrap-around="true">
        <Slide v-for="item,index in items" :key="index">
            <div class="carousel__item">
                <img class="w-full absolute z-[1] translate-y-[-50%] left-0 top-[50%] blur-sm" :src="item.capa" :srcset="item.capa" alt=""/>
                <figure class="col-span-1 relative z-[3]">
                    <img class="w-full md:w-96 object-cover block aspect-[1.2/1.6] absolute lg:left-[50%] top-[50%] translate-y-[-50%] lg:translate-x-[-50%] lg:rotate-6" :src="item.capa" :srcset="item.capa" :alt="item.name"/>
                </figure>
                <div class="col-span-2 z-[3] text-start text-white flex items-center max-h-full">
                    <div class="w-full">
                        <h2 class="capitalize font-bold mb-2">capítulos {{ item.chapters }}</h2>
                        <h1 class="capitalize text-xl font-bold mb-2">{{ item.name }}</h1>
                        <p class="text-xs mb-2 hidden sm:block">{{ useLimitChars(250,item.sinopse) }}</p>
                        <ul class="flex flex-wrap gap-1 mb-2">
                            <li v-for="genre in item.genres">
                                <NuxtLink class="capitalize inline-block border-[1px] border-white text-sm py-1 px-2 rounded hover:text-slate-800 hover:bg-white" :to="`/genres/${genre.path}`">{{ genre.route }}</NuxtLink>
                            </li>
                        </ul>
                        <NuxtLink
                            :to="`/manga/${item.slug}`"
                            class="bg-white text-slate-900 py-1 px-2 inline-block rounded"
                        >ler agora</NuxtLink>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
  </Carousel>
</template>

<style scoped>
.carousel__slide{
    @apply bg-black
}

.carousel__item{
    @apply w-full h-screen max-h-[350px] overflow-hidden grid grid-cols-3 px-10 bg-center bg-cover gap-4 bg-no-repeat relative py-5 lg:py-0
}

.carousel__item::after{
    content: '';
}

.carousel__item::after{
    @apply absolute z-[2] bg-black w-full h-full opacity-50;
}

.carousel__icon{
  fill: currentColor;
}

.carousel__prev,
.carousel__next{
    @apply text-white
}

.carousel__pagination-button{
    @apply w-2 h-2 inline-block bg-green-500
}
</style>