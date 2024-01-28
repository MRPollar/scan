<template>
    <Head>
        <Title>{{ story.name }}</Title>
        <Meta name="description" :content="story.sinopse"/>
        <Meta property="og:title" :content="story.name"/>
        <Meta property="og:description" :content="story.sinopse"/>
        <Meta property="og:image" :content="story.capa"/>
        <Meta name="robots" content="index,follow"/>
        <Meta name="twitter:title" :content="story.name"/>
        <Meta name="twitter:description" :content="story.sinopse"/>
        <Meta name="twitter:image" :content="story.capa"/>
        <Meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <Page class="relative">
        <section class="bg-slate-900 absolute w-full top-0 left-0 z-10">
            <figure class="w-full overflow-hidden">
                <img class="w-full object-cover object-center blur-lg h-80" :src="story.capa" :srcset="story.capa" alt=""/>
            </figure>
        </section>
        <section class="relative pt-[160px] pb-11 z-20">
            <Container>
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-3">


                    <!-- capa da série -->
                    <div class="col-span-1">
                        <figure class="mb-3">
                            <img class="w-full mx-auto border-4 lg:border-0 border-slate-800 max-w-[300px] lg:max-w-none aspect-[1/1.4] object-cover" :src="story.capa" :srcset="story.capa" :alt="story.name"/>
                        </figure>
                        
                        <h2 class="text-xl font-extrabold text-slate-800 mb-3 text-center lg:hidden">{{ story.name }}</h2>
                        <!-- avaliações -->
                        <div class="flex items-center justify-between text-white bg-slate-800 p-2 mb-3 rounded">
                            
                            <ul class="flex items-center relative text-2xl lg:text-lg text-amber-500">
                                <li v-for="number in 5" :key="number">
                                    <Icon name="tabler:star"/>
                                </li>
                                <li class="absolute top-0 left-0 overflow-hidden" :style="{ width: `${(Number(story.avaliable) / 10 * 100)}%` }">
                                    <ul class="flex items-center">
                                        <li v-for="number in 5" :key="number">
                                            <Icon name="tabler:star-filled"/>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <span>{{ story.avaliable }}</span>
                        </div>
                        <!-- avaliações -->
                        
                        <div class="p-2 text-white bg-slate-800 rounded space-y-4">
                            <div class="flex items-center justify-between">
                                <span>status</span>
                                <span class="text-slate-300">em curso</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span>tipo</span>
                                <span class="text-slate-300">mangá</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span>lancado em</span>
                                <span class="text-slate-300">2023</span>
                            </div>
                        </div>
                    </div>
                    <!-- capa da série - fim -->

                    <!-- sinopse e cápitulos -->
                    <div class="col-span-1 lg:col-span-4">
                        <div class="bg-slate-800 text-white py-4 px-6 rounded mb-4">
                            <h1 class="text-2xl font-bold mb-2 hidden lg:block">{{ story.name }}</h1>
                            <ul class="flex flex-wrap items-center gap-3 mb-7">
                                <li v-for="genre in story.genres" class="capitalize text-sm text-slate-300 hover:text-white duration-200">
                                    <NuxtLink :to="`/genres/${genre.path}`" class="inline-block px-2 py-1 bg-slate-700 rounded">{{ genre.route }}</NuxtLink>
                                </li>
                            </ul>
                            <h2 class="mb-2 text-xl font-bold">sinopse de {{ story.name }}</h2>
                            <p class="text-sm">{{ story.sinopse }}</p>
                        </div>
                        <div class="mb-4 lg:mb-16 text-center">
                            <a class="bg-cyan-500 text-white py-2 px-3 capitalize inline-block" href="https://www.linkedin.com/in/alan-tavares-5a3363247/" target="_blank">
                                <span class="relative bottom-[2px]">
                                    <Icon name="bi:linkedin"/>
                                </span>
                                likedin
                            </a>
                        </div>
                        <div class="text-white bg-slate-800 rounded">
                            <BarSection class="border-white">Capítulos de {{ story.name }}</BarSection>
                            <div class="py-4 px-6">
                                <div class="grid grid-cols-2 gap-3 mb-3">
                                    <NuxtLink :to="`/manga/${story.slug}/${1}`" class="chapter-link">
                                        <span class="capitlize text-xs md:text-sm w-full text-center">novo capítulo</span>
                                        <span class="capitalize text-xl md:text-2xl font-bold w-full text-center">capítulo 1</span>
                                    </NuxtLink>
                                    <NuxtLink :to="`/manga/${story.slug}/${story.chapters}`" class="chapter-link">
                                        <span class="capitlize text-xs md:text-sm w-full text-center">novo capítulo</span>
                                        <span class="capitalize text-xl md:text-2xl font-bold w-full text-center">capítulo {{ story.chapters }}</span>
                                    </NuxtLink>
                                </div>
                                <div class="mb-3">
                                    <input class="w-full py-1 px-2 outline-none bg-slate-700 text-white" type="text" name="chapter" v-model="chapter" placeholder="Procurar capítulo. Exemplo 25 ou 178"/>
                                </div>
                                <div class="container-chapters">
                                    <template v-for="c in computedChapters">
                                        <NuxtLink :to="`/manga/${story.slug}/${c}`" class="chapter">
                                            <span class="block capitalize">capítulo {{ c }}</span>
                                            <span>12/01/2024</span>
                                        </NuxtLink>
                                    </template>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <!-- sinopse e cápitulos - fim -->
                </div>
            </Container>
        </section>
        <section class="py-6">
            <Container>
                <div class="bg-slate-200 rounded mb-3">
                    <BarSection>séries relacionadas</BarSection>
                    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 lg:grid-cols-5 py-4 px-6 gap-6">
                        <template v-for="story,index in items" :key="index">
                            <StoryCardH :story="story"/>
                        </template>
                    </div>
                </div>
            </Container>
        </section>
        <section class="py-6">
            <Container>
                <Comentarios/>
            </Container>
        </section>
    </Page>
</template>

<script lang="ts" setup>
import type IStory from "~/interfaces/IStory";
import { items } from "~/constants";
const route = useRoute();
const { slug } = toRefs(route.params);
const foundStory:IStory = items.find((val:IStory) => val.slug == slug.value) as IStory;


const story:Ref<IStory> = ref(foundStory);
const chapters:Ref<number[]> = ref([]);
const chapter:Ref<string> = ref('');

for(let i:number = Number(story.value.chapters); i > 0; i--){
    let number:number = i < 10 ? Number(`0${i}`) : i;
    chapters.value.push(number);
}

const computedChapters = computed(():number[] => {
    let text = chapter.value.replace(/[^0-9]/g, '');
    if(text === '' || text.toString().includes(" ")){
        return chapters.value;
    }
    const numbers = chapters.value.filter((val:number) => {
        if(val.toString().includes(chapter.value)) return val;
    });

    return numbers;
})

</script>

<style scoped>
.chapter-link{
    @apply bg-slate-700 hover:bg-slate-600 text-white min-h-20 md:min-h-24 p-4 flex items-center justify-center flex-col gap-2 duration-200 rounded
}

.container-chapters{
    @apply max-h-96 overflow-y-auto px-1
}

.container-chapters::-webkit-scrollbar{
    @apply w-[5px]
}
.container-chapters::-webkit-scrollbar-track{
    @apply bg-slate-800
}
.container-chapters::-webkit-scrollbar-thumb{
    @apply bg-slate-400
}
.chapter{
    @apply border-2 border-slate-700 block py-2 px-3 rounded-md mb-2 hover:bg-slate-700
}
</style>