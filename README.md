# Crime Network Analyzer

## About
This project is a specific practical application of *graph theory and centrality measures* for **Crime related Social Networks**. It was designed to be used for identifying interesting patterns and/or communities in relatively large sized social graphs (specifically engineered for crime related associations). It uses various centrality measures like *Degree Centrality, Closeness Centrality and Betweenness Centrality* to determine the exact layout of the network and also to determine individual node specific characteristics. It mainly aims at Assigning each node a so called "Threat Level" based on the above mentioned centrality measures and some additional Heuristics. i.e. Each node is not only assigned Size and color but also implicit properties like "mass" based on which the physics engine lays out the nodes and determines their interaction with other nodes.

The app is created as a cross-platform installable PWA which works offline. The hosted version of this app can be found [here!](https://social-network-analyzer.surge.sh).

The experimentation done with networkx is also present in this repo under the *Social Network Analysis* directory

## Using the Tool
All the features of this app along with a detailed tutorial is presented in the [Tutorial Page](https://social-network-analyzer.surge.sh/#/tutorial) of this app.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
