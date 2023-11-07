<template>
  <div class="px-24 pt-80">
    <div
      class="bg-zinc-200 text-9xl w-fit"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0, transition:{
      type: 'keyframes',
      ease: 'ease-in-out',
    }}"
      :delay="600"
    >
      <h1>About me.</h1>
    </div>
    <div class="pr-24 w-10/12" v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0, transition:{
    type: 'keyframes',
    ease: 'ease-in-out',
  }}">
      <div class="bg-zinc-50/50 backdrop-blur-md border-2 p-12">
        <div class="flex gap-2 text-lg">
          <span>
            <span>{{ TimeDiff }}</span> seconds old
          </span>
          <span>•</span>
          <span id="pronouns" class="relative">Pronouns: he/him</span>
          <span>•</span>
          <span>Time Zone: <span> Eastern Standard Time </span></span>
        </div>
        <p class="pt-4">
          I'm a 15 year old high school student from Hong Kong living in Canada.
          I enjoy video games, coding, reading books and webcomics, watching
          anime, and doing 2D and 3D art. I started webdev around 2022, but
          honestly time has been blur since 2020 so I'm not sure.
          <br /><br />I like trains and bikes(a huge fan of dutch urban design),
          public transit, and open source.
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
  font-weight: 128;
}
p {
  font-family: "Inter", sans-serif;
}
#pronouns::after {
  position: absolute;
  inset: 0;
  content: "";
  background-color: #c6b3ff50;
  z-index: -1;
}
</style>
