<template>
  <div
    class="absolute backdrop-invert backdrop-saturate-200 backdrop-hue-rotate-180 lg:h-20 w-full lg:flex lg:flex-row flex-col p-6 gap-6 z-[999]"
  >
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
      <svg
        class="w-6 text-slate-200 fill-slate-200"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Tailwind CSS</title>
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        />
      </svg>
      <p class="text-slate-200 text-lg">Made with Vue + Tailwind</p>
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
    <div class="flex items-center gap-2 p-2">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 text-slate-200 fill-slate-200"
      >
        <title>Netlify</title>
        <path
          d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"
        />
      </svg>
      <p class="text-slate-200 text-lg">Hosted on netlify</p>
    </div>
    <div class="flex flex-col justify-center gap-2 p-2">
      <p class="text-lg text-slate-200">
        Latest Commit: <span v-html="sha"></span>
      </p>
      <p class="opacity-70 text-slate-200 text-md">
        <span v-html="d"></span>
      </p>
    </div>
    <p class="px-2 ml-auto mr-10 text-pink-400 text-xl">
      Made with <i class="fill-pink-400 fa-solid fa-heart"></i>
    </p>
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

      const d = date.getUTCDate().toString().padStart(2, "0");
      const m = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, so we add 1.
      const y = date.getUTCFullYear();
      //@ts-ignore
      function relativeDate(date) {
      //@ts-ignore
        const diff = Math.round((new Date() - new Date(date)) / 1000);

        const minute = 60;
        const hour = minute * 60;
        const day = hour * 24;
        const week = day * 7;
        const month = day * 30;
        const year = month * 12;

        if (diff < 30) {
          return "just now";
        } else if (diff < minute) {
          return diff + " seconds ago";
        } else if (diff < 2 * minute) {
          return "a minute ago";
        } else if (diff < hour) {
          return Math.floor(diff / minute) + " minutes ago";
        } else if (Math.floor(diff / hour) == 1) {
          return "1 hour ago";
        } else if (diff < day) {
          return Math.floor(diff / hour) + " hours ago";
        } else if (diff < day * 2) {
          return "yesterday";
        } else if (diff < week) {
          return week + " days ago";
        } else if (diff < month) {
          return Math.floor(diff / week) + " weeks ago";
        } else if (diff < year) {
          return Math.floor(diff / month) + " months ago";
        } else {
          return Math.floor(diff / year) + " years ago";
        }
      }

      const relative = relativeDate(date);

      return `Last updated ${relative}, on ${d}/${m}/${y}`;
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
