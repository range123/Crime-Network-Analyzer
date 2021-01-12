import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueFinalModal from "vue-final-modal";

const options = {
  // You can set your default options here
  position: POSITION.TOP_CENTER
};
const app = createApp(App)
  .use(store)
  .use(router)
  .use(Toast, options)
  .use(VueFinalModal());
app.mount("#app");
