<template>
  <div class="w-9/12 justify-around mx-auto my-5 text-center">
    <h1 class="text-center font-bold text-5xl text-gray-900 my-3">
      Crime Network Analyzer
    </h1>
    <h2 class="text-3xl italic">ABOUT THE PROJECT</h2>
    <h3 class="my-2 underline">
      Crime Network Analysis using Graph theory & Centrality measures
    </h3>
    <p class="lg:w-3/4 sm:w-10/12 mx-auto my-10 text-xl text-left">
      This project is a specific practical application of
      <strong>graph theory</strong> and <strong>centrality measures</strong> for
      Crime related Social Networks, It uses various centrality measures like
      <strong>Degree Centrality</strong>,
      <strong>Closeness Centrality</strong> and
      <strong>Betweenness Centrality</strong> to determine the exact layout of
      the network and also to determine individual node specific
      characteristics. It mainly aims at Assigning each node a so called "Threat
      Level" based on the above mentioned centrality measures and some
      additional Heuristics. i.e. Each node is not only assigned Size and color
      but also <strong>implicit properties like "mass"</strong> based on which
      the <strong>physics engine</strong>
      lays out the nodes and determines their interaction with other nodes.
    </p>
    <h2 class="text-3xl italic">IMPLEMENTATION SPECIFICS</h2>
    <div class="lg:w-2/3 sm:w-9/12 mx-auto my-10 text-xl text-left">
      <ol class="list-decimal space-y-5">
        <li>
          First the Graph is parsed and stored efficiently as an Adjacency list.
        </li>
        <li>
          Next Betweenness, Closeness and Degree centrality are calculated for
          the graph.
        </li>
        <li>
          The <strong>Size (scale)</strong> of each node is calculated using the
          normalized <strong>Degree Centrality</strong> coupled with an
          additional heuristic. Bigger = Higher Degree centrality.
        </li>
        <li>
          The <strong>Color</strong> is determined by the
          <strong>Betweenness centrality</strong> value which indicates the
          importance of a person and their threat level. Darker red = Higher
          Betweenness centrality.
        </li>
        <li>
          The <strong>Mass</strong> for each node is determined by a combination
          of <strong>Degree</strong> and <strong>Closeness</strong> Centrality
          which is then mapped to a suitable range. Greater Mass = Greater
          repulsion to other nodes, So important nodes are larger and repelled
          more and thus, can be spotted easily.
        </li>
      </ol>
    </div>
    <h2 class="text-3xl italic">TECHNOLOGY USED</h2>
    <div class="w-36 mx-auto my-10 text-xl justify-around text-left font-bold">
      <ul class="list-disc">
        <li><a href="https://v3.vuejs.org/" target="_blank">Vue 3</a></li>
        <li>
          <a href="https://next.router.vuejs.org/" target="_blank"
            >Vue Router</a
          >
        </li>
        <li><a href="https://visjs.org/" target="_blank">VisJs</a></li>
        <li>
          <a
            href="https://www.npmjs.com/package/ngraph.centrality"
            target="_blank"
            >Ngraph</a
          >
        </li>
        <li>
          <a href="https://www.npmjs.com/package/file-saver" target="_blank"
            >File Saver</a
          >
        </li>
      </ul>
    </div>
    <h2 class="text-3xl italic">CONTACT</h2>
    <div class="justify-around mx-auto w-full flex mt-5">
      <img
        src="../assets/imgs/jayaraman.jpeg"
        alt="Jayaraman"
        class="rounded-full"
        width="256"
        height="256"
      />
    </div>
    <div>
      <h1 class="font-bold text-lg">Jayaraman N R</h1>
      <div class="flex justify-center h-20">
        <a href="https://github.com/range123" target="_blank">
          <img src="../assets/imgs/github.svg" alt="github" class="w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/jayaraman-n-r-884818193/"
          class="mx-1"
          target="_blank"
        >
          <img src="../assets/imgs/linkedin.svg" alt="linkedin" class="w-8" />
        </a>
        <a
          href="mailto:jayaraman17064@cse.ssn.edu.in"
          class="mx-1"
          target="_blank"
        >
          <img src="../assets/imgs/gmail.svg" alt="gmail" class="w-8" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  color: blue;
}
</style>
