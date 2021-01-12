<template>
  <nav class="bg-gray-800 w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            @click="() => (isMenuOpen = !isMenuOpen)"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <!-- <svg
                :class="isMenuOpen ? 'block' : 'hidden'"
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> -->
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src="../assets/imgs/icon.svg"
              alt="Crime Network Analyzer"
            />
            <router-link
              to="/"
              class="hidden lg:block h-8 w-auto text-white text-3xl ml-2 -mt-1 font-bold"
            >
              Crime Network Analyzer
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class=" px-3 py-2 rounded-md text-lg font-medium"
                :class="
                  currentRoute === 'Analyzer'
                    ? 'bg-gray-900 text-white '
                    : 'text-gray-300  hover:bg-gray-700  hover:text-white'
                "
                >Analyzer</router-link
              >
              <router-link
                to="/tutorial"
                class="px-3 py-2 rounded-md text-lg font-medium"
                :class="
                  currentRoute === 'Tutorial'
                    ? 'bg-gray-900 text-white '
                    : 'text-gray-300  hover:bg-gray-700  hover:text-white'
                "
                >Tutorial</router-link
              >

              <a
                href="https://github.com/range123/Crime-Network-Analyzer"
                class=" px-3 py-2 rounded-md text-lg font-medium text-gray-300  hover:bg-gray-700 hover:text-white"
                target="_blank"
                >GitHub</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: bell -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-if="deferedPrompt"
              @click="install"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <router-link
            to="/about"
            class="px-3 py-2 rounded-md text-lg font-medium"
            :class="
              currentRoute === 'About'
                ? 'bg-gray-900 text-white '
                : 'text-gray-300  hover:bg-gray-700  hover:text-white'
            "
            >About</router-link
          >
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div :class="isMenuOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          to="/"
          class=" px-3 py-2 rounded-md text-base font-medium block"
          :class="
            currentRoute === 'Analyzer'
              ? 'bg-gray-900 text-white'
              : 'text-gray-300  hover:bg-gray-700 hover:text-white '
          "
          >Analyzer</router-link
        >
        <router-link
          to="/tutorial"
          class=" px-3 py-2 rounded-md text-base font-medium block"
          :class="
            currentRoute === 'Tutorial'
              ? 'bg-gray-900 text-white'
              : 'text-gray-300  hover:bg-gray-700 hover:text-white '
          "
          >Tutorial</router-link
        >
        <a
          href="https://github.com/range123/Crime-Network-Analyzer"
          class=" px-3 py-2 rounded-md text-base font-medium block text-gray-300  hover:bg-gray-700 hover:text-white"
          target="_blank"
          >GitHub</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      isProfileOpen: false,
      deferedPrompt: null
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.deferedPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferedPrompt = null;
    });
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    install() {
      this.deferedPrompt.prompt();
    }
  }
};
</script>

<style></style>
