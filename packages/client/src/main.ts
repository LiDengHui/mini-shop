import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import "/@/assets/css/reset.scss";

import { cartKey, cartStore } from "./store/cart";
import { userKey, userStore } from "./store/user";

const app = createApp(App);

app.use(router);
app.use(cartStore, cartKey);
app.use(userStore, userKey);

app.mount("#app");
