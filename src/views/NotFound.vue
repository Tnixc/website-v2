<template>
  <router-link to="/" class="fixed top-10 left-1/2 -translate-x-1/2 z-[99] text-7xl underline underline-offset-4 text-black drop-shadow-xl">Go to Home</router-link>
  <div
    class="fixed z-[88] h-full w-full"
    v-thover="{
      borderWidth: 4,
      scale: 1.2,
      invertColor: 'true',
      borderColor: 'white',
    }"
  >
    <canvas
      id="canv"
      class="fixed z-10 h-full w-full opacity-50"
      width="32"
      height="32"
    ></canvas>
    <div
      class="flex h-screen items-center justify-center overflow-hidden text-neutral-800"
    >
      <h1 class="bg-indigo-200"><span>4</span><span>0</span><span>4</span></h1>
    </div>
  </div>
</template>
<script setup lang="js">
import { onMounted } from "vue";

onMounted(() => {
  const c = document.getElementById("canv");
  const $ = c.getContext("2d");

  function col(x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1, 1);
  }
  function R(x, y, t) {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  }

  function G(x, y, t) {
    return Math.floor(
      192 +
        64 *
          Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300),
    );
  }

  function B(x, y, t) {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100,
          ),
    );
  }

  var t = 0;

  function run() {
    var x = 0;
    var y = 0;
    for (x = 0; x <= 35; x++) {
      for (y = 0; y <= 35; y++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.05;
    window.requestAnimationFrame(run);
  }

  run();
});
</script>
<style scoped>
#canv {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: black;
}

* {
  font-family: "Geist", monospace;
  font-variation-settings: "wght" 128;
}
h1 {
  font-size: 40vw;
  width: 4ch;
}
h1 span {
  width: 33%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 2rem 4rem rgba(0, 0, 0, 0.24));
  font-variation-settings: "wght" 62 ;
}
</style>
