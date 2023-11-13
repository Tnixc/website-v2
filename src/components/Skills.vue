<template>
  <div
    class="text-8xl lg:text-9xl"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'keyframes',
        ease: 'linear',
        delay: 500,
      },
    }"
  >
    <h1 class="bg-cyan-300/20 backdrop-blur-sm h-30 w-fit"># Skills</h1>
  </div>
  <p
    class="backdrop-blur-md lg:backdrop-blur-none text-lg p-12 bg-slate-200/80 border-l-4 border-slate-600"
  >
    I mainly do UI/UX design and Front-end development, but I would like to
    learn more about how js frameworks and web technologies work under the hood.
    Gonna learn how to do SSR one day but that day is not today.
  </p>
  <div class="">
    <h2
      class="text-4xl pt-10 pl-10 border-l-4 border-indigo-600 bg-indigo-300/50"
    >
      ## Languages
    </h2>
    <div
      id="cards"
      class="items-center justify-center p-4 border-4 border-slate-600 border-r-0"
    >
      <div class="card">
        <div class="card-content">
          <div class="h-full flex items-center">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16"
            >
              <title>TypeScript</title>
              <path
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
              />
            </svg>
            <div class="p-4">
              <h3 class="text-2xl">Typescript</h3>
              <p class="text-zinc-700">
                Still learning this, never picked up javascript so ¯\_(ツ)_/¯
              </p>
            </div>
          </div>
          <div
            class="h-2 bg-gradient-to-r from-teal-100/10 via-sky-400 to-blue-100/10"
          ></div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="h-full flex items-center">
            <svg
              role="img"
              class="w-16 h-16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Python</title>
              <path
                d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
              />
            </svg>
            <div class="p-4">
              <h3 class="text-2xl">Python</h3>
              <p class="text-zinc-700">
                Alright at this, it's alright, I guess. It works when it needs
                to.
              </p>
            </div>
          </div>
          <div
            class="h-2 bg-gradient-to-r from-blue-500 via-transparent to-amber-500"
          ></div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="h-full flex items-center">
            <svg
              role="img"
              viewBox="0 0 24 24"
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>HTML5</title>
              <path
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
              />
            </svg>
            <div class="p-4">
              <h3 class="text-2xl">HTML</h3>
              <p class="text-zinc-700">not Turing complete :(</p>
            </div>
          </div>
          <div
            class="h-2 bg-gradient-to-r from-amber-600/10 via-orange-600 to-amber-600/10"
          ></div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="h-full flex items-center">
            <svg
              role="img"
              class="w-16 h-16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>CSS3</title>
              <path
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
              />
            </svg>
            <div class="p-4">
              <h3 class="text-2xl">CSS</h3>
              <p class="text-zinc-700">
                This is not hell. Well it's getting better. I guess.
              </p>
            </div>
          </div>
          <div
            class="h-2 bg-gradient-to-r from-sky-600/10 via-blue-700 to-sky-600/10"
          ></div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="h-full flex items-center">
            <svg
              role="img"
              class="w-14 h-14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Sass</title>
              <path
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"
              />
            </svg>
            <div class="p-4">
              <h3 class="text-2xl">SASS</h3>
              <p class="text-zinc-700">Hell, but better.</p>
            </div>
          </div>
          <div
            class="h-2 bg-gradient-to-r from-pink-600/10 via-pink-400 to-pink-600/10"
          ></div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h1>I don't even know 6 languages :(</h1>
          <img
            class="h-24"
            src="https://steamuserimages-a.akamaihd.net/ugc/2046364991293041180/A39C90355C1EA4D2F45D087638D02B5E2D598929/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            alt="Skull emoji"
          />
        </div>
      </div>
    </div>
    <h2
      class="text-4xl pt-10 pl-10 border-l-4 border-indigo-600 bg-indigo-300/50"
    >
      ## Frameworks / Libraries
    </h2>
    <div class="flex flex-wrap p-2 gap-2 bg-zinc-200 m-1">
      <VueCard />
      <TailwindCard />
    </div>
    <div class="mx-3 bg-zinc-100 p-2 text-xl w-fit mb-3">
      I also tried out three.js as you can see in the rotating models above
      (hover)
    </div>
    <Tools />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from "vue";
const Tools = defineAsyncComponent(() => import("./Tools.vue"));
//@ts-ignore
const VueCard = defineAsyncComponent(() => import("./VueCard.vue"));
//@ts-ignore
const TailwindCard = defineAsyncComponent(() => import("./TailwindCard.vue"));
export default {
  components: {
    VueCard,
    TailwindCard,
    Tools,
  },
  mounted() {
    document.getElementById("cards")!.onmousemove = (e) => {
      for (const card of Array.from(
        document.getElementsByClassName(
          "card",
        ) as HTMLCollectionOf<HTMLElement>,
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
  @apply flex flex-wrap gap-2;
}
#cards:hover > .card::after {
  @apply opacity-100;
}
.card {
  @apply flex-grow flex h-48 flex-col relative hover:before:opacity-100 before:z-[3] after:z-[1] hover:shadow-lg transition-all duration-500 backdrop-blur-sm;
  width: calc(1 / 3);
  min-width: 22rem;
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
