<template>
  <header class="font-medieval h-screen w-screen text-center bg-[url('assets/images/home-bg-flou.jpg')] 3xl:bg-[url('assets/images/home-bg-flou-xl.jpg')]">
    <div class="bg-black/50 h-full w-full flex flex-col justify-around items-center gap-8">
      <div class="flex flex-col justify-center border-y-2 border-y-white mt-32 py-10 px-16">
        <slot />
      </div>

      <nuxt-link to="story" class="btn relative outline-none text-2xl bg-transparent" >
        <svg viewBox="0 0 180 60" class="absolute left-0 top-0 fill-none stroke-red">
          <rect  x="0" y="0" width="100" height="100" stroke="red" />
        </svg>
        <svg viewBox="0 0 180 60"
             class="btn-line absolute left-0 top-0 fill-none stroke-white transition-all duration-1000 w-full h-full">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="" />
          <polyline points="180,0 180,60 0,60 0,0 180,0" class="" />
        </svg>
        <span class="block py-3 px-6">
          Découvrir
        </span>
      </nuxt-link>
    </div>
  </header>
</template>

<style>
h1 {
  @apply text-8xl mb-8;
}
h2 {
  @apply italic text-5xl;
}
</style>

<style scoped>
.btn svg {
  stroke-dasharray: 180 480;
  stroke-dashoffset: 180;
}

.btn:hover svg {
  stroke-dashoffset: -480;
}
</style>

<script lang="ts" setup>
import {defineNuxtConfig} from "nuxt/config";

defineNuxtConfig({
  content: {
    markdown: {
      anchorLink: false
    }
  }
});
const chapters = await queryContent('/chapters').findOne();

console.log(chapters);
</script>
