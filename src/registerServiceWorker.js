/* eslint-disable no-console */

import { register } from "register-service-worker";
import { useToast } from "vue-toastification";

const Toast = useToast();

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
      Toast.success("New content loaded, refreshing...", { timeout: 2000 });
      setTimeout(window.location.reload.bind(window.location), 2000);
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      Toast.info("Working in offline mode");
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
