<template>
    <header class="py-5 bg-slate-800 fixed w-full top-0 left-0 z-50">
        <Container>
            <div class="flex items-center justify-between">
                <nav class="flex items-center space-x-3">
                    <div class="logo text-4xl font-extrabold uppercase text-white"><NuxtLink to="/">logo</NuxtLink></div>
                    <ul class="flex items-center space-x-4">
                        <li class="font-semibold capitalize text-lg text-slate-300 hover:text-white duration-200" v-for="route,index in routes" :key="index">
                            <NuxtLink class="flex items-center gap-1" :to="route.path">
                                <template v-if="!route.dropdown">
                                    <Icon :name="route.icon"/>
                                    {{ route.text }}
                                </template>
                                <template v-else>
                                    {{ route.text }}
                                    <Icon :name="route.icon"/>
                                </template>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <form class="w-full max-w-[270px] relative">
                    <input class="w-full px-[12px] py-[5px] rounded-full outline-none text-slate-800" type="text" name="search" placeholder="Procurar por..."/>
                    <span class="text-xl flex items-center justify-center absolute right-[12px] translate-y-[-50%] top-[50%] text-slate-800">
                        <Icon name="fluent:search-24-filled"/>
                    </span>
                </form>
            </div>
        </Container>
    </header>
    <slot/>

    <footer>
        <div class="bg-slate-800">
            <Container>
                <ul class="flex items-center justify-center gap-7 text-white py-2">
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
            </Container>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { routes } from '~/constants';
</script>