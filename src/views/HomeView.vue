<template>
  <div id="fixed" class="bg fixed h-screen -z-50 inset-0 bg-zinc-400/10">
    <div class="flex justify-center top-0 left-0 right-0 -z-40">
      <div
        class="img w-full"
        :style="{ backgroundPosition: backgroundPosition }"
      ></div>
    </div>
    <BG class="-z-10 fixed" />
  </div>
  <div
    class="flex flex-col h-screen fixed right-0 top-0 p-7 justify-around backdrop-blur-sm"
  >
    <a
      @click="scrollToSection('About')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-violet-800 via-purple-700 to-fuchsia-700 inline-block text-transparent bg-clip-text"
      >About</a
    >
    <a
      @click="scrollToSection('Contact')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-teal-600 via-sky-700 to-indigo-700 inline-block text-transparent bg-clip-text"
      >Contact / Links</a
    >
    <a
      @click="scrollToSection('Skills')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-lime-700 via-green-700 to-emerald-700 inline-block text-transparent bg-clip-text"
      >Skills / Tools</a
    >
    <a
      @click="scrollToSection('Projects')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-rose-500 via-red-600 to-amber-600 inline-block text-transparent bg-clip-text"
      >Projects</a
    >
  </div>
  <Title />
  <Scroller />
  <About id="About" />
  <Games />
  <a id="Contact"></a>
  <Contact />
  <a  id="Skills"></a>
  <Skills />
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Scroller from "@/components/Scroller.vue";
import BG from "@/components/BG.vue";
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";
import Games from "@/components/Games.vue";
import Contact from "@/components/Contact.vue";
import Skills from "@/components/Skills.vue";

import Footer from "@/components/Footer.vue";

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
<script lang="ts">
export default {
  methods: {
    scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.offsetTop; // 20% from the top
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    },
  },
};
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
  @apply w-0 bg-zinc-300/50 absolute -z-10 top-1/2 h-1/2 bottom-0 right-0;
}
.content-l:hover::after {
  @apply w-full;
}
</style>
