<template>
  <div
    class="w-11/12 lg:w-1/2 h-screen flex flex-col justify-center p-12 bg-zinc-100/50 backdrop-blur-md border-r-2 border-b-2"
  >
    <div class="box-container opacity-20">
      <div class="box row-span-2 col-span-2"></div>
      <div class="box col-span-4 row-span-1"></div>
      <div class="box col-span-3 row-span-3"></div>
      <div class="box col-span-1 row-span-3"></div>
      <div class="box col-span-3 row-span-2"></div>
      <div class="box col-span-4 row-span-4"></div>
      <div class="box col-span-3 row-span-3"></div>
      <div class="box col-span-1 row-span-4"></div>
      <div class="box row-span-3 col-span-3"></div>
      <div class="box col-span-1 row-span-2"></div>
      <div class="box col-span-2 row-span-4"></div>
      <div class="box col-span-4 row-span-1"></div>
      <div class="box col-span-4 row-span-3"></div>
      <div class="box col-span-2 row-span-2"></div>
      <div class="box col-span-4 row-span-3"></div>
      <div class="box col-span-3 row-span-1"></div>
      <div class="box col-span-2 row-span-4"></div>
      <div class="box col-span-2 row-span-2"></div>
      <div class="box col-span-1 row-span-3"></div>
      <div class="box col-span-3 row-span-1"></div>
      <div class="box col-span-1 row-span-2"></div>
      <div class="box col-span-4 row-span-4"></div>
      
    </div>

    <h2 class="text-5xl text-zinc-700">Haiii</h2>
    <h1 class="text-9xl relative">I'm Tnixc</h1>
    <h2 class="text-3xl">
      Just a 15y/o {{ typedText }}
      <span class="underscore" :class="{ flash: showUnderscore }">_</span>
    </h2>
    <p class="absolute bottom-10 left-1/2 -translate-x-1/2">scroll to begin</p>
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
h1::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 70vw;
  z-index: -1;
  background-image: repeating-linear-gradient(
      to right,
      black 0%,
      black 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      black 0%,
      black 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      black 0%,
      black 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      black 0%,
      black 50%,
      transparent 50%,
      transparent 100%
    );
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 3px, 20px 3px, 3px 20px, 3px 20px;
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
.box {
  @apply ring-2;
}

</style>
