<template>
    <LazyPage>
        <section class="py-6">
            <LazyContainer>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="col-span-1 lg:col-span-2">
                        <div class="rounded bg-slate-200 mb-3">
                            <LazyBarSection>lista de mangás</LazyBarSection>
                            <div class="py-4 px-6">
                                <ClientOnly>
                                    <ul class="pb-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative">
                                        <!-- <li v-for="filter,index in filters" :key="index" class="capitalize text-xs">
                                            <button
                                                @click="openOptions(index)"
                                                class="w-full bg-slate-500 text-white hover:bg-slate-800 py-1 cursor-pointer"
                                                :class="{'bg-slate-800':filter.open}"
                                            >
                                                {{ filter.type }}: {{ filter.selected }}
                                                <LazyIcon name="iconamoon:arrow-down-2-duotone"/>
                                            </button>
                                            <ul v-show="filter.open" class="scroll-style">
                                                <li v-for="option,jindex in filter.options" :key="jindex" @click="selectedOptions(index,option)" class="text-slate-800 cursor-pointer">
                                                    <span :class="{'text-green-50':filter.selected === option}">
                                                        <LazyIcon name="gg:check-o"/>
                                                    </span>
                                                    {{ option }}
                                                </li>
                                            </ul>
                                        </li> -->
                                        <li class="capitalize text-xs">
                                            <button class="w-full text-white bg-slate-800 py-1 cursor-pointer">
                                                <LazyIcon name="vaadin:search"/>
                                                Buscar
                                            </button>
                                        </li>
                                    </ul>
                                </ClientOnly>
                                <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    <!-- <template v-for="story,index of items" :key="index">
                                        <StoryCardH :story="story"/>
                                    </template> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside class="col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
                        <div class="bg-slate-200 rounded mb-3">
                            <LazyBarSection>Os 10 mais lidos</LazyBarSection>
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
                            <LazyBarSection>Gêneros</LazyBarSection>
                            <div class="grid grid-cols-3 py-4 px-6">
                                <!-- <div v-for="genre,index in genres" :key="index" class="capitalize hover:text-cyan-500 duration-200">
                                    <NuxtLink :to="`/genres/${genre.slug}`">{{ genre.genre }}</NuxtLink>
                                </div> -->
                            </div>
                        </div>
                    </aside>
                </div>
            </LazyContainer>
        </section>
    </LazyPage>
</template>



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