<template>
  <h1 class="text-7xl lg:text-9xl"># Projects</h1>
  <h2 class="text-xl text-zinc-600 lg:text-5xl">## The good stuff</h2>
  <div
    class="mt-10 flex flex-col gap-2 bg-zinc-200 p-2 lg:grid lg:auto-rows-auto lg:grid-cols-3"
  >
    <div
      class="h-full overflow-hidden border-2 border-blue-600 bg-zinc-100 transition-all duration-500 hover:shadow-lg lg:col-span-3"
    >
      <div class="grid h-full lg:grid-cols-2">
        <div class="p-8">
          <h1 class="text-2xl">Blog</h1>
          <p class="pt-2 text-zinc-500">
            I was scratching the surface of Nuxt with this one, planning to
            explore it more in the future. I did already learn a lot from
            building this in one afternoon lol. I haven't written anything much
            here but I feel like this is something every frontend dev should
            have made once right.
          </p>
          <a class="underline" target="_blank" href="https://blog.tnixc.space"
            >https://blog.tnixc.space</a
          >
        </div>
        <div class="blog img"></div>
      </div>
    </div>
    <div
      class="row-span-1 h-full overflow-hidden border-2 border-fuchsia-600 bg-zinc-100 p-8 transition-all duration-500 hover:shadow-lg"
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
      class="h-full overflow-hidden border-2 border-indigo-600 bg-zinc-100 transition-all duration-500 hover:shadow-lg lg:col-span-2"
    >
      <div class="grid h-full lg:grid-cols-2">
        <div class="p-8">
          <h1 class="text-2xl">Elemental</h1>
          <p class="pt-2 text-zinc-500">
            A website to help you with chemistry calculations. Built with Vue
            and TypeScript, it mainly processes data from a json and matches it
            to the input.
          </p>
          <a
            class="underline"
            target="_blank"
            href="https://elemental-mocha.vercel.app"
            >https://elemental-mocha.vercel.app</a
          >
        </div>
        <div class="elemental img"></div>
      </div>
    </div>
    <div class="col-span-2 flex flex-col gap-2">
      <div
        class="h-full overflow-hidden border-2 border-blue-600 bg-zinc-100 p-4 transition-all duration-500 hover:shadow-lg"
      >
        <h1 class="text-2xl">Website v2</h1>
        <p class="pt-2 text-zinc-500">
          My personal website. This one. Who doesn't love a bit of recursion?
          Made with vue and tailwind
        </p>
        <a class="underline" target="_blank" href="https://tnixc.space"
          >https://tnixc.space</a
        >
      </div>
      <div
        class="h-full overflow-hidden border-2 border-purple-600 bg-zinc-100 p-4 transition-all duration-500 hover:shadow-lg"
      >
        <h1 class="text-2xl">Website v1</h1>
        <p class="pt-2 text-zinc-500">
          An old version of my website. It was pretty bad.
        </p>
        <a class="underline" href="https://old-v1.vercel.app/" target="_blank"
          >https://old-v1.vercel.app/</a
        >
        <br />
        <a
          class="underline"
          target="_blank"
          href="https://github.com/Tnixc/website"
          >https://github.com/Tnixc/website</a
        >
      </div>
    </div>
    <div
      class="col-span-1 row-span-1 flex h-full flex-col justify-center overflow-hidden border-2 border-purple-600 bg-zinc-100 p-8 pb-0 transition-all duration-500 hover:shadow-lg"
    >
      <h1 class="text-2xl">Dotfiles</h1>
      <p class="pt-2 text-zinc-500">
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
    <div
      class="h-full overflow-hidden border-2 border-violet-600 bg-zinc-100 transition-all duration-500 hover:shadow-lg lg:col-span-1"
    >
      <div class="p-8">
        <h1 class="text-2xl">disc-collection</h1>
        <p class="pt-2 text-zinc-500">
          My quickCss for discord. Regularly updated(hopefully)
        </p>
        <a
          class="underline"
          target="_blank"
          href="https://github.com/Tnixc/disc-collections"
          >https://github.com/Tnixc/disc-collections</a
        >
      </div>
    </div>
    <div
      class="col-span-2 flex h-full flex-col justify-center overflow-hidden border-2 border-purple-600 bg-zinc-100 p-8 pb-0 transition-all duration-500 hover:shadow-lg"
    >
      <h1 class="text-2xl">UI-collection</h1>
      <p class="pt-2 text-zinc-500">
        a repo where I recreate cool UI components from other websites. Mainly
        for fun. I would like to make a website to showcase it someday.
      </p>
      <a
        class="underline"
        target="_blank"
        href="https://github.com/Tnixc/ui-collection"
        >https://github.com/Tnixc/ui-collection</a
      >
      <img
        class="my-4 max-h-40"
        src="https://github-readme-stats.vercel.app/api/pin/?username=Tnixc&repo=ui-collection&theme=graywhite"
        alt=""
      />
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}
.img {
  @apply h-full w-full bg-cover bg-left-top bg-no-repeat;
}
.elemental {
  background-image: url("../assets/elemental.webp");
}
.blog {
  background-image: url("../assets/blog.webp");
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
