<template>
  <h1 class="border-l-2 ml-48 text-5xl bg-violet-200 w-8/12 border-violet-500">
    ## Games
  </h1>
  <div
    class="border-l-2 ml-48 p-12 bg-gradient-to-t from-indigo-300/30 to-violet-200 w-8/12  border-violet-300 border-b-zinc-50 border-b-2"
  >
    <div class="flex gap-2 flex-wrap">
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">
        Minecraft - Mainly building but I played 1.8 pvp too
      </p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">OSU</p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">Project Sekai</p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">
        Genshin Impact (Not really 🙏)
      </p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">Cyberpunk 2077</p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">Va-11 Hall-A</p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">Bauldurs Gate 3</p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">
        Divinity Two Original Sin
      </p>
      <p class="p-4 ring-2 ring-violet-300 bg-violet-50">Cities Skylines 2</p>
    </div>
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
