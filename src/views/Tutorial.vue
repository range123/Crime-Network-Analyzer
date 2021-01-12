<template>
  <div class="w-full h-auto">
    <div class="w-9/12 justify-around mx-auto mt-5 h-auto">
      <h1 class="text-6xl font-extrabold m-5 text-center">
        How to Use this Analyzer
      </h1>
      <ol class="text-xl my-10 mx-auto w-2/3 h-auto">
        <li>
          <span class="font-bold">1.</span> This app requires the network to be
          specified in a <strong>specific JSON format</strong>
        </li>
        <li class="mt-4">
          <span class="font-bold">2.</span> The format is given by the
          <strong>schema below.</strong>
          <img
            src="../assets/imgs/show.svg"
            alt="show"
            class="inline hover:bg-gray-600"
            @click="showSchema = true"
            v-if="!showSchema"
          />
          <img
            src="../assets/imgs/hide.svg"
            alt="hide"
            class="inline hover:bg-gray-600"
            @click="showSchema = false"
            v-else
          />
          <img
            src="../assets/imgs/schema.svg"
            alt="Schema"
            v-show="showSchema"
          />
        </li>
        <li class="mt-4">
          <span class="font-bold">3.</span> Here is a sample json file.
          <img
            src="../assets/imgs/show.svg"
            alt="show"
            v-if="!showSample"
            class="inline hover:bg-gray-600"
            @click="showSample = true"
          />
          <img
            src="../assets/imgs/hide.svg"
            alt="hide"
            class="inline hover:bg-gray-600"
            @click="showSample = false"
            v-else
          />
          <img
            src="../assets/imgs/sample.svg"
            alt="Sample"
            v-show="showSample"
          />
          <div class="flex justify-around cursor-pointer mt-4">
            <a @click="() => getSample(true)" class="font-bold"
              >Download sample Json</a
            >
            <a @click="() => getSample(false)" class="inline font-bold"
              >Download Large sample Json</a
            >
          </div>
        </li>
        <li class="mt-4">
          <span class="font-bold">4.</span> After preparing the Json file,
          <strong>drag and drop</strong> it into the analyzer workspace.
          <img src="../assets/imgs/drag_drop.png" alt="drag and drop" />
        </li>
        <li class="mt-4">
          <span class="font-bold">5.</span> Wait for the
          <strong>Network to stabilize</strong> and layout the nodes, you can
          <strong>scroll to zoom in/zoom out</strong> to adjust the view
          <img src="../assets/imgs/stable.png" alt="stablized network" />
        </li>
        <li class="mt-4">
          <span class="font-bold">6.</span> You can
          <strong>Click on Any Node</strong> to view additional information
          about the node.
          <img
            src="../assets/imgs/click.png"
            alt="additional node information"
          />
        </li>
        <li class="mt-4">
          <span class="font-bold">7.</span> The Nodes are sized (scaled) based
          on their <strong>Degree Centrality</strong> and are colored based on
          their <strong>Betweenness Centrality</strong>, More about this on the
          <router-link to="/about" class="font-bold">About Page</router-link>
        </li>
        <!-- <li class="mt-4">
          Full Tutorial
        </li> -->
      </ol>
    </div>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
export default {
  name: "Tutorial",
  data() {
    return {
      showSchema: false,
      showSample: false
    };
  },
  methods: {
    async getSample(isSmall) {
      const fname = isSmall
        ? "https://srv-store6.gofile.io/download/uftFRw/sample.json"
        : "https://srv-store6.gofile.io/download/uftFRw/largeSample.json";
      saveAs(fname, "sample.json");
    }
  }
};
</script>

<style scoped>
a:hover {
  color: blue;
}
</style>
