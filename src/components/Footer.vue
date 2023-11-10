<template>
    <div class="backdrop-invert backdrop-saturate-200 backdrop-hue-rotate-180 lg:h-20 w-full lg:flex lg:flex-row flex-col p-6 gap-6">
      <div class="flex items-center gap-2 p-2">
        <svg
          class="w-6 text-slate-200 fill-slate-200"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
          />
        </svg>
        <p class="text-slate-200 text-lg">Made with Vue</p>
      </div>
      <div class="flex items-center gap-2 p-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 text-slate-200 fill-slate-200"
        >
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        <a
          href="https://github.com/Tnixc/website-v2"
          target="_blank"
          class="text-slate-200 text-lg underline decoration-2"
          >Source On Github</a
        >
      </div>
      <div class="flex flex-col justify-center gap-2 p-2">
        <p class="text-lg text-slate-200">Latest Commit: <span v-html="sha"></span></p>
        <p class="opacity-70 text-slate-200 text-md">Last updated on <span v-html="d"></span></p>
      </div>
    </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      sha: null,
      d: null,
    };
  },
  mounted() {
    async function update(this: any) {
      const data = await fetch(
        "https://api.github.com/repos/Tnixc/website-v2/branches/main"
      );
      const json = await data.json();
      const x = json.commit.sha;
      this.sha = x.slice(0, 7);
    }
    function convertDate(timestamp: string): string {
      const date = new Date(timestamp);

      const day = date.getUTCDate().toString().padStart(2, "0");
      const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, so we add 1.
      const year = date.getUTCFullYear();

      return `${day}/${month}/${year}`;
    }

    update.call(this);
    async function d(this: any) {
      const data = await fetch(
        "https://api.github.com/repos/Tnixc/website-v2/branches/main"
      );
      const json = await data.json();
      const x = json.commit.commit.author.date;
      this.d = convertDate(x);
    }
    d.call(this);
  },
};
</script>
<style scoped>
* {
  font-family: Geist, sans-serif;
  font-variation-settings: "wght" 128;
}
</style>
