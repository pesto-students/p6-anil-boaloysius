// Problem 8.4: Find if Path Exists in Graph

// https://leetcode.com/problems/find-if-path-exists-in-graph/submissions/878693654/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // Create adjecency matrix
  adj = new Map();
  visited = new Set();

  for (const [v1, v2] of edges) {
    if (adj.has(v1)) {
      adj.get(v1).push(v2);
    } else {
      adj.set(v1, [v2]);
    }

    if (adj.has(v2)) {
      adj.get(v2).push(v1);
    } else {
      adj.set(v2, [v1]);
    }
  }

  let bfs_queue = [source];

  while (bfs_queue.length) {
    vertex = bfs_queue.shift();
    if (vertex == destination) {
      return true;
    } else {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        const edges = adj.get(vertex);
        for (const e of edges) {
          bfs_queue.push(e);
        }
      }
    }
  }
  return false;
};
