<template>
    <Head>
        <Title>{{ chapter?.name_story }} capítulo {{ chapter?.chapter_number }}</Title>
        <Meta name="description" :content="`Ler ${ chapter?.name_story } capítulo ${ chapter?.chapter_number }`"/>
        <Meta property="og:title" :content="chapter?.name_story"/>
        <Meta property="og:description" :content="`Ler ${ chapter?.name_story } capítulo ${ chapter?.chapter_number }`"/>
        <Meta property="og:image" :content="chapter?.image"/>
        <Meta name="robots" content="index,follow"/>
        <Meta name="twitter:title" :content="chapter?.name_story"/>
        <Meta name="twitter:description" :content="`Ler ${ chapter?.name_story } capítulo ${ chapter?.chapter_number }`"/>
        <Meta name="twitter:image" :content="chapter?.image"/>
        <Meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <Page>
        <section class="py-6">
            <Container>
                <h1 class="text-center text-slate-800 font-bold text-xl mb-2 capitalize">{{ chapter?.name_story }} capítulo {{ chapter?.chapter_number }}</h1>
                <h2 class="text-center text-sm text-slate-500 mb-2">Todos capítulos estão em <NuxtLink class="text-slate-950 hover:text-slate-800 font-extrabold" :to="`/manga/${chapter?.slug_story}`">{{ chapter?.name_story }}</NuxtLink></h2>
                <div class="text-center mb-2">
                    <a class="bg-cyan-500 text-white py-2 px-3 capitalize inline-block" href="https://www.linkedin.com/in/alan-tavares-5a3363247/" target="_blank">
                        <span class="relative bottom-[2px]">
                            <Icon name="bi:linkedin"/>
                        </span>
                        likedin
                    </a>
                </div>
                <h3 class="text-slate-500 text-center text-sm">Ler <span class="font-extrabold">{{ chapter?.name_story }}</span> Capítulo {{ chapter?.chapter_number }} Online , <span class="font-extrabold">{{ chapter?.name_story }}</span> Online, Disponibilizar offline <span class="font-extrabold">{{ chapter?.name_story }}</span></h3>
            </Container>
        </section>
        <section class="py-6" v-if="chapter?.chapter_pages !== undefined && chapter?.chapter_number !== 0">
            <Container>
                <ClientOnly>
                    <div class="mb-3 max-w-[200px] md:max-w-md relative">
                        <div @click="chapter_list_visible = !chapter_list_visible" :class="{'rounded-b':!chapter_list_visible}" class="text-white bg-slate-600 py-1 px-2 cursor-pointer flex items-center justify-between rounded-t">
                            <span class="capitalize text-sm md:text-base">
                                <Icon name="wpf:books"/>
                                {{ chapter?.chapter_name }}
                            </span>
                            <span class="text-2xl md:text-3xl inline-flex items-center duration-200" :class="{'rotate-180':chapter_list_visible}">
                                <Icon name="ri:arrow-drop-down-line"/>
                            </span>
                        </div>
                        <ul v-if="chapter_list_visible" class="list_chapters">

                            <template v-for="chapter_select,index in chapter?.all_chapters">
                                <li class="my-1">
                                    <NuxtLink :to="`/manga/${chapter_select.story_slug}/${chapter_select.chapter_name}`" class="block p-2 hover:bg-slate-800" :class="{'bg-slate-800':chapter_select.chapter_name == chapter?.chapter_name}">
                                        <Icon name="raphael:book"/>
                                        {{ chapter_select.chapter_name }}
                                    </NuxtLink>
                                </li>
                            </template>

                        </ul>
                    </div>
                </ClientOnly>
                <div class="control-chapter">
                    <div>
                        <div class="content-value">capítulo: {{ chapter?.chapter_number }}</div>
                        <div class="content-value">Páginas: {{ chapter?.chapter_pages.length }}</div>
                    </div>
                    <div>
                        <NuxtLink v-if="chapter?.chapter_number > 1" class="content-value" :to="`/manga/${chapter?.slug_story}/capitulo_${chapter?.chapter_number - 1}`">anterior</NuxtLink>
                        <NuxtLink v-if="chapter?.count_chapters > 1 && chapter?.chapter_number < chapter?.count_chapters" class="content-value" :to="`/manga/${chapter?.slug_story}/capitulo_${chapter?.chapter_number + 1}`">Próximo</NuxtLink>
                    </div>
                </div>
            </Container>
        </section>
        <section class="py-6">
            <Container class="max-w-4xl">
                <template v-if="chapter?.chapter_pages == undefined || chapter?.chapter_pages.length == 0">
                    <figure>
                        <img src="/images/404.jpg" srcset="/images/404.jpg" alt="not found"/>
                    </figure>
                </template>
                <template v-else>
                    <div class="container-pages">
                        <figure v-for="page,index in chapter?.chapter_pages" :key="index" class="bg-slate-800">
                            <img class="max-w-full mx-auto" :src="`${chapter?.chapter_uri + page.file_name}`" :srcset="`${chapter?.chapter_uri + page.file_name}`" :alt="`${chapter?.chapter_name}`" loading="lazy"/>
                        </figure>
                    </div>
                </template>
            </Container>
        </section>
        <section class="py-6" v-if="chapter?.chapter_pages !== undefined">
            <Container>
                <LazyComentarios/>
            </Container>
        </section>
    </Page>
</template>

<script setup lang="ts">
import type IReadPage from '~/core/interfaces/IReadPage';
const route = useRoute();
const chapter_list_visible:Ref<boolean> = ref(false);

const { data:chapter } = await useAsyncData(
    `chapter_${route.params.chapter[1]}_${route.params.chapter[0]}`,
    async () => $fetch("http://192.168.11.7/panel-scan/api/chapter.php",{
        params:{
            slug: route.params.chapter[0],
            chapter: route.params.chapter[1]
        },
        headers:{
            "Content-Type": "application/json",
        }
    }),
    {
        watch: [route],
        transform: (data) => typeof(data) =="string" ? JSON.parse(data) as IReadPage : data as IReadPage,
    }
)

</script>


<style scoped>

.list_chapters{
    @apply absolute z-10 bg-slate-600 w-full top-full left-0 max-h-96 overflow-y-auto text-white rounded-b
}

.list_chapters::-webkit-scrollbar{
    @apply w-[5px] 
}
.list_chapters::-webkit-scrollbar-track{
    @apply bg-slate-400
}
.list_chapters::-webkit-scrollbar-thumb{
    @apply bg-slate-600
}
.control-chapter{
    @apply flex items-center justify-between flex-wrap
}
.control-chapter > div {
    @apply flex items-center justify-between gap-2
}

.control-chapter .content-value{
    @apply py-2 px-3 bg-slate-400 font-bold text-white rounded-full text-xs
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