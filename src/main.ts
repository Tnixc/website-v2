import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
// @ts-ignore
import { MotionPlugin } from "@vueuse/motion";

import Tetikus from "@namchee/tetikus";
import "@namchee/tetikus/dist/tetikus.css";

const app = createApp(App);
app.use(Tetikus);
// app.use(router);
app.use(MotionPlugin);
app.mount("#app");
