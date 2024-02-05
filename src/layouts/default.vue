<template>
    <Head>
        <Link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        <Meta property="og:url" content="http://localhost:3000"/>
    </Head>
    <header class="bg-slate-800 fixed w-full top-0 left-0 z-50">
        <div class="w-full relative py-5">
            <LazyContainer>
                <div class="hidden lg:flex items-center justify-between">
                    <nav class="flex items-center space-x-3">
                        <div class="logo text-4xl font-extrabold uppercase text-white"><NuxtLink to="/">logo</NuxtLink></div>
                        <!-- menu desktop -->
                        <ul class="flex items-center space-x-4">
                            <li class="font-semibold capitalize text-lg text-slate-300 hover:text-white duration-200" v-for="route,index in routes" :key="index">
                                <NuxtLink class="flex items-center gap-1" :to="route.path">
                                        <Icon :name="route.icon"/>
                                        {{ route.text }}
                                </NuxtLink>
                            </li>
                            <li class="font-semibold capitalize text-lg text-slate-300 hover:text-white duration-200 relative">
                                <div class="flex items-center gap-1 cursor-pointer list-type-event">
                                    tipo
                                    <Icon name="iconamoon:arrow-down-2-duotone"/>
                                    <ul class="list-type">
                                        <li v-for="path in dropdowList" class="py-1">
                                            <NuxtLink class="block hover:bg-slate-800 py-1 px-2 rounded" :to="`/type/${path.path}/1`">{{ path.name }}</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <!-- end menu desktop -->
                        
                    </nav>
                    <form @submit.prevent="searchForm" class="w-full max-w-[270px] relative">
                        <input v-model="searchInputValue" class="w-full px-[12px] py-[5px] rounded-full outline-none text-slate-800" type="text" name="search" placeholder="Procurar por..."/>
                        <span class="text-xl flex items-center justify-center absolute right-[12px] translate-y-[-50%] top-[50%] text-slate-800">
                            <Icon name="fluent:search-24-filled"/>
                        </span>
                    </form>
                </div>
                <div class="flex items-center justify-between lg:hidden">
                    <nav class="flex items-center text-white gap-2">
                        <button @click="nav = true" class="w-11 h-11 text-2xl flex items-center justify-center cursor-pointer">
                            <Icon name="gravity-ui:bars"/>
                        </button>
                        <div class="logo text-4xl font-extrabold uppercase text-white">
                            <NuxtLink to="/">logo</NuxtLink>
                        </div>
                    </nav>
                    <button @click="searchMobile = true" class="w-10 h-10 flex items-center justify-center text-2xl rounded-full bg-white text-slate-800">
                        <Icon name="fluent:search-24-filled"/>
                    </button>
                </div>
                <div v-show="nav" class="z-20 w-full absolute top-0 left-0 text-white lg:hidden">
                    <div class="py-6 w-full h-screen min-h-[500px] max-w-[300px] bg-slate-800">
                        <div class="">
                            <div class="px-6 flex items-center gap-3 mb-11">
                                <button @click="nav = false" class="w-10 h-10 inline-flex items-center justify-center bg-white text-slate-800 rounded-full text-2xl">
                                    <Icon name="majesticons:close"/>
                                </button>
                                <div class="logo text-4xl font-extrabold uppercase text-white">
                                    <NuxtLink @click="nav = false" to="/">logo</NuxtLink>
                                </div>
                            </div>
                            <!-- menu mobile -->
                            <ul class="text-left">
                                <li v-for="route,index in routes" :key="index" class="px-6 capitalize mb-4 text-xl">
                                    <NuxtLink @click="nav = false" :to="route.path">
                                        <Icon :name="route.icon"/>
                                        {{ route.text }}
                                    </NuxtLink>
                                </li>
                                <li class="px-6 capitalize mb-4 text-xl">
                                    <div class=" cursor-pointer" @click="mobileType = !mobileType">
                                        <Icon name="iconamoon:arrow-down-2-duotone"/>
                                        tipo
                                        <ul v-show="mobileType" class="bg-slate-600 py-1 px-2 rounded mt-2">
                                            <li v-for="path in dropdowList" class="py-1">
                                                <NuxtLink @click="nav = false" class="block hover:bg-slate-800 py-1 px-2 rounded" :to="`/type/${path.path}/1`">{{ path.name }}</NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <!-- end menu mobile -->
                        </div>
                    </div>
                </div>
                <div v-show="searchMobile" class="absolute w-full h-full bg-slate-800 top-[50%] left-0 px-3 translate-y-[-50%] block lg:hidden">
                    <form @submit.prevent="searchForm" class="w-full h-full flex items-center">
                        <input v-model="searchInputValue" class="w-full px-[12px] py-[5px] rounded-full outline-none text-slate-800" type="text" name="busca" placeholder="Procurar por..."/>
                    </form>
                    <button @click="searchMobile = false"  class="absolute text-white translate-y-[-50%] top-[50%] right-4 w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-xl">
                        <Icon name="majesticons:close"/>
                    </button>
                </div>
            </LazyContainer>
        </div>
    </header>
    <slot/>

    <footer>
        <div class="bg-slate-800">
            <LazyContainer>
                <ul class="flex items-center justify-center gap-5 text-white py-2 text-xs md:text-base">
                    <li class="capitalize">
                        <NuxtLink to="/">Termos de uso</NuxtLink>
                    </li>
                    <li class="capitalize">
                        <NuxtLink to="/">Contato</NuxtLink>
                    </li>
                    <li class="capitalize">
                        <NuxtLink to="/">Lista de A-Z</NuxtLink>
                    </li>
                    <li class="capitalize">
                        <NuxtLink to="/">F,A,Q</NuxtLink>
                    </li>
                    <li class="capitalize">
                        <NuxtLink to="/">DMCA</NuxtLink>
                    </li>
                </ul>
            </LazyContainer>
        </div>
        <div class="py-6 bg-slate-400">
            <LazyContainer>
                <h3 class="text-base flex flex-wrap items-end justify-center gap-4 text-slate-800 mb-3"><span class="text-xl font-bold">Lista de A-Z</span><span class="text-xl">|</span><span class="text-center">Procurando séries alfabeticamente ordenadas de A para Z</span></h3>
                <ul class="flex items-center flex-wrap justify-center gap-1 mb-6">
                    <li v-for="letra,index in alfabeto" :key="index">
                        <NuxtLink class="text-white bg-slate-800 hover:bg-slate-700 duration-200 px-2 py-1 min-w-7 text-sm text-center inline-block rounded" to="/">{{ letra }}</NuxtLink>
                    </li>
                </ul>
                <p class="text-xs max-w-2xl mx-auto text-center">Direitos autorais e marcas para mangás, e outros materiais promocionais são mantidos por seus respectivos proprietários e a sua utilização é permitida nos termos da cláusula de uso justo da Lei de Direitos Autorais Americana. (Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the U.S. Copyright Law.)</p>
            </LazyContainer>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { routes } from '~/constants';

