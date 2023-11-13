<template>
  <tetikus
    :showDefaultCursor="false"
    :throttleSpeed="1"
    :borderWidth="2"
    :size="40"
    :buttonMap="['left', 'right']"
    :clickBehavior="{ scale: 0.8 }"
    :opacity="0.8"
    :hideOnOut="true"
    :contentPosition="'bottom'"
    :lerp="0.7"
    :defaultTransitionSpeed="200"
    :defaultEasing="'ease-in-out'"
    :defaultDelay="300"
    :invertColor="true"
    :borderColor="'white'"
  />
  <!-- <HomeView /> -->
  <RouterView />
</template>
<script lang="ts">
import HomeView from "@/views/HomeView.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    HomeView,
  },
};
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'); */
@font-face {
  font-family: "Geist Mono";
  src: url("https://pham.codes/d/GeistMonoVF.woff2") format("woff2");
  font-display: swap;
  font-feature-settings: 'ss09';
}
@font-face {
  font-family: "Geist";
  src: url("https://pham.codes/d/GeistVF.woff2") format("woff2");
  font-display: swap;
  font-feature-settings: 'ss09';
}

body {
  font-family: "Geist", sans-serif;
}
*::-webkit-scrollbar {
  display: none;
}
* {
  scroll-behavior: smooth;
  cursor: none;
  -webkit-user-drag: none;
}
*::selection {
  @apply bg-violet-300 text-black;
}
.tetikus__cursor::after {
  content: "";
  inset: 40%;
  filter: hue-rotate(180deg) !important;
  @apply absolute rounded-full bg-white shadow-xl;
}
</style>
