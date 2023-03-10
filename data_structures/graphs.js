// Edge list
const graph = [[0, 2], [2, 3], [3, 1], [2, 1]];

// Adjacency List
const graphAL = [[2], [2, 3], [0, 1, 3], [1, 2]];
// or
const graphALJSON = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
};

//Adjacency Matrix
const graphAM = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];
// or
const graphAMJSON = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
};

class Graph { 
    constructor() {
      this.adjacentList = {
      }; 
    } 
    addVertex(node)  {
        if ( this.adjacentList[node] ) return;
        this.adjacentList[node] = [];
        return this;
    } 
    addEdge(node1, node2) {
        if ( !this.adjacentList[node1] || !this.adjacentList[node2] ) return false;
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return true;
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  const myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5