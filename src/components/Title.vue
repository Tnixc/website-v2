<template>
  <div
    class="relative flex h-screen w-11/12 flex-col justify-center border-b-4 border-r-4 border-slate-50/80 bg-slate-900/40 backdrop-hue-rotate-180 backdrop-invert backdrop-saturate-200 lg:w-1/2"
  >
    <h2 class="w-fit pl-8 text-5xl text-slate-500">Haiii</h2>
    <h1 class="w-fit pl-8 text-7xl text-white lg:text-9xl">I'm Tnixc</h1>
    <h2 class="h-40 w-fit pl-8 text-3xl text-slate-500 lg:h-auto">
      Just a 15y/o <span class="text-white">{{ typedText }}</span>
      <span class="underscore text-[#75BFFF]" :class="{ flash: showUnderscore }"
        >_</span
      >
    </h2>
    <h2 class="w-fit pl-8 text-3xl text-slate-500 backdrop-blur-md">
      Shipping bad code 24/7
    </h2>
    <a
      href="https://blog.tnixc.space"
      target="_blank"
      class="ml-20 mt-10 flex w-fit items-center gap-4 rounded-xl bg-gradient-to-tr from-blue-300/10 via-indigo-400/20 to-pink-400/20 p-4 px-10 text-2xl text-white shadow-2xl ring-2 ring-blue-300/20 transition-all hover:translate-y-1 hover:shadow-md"
      v-thover="{
        borderWidth: 4,
        scale: 1.2,
        invertColor: 'false',
        borderColor: '#f59e0b',
      }"
      >Blog
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#ffffff"
        viewBox="0 0 256 256"
        class="h-10"
      >
        <path
          d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
        ></path></svg
    ></a>
    <p class="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl text-white">
      scroll to begin
    </p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const texts: string[] = [
      "webdev",
      "anime enjoyer",
      "webnovel reader",
      "aspiring 2D Artist",
      "minecraft enjoyer",
      "rhythm game player",
      "aspiring 3D artist",
      "highschool student",
      "webtoon reader",
    ];
    const currentIndex = ref<number>(0);
    const typedText = ref<string>("");
    const showUnderscore = ref<boolean>(false);

    onMounted(() => {
      typeAndCycleText();
    });

    const typeAndCycleText = async () => {
      while (true) {
        await typeText(texts[currentIndex.value]);
        await sleep(1000);
        await backspace();
        currentIndex.value = (currentIndex.value + 1) % texts.length;
      }
    };

    const typeText = (text: string) => {
      return new Promise<void>((resolve) => {
        let charIndex = 0;
        const delay = 100;

        const typingInterval = setInterval(() => {
          if (charIndex < text.length) {
            typedText.value += text[charIndex];
            charIndex++;
          } else {
            clearInterval(typingInterval);
            resolve();
          }
        }, delay);
      });
    };

    const backspace = () => {
      return new Promise<void>((resolve) => {
        const delay = 50;
        const textToType = typedText.value;
        let charIndex = textToType.length;

        const backspaceInterval = setInterval(() => {
          if (charIndex > 0) {
            typedText.value = textToType.substring(0, charIndex - 1);
            charIndex--;
          } else {
            clearInterval(backspaceInterval);
            resolve();
          }
        }, delay);
      });
    };

    const sleep = (ms: number) => {
      return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    return {
      typedText,
      showUnderscore,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Geist Mono", monospace;
  font-weight: 128;
}
.underscore {
  animation: blink 0.5s infinite;
}

.flash {
  animation: flash 0.5s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.box-container {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(30, 1fr);
  gap: 0.4rem;
  position: absolute;
  inset: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
}
</style>
