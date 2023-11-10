<template>
  <h1 class="text-7xl lg:text-9xl"># Projects</h1>
  <h2 class="text-xl lg:text-5xl text-zinc-600">## The good stuff</h2>
  <div
    class="mt-10 p-2 bg-zinc-200 gap-2 flex flex-col lg:grid lg:grid-cols-3 lg:auto-rows-auto"
  >
    <div
      class="h-full border-2 border-indigo-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden lg:col-span-2"
    >
      <div class="grid lg:grid-cols-2 h-full">
        <div class="p-8">
          <h1 class="text-2xl">Elemental</h1>
          <p class="pt-2 text-zinc-500">
            A website to help you with chemistry calculations. Built with Vue
            and TypeScript, it mainly processes data from a json and matches it
            to the input.
          </p>
          <a class="underline" target="_blank" href="https://elemental-mocha.vercel.app"
            >https://elemental-mocha.vercel.app</a
          >
        </div>
        <div class="elemental h-full shadow-xl"></div>
      </div>
    </div>
    <div
      class="h-full border-2 border-fuchsia-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-8"
    >
      <div class="catppuccin py-6 drop-shadow-lg"></div>
      <h1 class="text-2xl">Maintainer at catppuccin</h1>
      <p class="pt-2 text-zinc-500">
        A very nice pastel color scheme. Mainly writing userstyles and bug
        hunting. Nice community too.
      </p>
      <a class="underline" target="_blank" href="https://github.com/catppuccin"
        >https://github.com/catppuccin</a
      >
    </div>
    <div
      class="h-full border-2 border-purple-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-8 pb-0 flex flex-col justify-center"
    >
      <h1 class="text-2xl">Dotfiles</h1>
      <p class="text-zinc-500 pt-2">
        My personal config files for my macOS setup
      </p>
      <a class="underline" target="_blank" href="https://github.com/Tnixc/dots"
        >https://github.com/Tnixc/dots</a
      >
      <img
        class="my-4 max-h-40"
        src="https://github-readme-stats.vercel.app/api/pin/?username=Tnixc&repo=dots&theme=graywhite"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-2 col-span-2">
      <div
        class="h-full border-2 border-blue-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
      >
        <h1 class="text-2xl">Website v2</h1>
        <p class="text-zinc-500 pt-2">
          My personal website. This one. Who doesn't love a bit of recursion?
          Made with vue and tailwind
        </p>
        <a class="underline" target="_blank" href="https://tnixc.space">https://tnixc.space</a>
      </div>
      <div
        class="h-full border-2 border-cyan-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-4"
      >
        <h1 class="text-2xl">Website v1</h1>
        <p class="text-zinc-500 pt-2">
          An old version of my website. It was pretty bad. Made with vue
        </p>
        <a class="underline" target="_blank" href="https://github.com/Tnixc/website"
          >https://github.com/Tnixc/website</a
        >
      </div>
    </div>
    <div
      class="h-full border-2 border-purple-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden p-8 pb-0 flex flex-col justify-center col-span-2"
    >
      <h1 class="text-2xl">UI-collection</h1>
      <p class="text-zinc-500 pt-2">
        a repo where I recreate cool UI components from other websites. Mainly for fun. I would like to make a website to showcase it someday.
      </p>
      <a class="underline" target="_blank" href="https://github.com/Tnixc/ui-collection"
        >https://github.com/Tnixc/ui-collection</a
      >
      <img
        class="my-4 max-h-40"
        src="https://github-readme-stats.vercel.app/api/pin/?username=Tnixc&repo=ui-collection&theme=graywhite"
        alt=""
      />
    </div>
    <div
      class="h-full border-2 border-violet-600 bg-zinc-100 hover:shadow-lg transition-all duration-500 overflow-hidden lg:col-span-1"
    >
      <div class="p-8">
        <h1 class="text-2xl">disc-collection</h1>
        <p class="pt-2 text-zinc-500">
          My quickCss for discord. Regularly updated(hopefully)
        </p>
        <a class="underline" target="_blank" href="https://github.com/Tnixc/disc-collections"
          >https://github.com/Tnixc/disc-collections</a
        >
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
