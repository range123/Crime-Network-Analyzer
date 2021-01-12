<template>
  <div
    id="network"
    ref="graph"
    class="w-11/12 my-auto mx-auto bg-gray-100 border-solid border-black border-2 text-center"
    style="height: 87%;"
    @drop.prevent="readFile"
    @dragenter.prevent=""
    @dragover.prevent=""
    :class="isReading ? 'bg-gray-200 invisible' : ''"
  ></div>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
      class="flex justify-around w-full shadow-xl"
    >
      <div class="bg-white p-2">
        <div class="text-center text-4xl font-extrabold">
          {{ nodes[selected].name }}
        </div>

        <img
          class="rounded-full mx-auto"
          width="256"
          height="256"
          :src="nodes[selected].img"
          alt=""
        />
        <hr class="mt-3" />
        <div class="grid grid-cols-2 gap-4 text-center mt-3 text-xl px-2">
          <div class="font-bold">
            Alias
          </div>
          <div>
            {{ nodes[selected].alias }}
          </div>
          <div class="font-bold">
            Gender
          </div>
          <div>
            {{ nodes[selected].gender }}
          </div>

          <div class="font-bold">
            Crimes
          </div>
          <div>
            <ul>
              <li v-for="crime in nodes[selected].crimes" :key="crime">
                {{ crime.type }}
              </li>
            </ul>
          </div>
          <div class="font-bold">
            Address
          </div>
          <div class="justify-around">
            <div class="max-w-md mx-auto">
              {{ nodes[selected].address }}
            </div>
          </div>
          <div class="font-bold">
            Direct Associations
          </div>
          <div>
            {{ nodes[selected].value }}
          </div>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { Network } from "vis-network";
import { useToast } from "vue-toastification";
import centrality from "ngraph.centrality";
import createGraph from "ngraph.graph";
import { Validator } from "jsonschema";
import { schema } from "../schema";
export default {
  name: "Analyzer",
  data() {
    return {
      selected: 0,
      nodes: [
        {
          id: "1",
          label: "Person",
          name: "Person",
          shape: "circle",
          value: 1,
          alias: "Alias Person",
          address: "addr1 street",
          crimes: [{ type: "kidnap" }, { type: "murder" }],
          gender: "Male",
          img: "https://dummyimage.com/256x256.jpg/cc0000/ffffff",
          scaling: { max: 100 }
        },
        { id: 2, label: "ellipse", shape: "ellipse", value: 100 }
      ],
      edges: [{ from: 1, to: 2 }],
      options: {
        nodes: {
          borderWidth: 4
        },
        edges: {
          color: "lightgray"
        },
        physics: {
          enabled: true,
          solver: "forceAtlas2Based",
          stabilization: {
            enabled: false
          }
        },
        layout: {
          improvedLayout: false
        }
      },
      network: null,
      Toast: useToast(),
      isReading: false,
      showModal: false
    };
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      if (this.network) this.network.destroy;
      this.network = new Network(
        this.$refs.graph,
        { nodes: this.nodes, edges: this.edges },
        this.options
      );
      this.network.on("selectNode", x => {
        this.selected = x.nodes[0] - 1;
        this.showModal = x ? true : false;
      });
    },
    readFile(e) {
      const files = e.dataTransfer.files;
      if (files.length != 1) {
        this.Toast.error("Accepts only one file");
        return;
      }
      const graph = createGraph();
      const file = files[0];
      const txtreader = new FileReader();
      txtreader.onload = f => {
        if (f.target?.result) {
          const data = JSON.parse(f.target.result);
          // console.log(validate(data, schema))
          // console.log(schema)
          // JSONschema
          const v = new Validator();
          if (!v.validate(data, schema).valid) {
            this.Toast.error("Json doesn't match required schema");
            this.isReading = false;
            return;
          }
          // const temp = f.target.result.split("\n");
          const edges = data.edges;
          const tempnodes = data.nodes;
          edges.forEach(({ from, to }) => {
            graph.addLink(from, to);
          });
          // find the centrality here
          const betweeness = centrality.betweenness(graph);
          let max_betweenness = Number.MIN_SAFE_INTEGER,
            min_betweenness = Number.MAX_SAFE_INTEGER;
          // find max and min betweenness
          for (const node in betweeness) {
            if (betweeness[node] > max_betweenness)
              max_betweenness = betweeness[node];
            if (betweeness[node] < min_betweenness)
              min_betweenness = betweeness[node];
          }
          const map = value => {
            return (
              ((value - min_betweenness) * (6 - 0)) /
                (max_betweenness - min_betweenness) +
              0
            );
          };

          let max_degree = Number.MIN_SAFE_INTEGER,
            min_degree = Number.MAX_SAFE_INTEGER;
          const degree = centrality.degree(graph);
          for (const node in degree) {
            if (degree[node] > max_degree) max_degree = degree[node];
            if (degree[node] < min_degree) min_degree = degree[node];
          }
          const massmap = value => {
            return (
              ((value - min_degree) * (150 - 1)) / (max_degree - min_degree) + 1
            );
          };
          const color = {
            border: "rgba(43, 124, 233, 1)",
            background: "rgba(210, 229, 255, 1)",
            highlight: {
              border: "rgba(43, 124, 233, 1)",
              background: "rgba(210, 229, 255, 1)"
            }
          };
          const scaling = {
            max: 500,
            min: 30,
            label: {
              enabled: true,
              min: 30,
              max: 500
            }
          };
          const colors = [
            {
              background: "#e57373",
              border: "#af4448"
            },
            {
              background: "#ef5350",
              border: "#b61827"
            },
            {
              background: "#f44336",
              border: "#ba000d"
            },
            {
              background: "#e53935",
              border: "#ab000d"
            },
            {
              background: "#d32f2f",
              border: "#9a0007"
            },
            {
              background: "#c62828",
              border: "#8e0000"
            },
            {
              background: "#b71c1c",
              border: "#7f0000"
            }
          ];
          const nodes = [];
          tempnodes.forEach(node => {
            let tempColor = { ...color };
            const col = Math.round(map(betweeness[node.id]));
            if (col) tempColor = { ...tempColor, ...colors[col - 1] };
            nodes.push({
              ...node,
              label: node.name,
              id: node.id,
              shape: "hexagon",
              value: degree[node.id],
              color: tempColor,
              scaling,
              title: node.name,
              mass: massmap(degree[node.id])
            });
          });
          this.nodes = nodes;
          this.edges = edges;
          this.isReading = false;
          this.render();
        }
      };
      // txtreader.onprogress =
      if (file.type.startsWith("application/json")) {
        txtreader.readAsText(file);
        this.isReading = true;
        // console.log(file);
      } else {
        this.Toast.error("Accepts only json");
      }
    }
  }
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
} */
</style>
