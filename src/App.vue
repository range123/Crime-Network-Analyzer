<template>
  <div class="h-screen">
    <app-header />
    <div class="w-full h-screen flex">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: { AppHeader }
};
</script>
