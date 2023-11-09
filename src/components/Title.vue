<template>
  <div
    class="h-screen w-1/2 bg-zinc-900/40 backdrop-blur-sm backdrop-invert backdrop-hue-rotate-180 backdrop-saturate-200 flex flex-col justify-center border-r-4 border-b-4 border-zinc-50/50"
  >
    <h2 class="pl-8 text-5xl ">Haiii</h2>
    <h1 class="pl-8 text-9xl relative">I'm Tnixc</h1>
    <h2 class="pl-8 text-3xl ">
      Just a 15y/o {{ typedText }}
      <span class="underscore" :class="{ flash: showUnderscore }">_</span>
    </h2>
    <h2 class="pl-8 text-3xl ">Shipping bad code 24/7
    </h2>
    <p class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white">scroll to begin</p>
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
  inset: -9rem;
  width: 70vw;
  z-index: -1;
  background-image: repeating-linear-gradient(
      to right,
      #eaeaea 0%,
      #eaeaea 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      #eaeaea 0%,
      #eaeaea 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      #eaeaea 0%,
      #eaeaea 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      #eaeaea 0%,
      #eaeaea 50%,
      transparent 50%,
      transparent 100%
    );
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 3px, 20px 3px, 3px 20px, 3px 20px;
  backdrop-filter: invert(1) hue-rotate(180deg) saturate(300%);
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