const nav:Ref<boolean> = ref(false);
const searchMobile:Ref<boolean> = ref(false);
const alfabeto:string[] = ['#','0-9','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const searchInputValue:Ref<string> = ref('');
const mobileType:Ref<boolean> = ref(false);

const dropdowList:Array<{name:string, path:string}> = [
    {
        name:"mangá",
        path:"manga",
    },
    {
        name:"one-shit",
        path:"one-shit",
    },
    {
        name:"doujinshi",
        path:"doujinshi",
    },
    {
        name:"light-novel",
        path:"light novel",
    },
    {
        name:"manhwa",
        path:"manhwa",
    },
    {
        name:"manhua",
        path:"manhua",
    },
    {
        name:"comic",
        path:"comic",
    },
]

const searchForm = async ():Promise<void> => {
    searchInputValue.value = searchInputValue.value.trim();

    if(searchInputValue.value === '') return;
    await navigateTo(`/search/?busca=${ searchInputValue.value.toLowerCase() }`);
    searchMobile.value = false;
    searchInputValue.value = '';
}
</script>

<style scoped>
.list-type-event .list-type{
    @apply hidden absolute top-full left-0 bg-slate-600 py-4 px-5 min-w-56 rounded
}
.list-type-event:hover .list-type{
    @apply block text-base font-normal
}
</style>