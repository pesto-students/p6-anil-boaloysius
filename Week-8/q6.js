// https://leetcode.com/problems/all-paths-from-source-to-target/submissions/879195385/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  const allPaths = [];
  const path = [];

  const DFS = (node) => {
    path.push(node);

    if (node === target) {
      // Add path to the result if target it found.
      allPaths.push([...path]);
      return;
    }

    for (let edge of graph[node]) {
      DFS(edge);
      path.pop();
    }
  };

  DFS(0);

  return allPaths;
};

// Space Complexity: O(n^2+e), We store max n paths of n vertex in the path array
// Time Complexity: O(n): We visit every node once
