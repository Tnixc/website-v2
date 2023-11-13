<template>
  <h1 class="border-l-2 border-violet-500 bg-violet-200 p-4 text-5xl lg:p-6">
    ## Games
  </h1>
  <div
    class="border-b-2 border-l-2 border-violet-300 border-b-zinc-50 bg-gradient-to-t from-indigo-300/30 to-violet-200 p-4 lg:p-6"
  >
    <div class="flex flex-wrap gap-2">
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">
        Minecraft - Mainly building but I played 1.8 pvp too
      </p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">OSU std</p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">Project Sekai</p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">
        Genshin Impact (Not really 🙏)
      </p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">Cyberpunk 2077</p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">Va-11 Hall-A</p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">Bauldurs Gate 3</p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">
        Divinity Two Original Sin
      </p>
      <p class="bg-violet-50 p-4 ring-2 ring-violet-300">Cities Skylines 2</p>
    </div>
    <span class="block pt-4 text-zinc-600"
      >Inactive: Ultrakill, hollow knight, celeste, besiege, polybridge
      series</span
    >
  </div>
</template>
<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}
div > p {
  transition: all 0.2s ease-in-out;
}
div > p:hover {
  @apply shadow-xl;
}
h1 {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 0;
}
h1:hover {
  letter-spacing: 0.5ch;
}
</style>
