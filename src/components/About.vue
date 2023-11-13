<template>
  <div class="">
    <div
      class="w-fit bg-zinc-100/60 p-1"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
        },
      }"
      :delay="600"
    >
      <h1 class="w-fit bg-zinc-200 text-7xl lg:text-9xl"># About</h1>
    </div>
    <div
      class=""
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'ease-in-out',
        },
      }"
    >
      <div
        class="w-full border-4 bg-gradient-to-t from-zinc-300/60 to-zinc-50 p-6 shadow-xl backdrop-blur-md md:backdrop-blur-none lg:p-12"
      >
        <div class="flex flex-wrap gap-2 text-lg">
          <span>
            <span>{{ TimeDiff }}</span> seconds old
          </span>
          <span>•</span>
          <span>Pronouns: he/him</span>
          <span>•</span>
          <span>Time Zone: <span> Eastern Standard Time </span></span>
          <span>•</span>
          <span
            ><img
              src="https://em-content.zobj.net/source/twitter/376/flag-hong-kong-sar-china_1f1ed-1f1f0.png"
              alt=""
              class="inline w-6" /><img
              class="ml-2 inline w-6"
              src="https://em-content.zobj.net/source/twitter/376/flag-canada_1f1e8-1f1e6.png"
              alt=""
          /></span>
        </div>
        <p class="pt-4 text-lg text-slate-500">
          I'm a
          <span class="inline text-slate-900"
            >15 year old high school student from Hong Kong living in
            Canada.</span
          >
          I enjoy video games, coding, reading books and webcomics, watching
          anime, listening to lots of jpop, touhou songs, vocaloids and all
          that, and doing 2D and 3D art. I started webdev around 2022, but
          honestly time has been blur since 2020 so I'm not sure.
          <br /><br />I also like trains and bikes(a huge fan of dutch urban
          design), public transit, typography, and open source. I also like
          chilling in IKEA and hiking :3
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  data() {
    return {
      TimeDiff: ref(0),
      targetTime: 1221726000,
    };
  },
  mounted() {
    this.calculateTimeDiff();
    setInterval(this.calculateTimeDiff, 1000);
  },
  methods: {
    calculateTimeDiff() {
      const now = Math.floor(Date.now() / 1000);
      this.TimeDiff = now - this.targetTime;
    },
  },
});
</script>
<style scoped>
h1,
span {
  font-family: "Geist Mono", monospace;
  font-variation-settings: "wght" 128;
  transition: 0.5s linear;
}
h1:hover {
  font-variation-settings: "wght" 32;
}
p {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 100;
}
p > span {
  font-variation-settings: "wght" 140;
  font-family: "Geist", sans-serif;
}
</style>
