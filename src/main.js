// filepath: /home/raiden/Documents/Projects/My Projects/Vue/my-present-website/src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(router).mount("#app");
