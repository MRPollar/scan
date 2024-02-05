<template>
    <div class="flex items-center justify-center pb-3">
        <nav aria-label="navegar entre as páginas" class="overflow-hidden text-white rounded bg-slate-800">
            <ul class="flex">
                <!-- exibe caso a página atual seja maior que 3 -->
                <li v-if="page > 3"><NuxtLink class="link-nav" :to="`${baseUrl}/1`">
                    <Icon name="fe:arrow-left"/>
                </NuxtLink></li>
                <!-- exibe caso a página atual seja maior que 3 -->

                <!-- mostra até duas anteriores -->
                <template v-for="num in [2,1]" :key="num">
                    <li v-if="page - num > 0"><NuxtLink class="link-nav" :to="`${baseUrl}/${ page - num }`">{{ page - num }}</NuxtLink></li>
                </template>
                <!-- mostra até duas anteriores -->

                <!-- mostra página atual -->
                <li class="bg-slate-600"><NuxtLink class="link-nav" :to="`${baseUrl}/${page}`">{{ page }}</NuxtLink></li>
                <!-- mostra página atual -->

                <!-- mostra até duas páginas posteriores -->
                <template v-for="num in [1,2]" :key="num">
                    <li v-if="page + num <= total"><NuxtLink class="link-nav" :to="`${baseUrl}/${page + num}`">{{ page + num }}</NuxtLink></li>
                </template>
                <!-- mostra até duas páginas posteriores -->

                
                <!-- exibe quando a tem mais de três páginas e some quando o total é mostrado -->
                <li v-if="page === (total - 3)"><NuxtLink class="link-nav" :to="`${baseUrl}/${total}`">
                    <Icon name="fe:arrow-right"/>
                </NuxtLink></li>
                <!-- exibe quando a tem mais de três páginas e some quando o total é mostrado -->
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">

type Pagination = {
    baseUrl:string,
    page:number,
    total:number
}

defineProps({
    baseUrl:{
        type:String,
        default: "/"
    },
    page:{
        type:Number,
        default: 1
    },
    total:{
        type:Number,
        default: 1
    }
}) as Pagination
</script>

<style scoped>
    .link-nav{
        @apply inline-flex items-center justify-center h-8 min-w-8 hover:bg-slate-600 duration-200
    }
</style>