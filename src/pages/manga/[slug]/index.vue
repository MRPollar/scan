<template>
    <Head>
        <Title>{{ story?.name }}</Title>
        <Meta name="description" :content="story?.description"/>
        <Meta property="og:title" :content="story?.name"/>
        <Meta property="og:description" :content="story?.description"/>
        <Meta property="og:image" :content="story?.image"/>
        <Meta name="robots" content="index,follow"/>
        <Meta name="twitter:title" :content="story?.name"/>
        <Meta name="twitter:description" :content="story?.description"/>
        <Meta name="twitter:image" :content="story?.image"/>
        <Meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <LazyPage class="relative">
        <section class="bg-slate-900 absolute w-full top-0 left-0 z-10">
            <figure class="w-full overflow-hidden">
                <img class="w-full object-cover object-center blur-lg h-80" :src="story?.image" :srcset="story?.image" alt=""/>
            </figure>
        </section>
        <section class="relative pt-[160px] pb-11 z-20">
            <LazyContainer>
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-3">


                    <!-- capa da série -->
                    <div class="col-span-1">
                        
                        <figure class="mb-3">
                            <LazySkeleton v-if="pending" class="w-full mx-auto max-w-[300px] lg:max-w-none aspect-[1/1.4]"/>
                            <img
                                v-else
                                class="w-full mx-auto border-4 lg:border-0 border-slate-800 max-w-[300px] lg:max-w-none aspect-[1/1.4] object-cover"
                                :src="story?.image"
                                :srcset="story?.image"
                                :alt="story?.name"
                                loading="lazy"
                            />
                        </figure>
                        <LazySkeleton v-if="pending" class="w-full max-w-56 h-6 mx-auto mb-3 rounded lg:hidden"/>
                        <h2 v-else class="text-xl font-extrabold text-slate-800 mb-3 text-center lg:hidden">{{ story?.name }}</h2>
                        <!-- avaliações -->
                        <LazyStars :avaliable="Number(story?.avaliable)" :loading="pending"/>
                        <!-- avaliações -->
                        
                        <div class="p-2 text-white bg-slate-800 rounded space-y-4 capitalize">
                            <div class="flex items-center justify-between">
                                <span>status</span>
                                <LazySkeleton v-if="pending" class="w-full max-w-20 h-3 rounded"/>
                                <span v-else class="text-slate-300">{{ story?.status }}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span>tipo</span>
                                <LazySkeleton v-if="pending" class="w-full max-w-20 h-3 rounded"/>
                                <span v-else class="text-slate-300">{{ story?.type }}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span>lançado em</span>
                                <LazySkeleton v-if="pending" class="w-full max-w-20 h-3 rounded"/>
                                <span v-else class="text-slate-300">{{ useReleaseDate(String(story?.release_date)) }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- capa da série - fim -->

                    <!-- sinopse e cápitulos -->
                    <div class="col-span-1 lg:col-span-4">
                        <div class="bg-slate-800 text-white py-4 px-6 rounded mb-4">
                            <LazySkeleton v-if="pending" class="w-full h-6 max-w-96 mb-2 rounded hidden lg:block"/>
                            <h1 v-else class="text-2xl font-bold mb-2 hidden lg:block">{{ story?.name }}</h1>
                            <ul v-if="pending" class="flex flex-wrap items-center gap-3 mb-7">
                                <li v-for="number in 3" :key="number">
                                    <LazySkeleton class="min-w-16 h-5 rounded"/>
                                </li>
                            </ul>
                            <ul v-else class="flex flex-wrap items-center gap-3 mb-7">
                                <li v-for="genre in story?.genres" class="capitalize text-sm text-slate-300 hover:text-white duration-200">
                                    <NuxtLink :to="`/genres/${genre.genre_slug}`" class="inline-block px-2 py-1 bg-slate-700 rounded">{{ genre.genre }}</NuxtLink>
                                </li>
                            </ul>
                            <LazySkeleton v-if="pending" class="w-full max-w-xl h-5 mb-3 rounded"/>
                            <h2 v-else class="mb-3 text-xl font-bold">sinopse de {{ story?.name }}</h2>
                            <template v-if="pending">
                                <LazySkeleton class="w-full h-3 rounded mb-2"/>
                                <LazySkeleton class="w-full h-3 rounded mb-2 max-w-xl"/>
                                <LazySkeleton class="w-full h-3 rounded"/>
                            </template>
                            <p v-else class="text-sm whitespace-pre-line">{{ story?.description }}</p>
                        </div>
                        <div class="mb-4 lg:mb-16 text-center">
                            <a class="bg-cyan-500 text-white py-2 px-3 capitalize inline-block" href="https://www.linkedin.com/in/alan-tavares-5a3363247/" target="_blank">
                                <span class="relative bottom-[2px]">
                                    <LazyIcon name="bi:linkedin"/>
                                </span>
                                likedin
                            </a>
                        </div>
                        <div class="text-white bg-slate-800 rounded">

                            <LazyBarSection class="border-white">
                                <LazySkeleton v-if="pending" class="h-5 rounded min-w-36"/>
                                <template v-else>
                                    Capítulos de {{ story?.name }}
                                </template>
                            </LazyBarSection>
                            <div class="py-4 px-6">
                                <template v-if="story?.all_chapters !== undefined && story?.all_chapters.length > 0">
                                    <div class="grid grid-cols-2 gap-3 mb-3">
                                        <NuxtLink :to="`/manga/${story?.slug}/capitulo_1`" class="chapter-link">
                                            <span class="capitlize text-xs md:text-sm w-full text-center">novo capítulo</span>
                                            <span class="capitalize text-xl md:text-2xl font-bold w-full text-center">capítulo 1</span>
                                        </NuxtLink>
                                        <NuxtLink :to="`/manga/${story?.slug}/${story?.all_chapters[0]}`" class="chapter-link">
                                            <span class="capitlize text-xs md:text-sm w-full text-center">novo capítulo</span>
                                            <span class="capitalize text-xl md:text-2xl font-bold w-full text-center">capítulo {{ story?.all_chapters[0].chapter_name.split("_")[1] }}</span>
                                        </NuxtLink>
                                    </div>
                                    <ClientOnly>
                                        <div class="mb-3">
                                            <input class="w-full py-1 px-2 outline-none bg-slate-700 text-white" type="number" name="chapter" v-model.number="chapterNumber" placeholder="Procurar capítulo. Exemplo 25 ou 178"/>
                                        </div>
                                        <div class="container-chapters">
                                            <template v-for="chapter in computedChapters">
                                                <NuxtLink :to="`/manga/${chapter?.story_slug}/${chapter?.chapter_name}`" class="chapter">
                                                    <span class="block capitalize">capítulo {{ chapter?.chapter_name.split("_")[1] }}</span>
                                                    <span class="text-xs">{{ useConvertDate(chapter?.post_data) }}</span>
                                                </NuxtLink>
                                            </template>
                                        </div>
                                    </ClientOnly>
                                </template>
                                <template v-else>
                                    <div class="text-8xl text-center mb-1">
                                        <LazyIcon name="bx:sad"/>
                                    </div>
                                    <h2 class="text-center font-bold capitalize">Nenhum capítulo disponível no momento</h2>
                                </template>
                            </div>
                            
                        </div>
                    </div>
                    <!-- sinopse e cápitulos - fim -->
                </div>
            </LazyContainer>
        </section>
        <section class="py-6">
            <LazyContainer>
                <div class="bg-slate-200 rounded mb-3">
                    <LazyBarSection>séries relacionadas</LazyBarSection>
                    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 lg:grid-cols-5 py-4 px-6 gap-6">
                        <!-- <template v-for="story,index in items" :key="index">
                            <StoryCardH :story="story"/>
                        </template> -->
                    </div>
                </div>
            </LazyContainer>
        </section>
        <section class="py-6">
            <LazyContainer>
                <LazyComentarios/>
            </LazyContainer>
        </section>
    </LazyPage>
</template>

<script lang="ts" setup>
import type IStory from "~/core/interfaces/IStory";
import type IChapter from "~/core/interfaces/IChapter";
const route = useRoute();
const chapterNumber:Ref<number | undefined> = ref();

const { data:story, pending } = await useLazyAsyncData(
    `story:${route.params.slug}`,
    async () => await $fetch(`http://192.168.11.7/panel-scan/api/story.php`,{
        params: {
            slug: route.params.slug
        },
        headers:{'Content-Type': 'application/json'}
    }),
    {
        transform: (data) => typeof(data) == "string" ? JSON.parse(data) as IStory : data as IStory,
        watch: [route]
    }
);

const computedChapters = computed(() => {
    if(chapterNumber.value == undefined) return story.value?.all_chapters;

    let chapters:IChapter[] | undefined = story.value?.all_chapters.filter((val:IChapter) => val.chapter_name.includes(`${chapterNumber.value}`));

if(chapters?.length == 0) return story.value?.all_chapters;;

    return chapters
});

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
</style>~/core/classes/interfaces/IStory