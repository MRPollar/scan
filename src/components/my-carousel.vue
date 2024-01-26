<script setup>
// import type IStory from '~/interfaces/IStory';
defineProps(['items']);
</script>

<template>
    <Carousel :autoplay="4000" :wrap-around="true">
        <Slide v-for="item,index in items" :key="index">
            <div class="carousel__item">
                <img class="w-full absolute z-[1] translate-y-[-50%] left-0 top-[50%] blur-sm" :src="item.capa" :srcset="item.capa" alt=""/>
                <div class="text-white text-start flex flex-col justify-center relative z-[3]">
                    <h3 class="font-bold text-2xl mb-2">Cápitulos {{ item.chapters }}</h3>
                    <h1 class="font-bold text-3xl mb-2">{{ item.name }}</h1>
                    <p class="text-base mb-2">{{ useLimitChars(250, item.sinopse) }}</p>
                    <ul class="flex gap-2 items-center mb-3">
                        <li v-for="genre,index in item.genres" :key="index">
                            <NuxtLink class="text-sm border-[1px] px-[4px] py[2px] border-white rounded inline-block hover:bg-white hover:text-black capitalize" :to="`/genres/${genre.path}`">{{ genre.route }}</NuxtLink>
                        </li>
                    </ul>
                    <div>
                        <NuxtLink :to="`/manga/${item.slug}`" class="bg-cyan-600 text-white hover:bg-cyan-400 inline-flex items-center capitalize px-3 py-1 rounded">
                            ler agora
                            <Icon name="solar:arrow-right-bold"/>
                        </NuxtLink>
                    </div>
                </div>
                <figure class="h-full relative z-[3]">
                    <img class="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] rotate-6 max-w-[300px] h-auto" :src="item.capa" :srcset="item.capa" :alt="item.name"/>
                </figure>
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
    @apply w-full h-screen max-h-[350px] overflow-hidden grid grid-cols-2 px-10 bg-center bg-cover bg-no-repeat relative
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