<template>
  <div id="container" ref="target" class="ml-24 w-7/12 hover:shadow-xl">
    <h1
      class="mt-24 text-5xl bg-blue-200 border-l-2 border-t-2 border-blue-500"
    >
      ## Contact + Links
    </h1>
    <div
      class="p-12 bg-blue-100/40 border-l-2 border-blue-300 backdrop-blur-lg border-b-zinc-50 border-b-2"
    >
      <div class="flex gap-0.5 flex-wrap">
        <div
          v-thover="{ borderWidth: 4, scale: 1.2 }"
          class="p-2 bg-blue-50 flex items-center m-1 relative"
        >
          <i class="p-2 scale-125 fa-brands fa-discord"></i>
          <p class="p-2 font-xl">Tnixc</p>
        </div>
        <a
          v-thover="{ borderWidth: 4, scale: 1.2 }"
          class="li p-2 bg-blue-50 flex items-center m-1 relative"
          href="https://twitter.com/_Tnixc"
          target="_blank"
        >
          <i class="p-2 scale-125 fa-brands fa-x-twitter"></i>
          <p class="p-2 font-xl">_Tnixc</p>
        </a>
        <div
          v-thover="{ borderWidth: 4, scale: 1.2 }"
          class="p-2 bg-blue-50 flex items-center m-1 relative"
        >
          <i class="p-2 scale-125 fa-solid fa-envelope"></i>
          <p class="p-2 font-xl">tnixxc@gmail.com</p>
        </div>

        <a
          v-thover="{ borderWidth: 4, scale: 1.2 }"
          class="li p-2 bg-blue-50 flex items-center m-1 relative"
          href="https://github.com/Tnixc"
          target="_blank"
        >
          <i class="p-2 scale-125 fa-brands fa-github"></i>
          <p class="p-2 font-xl">Tnixc</p>
        </a>
        <div class="flex-grow w-full"></div>
        <div class="p-2 bg-blue-50 flex items-center m-1 relative">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tnixc&layout=compact&theme=catppuccin_latte&bg_color=00000000&hide_border=true"
            alt="A graph showing my most used languages"
          />
        </div>
        <div class="p-2 bg-blue-50 flex items-center m-1 relative">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Tnixc&show_icons=true&theme=catppuccin_latte&bg_color=00000000&hide_border=true&rank_icon=github"
            alt="A graph showing my github stats"
          />
        </div>
        <div class="flex-grow w-full pt-2 gap-2"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  // const x = elementX.value;
  // const y = elementY.value;
  // const height = elementHeight.value;
  // const width = elementWidth.value;
  // const xPercent = (x / width) * 100;
  // const yPercent = (y / height) * 100;
  // return `perspective(1000px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
  const MAX_ROTATION = 5;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    MAX_ROTATION / 2 -
    (elementX.value / elementWidth.value) * MAX_ROTATION
  ).toFixed(2);
  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
const cardTransformOpposite = computed(() => {
  const MAX_ROTATION = 5;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    MAX_ROTATION / 2 -
    (elementX.value / elementWidth.value) * MAX_ROTATION
  ).toFixed(2);
  return isOutside.value
    ? ""
    : `perspective(${
        elementWidth.value
      }px) rotateX(${-rX}deg) rotateY(${-rY}deg)`;
});
// })
</script>
<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}
#container {
  transform: v-bind(cardTransform);
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
}
.m-1 {
  transition: all 0.2s ease-in-out;
}
.m-1.m-1:hover {
  @apply shadow-xl;
}
#container > div > div {
  transform: v-bind(cardTransformOpposite);
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
}
</style>
