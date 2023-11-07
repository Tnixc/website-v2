<template>
  <!-- <RouterView /> -->
  <HomeView/>
</template>
<script lang="ts">
import HomeView from "@/views/HomeView.vue";
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
}
@font-face {
  font-family: "Geist";
  src: url("https://pham.codes/d/GeistVF.woff2") format("woff2");
}

body{
  font-family: "Geist", sans-serif;
}
*::-webkit-scrollbar {
  display: none;
}
* {
  scroll-behavior: smooth;
}

</style>