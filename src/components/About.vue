<template>
  <div class="px-24 pt-80">
    <div class="bg-zinc-200 text-9xl w-fit"><h1>About me.</h1></div>
    <div class="pr-24 w-10/12">
      <div class="bg-zinc-50/50 backdrop-blur-md border-2 p-12">
        <div class="flex gap-2 text-lg">
          <p>
            <span>{{ TimeDiff }}</span> seconds old
          </p>
          <p>•</p>
          <p>Pronouns: he/him</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

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
      console.log(now - this.targetTime)
      this.TimeDiff = now - this.targetTime;
    },
  },
});
</script>
<style scoped>
h1,span {
  font-family: "Geist Mono", monospace;
  font-weight: 128;
}
p {
  font-family: "Inter", sans-serif;
}
</style>
