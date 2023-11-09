<template>
  <div class="lg:pl-24">
    <div
      class="p-1 bg-zinc-100/60 w-fit"
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
      <h1 class="bg-zinc-200 text-7xl lg:text-9xl w-fit"># About</h1>
    </div>
    <div
      class="lg:pr-24 w-10/12"
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
        class="bg-gradient-to-t from-zinc-300/40 to-zinc-50 border-4 lg:p-12 p-6 shadow-xl w-full md:backdrop-blur-none backdrop-blur-md"
      >
        <div class="flex gap-2 text-lg flex-wrap">
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
              class="w-6 inline" /><img
              class="w-6 inline ml-2"
              src="https://em-content.zobj.net/source/twitter/376/flag-canada_1f1e8-1f1e6.png"
              alt=""
          /></span>
        </div>
        <p class="pt-4">
          I'm a 15 year old high school student from Hong Kong living in Canada.
          I enjoy video games, coding, reading books and webcomics, watching
          anime, and doing 2D and 3D art. I started webdev around 2022, but
          honestly time has been blur since 2020 so I'm not sure.
          <br /><br />I like trains and bikes(a huge fan of dutch urban design),
          public transit, typography, and open source. I also like chilling in
          IKEA and hiking :3.
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
  font-family: "Inter", sans-serif;
}
</style>
