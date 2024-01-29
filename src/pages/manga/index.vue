<template>
    <Page>
        <section class="py-6">
            <Container>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <BarSection>lista de mangás</BarSection>
                            <div class="py-4 px-6">
                                <ClientOnly>
                                    <ul class="pb-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
                                        <li v-for="filter,index in filters" :key="index" class="capitalize text-xs">
                                            <button
                                                @click="openOptions(index)"
                                                class="w-full bg-slate-500 text-white hover:bg-slate-800 py-1 cursor-pointer"
                                                :class="{'bg-slate-800':filter.open}"
                                            >
                                                {{ filter.type }}: {{ filter.selected }}
                                                <Icon name="iconamoon:arrow-down-2-duotone"/>
                                            </button>
                                            <ul v-show="filter.open" class="scroll-style">
                                                <li v-for="option,jindex in filter.options" :key="jindex" @click="selectedOptions(index,option)" class="text-slate-800 cursor-pointer">
                                                    <span :class="{'text-green-50':filter.selected === option}">
                                                        <Icon name="gg:check-o"/>
                                                    </span>
                                                    {{ option }}
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="capitalize text-xs">
                                            <button class="w-full text-white bg-slate-800 py-1 cursor-pointer">
                                                <Icon name="vaadin:search"/>
                                                Buscar
                                            </button>
                                        </li>
                                    </ul>
                                </ClientOnly>
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
import type IOption from "~/interfaces/IOption";
import { genres, items } from '~/constants';
const route = useRoute();

const filters:Ref<IOption[]> = ref([
    {
        open:false,
        type:"gênero",
        selected: route.query?.genero != null ? String(route.query.genero) : "todos",
        icon: "",
        options:[
            "todos",
            "4-Koma",
            "4koma",
            "Ação",
            "Adulto",
            "Aliens",
            "Animais",
            "Artes",
            "Artes Marciais",
            "Aventura",
            "Carros",
            "Comédia",
            "Crianças",
            "Crime",
            "Culinária",
            "Databook",
            "Demônios",
            "Doujinshi",
            "Drama",
            "Ecchi",
            "Escolar",
            "Espaço",
            "Esportes",
            "Estratégia",
            "Fantasia",
            "Ficção",
            "Gender Bender",
            "Gore",
            "Gyaru",
            "Harem",
            "Hentai",
            "Histórico",
            "Horror",
            "Isekai",
            "Jogo",
            "Jogos",
            "Josei",
            "Maduro",
            "Mafia",
            "Magia",
            "Mecha",
            "Militar",
            "Mistério",
            "Monstros",
            "Música",
            "Ninja",
            "One-shot",
            "Oneshot",
            "Parodia",
            "Policial",
            "Psicológico",
            "Romance",
            "Samurai",
            "Sci-fi",
            "Seinen",
            "Shoujo",
            "Shoujo Ai",
            "Shounen",
            "Shounen Ai",
            "Shounen Ai",
            "Slice of Life",
            "Sobrenatural",
            "Sobrevivência",
            "Super Poderes",
            "Suspense",
            "Thriller",
            "Tragédia",
            "Vampiros",
            "Vida Escolar",
            "Yaoi",
        ]
    },
    {
        open:false,
        type: "status",
        selected: route.query?.status != null ? String(route.query.status) : "todos",
        icon: "",
        options:[
            "todos",
            "Em curso",
            "Completo",
            "Hiato"
        ]
    },
    {
        open:false,
        type: "tipo",
        selected: route.query?.tipo != null ? String(route.query.tipo) : "todos",
        icon: "",
        options:[
            "todos",
            "Manga",
            "Manhwa",
            "Manhua",
            "Comic",
            "Novel"
        ]
    },
    {
        open:false,
        type:"Ordenar por",
        selected: route.query?.ordem != null ? String(route.query.ordem) : "default",
        icon: "",
        options:[
            "default",
            "Z-A",
            "Atualização",
            "Adicionado",
            "Popular"
        ]
    }
]);

watch(() => route.query, async (newValue) => {
    filters.value[0].selected = newValue?.genero ? String(newValue.genero) : "todos";
    filters.value[1].selected = newValue?.status ? String(newValue.status) : "todos";
    filters.value[2].selected = newValue?.tipo ? String(newValue.tipo) : "todos";
    filters.value[3].selected = newValue?.ordem ? String(newValue.ordem) : "default";
})

const openOptions = (index:number) => {
    filters.value.map((val:IOption,i:number) => {
        if(index === i) return val;
        val.open = false;
        return val;
    })

    filters.value[index].open = !filters.value[index].open;
}
const selectedOptions = (index:number, value:string) => {
    filters.value[index].open = false;
    filters.value[index].selected = value;
}
</script>

<style scoped>
.scroll-style{
    @apply absolute bg-slate-400 w-full top-full left-0 py-4 px-2 grid grid-cols-5 gap-5 max-h-56 overflow-y-auto
}
.scroll-style::-webkit-scrollbar{
    @apply w-[5px]
}

.scroll-style::-webkit-scrollbar-track{
    @apply bg-slate-600
}
.scroll-style::-webkit-scrollbar-thumb{
    @apply bg-slate-800
}
</style>