<template>
    <div  class="skeleton"></div>
</template>

<style scoped>
    .skeleton{
        animation-name: skeleton;
        animation-duration: 900ms;
        animation-delay: linear;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        
    }
    .skeleton{
        @apply bg-slate-300
    }

    @keyframes skeleton {
        100%,0%{
            @apply bg-slate-300
        }
        50%{
            @apply bg-slate-400
        }
    }
</style>