<template>
  <div id="container" ref="target" class="hover:shadow-md">
    <h1 class="border-l-2 border-t-2 border-blue-500 bg-sky-200 text-5xl">
      ## Contact + Links
    </h1>
    <div
      class="border-b-2 border-l-2 border-blue-300 border-b-zinc-50 bg-gradient-to-t from-blue-100/40 to-sky-200 p-12"
    >
      <div class="flex flex-wrap gap-0.5">
        <div class="m-1 flex items-center bg-blue-50 p-2 hover:shadow-md">
          <i class="fa-brands fa-discord scale-125 p-2"></i>
          <p class="font-xl p-2">Tnixc</p>
        </div>
        <div class="m-1 flex items-center bg-blue-50 p-2 hover:shadow-md">
          <i class="fa-solid fa-envelope scale-125 p-2"></i>
          <p class="font-xl p-2">tnixxc@gmail.com</p>
        </div>
        <a
          v-thover="{
            borderWidth: 4,
            scale: 1.2,
            invertColor: 'false',
            borderColor: '#f59e0b',
          }"
          class="li m-1 flex items-center bg-blue-50 p-2 hover:shadow-md"
          href="https://twitter.com/_Tnixc"
          target="_blank"
        >
          <i class="fa-brands fa-x-twitter scale-125 p-2"></i>
          <p class="font-xl p-2">_Tnixc</p>
          <i class="fa-solid fa-arrow-up-right-from-square scale-105 p-2"></i>
        </a>

        <a
          v-thover="{
            borderWidth: 4,
            scale: 1.2,
            invertColor: 'false',
            borderColor: '#f59e0b',
          }"
          class="li m-1 flex items-center bg-blue-50 p-2 hover:shadow-md"
          href="https://github.com/Tnixc"
          target="_blank"
        >
          <i class="fa-brands fa-github scale-125 p-2"></i>
          <p class="font-xl p-2">Tnixc</p>
          <i class="fa-solid fa-arrow-up-right-from-square scale-105 p-2"></i>
        </a>
        <div class="w-full flex-grow"></div>
        <div class="m-1 flex items-center bg-blue-50 p-2 hover:shadow-md">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tnixc&layout=compact&theme=graywhite&bg_color=00000000&hide_border=true"
            alt="A graph showing my most used languages"
          />
        </div>
        <div class="m-1 flex items-center bg-blue-50 p-2 hover:shadow-md">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Tnixc&show_icons=true&theme=graywhite&bg_color=00000000&hide_border=true&rank_icon=github"
            alt="A graph showing my github stats"
          />
        </div>
        <div class="w-full flex-grow gap-2 pt-2"></div>
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
  transition: 0.25s linear;
}
#container {
  transform: v-bind(
    cardTransform
  ) !important; /* NO IDEA WHY THIS IS NECESSARY */
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
}
#container > div > div {
  transform: v-bind(cardTransformOpposite) !important;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1);
}
</style>
