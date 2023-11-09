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
  <div class="flex-col h-screen fixed right-0 top-0 p-7 justify-around hidden lg:flex">
    <a
      @click="scrollToSection('About')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >About</a
    >
    <a
      @click="scrollToSection('Contact')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Contact / Links</a
    >
    <a
      @click="scrollToSection('Skills')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Skills / Tools</a
    >
    <a
      @click="scrollToSection('Projects')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Projects</a
    >
  </div>
  <Scroller />
  <Title />
  <div class="h-40">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped translate-x-4"></div>
  </div>
  <a href="" id="About"></a>
  <div class="h-40">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped translate-x-4"></div>
  </div>
  <About />
  <Games />
  <div class="h-40">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped translate-x-40"></div>
  </div>
  <a id="Contact"></a>
  <div class="h-40">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped translate-x-40"></div>
  </div>
  <Contact />
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-80"></div>
  </div>
  <a id="Skills"></a>
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-80"></div>
  </div>
  <div class="w-full flex justify-center items-center">
    <div
      class="h-2 max-w-3xl w-full backdrop-invert backdrop-saturate-200 backdrop-hue-rotate-180"
    ></div>
  </div>
  <Skills />
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <div class="h-screen"></div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import Scroller from "@/components/Scroller.vue";
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";
import Games from "@/components/Games.vue";
import Contact from "@/components/Contact.vue";
import Skills from "@/components/Skills.vue";

// import BG from "@/components/BG.vue";
// import Footer from "@/components/Footer.vue";
const BG = defineAsyncComponent(() => import("@/components/BG.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));

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
        const offset = element.offsetTop;
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
.striped {
  background: repeating-linear-gradient(
    to bottom,
    black,
    black 15px,
    transparent 15px,
    transparent 30px
  );
}
</style>
