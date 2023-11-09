<template>
  <div class="text-9xl pl-40">
    <h1
      class="bg-indigo-300/20 backdrop-blur-sm h-30 w-fit translate-y-4 translate-x-1"
    >
      # Skills
    </h1>
  </div>
  <p
    class="text-lg bg-gradient-to-t from-slate-400/20 to-slate-50/50 backdrop-blur-lg p-12 max-w-5xl border-zinc-100 border ml-40"
  >
    I mainly do UI/UX design and Front-end development, but I would like to
    learn more about how js frameworks and web technologies work unde the hood.
  </p>
  <div class="pl-40">
    <h2 class="text-4xl pt-10 pl-10">## Languages</h2>
    <div id="cards" class="p-20 pt-2">
      <div class="card">
        <div class="card-content"></div>
      </div>
      <div class="card">
        <div class="card-content"></div>
      </div>
      <div class="card">
        <div class="card-content"></div>
      </div>
      <div class="card">
        <div class="card-content"></div>
      </div>
      <div class="card">
        <div class="card-content"></div>
      </div>
      <div class="card">
        <div class="card-content"></div>
      </div>
    </div>
    <h3>### Frameworks / Libraries</h3>
    <h2>## Tools / Apps</h2>
  </div>
</template>
<script lang="ts">
export default {
  mounted() {
    document.getElementById("cards")!.onmousemove = (e) => {
      for (const card of Array.from(
        document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>
      )) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  },
};
</script>
<style scoped>
* {
  font-family: "Geist", sans-serif;
  font-variation-settings: "wght" 128;
}

#cards {
  @apply flex flex-wrap gap-2 max-w-5xl;
}
#cards:hover > .card::after {
  @apply opacity-100;
}
.card {
  @apply flex h-48 flex-col relative w-80 hover:before:opacity-100 before:z-[3] after:z-[1] hover:shadow-lg transition-all duration-500 backdrop-blur-sm;
}
.card::before,
.card::after {
  @apply content-[""] h-full opacity-0 absolute transition-opacity duration-500 w-full  left-0 top-0;
}
.card::before {
  background: radial-gradient(
    1200px circle at var(--mouse-x) var(--mouse-y),
    #a855f722,
    transparent 40%
  );
}
.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    #38bff871,
    transparent 40%
  );
}
.card > .card-content {
  @apply bg-zinc-300/60 flex flex-col grow absolute z-[2] p-2.5 inset-0.5;
}
</style>
