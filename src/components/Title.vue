<template>
  <div class="typewriter">
    <h1>
      {{ typedText }}
      <span class="underscore" :class="{ flash: showUnderscore }">_</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const texts: string[] = ['Text 1', 'Text 2', 'Text 3'];
    const currentIndex = ref<number>(0);
    const typedText = ref<string>('');
    const showUnderscore = ref<boolean>(false);

    onMounted(() => {
      typeAndCycleText();
    });

    const typeAndCycleText = async () => {
      while (true) {
        await typeText(texts[currentIndex.value]);
        await sleep(1000); // Delay before backspacing and switching to the next text
        await backspace();
        currentIndex.value = (currentIndex.value + 1) % texts.length;
      }
    };

    const typeText = (text: string) => {
      return new Promise<void>((resolve) => {
        let charIndex = 0;
        const delay = 100; // Delay between typing characters (adjust as needed)

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
        const delay = 50; // Delay between backspacing characters (adjust as needed)
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

.underscore {
  animation: blink 0.5s infinite;
}

.flash {
  animation: flash 0.5s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes flash {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
