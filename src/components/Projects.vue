<template>
  <h1 class="text-7xl lg:text-9xl"># Projects</h1>
  <h2 class="text-xl lg:text-5xl text-zinc-600">## The good stuff</h2>
  <div class="mt-10 p-2 bg-zinc-200 gap-2 flex flex-col lg:grid lg:grid-cols-3 lg:auto-rows-auto">
    <div
      class="h-full border-2 border-white bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden lg:col-span-2"
    >
    <div class="grid lg:grid-cols-2 h-full">
      <div class="p-8">
        <h1 class="text-2xl">Elemental</h1>
        <p class="pt-2 text-zinc-500">A website to help you with chemistry calculations. Built with Vue and TypeScript, it mainly processes data from a json and matches it to the input.</p>
        <a class="underline" href="https://elemental-mocha.vercel.app">https://elemental-mocha.vercel.app</a>
      </div>
      <div class="elemental h-full shadow-xl"></div>

    </div>
  </div>
    <div
      class="h-full border-2 border-white bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
    >
      <div class="catppuccin py-6 drop-shadow-lg"></div>
      <h1 class="text-2xl">Maintainer at catppuccin</h1>
      <p class="pt-2 text-zinc-500">A very nice pastel color scheme. Mainly writing userstyles and bug hunting. Nice community too.</p>
      <a class="underline" href="https://github.com/catppuccin">https://github.com/catppuccin</a>
    </div>
    <div
      class="h-full border-2 border-white bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
    >
      <h1 class="text-2xl">Dotfiles</h1>
    </div>
    <div class="flex flex-col gap-2 col-span-2">
      <div
        class="h-full border-2 border-white bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
      >
        <h1 class="text-2xl">Website v2</h1>
      </div>
      <div
        class="h-full border-2 border-white bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
      >
        <h1 class="text-2xl">Website v1</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}
.elemental {
  background-image: url("../assets/elemental.webp");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.catppuccin {
  background-image: url("../assets/catppuccin.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 4rem;
  height: 4rem;
}
</style>
