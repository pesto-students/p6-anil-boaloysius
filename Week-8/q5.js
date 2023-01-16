// Problem 8.5: Find the Town Judge

// https://leetcode.com/problems/find-the-town-judge/submissions/878716270/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // Create adjecency matrix
  judgeEdgesCount = new Map();

  for (let i = 1; i <= n; i++) {
    judgeEdgesCount.set(i, 0);
  }

  for (const [v1, v2] of trust) {
    judgeEdgesCount.delete(v1);
    if (judgeEdgesCount.has(v2)) {
      judgeEdgesCount.set(v2, judgeEdgesCount.get(v2) + 1);
    }
  }

  if (judgeEdgesCount.size != 1) {
    return -1;
  }

  for (const [v1, v2] of judgeEdgesCount.entries()) {
    if (v2 != n - 1) {
      return -1;
    } else {
      return v1;
    }
  }
};
// Complexity Analysis:
// Space complexity: O(n)
// Time complexity: O(n+e)

// Logic:
//  Inintialise a vertex to number of edges map (judgeEdgesCount). These are the possible edges.
//  Iterate over the edges
//      remove any vertext from `judgeEdgesCount` from which an edge starts.
//      for ending edges, increment count in the map
//  Return the vertex with n-1 edges
