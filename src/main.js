import { createApp } from "vue";
import { store } from "./store";

import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import "./assets/styles/tailwind.css";
import "flowbite";
=======
>>>>>>> 34e62088e5e6cd9d4e5d48a88cb340d10ea2ca35

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
