<template>
  <div
    class="border-l-4 border-black fixed w-12 right-0 top-0 z-40 shadow-inner" :style="{ height }"
  ></div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const height = ref("0vh");
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  const scrollY = window.scrollY;
  const limit = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const h = (scrollY / limit) * 120;
  height.value = `${h}vh`;
}
</script>
<style scoped>
div{
  backdrop-filter: invert(1) brightness(2);
}
</style>
