<template>
  <h1
    class="ml-24 mt-24 text-5xl bg-blue-200 w-7/12 border-l-2 border-t-2 border-blue-500 shadow-xl transition-all hover:border-l-8 "
  >
    ## Contact + Links
  </h1>
  <div
    id="container" class="ml-24 p-12 bg-blue-100/40 w-7/12 border-l-2 border-blue-300 backdrop-blur-lg border-b-zinc-50 border-b-2"
  >
    <div class="flex gap-2">
      <div v-thover="{ borderWidth: 4, scale: 1.2 }" class="p-2 bg-blue-50 flex items-center">
        <i class="p-2 scale-125 fa-brands fa-discord"></i>
        <p class="p-2 font-xl">Tnixc</p>
      </div>
      <a v-thover="{ borderWidth: 4, scale: 1.2 }" class="li p-2 bg-blue-50 flex items-center" href="https://twitter.com/_Tnixc" target="_blank">
        <i class="p-2 scale-125 fa-brands fa-x-twitter"></i>
        <p class="p-2 font-xl">_Tnixc</p>
      </a>
      <div v-thover="{ borderWidth: 4, scale: 1.2 }" class="p-2 bg-blue-50 flex items-center">
        <i class="p-2 scale-125 fa-solid fa-envelope"></i>
        <p class="p-2 font-xl">tnixxc@gmail.com</p>
      </div>

      <a
        v-thover="{ borderWidth: 4, scale: 1.2 }" class="li p-2 bg-blue-50 flex items-center"
        href="https://github.com/Tnixc"
        target="_blank"
      >
        <i class="p-2 scale-125 fa-brands fa-github"></i>
        <p class="p-2 font-xl">Tnixc</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}
.li {
  @apply relative;
}
.li::after {
  @apply absolute h-0 bottom-0 left-0 right-0 bg-blue-600 transition-all;
  content: "";
}
.li:hover::after {
  @apply h-1;
}

</style>
