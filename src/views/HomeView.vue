<template>
  <div id="fixed" class="bg fixed h-screen -z-50 inset-0 bg-zinc-400/10">
    <div class="flex justify-center top-0 left-0 right-0 -z-40">
      <div
        class="img w-full"
        :style="{ backgroundPosition: backgroundPosition }"
      ></div>
    </div>
    <Stars class="-z-10 fixed" />
  </div>
  <div class="flex flex-col h-screen fixed right-12 top-0 p-7 justify-around">
    <a v-thover="{ scale: 1.2 }" class="content-l text-2xl font-thin w-min" href="#Contact">About</a>
    <a class="content-l text-2xl font-thin w-min" href="#Contact">Contact</a>
    <a class="content-l text-2xl font-thin w-min" href="#Skills">Skills</a>
    <a class="content-l text2xl font-thin w-min" href="#Projects">Projects</a>
  </div>
  <Title />
  <About id="Contact" />
  <Games />
  <Contact id="About" />
  <Scroller />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Scroller from "@/components/Scroller.vue";
import Stars from "@/components/Stars.vue";
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";
import Games from "@/components/Games.vue";
import Contact from "@/components/Contact.vue";


const backgroundPosition = ref("right 0px");

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
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
  const translateY = ((scrollY * 1000) / limit) * 0.58;
  backgroundPosition.value = `right ${-translateY}px`;
}
</script>
<style scoped>
#fixed {
  background-color: #efefef;
}
div.img {
  height: 100vh;
  max-width: 1000px;
  background-image: url("../assets/Explight.webp");
  filter: brightness(1.2);
  background-repeat: no-repeat;
  background-size: 1000px;
}
.content-l {
  position: relative;
}
.content-l::after {
  transition: 0.4s ease-in-out;
  content: "";
  @apply w-0 bg-blue-300/50 absolute -z-10 top-1/2 h-1/2 bottom-0 right-0;
}
.content-l:hover::after {
  @apply w-full;
}
</style>
