import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
// @ts-ignore
import { MotionPlugin } from "@vueuse/motion";

import Tetikus from "@namchee/tetikus";
import "@namchee/tetikus/dist/tetikus.css";
//@ts-ignore
import VueDeferredContent from 'vue3-deferred-content'

const app = createApp(App);
const options = {
  name: 'deferred',  // by default: deferred
  rootMargin: '50px',        // string
  threshold: 0,             // number | number[]
}     
app.use(VueDeferredContent, options)
app.use(Tetikus);
// app.use(router);
app.use(MotionPlugin);
app.mount("#app");
