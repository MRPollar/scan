<template>
    <Head>
        <Title>{{ story?.name }} capítulo {{ chapterNumber }}</Title>
        <Meta name="description" :content="story?.sinopse"/>
        <Meta property="og:title" :content="story?.name"/>
        <Meta property="og:description" :content="story?.sinopse"/>
        <Meta property="og:image" :content="story?.capa"/>
        <Meta name="robots" content="index,follow"/>
        <Meta name="twitter:title" :content="story?.name"/>
        <Meta name="twitter:description" :content="story?.sinopse"/>
        <Meta name="twitter:image" :content="story?.capa"/>
        <Meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <Page>
        <section class="py-6">
            <Container>
                <h1 class="text-center text-slate-800 font-bold text-xl mb-2 capitalize">{{ story?.name }} capítulo {{ chapterNumber }}</h1>
                <h2 class="text-center text-sm text-slate-500 mb-2">Todos capítulos estão em <NuxtLink class="text-slate-950 hover:text-slate-800 font-extrabold" :to="`/manga/${story?.slug}`">{{ story?.name }}</NuxtLink></h2>
                <div class="text-center mb-2">
                    <a class="bg-cyan-500 text-white py-2 px-3 capitalize inline-block" href="https://www.linkedin.com/in/alan-tavares-5a3363247/" target="_blank">
                        <span class="relative bottom-[2px]">
                            <Icon name="bi:linkedin"/>
                        </span>
                        likedin
                    </a>
                </div>
                <h3 class="text-slate-500 text-center text-sm">Ler <span class="font-extrabold">{{ story?.name }}</span> Capítulo {{ chapterNumber }} Online , <span class="font-extrabold">{{ story?.name }}</span> Online, Disponibilizar offline <span class="font-extrabold">{{ story?.name }}</span></h3>
            </Container>
        </section>
        <section class="py-6" v-if="storyChapter !== undefined">
            <Container>
                <div class="control-chapter">
                    <div>
                        <NuxtLink v-if="chapterNumber > 1" class="content-value" :to="`/manga/${story?.slug}/${chapterNumber - 1}`">anterior</NuxtLink>
                        <div class="content-value">capítulo atual: {{ chapterNumber }}</div>
                        <div class="content-value">Páginas: {{ storyChapter.pages.length }}</div>
                    </div>
                    <NuxtLink v-if="chapterNumber < Number(story?.chapters)" :to="`/manga/${story?.slug}/${chapterNumber + 1}`" class="content-value">Próximo</NuxtLink>
                </div>
            </Container>
        </section>
        <section class="py-6">
            <Container class="max-w-4xl">
                <template v-if="storyChapter == undefined">
                    <figure>
                        <img src="/images/404.jpg" srcset="/images/404.jpg" alt="not found"/>
                    </figure>
                </template>
                <template v-else>
                    <div class="container-pages">
                        <figure v-for="page,index in storyChapter.pages" :key="index" class="bg-slate-800">
                            <img class="max-w-full mx-auto" :src="`/images/chapters/${page}`" :srcset="`/images/chapters/${page}`" :alt="`${story?.name}-página-${index + 1}`" loading="lazy"/>
                        </figure>
                    </div>
                </template>
            </Container>
        </section>
        <section class="py-6" v-if="storyChapter !== undefined">
            <Container>
                <Comentarios/>
            </Container>
        </section>
    </Page>
</template>

<script lang="ts" setup>
import type IStory from '~/interfaces/IStory';
import type IChapter from '~/interfaces/IChapter';
import { items, chapter } from '~/constants';
const route = useRoute();
const storyFind:IStory | undefined = items.find((story:IStory) => story.slug == route.params.chapter[0]);

if(storyFind == undefined || route.params.chapter.length > 2){
    await navigateTo(`/manga`);
}

const chapterNumber:Ref<number> = ref(Number(route.params.chapter[1]));
const story:Ref<IStory | undefined> = ref(storyFind);

const newChapter:IChapter | undefined = chapter.find((chap:IChapter) =>  chap.serieId == story.value?.id && chap.chapter == chapterNumber.value);
const storyChapter:Ref<IChapter | undefined> = ref();
    
if(newChapter != undefined)
    storyChapter.value = newChapter;
</script>

<style scoped>
.control-chapter{
    @apply flex items-center justify-between
}
.control-chapter > div {
    @apply flex items-center justify-between gap-2
}

.control-chapter .content-value{
    @apply py-2 px-3 bg-slate-400 font-bold text-white rounded-full
}

.container-pages{
    @apply relative
}
.container-pages::before{
    @apply absolute top-0 left-0 w-full h-full
}
.container-pages::before{
    content: '';
}
</style>