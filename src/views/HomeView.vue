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

  <Scroller />
  <Title />
  <div class="h-60">
    <div
      class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-6 mt-4"
    ></div>
  </div>
  <a id="About"></a>
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-6"></div>
  </div>
  <div
    class="lg:ml-20 lg:w-9/12 lg:p-12 backdrop-saturate-0 ring-2 m-1 ring-zinc-500"
  >
    <About />
    <Games />
  </div>

  <div class="h-60">
    <div
      class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-96 mt-4"
    ></div>
  </div>
  <a id="Contact"></a>
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-96"></div>
  </div>
  <div
    class="lg:ml-20 lg:w-9/12 lg:p-12 backdrop-saturate-0 ring-2 m-1 ring-zinc-500 bg-zinc-100/80 relative"
  >
    <svg
      class="absolute hidden lg:block left-0 top-0"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#71717A"
      viewBox="0 0 256 256"
    >
      <path
        d="M197.66,197.66a8,8,0,0,1-11.32,0L72,83.31V168a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H168a8,8,0,0,1,0,16H83.31L197.66,186.34A8,8,0,0,1,197.66,197.66Z"
      ></path>
    </svg>
    <svg
      class="absolute hidden lg:block right-0 top-0"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#71717A"
      viewBox="0 0 256 256"
    >
      <path
        d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
      ></path>
    </svg>
    <svg
      class="absolute hidden lg:block left-0 bottom-0"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#71717A"
      viewBox="0 0 256 256"
    >
      <path
        d="M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"
      ></path>
    </svg>
    <svg
      class="absolute hidden lg:block right-0 bottom-0"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#71717A"
      viewBox="0 0 256 256"
    >
      <path
        d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z"
      ></path>
    </svg>
    <Contact
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
        },
      }"
    />
  </div>
  <div class="h-60">
    <div
      class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-80 mt-4"
    ></div>
  </div>
  <a id="Skills"></a>
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-80"></div>
  </div>
  <div
    class="lg:ml-20 lg:w-9/12 lg:p-12 m-1 bg-slate-300/50 hover:shadow-lg transition-all ring-2 ring-slate-600 ring-offset-8"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{
      opacity: 1,
      transition: {
        type: 'keyframes',
        ease: 'linear',
      },
    }"
  >
    <div class="ring-zinc-500"><Skills /></div>
  </div>
  <div class="h-60">
    <div
      class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-20 mt-4"
    ></div>
  </div>
  <a id="Projects"></a>
  <div class="h-60">
    <div class="ml-32 lg:ml-96 w-0.5 h-full striped lg:translate-x-20"></div>
  </div>
  <div
    class="lg:ml-20 lg:w-9/12 lg:p-12 backdrop-saturate-0 ring-2 m-1 ring-zinc-500 backdrop-blur-lg lg:backdrop-blur-0"
  >
    <Projects />
  </div>
  <div class="h-80"></div>
  <Footer class="z-[999]" />
  <div
    id="navbar"
    class="fixed top-0 right-0 left-0 flex justify-around p-2 bg-slate-50/80 flex-col backdrop-blur-md duration-300 shadow-lg lg:left-auto lg:bottom-0 lg:right-10 lg:bg-transparent lg:backdrop-blur-sm lg:shadow-none"
  >
    <a
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
          delay: 200,
        },
      }"
      @click="scrollToSection('About')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >About</a
    >
    <a
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
          delay: 400,
        },
      }"
      @click="scrollToSection('Contact')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Contact / Links</a
    >
    <a
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
          delay: 600,
        },
      }"
      @click="scrollToSection('Skills')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Skills / Tools</a
    >
    <a
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
          delay: 800,
        },
      }"
      @click="scrollToSection('Projects')"
      class="content-l text-2xl font-thin w-max text-right bg-gradient-to-r from-slate-600 to-gray-800 inline-block text-transparent bg-clip-text"
      >Projects</a
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import Scroller from "@/components/Scroller.vue";
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";
import Games from "@/components/Games.vue";
import Contact from "@/components/Contact.vue";
import Skills from "@/components/Skills.vue";
// import Projects from "@/components/Projects.vue";
// import BG from "@/components/BG.vue";
// import Footer from "@/components/Footer.vue";
const BG = defineAsyncComponent(() => import("@/components/BG.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const Projects = defineAsyncComponent(
  () => import("@/components/Projects.vue"),
);
const backgroundPosition = ref("right 0px");

onMounted(() => {
  window.addEventListener("scroll", parallax);
  window.addEventListener("scroll", nav);
});
function parallax() {
  const scrollY = window.scrollY;
  const limit = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );
  const translateY = ((scrollY * 1000) / limit) * 0.58;
  backgroundPosition.value = `right ${-translateY}px`;
}
let lastScroll = 0;
function nav() {
  const scrollY = window.scrollY;
  const navbar = document.getElementById("navbar")!;
  if (
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    ) < 1024
  ) {
    if (scrollY > lastScroll) {
      navbar.style.top = "-100%";
      lastScroll = scrollY;
    }
    if (scrollY + 100 < lastScroll) {
      navbar.style.top = "0";
      lastScroll = scrollY;
    }
  }
  if (
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    ) > 1024
  ) {
    navbar.style.top = "0";
  }
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
  @apply relative z-10;
}
.content-l::after {
  transition: 0.4s ease-in-out;
  content: "";
  @apply w-0 bg-blue-300/40 absolute -z-10 top-1/2 h-1/2 bottom-0 right-0;
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
